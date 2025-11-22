import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de fazer uma encomenda.";
    const whatsappUrl = `https://wa.me/5561996896829?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white z-50 animate-scale-in hover:scale-110 transition-all duration-300"
      aria-label="Contato WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
};

export default WhatsAppFloat;
