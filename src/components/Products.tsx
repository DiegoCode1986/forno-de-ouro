import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import sourdough from "@/assets/sourdough.jpg";
import croissants from "@/assets/croissants.jpg";
import pizza from "@/assets/pizza.jpg";
import cakesSavories from "@/assets/cakes-savories.jpg";

const products = [
  {
    title: "Pães Artesanais",
    description: "Fermentação natural, crocância perfeita",
    image: sourdough,
    items: ["Pão de Fermentação Natural", "Baguete Francesa", "Integral Multigrãos", "Ciabatta"],
  },
  {
    title: "Croissants & Doces",
    description: "Folhados leves e deliciosos",
    image: croissants,
    items: ["Croissant de Manteiga", "Pain au Chocolat", "Sonhos", "Pão Doce"],
  },
  {
    title: "Pizzas Artesanais",
    description: "Massa fermentada por 48h",
    image: pizza,
    items: ["Margherita", "Pepperoni", "Quatro Queijos", "Calabresa Especial"],
  },
  {
    title: "Bolos & Salgados",
    description: "Para festas e eventos",
    image: cakesSavories,
    items: ["Bolos Decorados", "Coxinhas", "Empadas", "Tortas Salgadas"],
  },
];

const Products = () => {
  const handleWhatsAppClick = (productTitle: string) => {
    const message = `Olá! Gostaria de saber mais sobre: ${productTitle}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="produtos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Produtos
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todos os produtos feitos diariamente com ingredientes selecionados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{product.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {product.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleWhatsAppClick(product.title)}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Pedir no WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Aceitamos encomendas personalizadas para festas e eventos
          </p>
          <a
            href="#encomendas"
            className="inline-block text-secondary hover:text-secondary/80 font-semibold transition-colors"
          >
            Solicite um orçamento →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
