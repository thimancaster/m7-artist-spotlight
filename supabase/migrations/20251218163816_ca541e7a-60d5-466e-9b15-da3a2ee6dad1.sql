-- 1. Add INSERT policy to profiles table (defense in depth)
CREATE POLICY "Users can create own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 2. Add text length constraints to leads table for server-side validation
ALTER TABLE public.leads 
  ADD CONSTRAINT customer_name_length CHECK (LENGTH(customer_name) <= 100),
  ADD CONSTRAINT customer_email_length CHECK (LENGTH(customer_email) <= 255),
  ADD CONSTRAINT customer_phone_length CHECK (LENGTH(customer_phone) <= 30),
  ADD CONSTRAINT notes_length CHECK (LENGTH(notes) <= 2000),
  ADD CONSTRAINT event_location_length CHECK (LENGTH(event_location) <= 200),
  ADD CONSTRAINT event_type_length CHECK (LENGTH(event_type) <= 100),
  ADD CONSTRAINT artist_name_length CHECK (LENGTH(artist_name) <= 100),
  ADD CONSTRAINT budget_range_length CHECK (LENGTH(budget_range) <= 50);

-- 3. Update contact_type constraint to include 'quick_capture'
ALTER TABLE public.leads DROP CONSTRAINT IF EXISTS leads_contact_type_check;
ALTER TABLE public.leads ADD CONSTRAINT leads_contact_type_check 
  CHECK (contact_type = ANY (ARRAY['whatsapp'::text, 'email'::text, 'instagram'::text, 'budget_form'::text, 'quick_capture'::text]));