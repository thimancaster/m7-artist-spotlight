import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      const selectedArtist = artists.find(a => a.id === formData.artistId);
      
      const { error } = await supabase.from("leads").insert({
        contact_type: "budget_form",
        source_page: "budget",
        customer_name: formData.customerName,
        customer_email: formData.customerEmail,
        customer_phone: formData.customerPhone,
        event_type: formData.eventType,
        event_date: formData.eventDate || null,
        event_location: formData.eventLocation,
        budget_range: formData.budgetRange,
        artist_id: formData.artistId || null,
        artist_name: selectedArtist?.name || null,
        notes: formData.notes || null,
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
      console.error("Error submitting budget:", error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar sua solicitação. Tente novamente.",
        variant: "destructive",
      });
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
                  <SelectItem value="casamento">Casamento</SelectItem>
                  <SelectItem value="aniversario">Aniversário</SelectItem>
                  <SelectItem value="corporativo">Evento Corporativo</SelectItem>
                  <SelectItem value="formatura">Formatura</SelectItem>
                  <SelectItem value="igreja">Evento de Igreja</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
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
