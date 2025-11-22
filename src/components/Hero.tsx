import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(30, 25, 15, 0.75), rgba(30, 25, 15, 0.85)), url(/forno.jpg)',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Pães Artesanais
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Feitos com Amor
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Tradição e qualidade em cada fornada. Descubra o sabor autêntico de
            pães artesanais, pizzas deliciosas e muito mais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("produtos")}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 transition-all hover:scale-105"
            >
              Ver Produtos
            </Button>
           
          </div>
          <div className="pt-8">
            <p className="text-white/80 text-sm mb-2">Delivery pelo iFood</p>
            <a
              href="https://www.ifood.com.br/delivery/brasilia-df/forno-de-ouro-panificadora-taguatinga-norte-taguatinga/87a5577e-28ac-40f8-b6bb-6d02843a59d3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="link"
                className="text-amber-400 hover:text-amber-300 text-lg"
              >
                Peça Agora no iFood →
              </Button>
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection("sobre")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-float"
        aria-label="Scroll para baixo"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
};

export default Hero;
