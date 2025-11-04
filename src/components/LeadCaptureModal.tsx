import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Sparkles } from "lucide-react";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  sourcePage: string;
}

export default function LeadCaptureModal({ isOpen, onClose, sourcePage }: LeadCaptureModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.eventType) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('leads').insert({
        contact_type: 'quick_capture',
        source_page: sourcePage,
        customer_name: formData.name,
        customer_phone: formData.phone,
        event_type: formData.eventType,
        status: 'new',
        user_agent: navigator.userAgent,
        referrer: document.referrer || null,
      });

      if (error) throw error;

      toast({
        title: "✅ Solicitação recebida!",
        description: "Você receberá até 3 propostas em até 24 horas no seu WhatsApp.",
      });

      onClose();
      setFormData({ name: "", phone: "", eventType: "" });
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error capturing lead:', error);
      }
      toast({
        title: "Erro",
        description: "Não foi possível enviar sua solicitação. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="h-6 w-6 text-primary" />
            ⏰ Não perca essa oportunidade!
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            Receba até <strong className="text-foreground">3 propostas personalizadas</strong> de artistas em até 24 horas
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo *</Label>
            <Input
              id="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={isSubmitting}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">WhatsApp *</Label>
            <Input
              id="phone"
              placeholder="(62) 98888-8888"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={isSubmitting}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="eventType">Tipo de evento *</Label>
            <Select
              value={formData.eventType}
              onValueChange={(value) => setFormData({ ...formData, eventType: value })}
              disabled={isSubmitting}
              required
            >
              <SelectTrigger id="eventType">
                <SelectValue placeholder="Selecione o tipo de evento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="evento-igreja">🏛️ Eventos Igreja</SelectItem>
                <SelectItem value="evento-corporativo">🏢 Evento Corporativo</SelectItem>
                <SelectItem value="show-arena">🎪 Show Arena/Festival</SelectItem>
                <SelectItem value="evento-prefeitura">🏛️ Evento Prefeitura</SelectItem>
                <SelectItem value="outros">📅 Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="w-full text-lg py-6" 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "🎉 Quero Receber Propostas Grátis"}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Ao clicar, você concorda em receber contato via WhatsApp
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}