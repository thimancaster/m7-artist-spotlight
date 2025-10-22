import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { artists } from "@/data/artists";

const budgetSchema = z.object({
  customerName: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  customerEmail: z.string().email("Email inválido").max(255, "Email muito longo"),
  customerPhone: z.string().regex(/^[\d\s()+-]+$/, "Telefone deve conter apenas números e símbolos válidos").min(10, "Telefone muito curto").max(20, "Telefone muito longo"),
  eventType: z.enum(["eventos-igreja", "evento-corporativo", "show-arena", "evento-prefeitura", "outros"], {
    errorMap: () => ({ message: "Selecione um tipo de evento" })
  }),
  eventDate: z.string().optional(),
  eventLocation: z.string().trim().min(2, "Local deve ter pelo menos 2 caracteres").max(200, "Local muito longo"),
  budgetRange: z.string().optional(),
  artistId: z.string().optional(),
  notes: z.string().max(2000, "Notas muito longas (máximo 2000 caracteres)").optional(),
});

export default function Budget() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    eventType: "",
    eventDate: "",
    eventLocation: "",
    budgetRange: "",
    artistId: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate form data
      const validatedData = budgetSchema.parse(formData);
      
      const selectedArtist = artists.find(a => a.id === validatedData.artistId);
      
      const { error } = await supabase.from("leads").insert({
        contact_type: "budget_form",
        source_page: "budget",
        customer_name: validatedData.customerName,
        customer_email: validatedData.customerEmail,
        customer_phone: validatedData.customerPhone,
        event_type: validatedData.eventType,
        event_date: validatedData.eventDate || null,
        event_location: validatedData.eventLocation,
        budget_range: validatedData.budgetRange,
        artist_id: validatedData.artistId || null,
        artist_name: selectedArtist?.name || null,
        notes: validatedData.notes || null,
        status: "new",
        user_agent: navigator.userAgent,
        referrer: document.referrer || null,
      });

      if (error) throw error;

      toast({
        title: "Orçamento solicitado!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({
        customerName: "",
        customerEmail: "",
        customerPhone: "",
        eventType: "",
        eventDate: "",
        eventLocation: "",
        budgetRange: "",
        artistId: "",
        notes: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "Dados inválidos",
          description: firstError.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erro",
          description: "Não foi possível enviar sua solicitação. Tente novamente.",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 px-4">
        <div className="max-w-2xl mx-auto py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Solicite um Orçamento</h1>
            <p className="text-muted-foreground">
              Preencha o formulário abaixo e entraremos em contato rapidamente
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg border">
            <div className="space-y-2">
              <Label htmlFor="customerName">Nome Completo *</Label>
              <Input
                id="customerName"
                required
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="customerEmail">E-mail *</Label>
                <Input
                  id="customerEmail"
                  type="email"
                  required
                  value={formData.customerEmail}
                  onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customerPhone">Telefone/WhatsApp *</Label>
                <Input
                  id="customerPhone"
                  type="tel"
                  required
                  value={formData.customerPhone}
                  onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventType">Tipo de Evento *</Label>
              <Select value={formData.eventType} onValueChange={(value) => setFormData({ ...formData, eventType: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo de evento" />
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="eventDate">Data do Evento</Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventLocation">Local *</Label>
                <Input
                  id="eventLocation"
                  required
                  placeholder="Cidade/Estado"
                  value={formData.eventLocation}
                  onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="artistId">Artista Desejado (opcional)</Label>
              <Select value={formData.artistId} onValueChange={(value) => setFormData({ ...formData, artistId: value })}>
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
              <Label htmlFor="budgetRange">Faixa de Orçamento</Label>
              <Select value={formData.budgetRange} onValueChange={(value) => setFormData({ ...formData, budgetRange: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma faixa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ate-5k">Até R$ 5.000</SelectItem>
                  <SelectItem value="5k-10k">R$ 5.000 - R$ 10.000</SelectItem>
                  <SelectItem value="10k-20k">R$ 10.000 - R$ 20.000</SelectItem>
                  <SelectItem value="20k-mais">Acima de R$ 20.000</SelectItem>
                  <SelectItem value="aberto">Aberto a negociação</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Informações Adicionais</Label>
              <Textarea
                id="notes"
                placeholder="Conte-nos mais sobre seu evento..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Enviando..." : "Solicitar Orçamento"}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
