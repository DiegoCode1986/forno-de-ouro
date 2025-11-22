import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ProductItem {
  id: number;
  title: string;
  weight: string;
  price: string;
  image: string;
  description: string;
}

const PaesArtesanais = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products: ProductItem[] = [
    {
      id: 1,
      title: "Bolo 1",
      weight: "500g",
      price: "R$ 18,00",
      image: "imagens/bolos/bolo1.png",
      description: "Massa madre com 72h de fermentação, crocante por fora e macio por dentro",
    },
    {
      id: 2,
      title: "Bolo 2",
      weight: "300g",
      price: "R$ 12,00",
      image: "imagens/bolos/bolo2.jpeg",
      description: "Tradicional bolo francês com casca crocante e miolo aerado",
    },
    {
      id: 3,
      title: "Bolo 3",
      weight: "600g",
      price: "R$ 22,00",
      image: "imagens/bolos/bolo3.png",
      description: "Rico em fibras com sementes de girassol, linhaça e gergelim",
    },
    {
      id: 4,
      title: "Bolo 4",
      weight: "400g",
      price: "R$ 16,00",
      image: "imagens/bolos/bolo4.png",
      description: "Bolo italiano com textura rústica e sabor marcante",
    },
    {
      id: 5,
      title: "Bolo 5",
      weight: "500g",
      price: "R$ 20,00",
      image: "imagens/bolos/bolo5.png",
      description: "Sabor intenso e textura densa, perfeito para sanduíches",
    },
    {
      id: 6,
      title: "Bolo 6",
      weight: "350g",
      price: "R$ 19,00",
      image: "imagens/bolos/bolo3.png",
      description: "Bolo italiano com azeite, alecrim e sal grosso",
    },
  ];

  const handleWhatsAppOrder = (product: ProductItem) => {
    const message = `Olá! Quero encomendar o ${product.title} (${product.weight}) - Valor: ${product.price}`;
    const whatsappUrl = `https://wa.me/5561996896829?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
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
                  Bolos
                </h1>
                <p className="text-lg text-muted-foreground">
                  Fermentação natural, crocância perfeita
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  selectedProduct === product.id ? "ring-2 ring-secondary" : ""
                }`}
                onClick={() => setSelectedProduct(product.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f0f0f0' width='200' height='200'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EPão Artesanal%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-primary">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {product.weight}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-secondary">
                      {product.price}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {product.description}
                    </p>
                  </div>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppOrder(product);
                    }}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Encomendar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Sobre nossos pães artesanais
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-secondary">
                  Processo de Fermentação
                </h3>
                <p className="text-muted-foreground">
                  Utilizamos fermentação natural com massa madre, desenvolvida ao longo de anos. 
                  Este processo lento garante pães mais digestivos, saborosos e com maior durabilidade.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-secondary">
                  Ingredientes Selecionados
                </h3>
                <p className="text-muted-foreground">
                  Apenas farinha de alta qualidade, água filtrada, sal marinho e nossa massa madre. 
                  Sem conservantes, sem aditivos químicos, apenas ingredientes naturais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaesArtesanais;
