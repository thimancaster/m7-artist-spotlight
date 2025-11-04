import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";

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
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      onSubmit(formData.name, formData.phone);
      onClose();
    }
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
          <div className="space-y-2">
            <Label htmlFor="capture-name">Seu nome *</Label>
            <Input
              id="capture-name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="capture-phone">Seu WhatsApp *</Label>
            <Input
              id="capture-phone"
              placeholder="(62) 98888-8888"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
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