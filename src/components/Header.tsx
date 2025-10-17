import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 rounded-full bg-transparent">
        <div className="flex items-center justify-between h-16 md:h-20 rounded-lg bg-transparent">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-primary">M7</span>
              <span className="text-lime-50 text-base"> Produções</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground"}`}>
              Início
            </Link>
            <Link to="/artistas" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/artistas") ? "text-primary" : "text-foreground"}`}>
              Artistas
            </Link>
            <Link to="/contato" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/contato") ? "text-primary" : "text-foreground"}`}>
              Contato
            </Link>
            <Button asChild variant="default" size="sm">
              <a href="https://wa.me/5562999999999?text=Olá,%20gostaria%20de%20informações%20sobre%20shows%20da%20M7%20Produções" target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden py-4 space-y-4 border-t border-border">
            <Link to="/" className={`block text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground"}`} onClick={() => setIsMenuOpen(false)}>
              Início
            </Link>
            <Link to="/artistas" className={`block text-sm font-medium transition-colors hover:text-primary ${isActive("/artistas") ? "text-primary" : "text-foreground"}`} onClick={() => setIsMenuOpen(false)}>
              Artistas
            </Link>
            <Link to="/contato" className={`block text-sm font-medium transition-colors hover:text-primary ${isActive("/contato") ? "text-primary" : "text-foreground"}`} onClick={() => setIsMenuOpen(false)}>
              Contato
            </Link>
            <Button asChild variant="default" size="sm" className="w-full">
              <a href="https://wa.me/5562999999999?text=Olá,%20gostaria%20de%20informações%20sobre%20shows%20da%20M7%20Produções" target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </nav>}
      </div>
    </header>;
};
export default Header;