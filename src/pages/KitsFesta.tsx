import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MessageCircle, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface KitItem {
  id: number;
  title: string;
  people: string;
  price: string;
  image: string;
  description: string;
}

const KitsFesta = () => {
  const navigate = useNavigate();
  const [selectedKit, setSelectedKit] = useState<number | null>(null);

  const kits: KitItem[] = [
    {
      id: 1,
      title: "Kit festa 1",
      people: "15 Pessoas",
      price: "R$ 390,00",
      image: "imagens/kit_festas/kit1.png",
      description: "Perfeito para pequenas reuniões e coffee breaks corporativos",
    },
    
    {
      id: 2,
      title: "Kit Festa 2",
      people: "20 Pessoas",
      price: "R$ 480,00",
     image: "imagens/kit_festas/kit2.png",
      description: "Variedade completa de salgados e doces para sua festa",
    },
    {
      id: 3,
      title: "Kit festa 3",
      people: "40 Pessoas",
      price: "R$ 950,00",
      image: "imagens/kit_festas/kit3.png",
      description: "Ideal para eventos corporativos e reuniões maiores",
    },
    {
      id: 4,
      title: "Kit festa 4",
      people: "30 Pessoas",
      price: "R$ 790,00",
      image: "imagens/kit_festas/kit4.png",
      description: "Opção intermediária para eventos médios",
    },
    {
      id: 5,
      title: "Kit festa 5",
      people: "20 Pessoas",
      price: "R$ 500,00",
      image: "imagens/kit_festas/kit5.png",
      description: "Solução completa para coffee breaks corporativos",
    },
    {
      id: 6,
      title: "Kit festa 6",
      people: "10 Pessoas",
      price: "R$ 290,00",
    image: "imagens/kit_festas/kit6.png",
      description: "Perfeito para pequenas reuniões",
    },
  ];

  const handleWhatsAppOrder = (kit: KitItem) => {
    const message = `Olá! Gostaria de encomendar:\n${kit.title} (${kit.people})\nValor: ${kit.price}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header da página */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-4 hover:text-secondary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                 Nossos kits festas
                </h1>
                <p className="text-lg text-muted-foreground">
                  Escolha o kit ideal para seu evento
                </p>
              </div>
              <a
                href="#todos"
                className="text-secondary hover:text-secondary/80 font-semibold transition-colors hidden md:block"
              >
                ver tudo →
              </a>
            </div>
          </div>

          {/* Grid de Kits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
            {kits.map((kit, index) => (
              <Card
                key={kit.id}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  selectedKit === kit.id ? "ring-2 ring-secondary" : ""
                }`}
                onClick={() => setSelectedKit(kit.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={kit.image}
                    alt={kit.title}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f0f0f0' width='200' height='200'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3ECoffee Break%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-primary">
                    {kit.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {kit.people}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-secondary">
                      {kit.price}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {kit.description}
                    </p>
                  </div>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppOrder(kit);
                    }}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    size="sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Encomendar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Informações adicionais */}
          <div className="bg-muted/30 rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-primary mb-4">
              O que está incluso nos kits?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-secondary">
                  Salgados Variados
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    <span>Coxinhas de frango</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    <span>Empadas sortidas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    <span>Mini pizzas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    <span>Risoles de carne</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-secondary">
                  Doces e Bebidas
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    <span>Mini bolos e brownies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    <span>Brigadeiros gourmet</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    <span>Café e sucos naturais</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    <span>Refrigerantes</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-primary">Nota:</strong> Todos os kits podem ser personalizados de acordo com suas preferências. 
                Entre em contato conosco pelo WhatsApp para solicitar um orçamento personalizado.
              </p>
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Precisa de um kit personalizado?
            </h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato e monte seu kit sob medida
            </p>
            <Button
              size="lg"
              onClick={() => {
                const message = "Olá! Gostaria de solicitar um orçamento personalizado para kit festa.";
                const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, "_blank");
              }}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default KitsFesta;
