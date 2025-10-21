import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Globe, Instagram, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLeadTracking } from "@/hooks/useLeadTracking";

const Contact = () => {
  const { trackAndRedirect } = useLeadTracking();
  const whatsappMessage = "Olá, vim através da negociação com Thiago Ferreira, e gostaria de informações sobre shows da M7 Produções";
  const whatsappUrl = `https://wa.me/5562981548834?text=${encodeURIComponent(whatsappMessage)}`;
  
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
                    <p className="text-muted-foreground mb-3">(62) 98154-8834</p>
                    <Button 
                      size="sm"
                      onClick={() => trackAndRedirect(
                        { contactType: 'whatsapp', sourcePage: 'contact' },
                        whatsappUrl
                      )}
                    >
                      Enviar mensagem
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
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => trackAndRedirect(
                        { contactType: 'email', sourcePage: 'contact' },
                        'mailto:contato@m7producoes.com.br'
                      )}
                    >
                      Enviar e-mail
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
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => trackAndRedirect(
                        { contactType: 'instagram', sourcePage: 'contact' },
                        'https://www.instagram.com/m7producoes_/'
                      )}
                    >
                      Seguir no Instagram
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
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => trackAndRedirect(
                  { contactType: 'whatsapp', sourcePage: 'contact-cta' },
                  whatsappUrl
                )}
              >
                🟢 Abrir WhatsApp
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
