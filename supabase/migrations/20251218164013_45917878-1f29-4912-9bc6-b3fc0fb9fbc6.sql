-- Add explicit anonymous access denial policies for defense-in-depth

-- 1. Profiles - require authentication for all operations
CREATE POLICY "Deny anonymous select on profiles"
  ON public.profiles FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- Note: existing policy already restricts to own profile, this is additional layer

-- 2. User roles - deny anonymous access
CREATE POLICY "Deny anonymous select on user_roles"
  ON public.user_roles FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- 3. Proposals - deny anonymous access  
CREATE POLICY "Deny anonymous select on proposals"
  ON public.proposals FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- 4. Lead interactions - deny anonymous access
CREATE POLICY "Deny anonymous select on lead_interactions"
  ON public.lead_interactions FOR SELECT
  USING (auth.uid() IS NOT NULL);