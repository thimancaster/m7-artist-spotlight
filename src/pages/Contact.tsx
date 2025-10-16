import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Globe, Instagram, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              📞 Fale com a <span className="text-primary">M7 Produções</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Entre em contato para propostas, parcerias e informações.
              <br />
              Nossa equipe está pronta para ajudar você a escolher o melhor show para o seu evento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground mb-3">(62) 99999-9999</p>
                    <Button asChild size="sm">
                      <a
                        href="https://wa.me/5562999999999?text=Olá,%20gostaria%20de%20informações%20sobre%20shows%20da%20M7%20Produções"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Enviar mensagem
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">E-mail</h3>
                    <p className="text-muted-foreground mb-3">contato@m7producoes.com.br</p>
                    <Button asChild variant="outline" size="sm">
                      <a href="mailto:contato@m7producoes.com.br">
                        Enviar e-mail
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Globe className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Site</h3>
                    <p className="text-muted-foreground mb-3">m7producoes.com.br</p>
                    <Button asChild variant="outline" size="sm">
                      <a
                        href="https://m7producoes.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visitar site
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Instagram className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Instagram</h3>
                    <p className="text-muted-foreground mb-3">@m7producoes</p>
                    <Button asChild variant="outline" size="sm">
                      <a
                        href="https://instagram.com/m7producoes"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Seguir no Instagram
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main CTA */}
          <Card className="bg-gradient-to-br from-primary/20 to-card border-primary/50">
            <CardContent className="p-10 text-center">
              <MessageCircle className="mx-auto mb-4 text-primary" size={48} />
              <h2 className="text-3xl font-bold mb-4">💬 Falar com a M7 agora</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                A forma mais rápida de receber uma proposta personalizada é através do WhatsApp.
                Nossa equipe responde em até 24 horas.
              </p>
              <Button asChild size="lg" className="text-lg px-8">
                <a
                  href="https://wa.me/5562999999999?text=Olá,%20gostaria%20de%20informações%20sobre%20shows%20da%20M7%20Produções"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🟢 Abrir WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
