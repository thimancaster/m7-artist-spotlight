import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface LeadData {
  contactType: 'whatsapp' | 'email' | 'instagram';
  sourcePage: string;
  artistId?: string;
  artistName?: string;
}

export const useLeadTracking = () => {
  const { toast } = useToast();

  const trackLead = async (data: LeadData) => {
    try {
      const { error } = await supabase.from('leads').insert({
        contact_type: data.contactType,
        source_page: data.sourcePage,
        artist_id: data.artistId,
        artist_name: data.artistName,
        user_agent: navigator.userAgent,
        referrer: document.referrer || null,
      });

      if (error) {
        console.error('Error tracking lead:', error);
      }
    } catch (error) {
      console.error('Error tracking lead:', error);
    }
  };

  const trackAndRedirect = async (data: LeadData, url: string) => {
    await trackLead(data);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return { trackLead, trackAndRedirect };
};
