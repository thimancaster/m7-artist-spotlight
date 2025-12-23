import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { formatPhone, isValidPhone } from "@/lib/phoneFormat";

interface WhatsAppCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string, phone: string) => void;
  artistName?: string;
}

export default function WhatsAppCaptureModal({ 
  isOpen, 
  onClose, 
  onSubmit,
  artistName 
}: WhatsAppCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    honeypot: "", // Anti-spam honeypot field
  });
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const validate = (): boolean => {
    const newErrors: { name?: string; phone?: string } = {};
    
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Nome deve ter pelo menos 2 caracteres";
    }
    if (formData.name.length > 100) {
      newErrors.name = "Nome muito longo";
    }
    if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Telefone inválido";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if filled, silently reject
    if (formData.honeypot) {
      onClose();
      return;
    }
    
    if (validate()) {
      onSubmit(formData.name.trim(), formData.phone);
      setFormData({ name: "", phone: "", honeypot: "" });
      setErrors({});
      onClose();
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData({ ...formData, phone: formatted });
    if (errors.phone) setErrors({ ...errors, phone: undefined });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <MessageCircle className="h-5 w-5 text-green-500" />
            📱 Para agilizar seu atendimento
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            {artistName 
              ? `Informe seus dados antes de falar sobre ${artistName}`
              : "Informe seus dados antes de ir para o WhatsApp"
            }
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          {/* Honeypot field - hidden from users, visible to bots */}
          <input
            type="text"
            name="website"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            className="absolute -left-[9999px] opacity-0 pointer-events-none"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          
          <div className="space-y-2">
            <Label htmlFor="capture-name">Seu nome *</Label>
            <Input
              id="capture-name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              maxLength={100}
              required
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="capture-phone">Seu WhatsApp *</Label>
            <Input
              id="capture-phone"
              placeholder="(62) 98888-8888"
              value={formData.phone}
              onChange={handlePhoneChange}
              maxLength={15}
              required
            />
            {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={!formData.name || !formData.phone}
          >
            🟢 Continuar para WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}