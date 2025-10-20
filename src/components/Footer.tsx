import { Instagram, Youtube, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">M7</span>
              <span className="text-foreground"> Produções</span>
            </h3>
            <p className="text-muted-foreground">
              Levamos música, arte e fé aos palcos do Brasil.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contato</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 contato@m7producoes.com.br</p>
              <p>📱 WhatsApp: (62) 98154-8834</p>
              <p>🌐 m7producoes.com.br</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com/m7producoes" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@m7producoes" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="mailto:contato@m7producoes.com.br" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© 2025 M7 Produções Artísticas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;