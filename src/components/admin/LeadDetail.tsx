import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Phone, Calendar, MapPin, DollarSign, X } from "lucide-react";

interface Lead {
  id: string;
  contact_type: string;
  source_page: string;
  artist_name: string | null;
  customer_name: string | null;
  customer_email: string | null;
  customer_phone: string | null;
  event_type: string | null;
  event_date: string | null;
  event_location: string | null;
  budget_range: string | null;
  status: string;
  notes: string | null;
  created_at: string;
}

interface LeadDetailProps {
  lead: Lead;
  onUpdate: () => void;
  onClose: () => void;
}

const statusOptions = [
  { value: "new", label: "Novo" },
  { value: "contacted", label: "Contatado" },
  { value: "proposal_sent", label: "Proposta Enviada" },
  { value: "negotiation", label: "Negociação" },
  { value: "closed_won", label: "Fechado" },
  { value: "closed_lost", label: "Perdido" },
];

export function LeadDetail({ lead, onUpdate, onClose }: LeadDetailProps) {
  const { toast } = useToast();
  const [status, setStatus] = useState(lead.status);
  const [note, setNote] = useState("");
  const [saving, setSaving] = useState(false);

  const handleStatusUpdate = async (newStatus: string) => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from("leads")
        .update({ status: newStatus })
        .eq("id", lead.id);

      if (error) throw error;

      // Add interaction record
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        await supabase.from("lead_interactions").insert({
          lead_id: lead.id,
          user_id: session.user.id,
          interaction_type: "status_change",
          content: `Status alterado para: ${statusOptions.find(s => s.value === newStatus)?.label}`,
        });
      }

      setStatus(newStatus);
      onUpdate();
      toast({
        title: "Status atualizado",
        description: "O status do lead foi alterado com sucesso.",
      });
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Erro",
        description: "Não foi possível atualizar o status.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleAddNote = async () => {
    if (!note.trim()) return;

    setSaving(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error("Not authenticated");

      await supabase.from("lead_interactions").insert({
        lead_id: lead.id,
        user_id: session.user.id,
        interaction_type: "note",
        content: note,
      });

      setNote("");
      toast({
        title: "Nota adicionada",
        description: "A nota foi salva com sucesso.",
      });
    } catch (error) {
      console.error("Error adding note:", error);
      toast({
        title: "Erro",
        description: "Não foi possível adicionar a nota.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Detalhes do Lead</CardTitle>
        <Button onClick={onClose} variant="ghost" size="sm">
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium">Status</label>
          <Select value={status} onValueChange={handleStatusUpdate} disabled={saving}>
            <SelectTrigger className="mt-1">
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

        <div className="space-y-3 border-t pt-4">
          <h3 className="font-semibold">Informações de Contato</h3>
          
          {lead.customer_name && (
            <div className="flex items-start gap-2">
              <span className="font-medium text-sm">Nome:</span>
              <span className="text-sm">{lead.customer_name}</span>
            </div>
          )}
          
          {lead.customer_email && (
            <div className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
              <a href={`mailto:${lead.customer_email}`} className="text-sm hover:underline">
                {lead.customer_email}
              </a>
            </div>
          )}
          
          {lead.customer_phone && (
            <div className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-muted-foreground" />
              <a href={`tel:${lead.customer_phone}`} className="text-sm hover:underline">
                {lead.customer_phone}
              </a>
            </div>
          )}
        </div>

        {(lead.event_type || lead.event_date || lead.event_location || lead.budget_range) && (
          <div className="space-y-3 border-t pt-4">
            <h3 className="font-semibold">Detalhes do Evento</h3>
            
            {lead.event_type && (
              <div className="flex items-start gap-2">
                <span className="font-medium text-sm">Tipo:</span>
                <span className="text-sm capitalize">{lead.event_type}</span>
              </div>
            )}
            
            {lead.event_date && (
              <div className="flex items-start gap-2">
                <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-sm">
                  {new Date(lead.event_date).toLocaleDateString("pt-BR")}
                </span>
              </div>
            )}
            
            {lead.event_location && (
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-sm">{lead.event_location}</span>
              </div>
            )}
            
            {lead.budget_range && (
              <div className="flex items-start gap-2">
                <DollarSign className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-sm">{lead.budget_range}</span>
              </div>
            )}
          </div>
        )}

        {lead.artist_name && (
          <div className="border-t pt-4">
            <span className="text-sm font-medium">Artista: </span>
            <Badge variant="secondary">{lead.artist_name}</Badge>
          </div>
        )}

        {lead.notes && (
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Observações do Cliente</h3>
            <p className="text-sm text-muted-foreground">{lead.notes}</p>
          </div>
        )}

        <div className="border-t pt-4 space-y-2">
          <h3 className="font-semibold">Adicionar Nota</h3>
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Digite sua nota aqui..."
            rows={3}
          />
          <Button 
            onClick={handleAddNote} 
            disabled={saving || !note.trim()}
            className="w-full"
          >
            Salvar Nota
          </Button>
        </div>

        <div className="border-t pt-4 text-xs text-muted-foreground">
          <p>Origem: {lead.source_page}</p>
          <p>Tipo de contato: {lead.contact_type.replace("_", " ")}</p>
          <p>Data: {new Date(lead.created_at).toLocaleString("pt-BR")}</p>
        </div>
      </CardContent>
    </Card>
  );
}
