import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin, X } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              
            </div>

            {/* Contato e Menu Mobile */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4 text-white">
                <a href="tel:+556130366162" className="flex items-center gap-1 hover:text-amber-300 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">61 3036-6162</span>
                </a>
                <button 
                  onClick={() => scrollToSection("localizacao")} 
                  className="flex items-center gap-1 hover:text-amber-300 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Localização</span>
                </button>
              </div>
              
              {/* Botão Menu Mobile */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white"
                aria-label="Menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
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

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-[45vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(53, 47, 47, 0.57), rgba(30, 25, 15, 0.85)), url(/logo-hero2.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 py-32 relative z-10 mt-16">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="flex justify-center mb-4">
              <img 
                src="/logo_padaria.png" 
                alt="Forno de Ouro" 
                className="h-82 md:h-96 w-auto object-contain"
              />
            </div>
            <p className="text-4xl md:text-5xl text-white/100 mx-auto">
             BEM-VINDO
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("produtos")}
                className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-6 transition-all hover:scale-105 uppercase tracking-wider"
              >
                Menu
              </Button>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
