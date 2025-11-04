-- Corrigir warning de security: adicionar search_path nas funções

-- Recriar função calculate_lead_score com search_path
CREATE OR REPLACE FUNCTION calculate_lead_score()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  score INTEGER := 0;
  temperature TEXT := 'cold';
BEGIN
  -- Pontos por origem (0-30)
  CASE NEW.contact_type
    WHEN 'budget_form' THEN score := score + 30;
    WHEN 'whatsapp' THEN score := score + 20;
    WHEN 'instagram' THEN score := score + 15;
    WHEN 'email' THEN score := score + 10;
    ELSE score := score + 5;
  END CASE;

  -- Pontos por dados completos (0-30)
  IF NEW.customer_name IS NOT NULL AND NEW.customer_name != '' THEN score := score + 10; END IF;
  IF NEW.customer_email IS NOT NULL AND NEW.customer_email != '' THEN score := score + 10; END IF;
  IF NEW.customer_phone IS NOT NULL AND NEW.customer_phone != '' THEN score := score + 10; END IF;

  -- Pontos por detalhes do evento (0-40)
  IF NEW.event_date IS NOT NULL THEN score := score + 15; END IF;
  IF NEW.event_location IS NOT NULL AND NEW.event_location != '' THEN score := score + 10; END IF;
  IF NEW.budget_range IS NOT NULL AND NEW.budget_range != '' THEN score := score + 15; END IF;

  -- Determinar temperatura
  IF score >= 60 THEN temperature := 'hot';
  ELSIF score >= 30 THEN temperature := 'warm';
  ELSE temperature := 'cold';
  END IF;

  NEW.lead_score := score;
  NEW.lead_temperature := temperature;

  RETURN NEW;
END;
$$;

-- Recriar função notify_n8n_new_lead com search_path
CREATE OR REPLACE FUNCTION notify_n8n_new_lead()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  PERFORM
    net.http_post(
      url := 'https://webhook.n8n.cloud/webhook/m7-novo-lead',
      headers := '{"Content-Type": "application/json"}'::jsonb,
      body := json_build_object(
        'lead_id', NEW.id,
        'customer_name', NEW.customer_name,
        'customer_phone', NEW.customer_phone,
        'customer_email', NEW.customer_email,
        'event_type', NEW.event_type,
        'event_date', NEW.event_date,
        'event_location', NEW.event_location,
        'artist_name', NEW.artist_name,
        'budget_range', NEW.budget_range,
        'lead_score', NEW.lead_score,
        'lead_temperature', NEW.lead_temperature,
        'source_page', NEW.source_page,
        'contact_type', NEW.contact_type,
        'created_at', NEW.created_at
      )::text
    );
  RETURN NEW;
END;
$$;