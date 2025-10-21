-- Adicionar campos ao leads para CRM
ALTER TABLE public.leads 
ADD COLUMN status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'proposal_sent', 'negotiation', 'closed_won', 'closed_lost')),
ADD COLUMN notes TEXT,
ADD COLUMN customer_name TEXT,
ADD COLUMN customer_email TEXT,
ADD COLUMN customer_phone TEXT,
ADD COLUMN event_type TEXT,
ADD COLUMN event_date DATE,
ADD COLUMN event_location TEXT,
ADD COLUMN budget_range TEXT,
ADD COLUMN assigned_to UUID REFERENCES auth.users(id);

-- Criar tabela de interações/histórico
CREATE TABLE public.lead_interactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id),
  interaction_type TEXT NOT NULL CHECK (interaction_type IN ('note', 'call', 'email', 'meeting', 'status_change')),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.lead_interactions ENABLE ROW LEVEL SECURITY;

-- Políticas para lead_interactions
CREATE POLICY "Only admins can view interactions"
  ON public.lead_interactions
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can insert interactions"
  ON public.lead_interactions
  FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Criar tabela de propostas
CREATE TABLE public.proposals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,
  artist_id TEXT,
  artist_name TEXT,
  event_date DATE NOT NULL,
  event_location TEXT NOT NULL,
  event_type TEXT NOT NULL,
  value DECIMAL(10,2),
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'accepted', 'rejected')),
  notes TEXT,
  created_by UUID NOT NULL REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.proposals ENABLE ROW LEVEL SECURITY;

-- Políticas para proposals
CREATE POLICY "Only admins can manage proposals"
  ON public.proposals
  FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Trigger para updated_at em proposals
CREATE TRIGGER update_proposals_updated_at
  BEFORE UPDATE ON public.proposals
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Criar índices para performance
CREATE INDEX idx_leads_status ON public.leads(status);
CREATE INDEX idx_leads_created_at ON public.leads(created_at);
CREATE INDEX idx_lead_interactions_lead_id ON public.lead_interactions(lead_id);
CREATE INDEX idx_proposals_lead_id ON public.proposals(lead_id);