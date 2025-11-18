import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
}

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Exemplo de itens - você pode substituir pelas suas imagens
  const items: CarouselItem[] = [
    {
      id: 1,
      image: "imagens/queridinhos/queridinho1.png",
      title: "Queridinho",
      price: "R$ 36,00",
      description: "Pães recheados de peru especial da Benjamin.",
    },
    {
      id: 2,
      image: "imagens/queridinhos/queridinho2.png",
      title: "Queridinho",
      price: "R$ 38,00",
      description: "Um toque oriental no seu dia, com frango temperado e especiarias que transformam cada mordida em uma experiência única.",
    },
    {
      id: 3,
      image: "imagens/queridinhos/queridinho3.png",
      title: "Queridinho",
      price: "R$ 28,00",
      description: "A escolha ideal para quem valoriza um lanche saboroso, mas sem açúcar ou sal em excesso.",
    },
     {
      id: 4,
      image: "imagens/queridinhos/queridinho4.png",
      title: "Queridinho",
      price: "R$ 28,00",
      description: "A escolha ideal para quem valoriza um lanche saboroso, mas sem açúcar ou sal em excesso.",
    },
     {
      id: 5,
      image: "imagens/queridinhos/queridinho5.png",
      title: "Queridinho",
      price: "R$ 28,00",
      description: "A escolha ideal para quem valoriza um lanche saboroso, mas sem açúcar ou sal em excesso.",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Calcula quais itens mostrar (3 por vez)
  const getVisibleItems = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % items.length;
      visible.push(items[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos <span className="text-secondary">Queridinhos</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Botão Anterior */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full w-12 h-12 hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>

          {/* Carrossel */}
          <div className="overflow-hidden">
            <div className="flex gap-6 transition-transform duration-500 ease-in-out">
              {getVisibleItems().map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex-shrink-0 w-full md:w-1/3 animate-fade-in"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-primary flex-1">
                          {item.title}
                        </h3>
                        <span className="text-2xl font-bold text-secondary ml-4">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botão Próximo */}
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full w-12 h-12 hidden md:flex"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>

          {/* Indicadores de navegação */}
          <div className="flex justify-center gap-2 mt-8">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-secondary w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Botões mobile */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
