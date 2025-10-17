import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Music2, ArrowLeft } from "lucide-react";
import { artists } from "@/data/artists";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ArtistDetail = () => {
  const { id } = useParams<{ id: string }>();
  const artist = artists.find((a) => a.id === id);

  if (!artist) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artista não encontrado</h1>
          <Button asChild>
            <Link to="/artistas">Voltar para Artistas</Link>
          </Button>
        </div>
      </div>
    );
  }

  const whatsappMessage = `Olá, vim através da negociação com Thiago Ferreira, e gostaria de informações sobre o show de ${artist.name} para o evento em [CIDADE/DATA].`;
  const whatsappUrl = `https://wa.me/5562981548834?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Button asChild variant="outline" className="mb-8">
            <Link to="/artistas">
              <ArrowLeft className="mr-2" size={16} />
              Voltar para Artistas
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Artist Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted border-2 border-border">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Artist Info */}
            <div>
              <h1 className="text-5xl font-bold mb-4">{artist.name}</h1>
              <p className="text-2xl text-primary font-semibold mb-6">{artist.genre}</p>
              
              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
                  {artist.bio}
                </p>
              </div>

              {/* Featured Video */}
              {artist.featuredVideoUrl && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">🎥 Vídeo Destaque</h3>
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={artist.featuredVideoUrl.replace('watch?v=', 'embed/')}
                      title={`${artist.name} - Vídeo Destaque`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Streaming Platforms */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">🎵 Ouça nas Plataformas</h3>
                <div className="flex flex-wrap gap-3">
                  {artist.socialMedia.spotify && (
                    <Button asChild variant="outline" size="lg">
                      <a
                        href={artist.socialMedia.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Music2 className="mr-2" size={20} />
                        Spotify
                      </a>
                    </Button>
                  )}
                  {artist.socialMedia.youtube && (
                    <Button asChild variant="outline" size="lg">
                      <a
                        href={artist.socialMedia.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube className="mr-2" size={20} />
                        YouTube
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Social Media */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">🔗 Redes Sociais</h3>
                <div className="flex flex-wrap gap-3">
                  {artist.socialMedia.instagram && (
                    <Button asChild variant="outline" size="lg">
                      <a
                        href={artist.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="mr-2" size={20} />
                        Instagram
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  💬 Quer levar esse show para o seu evento?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Entre em contato via WhatsApp e receba uma proposta personalizada para o seu evento.
                </p>
                <Button asChild size="lg" className="w-full text-lg">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    🟢 Solicitar Proposta de Show
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArtistDetail;
