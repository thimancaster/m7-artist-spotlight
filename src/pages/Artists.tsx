import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { artists } from "@/data/artists";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLeadCaptureIntent } from "@/hooks/useLeadCaptureIntent";
import LeadCaptureModal from "@/components/LeadCaptureModal";

const Artists = () => {
  const { showModal, setShowModal } = useLeadCaptureIntent({
    timeoutMs: 45000,
    enableExitIntent: true,
    enableTimeoutIntent: true,
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              🌟 Nosso <span className="text-primary">Casting</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça os artistas representados pela M7 Produções e descubra o show ideal para o seu evento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <Card
                key={artist.id}
                className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                  <p className="text-primary font-medium mb-3">{artist.genre}</p>
                  <p className="text-muted-foreground line-clamp-3">
                    {artist.bio}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full">
                    <Link to={`/artista/${artist.id}`}>
                      Saiba mais / Contratar
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <LeadCaptureModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        sourcePage="artists"
      />

      <Footer />
    </div>
  );
};

export default Artists;
