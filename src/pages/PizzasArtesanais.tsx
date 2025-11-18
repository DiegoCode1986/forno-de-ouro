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
  size: string;
  price: string;
  image: string;
  description: string;
  ingredients: string[];
}

const PizzasArtesanais = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products: ProductItem[] = [
    {
      id: 1,
      title: "Margherita",
      size: "Grande (8 fatias)",
      price: "R$ 45,00",
      image: "imagens/pizzas/pizza.png",
      description: "A clássica pizza italiana com ingredientes simples e saborosos",
      ingredients: ["Molho de tomate", "Mussarela de búfala", "Manjericão fresco", "Azeite extra virgem"],
    },
    {
      id: 2,
      title: "Pepperoni",
      size: "Grande (8 fatias)",
      price: "R$ 52,00",
     image: "imagens/pizzas/pizza.png",
      description: "Generosas fatias de pepperoni sobre queijo derretido",
      ingredients: ["Molho de tomate", "Mussarela", "Pepperoni premium", "Orégano"],
    },
    {
      id: 3,
      title: "Quatro Queijos",
      size: "Grande (8 fatias)",
      price: "R$ 55,00",
      image: "imagens/pizzas/pizza.png",
      description: "Combinação perfeita de queijos nobres",
      ingredients: ["Mussarela", "Gorgonzola", "Parmesão", "Provolone"],
    },
    {
      id: 4,
      title: "Calabresa Especial",
      size: "Grande (8 fatias)",
      price: "R$ 48,00",
      image: "imagens/pizzas/pizza.png",
      description: "Calabresa artesanal com cebola caramelizada",
      ingredients: ["Molho de tomate", "Mussarela", "Calabresa artesanal", "Cebola roxa"],
    },
    {
      id: 5,
      title: "Portuguesa",
      size: "Grande (8 fatias)",
      price: "R$ 50,00",
      image: "imagens/pizzas/pizza.png",
      description: "Recheio completo e tradicional",
      ingredients: ["Presunto", "Mussarela", "Ovos", "Cebola", "Azeitonas"],
    },
    {
      id: 6,
      title: "Vegetariana",
      size: "Grande (8 fatias)",
      price: "R$ 47,00",
      image: "imagens/pizzas/pizza.png",
      description: "Seleção de vegetais frescos da estação",
      ingredients: ["Berinjela", "Abobrinha", "Pimentão", "Tomate cereja", "Rúcula"],
    },
  ];

  const handleWhatsAppOrder = (product: ProductItem) => {
    const message = `Olá! Gostaria de encomendar:\n${product.title} (${product.size})\nValor: ${product.price}`;
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
                  Pizzas Artesanais
                </h1>
                <p className="text-lg text-muted-foreground">
                  Massa fermentada por 48h
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
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f0f0f0' width='200' height='200'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EPizza%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-primary">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {product.size}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-secondary mb-2">
                      {product.price}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {product.description}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <strong>Ingredientes:</strong>
                      <ul className="mt-1 space-y-1">
                        {product.ingredients.map((ingredient, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className="w-1 h-1 bg-secondary rounded-full"></span>
                            <span>{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
              Nossa massa artesanal
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-secondary">
                  Fermentação Lenta
                </h3>
                <p className="text-muted-foreground">
                  Nossa massa passa por 48 horas de fermentação lenta em temperatura 
                  controlada. Este processo desenvolve sabor complexo e torna a pizza 
                  mais leve e digestiva.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-secondary">
                  Forno a Lenha
                </h3>
                <p className="text-muted-foreground">
                  Assadas em forno a lenha a alta temperatura, nossas pizzas ficam 
                  com a borda crocante e o centro macio, com aquele sabor defumado 
                  característico.
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-primary">Delivery:</strong> Disponível pelo iFood ou WhatsApp. 
                Pizzas entregues em embalagem especial que mantém o calor e a crocância.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PizzasArtesanais;
