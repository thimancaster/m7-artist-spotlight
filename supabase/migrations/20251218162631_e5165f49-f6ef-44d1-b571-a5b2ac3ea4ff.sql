-- Recalcular lead_score para leads antigos (força o trigger a executar)
UPDATE public.leads 
SET notes = COALESCE(notes, '')
WHERE lead_score = 0 OR lead_score IS NULL;

-- RLS Policy: Admins podem inserir propostas
CREATE POLICY "Admins can insert proposals"
ON public.proposals
FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policy: Admins podem atualizar propostas
CREATE POLICY "Admins can update proposals"
ON public.proposals
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policy: Admins podem deletar propostas
CREATE POLICY "Admins can delete proposals"
ON public.proposals
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policy: Admins podem ver propostas
CREATE POLICY "Admins can view proposals"
ON public.proposals
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Função para atualizar status do lead baseado na proposta
CREATE OR REPLACE FUNCTION public.update_lead_status_on_proposal()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.status = 'sent' THEN
    UPDATE leads SET status = 'proposal_sent' WHERE id = NEW.lead_id;
  ELSIF NEW.status = 'accepted' THEN
    UPDATE leads SET status = 'closed_won' WHERE id = NEW.lead_id;
  ELSIF NEW.status = 'rejected' THEN
    UPDATE leads SET status = 'closed_lost' WHERE id = NEW.lead_id;
  END IF;
  RETURN NEW;
END;
$$;

-- Trigger para sincronizar status
CREATE TRIGGER proposal_status_trigger
AFTER INSERT OR UPDATE ON public.proposals
FOR EACH ROW
EXECUTE FUNCTION public.update_lead_status_on_proposal();