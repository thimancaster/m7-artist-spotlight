-- Adicionar 'budget_form' aos valores permitidos em contact_type
ALTER TABLE public.leads DROP CONSTRAINT IF EXISTS leads_contact_type_check;

ALTER TABLE public.leads ADD CONSTRAINT leads_contact_type_check 
CHECK (contact_type = ANY (ARRAY['whatsapp'::text, 'email'::text, 'instagram'::text, 'budget_form'::text]));