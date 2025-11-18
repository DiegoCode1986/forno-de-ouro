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
  unit: string;
  price: string;
  image: string;
  description: string;
}

const CroissantsDoces = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products: ProductItem[] = [
    {
      id: 1,
      title: "Croissant de Manteiga",
      unit: "Unidade",
      price: "R$ 9,00",
      image: "/croissant-manteiga.jpg",
      description: "Folhado clássico com camadas crocantes e manteiga francesa",
    },
    {
      id: 2,
      title: "Pain au Chocolat",
      unit: "Unidade",
      price: "R$ 11,00",
      image: "/pain-chocolat.jpg",
      description: "Croissant recheado com chocolate belga de alta qualidade",
    },
    {
      id: 3,
      title: "Sonhos",
      unit: "6 unidades",
      price: "R$ 24,00",
      image: "/sonhos.jpg",
      description: "Bolinhos fritos recheados com creme de baunilha",
    },
    {
      id: 4,
      title: "Pão Doce",
      unit: "Unidade",
      price: "R$ 7,00",
      image: "/pao-doce.jpg",
      description: "Massa macia e levemente adocicada, perfeito para o café",
    },
    {
      id: 5,
      title: "Croissant de Amêndoas",
      unit: "Unidade",
      price: "R$ 12,00",
      image: "/croissant-amendoas.jpg",
      description: "Croissant recheado com creme de amêndoas e lascas crocantes",
    },
    {
      id: 6,
      title: "Brioche",
      unit: "Unidade",
      price: "R$ 10,00",
      image: "/brioche.jpg",
      description: "Pão doce francês rico em manteiga e ovos",
    },
  ];

  const handleWhatsAppOrder = (product: ProductItem) => {
    const message = `Olá! Gostaria de encomendar:\n${product.title} (${product.unit})\nValor: ${product.price}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
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
                  Croissants & Doces
                </h1>
                <p className="text-lg text-muted-foreground">
                  Folhados leves e deliciosos
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
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f0f0f0' width='200' height='200'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3ECroissant%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-primary">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {product.unit}
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
              A arte da confeitaria francesa
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-secondary">
                  Técnica Tradicional
                </h3>
                <p className="text-muted-foreground">
                  Nossos croissants são feitos com a técnica francesa de laminação, 
                  criando múltiplas camadas de massa e manteiga para aquela textura 
                  crocante e aerada inconfundível.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-secondary">
                  Frescor Garantido
                </h3>
                <p className="text-muted-foreground">
                  Todos os nossos produtos são assados diariamente pela manhã. 
                  Recomendamos consumir no mesmo dia para aproveitar o máximo 
                  do sabor e textura.
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

export default CroissantsDoces;
