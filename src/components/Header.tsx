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
      <div className={`fixed inset-y-0 right-0 w-64 bg-amber-500 text-white z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full overflow-y-auto p-4 space-y-4">
          <div className="flex justify-end mb-4">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-amber-600 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <button 
            onClick={() => scrollToSection("localizacao")} 
            className="flex items-center gap-2 w-full p-3 hover:bg-amber-600 rounded-lg transition-colors"
          >
            <MapPin className="w-5 h-5" />
            <span>Localização</span>
          </button>
          
          <div className="h-px bg-white/30 my-2" />
          
          <nav className="space-y-2">
            <button 
              onClick={() => scrollToSection("historia")} 
              className="block w-full text-left p-3 hover:bg-amber-600 rounded-lg transition-colors"
            >
              FORNO DE OURO · HISTÓRIA
            </button>
            <button 
              onClick={() => scrollToSection("servicos")} 
              className="block w-full text-left p-3 hover:bg-amber-600 rounded-lg transition-colors"
            >
              CONHEÇA · SERVIÇOS
            </button>
            <button 
              onClick={() => scrollToSection("produtos")} 
              className="block w-full text-left p-3 hover:bg-amber-600 rounded-lg transition-colors"
            >
              ENCANTE-SE · PRODUTOS
            </button>
            <button 
              onClick={() => scrollToSection("encomendas")} 
              className="block w-full text-left p-3 hover:bg-amber-600 rounded-lg transition-colors"
            >
              VAI FAZER UM EVENTO? · ENCOMENDAS
            </button>
          </nav>
        </div>
      </div>
      
      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
