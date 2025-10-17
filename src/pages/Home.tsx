import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-image.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const Home = () => {
  const whatsappUrl = "https://wa.me/5562981548834?text=Olá,+vim+através+da+negociação+com+Thiago+Ferreira,+e+gostaria+de+informações+sobre+shows+da+M7+Produções";
  
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroImage})`
      }} />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-stone-300">
            🎶 <span className="text-primary">M7</span> Produções Artísticas
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-stone-50">Levamos música e arte aos palcos do Brasil.</p>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-stone-50">
            Apresentamos um elenco com artistas de expressão nacional, prontos para eventos, festivais e programações culturais.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link to="/artistas">
              ➡️ Ver Artistas
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Music className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Artistas de Excelência</h3>
              <p className="text-muted-foreground">
                Representamos os principais nomes da música cristã brasileira com alcance nacional e internacional.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Casting Completo</h3>
              <p className="text-muted-foreground">
                13 artistas renomados com diversos estilos musicais para atender seu evento.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Calendar className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Atendimento Rápido</h3>
              <p className="text-muted-foreground">
                Entre em contato via WhatsApp e receba uma proposta personalizada em até 24h.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para levar fé e música ao seu evento?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a escolher o melhor show para o seu evento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/artistas">
                Conhecer Artistas
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                💬 Falar Agora
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;