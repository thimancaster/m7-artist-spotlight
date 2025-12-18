import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { artists } from "@/data/artists";

interface Lead {
  id: string;
  customer_name: string | null;
  event_type: string | null;
  event_date: string | null;
  event_location: string | null;
  artist_name: string | null;
  artist_id: string | null;
}

interface Proposal {
  id: string;
  lead_id: string;
  artist_id: string | null;
  artist_name: string | null;
  value: number | null;
  event_date: string;
  event_location: string;
  event_type: string;
  status: string;
  notes: string | null;
}

interface ProposalFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  lead: Lead;
  proposal?: Proposal | null;
  onSuccess: () => void;
}

const statusOptions = [
  { value: "draft", label: "Rascunho" },
  { value: "sent", label: "Enviada" },
  { value: "accepted", label: "Aceita" },
  { value: "rejected", label: "Rejeitada" },
];

export function ProposalFormModal({ isOpen, onClose, lead, proposal, onSuccess }: ProposalFormModalProps) {
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    artistId: proposal?.artist_id || lead.artist_id || "",
    artistName: proposal?.artist_name || lead.artist_name || "",
    value: proposal?.value?.toString() || "",
    eventDate: proposal?.event_date || lead.event_date || "",
    eventLocation: proposal?.event_location || lead.event_location || "",
    eventType: proposal?.event_type || lead.event_type || "",
    status: proposal?.status || "draft",
    notes: proposal?.notes || "",
  });

  const handleArtistChange = (artistId: string) => {
    const artist = artists.find(a => a.id === artistId);
    setFormData(prev => ({
      ...prev,
      artistId,
      artistName: artist?.name || "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.eventDate || !formData.eventLocation || !formData.eventType) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha data, local e tipo do evento.",
        variant: "destructive",
      });
      return;
    }

    setSaving(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error("Not authenticated");

      const proposalData = {
        lead_id: lead.id,
        artist_id: formData.artistId || null,
        artist_name: formData.artistName || null,
        value: formData.value ? parseFloat(formData.value.replace(/\D/g, '')) / 100 : null,
        event_date: formData.eventDate,
        event_location: formData.eventLocation,
        event_type: formData.eventType,
        status: formData.status,
        notes: formData.notes || null,
        created_by: session.user.id,
      };

      if (proposal) {
        const { error } = await supabase
          .from("proposals")
          .update(proposalData)
          .eq("id", proposal.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("proposals")
          .insert(proposalData);
        if (error) throw error;
      }

      toast({
        title: proposal ? "Proposta atualizada" : "Proposta criada",
        description: "A proposta foi salva com sucesso.",
      });

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error saving proposal:", error);
      toast({
        title: "Erro",
        description: "Não foi possível salvar a proposta.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const formatCurrency = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const amount = parseInt(numbers || '0') / 100;
    return amount.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {proposal ? "Editar Proposta" : "Nova Proposta"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-muted p-3 rounded-lg text-sm">
            <p><strong>Cliente:</strong> {lead.customer_name || "Não informado"}</p>
          </div>

          <div className="space-y-2">
            <Label>Artista</Label>
            <Select value={formData.artistId} onValueChange={handleArtistChange}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um artista" />
              </SelectTrigger>
              <SelectContent>
                {artists.map((artist) => (
                  <SelectItem key={artist.id} value={artist.id}>
                    {artist.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Valor da Proposta</Label>
            <Input
              type="text"
              placeholder="R$ 0,00"
              value={formData.value ? formatCurrency(formData.value) : ""}
              onChange={(e) => {
                const numbers = e.target.value.replace(/\D/g, '');
                setFormData(prev => ({ ...prev, value: numbers }));
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Data do Evento *</Label>
              <Input
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData(prev => ({ ...prev, eventDate: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Status</Label>
              <Select value={formData.status} onValueChange={(v) => setFormData(prev => ({ ...prev, status: v }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Local do Evento *</Label>
            <Input
              type="text"
              placeholder="Cidade - Estado"
              value={formData.eventLocation}
              onChange={(e) => setFormData(prev => ({ ...prev, eventLocation: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Tipo de Evento *</Label>
            <Select 
              value={formData.eventType} 
              onValueChange={(v) => setFormData(prev => ({ ...prev, eventType: v }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eventos-igreja">Eventos Igreja</SelectItem>
                <SelectItem value="evento-corporativo">Evento Corporativo</SelectItem>
                <SelectItem value="show-arena">Show Arena</SelectItem>
                <SelectItem value="evento-prefeitura">Evento Prefeitura</SelectItem>
                <SelectItem value="outros">Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Observações</Label>
            <Textarea
              placeholder="Notas sobre a proposta..."
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              rows={3}
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button type="submit" disabled={saving} className="flex-1">
              {saving ? "Salvando..." : proposal ? "Atualizar" : "Criar Proposta"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
