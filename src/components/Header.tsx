import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              Padaria <span className="text-secondary">Artesanal</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-secondary transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-secondary transition-colors font-medium"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-foreground hover:text-secondary transition-colors font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("encomendas")}
              className="text-foreground hover:text-secondary transition-colors font-medium"
            >
              Encomendas
            </button>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+5511999999999" className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">(11) 99999-9999</span>
            </a>
            <Button
              onClick={() => scrollToSection("encomendas")}
              variant="default"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              Fazer Pedido
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left text-foreground hover:text-secondary transition-colors font-medium py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left text-foreground hover:text-secondary transition-colors font-medium py-2"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="block w-full text-left text-foreground hover:text-secondary transition-colors font-medium py-2"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("encomendas")}
              className="block w-full text-left text-foreground hover:text-secondary transition-colors font-medium py-2"
            >
              Encomendas
            </button>
            <div className="pt-4 border-t border-border">
              <a
                href="tel:+5511999999999"
                className="flex items-center space-x-2 text-secondary font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>(11) 99999-9999</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
