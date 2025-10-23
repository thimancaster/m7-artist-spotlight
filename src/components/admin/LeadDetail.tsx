import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Phone, Calendar, MapPin, DollarSign, X, MessageSquare, ExternalLink } from "lucide-react";

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

interface Interaction {
  id: string;
  interaction_type: string;
  content: string;
  created_at: string;
  user_id: string;
}

export function LeadDetail({ lead, onUpdate, onClose }: LeadDetailProps) {
  const { toast } = useToast();
  const [status, setStatus] = useState(lead.status);
  const [note, setNote] = useState("");
  const [saving, setSaving] = useState(false);
  const [interactions, setInteractions] = useState<Interaction[]>([]);

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
      if (import.meta.env.DEV) {
        console.error("Error updating status:", error);
      }
      toast({
        title: "Erro",
        description: "Não foi possível atualizar o status.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    fetchInteractions();
  }, [lead.id]);

  const fetchInteractions = async () => {
    try {
      const { data, error } = await supabase
        .from("lead_interactions")
        .select("*")
        .eq("lead_id", lead.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setInteractions(data || []);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Error fetching interactions:", error);
      }
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
      await fetchInteractions();
      toast({
        title: "Nota adicionada",
        description: "A nota foi salva com sucesso.",
      });
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Error adding note:", error);
      }
      toast({
        title: "Erro",
        description: "Não foi possível adicionar a nota.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleQuickAction = (type: 'whatsapp' | 'email') => {
    if (type === 'whatsapp' && lead.customer_phone) {
      const phone = lead.customer_phone.replace(/\D/g, '');
      const message = encodeURIComponent(`Olá ${lead.customer_name || 'cliente'}, recebemos sua solicitação para ${lead.event_type || 'evento'}. Como podemos ajudar?`);
      window.open(`https://wa.me/55${phone}?text=${message}`, '_blank');
    } else if (type === 'email' && lead.customer_email) {
      const subject = encodeURIComponent(`Sua solicitação - ${lead.event_type || 'Evento'}`);
      const body = encodeURIComponent(`Olá ${lead.customer_name || 'cliente'},\n\nRecebemos sua solicitação e estamos prontos para ajudar!\n\nAtenciosamente,\nM7 Produções`);
      window.location.href = `mailto:${lead.customer_email}?subject=${subject}&body=${body}`;
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
        {/* Quick Actions */}
        <div className="flex gap-2">
          {lead.customer_phone && (
            <Button 
              onClick={() => handleQuickAction('whatsapp')} 
              variant="outline" 
              size="sm"
              className="flex-1"
            >
              <Phone className="h-4 w-4 mr-2" />
              WhatsApp
              <ExternalLink className="h-3 w-3 ml-1" />
            </Button>
          )}
          {lead.customer_email && (
            <Button 
              onClick={() => handleQuickAction('email')} 
              variant="outline" 
              size="sm"
              className="flex-1"
            >
              <Mail className="h-4 w-4 mr-2" />
              Email
              <ExternalLink className="h-3 w-3 ml-1" />
            </Button>
          )}
        </div>

        <Separator />

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

        {/* Interaction History */}
        {interactions.length > 0 && (
          <div className="border-t pt-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Histórico de Interações
            </h3>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {interactions.map((interaction) => (
                <div key={interaction.id} className="bg-muted p-3 rounded text-sm">
                  <div className="flex justify-between items-start mb-1">
                    <Badge variant="outline" className="text-xs">
                      {interaction.interaction_type === 'note' ? 'Nota' : 'Status'}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {new Date(interaction.created_at).toLocaleString("pt-BR")}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{interaction.content}</p>
                </div>
              ))}
            </div>
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
