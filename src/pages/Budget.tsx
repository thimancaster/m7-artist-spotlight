import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { artists } from "@/data/artists";
import { brazilianStates, citiesByState } from "@/data/locations";
import { useLeadCaptureIntent } from "@/hooks/useLeadCaptureIntent";
import LeadCaptureModal from "@/components/LeadCaptureModal";

const budgetSchema = z.object({
  customerName: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  customerEmail: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  customerPhone: z.string()
    .trim()
    .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Formato inválido. Use: (XX) XXXXX-XXXX")
    .min(14, "Telefone incompleto"),
  eventType: z.string().min(1, "Selecione um tipo de evento"),
  eventDate: z.string().optional(),
  eventState: z.string().min(2, "Selecione o estado"),
  eventCity: z.string().min(2, "Selecione a cidade"),
  budgetRange: z.string().optional(),
  artistId: z.string().optional(),
  notes: z.string().max(2000, "Notas muito longas (máximo 2000 caracteres)").optional(),
});

type BudgetFormData = z.infer<typeof budgetSchema>;

const formatPhone = (value: string): string => {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 2) return numbers;
  if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
};

export default function Budget() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showModal, setShowModal } = useLeadCaptureIntent({
    timeoutMs: 45000,
    enableExitIntent: true,
    enableTimeoutIntent: true,
  });

  const form = useForm<BudgetFormData>({
    resolver: zodResolver(budgetSchema),
    defaultValues: {
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      eventType: "",
      eventDate: "",
      eventState: "",
      eventCity: "",
      budgetRange: "",
      artistId: "",
      notes: "",
    },
  });

  const eventState = form.watch("eventState");
  const availableCities = eventState ? citiesByState[eventState] || [] : [];

  const onSubmit = async (data: BudgetFormData) => {
    setIsSubmitting(true);

    try {
      const selectedArtist = artists.find(a => a.id === data.artistId);
      const eventLocation = `${data.eventCity} - ${data.eventState}`;
      
      const { error } = await supabase.from("leads").insert({
        contact_type: "budget_form",
        source_page: "budget",
        customer_name: data.customerName,
        customer_email: data.customerEmail,
        customer_phone: data.customerPhone,
        event_type: data.eventType,
        event_date: data.eventDate || null,
        event_location: eventLocation,
        budget_range: data.budgetRange || null,
        artist_id: data.artistId || null,
        artist_name: selectedArtist?.name || null,
        notes: data.notes || null,
        status: "new",
        user_agent: navigator.userAgent,
        referrer: document.referrer || null,
      });

      if (error) throw error;

      toast({
        title: "✅ Solicitação enviada com sucesso!",
        description: `Olá ${data.customerName}! Recebemos sua solicitação de orçamento para ${data.eventCity}. Nossa equipe entrará em contato em breve através do telefone/WhatsApp informado.`,
        duration: 6000,
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting budget form:', error);
      toast({
        title: "Erro ao enviar",
        description: "Não foi possível enviar sua solicitação. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-6 rounded-lg border shadow-lg">
              <FormField
                control={form.control}
                name="customerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo *</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="customerEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="seu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="customerPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone/WhatsApp *</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="(XX) XXXXX-XXXX"
                          {...field}
                          onChange={(e) => {
                            const formatted = formatPhone(e.target.value);
                            field.onChange(formatted);
                          }}
                          maxLength={15}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="eventType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Evento *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo de evento" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="eventos-igreja">Eventos Igreja</SelectItem>
                        <SelectItem value="evento-corporativo">Evento Corporativo</SelectItem>
                        <SelectItem value="show-arena">Show Arena</SelectItem>
                        <SelectItem value="evento-prefeitura">Evento Prefeitura</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="eventDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data do Evento</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="eventState"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estado *</FormLabel>
                      <Select 
                        onValueChange={(value) => {
                          field.onChange(value);
                          form.setValue("eventCity", "");
                        }} 
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o estado" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {brazilianStates.map((state) => (
                            <SelectItem key={state.value} value={state.value}>
                              {state.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="eventCity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cidade *</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        value={field.value}
                        disabled={!eventState}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={eventState ? "Selecione a cidade" : "Selecione o estado primeiro"} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {availableCities.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="artistId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Artista Desejado (opcional)</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um artista" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {artists.map((artist) => (
                          <SelectItem key={artist.id} value={artist.id}>
                            {artist.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budgetRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Faixa de Orçamento</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma faixa" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ate-5k">Até R$ 5.000</SelectItem>
                        <SelectItem value="5k-10k">R$ 5.000 - R$ 10.000</SelectItem>
                        <SelectItem value="10k-20k">R$ 10.000 - R$ 20.000</SelectItem>
                        <SelectItem value="20k-mais">Acima de R$ 20.000</SelectItem>
                        <SelectItem value="aberto">Aberto a negociação</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Informações Adicionais</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Conte-nos mais sobre seu evento..."
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Enviando solicitação..." : "Solicitar Orçamento"}
              </Button>
            </form>
          </Form>
        </div>
      </main>
      <Footer />
      
      <LeadCaptureModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        sourcePage="budget"
      />
    </div>
  );
}
