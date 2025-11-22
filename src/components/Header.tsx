import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, Newspaper, MessageCircle } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className="w-full bg-white border-b border-border">
        <div className="container mx-auto px-4 py-2 text-xs md:text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="tel:+556130366162" className="flex items-center gap-2 text-foreground hover:text-secondary">
                <Phone className="w-4 h-4" />
                <span>61 3036-6162</span>
              </a>
              <a href="tel:+5561996896829" className="flex items-center gap-2 text-foreground hover:text-secondary">
                <Phone className="w-4 h-4" />
                <span>61 99689-6829</span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("localizacao")} className="flex items-center gap-2 text-foreground hover:text-secondary">
                <MapPin className="w-4 h-4" />
                <span>Localização</span>
              </button>
             
             
            </div>
            {/* Mobile toggle */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-foreground">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="w-full bg-[#F2F2ED]">
        <nav className="container mx-auto px-4">
          <div className="flex items-stretch">
            {/* Logo area */}
            <div className="flex items-center pr-6">
              <img
                src="/logo_padaria.png"
                alt="Padaria Artesanal"
                className="h-20 md:h-22 w-25"
              />
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex flex-1 items-center justify-center gap-20 text-[#BEB393]">
              <button onClick={() => scrollToSection("historia")} className="text-center hover:opacity-90">
                <div className="text-[10px] uppercase tracking-wide opacity-95">FORNO DE OURO</div>
                <div className="text-lg font-extrabold uppercase leading-tight">História</div>
              </button>
              <button onClick={() => scrollToSection("servicos")} className="text-center hover:opacity-90">
                <div className="text-[10px] uppercase tracking-wide opacity-95">CONHEÇA</div>
                <div className="text-lg font-extrabold uppercase leading-tight">Serviços</div>
              </button>
              <button onClick={() => scrollToSection("produtos")} className="text-center hover:opacity-90">
                <div className="text-[10px] uppercase tracking-wide opacity-95">ENCANTE-SE</div>
                <div className="text-lg font-extrabold uppercase leading-tight">Produtos</div>
              </button>
              <button onClick={() => scrollToSection("encomendas")} className="text-center hover:opacity-90">
                <div className="text-[10px] uppercase tracking-wide opacity-95">VAI FAZER UM EVENTO?</div>
                <div className="text-lg font-extrabold uppercase leading-tight">Encomendas</div>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile dropdown content */}
      {isMenuOpen && (
        <div className="md:hidden bg-amber-500 text-white">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <button onClick={() => scrollToSection("localizacao")} className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Localização</span>
            </button>
            <button onClick={() => scrollToSection("blog")} className="flex items-center gap-2">
              <Newspaper className="w-4 h-4" />
              <span>Blog</span>
            </button>
            <button onClick={() => scrollToSection("contato")} className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Fale Conosco</span>
            </button>
            <div className="h-px bg-white/30" />
            <button onClick={() => scrollToSection("historia")} className="block w-full text-left">A MUNDIAL · HISTÓRIA</button>
            <button onClick={() => scrollToSection("servicos")} className="block w-full text-left">CONHEÇA · SERVIÇOS</button>
            <button onClick={() => scrollToSection("produtos")} className="block w-full text-left">ENCANTE-SE · PRODUTOS</button>
            <button onClick={() => scrollToSection("encomendas")} className="block w-full text-left">VAI FAZER UM EVENTO? · ENCOMENDAS</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
