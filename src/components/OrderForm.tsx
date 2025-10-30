import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Olá! Gostaria de fazer uma encomenda:\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nEmail: ${formData.email}\nTipo: ${formData.orderType}\nDetalhes: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
    
    toast.success("Redirecionando para WhatsApp...");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      orderType: "",
      message: "",
    });
  };

  return (
    <section id="encomendas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Faça sua Encomenda
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco para fazer seu pedido personalizado
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="animate-slide-in-left border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Informações de Contato</CardTitle>
              <CardDescription className="text-muted-foreground">
                Estamos à disposição para atendê-lo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Telefone</h3>
                  <a href="tel:+5511999999999" className="text-muted-foreground hover:text-secondary transition-colors">
                    (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <a href="mailto:contato@padariaartesanal.com.br" className="text-muted-foreground hover:text-secondary transition-colors">
                    contato@padariaartesanal.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua das Padarias, 123
                    <br />
                    São Paulo - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Horário</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sábado: 6h às 20h
                    <br />
                    Domingo: 6h às 14h
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold text-primary mb-3">Peça pelo iFood</h3>
                <a
                  href="https://www.ifood.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Pedir no iFood
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-in-right border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Formulário de Encomenda</CardTitle>
              <CardDescription className="text-muted-foreground">
                Preencha os dados e entraremos em contato
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-input bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="border-input bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-input bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="orderType">Tipo de Encomenda</Label>
                  <Input
                    id="orderType"
                    placeholder="Ex: Festa, Pizza, Bolo..."
                    value={formData.orderType}
                    onChange={(e) => setFormData({ ...formData, orderType: e.target.value })}
                    className="border-input bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Detalhes do Pedido *</Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva o que você gostaria de encomendar..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="border-input bg-background resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Enviar Encomenda via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
