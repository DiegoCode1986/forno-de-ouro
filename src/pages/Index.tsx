import Hero from "@/components/Hero";
import DeliverySection from "@/components/DeliverySection";
import About from "@/components/About";
import ProductCarousel from "@/components/ProductCarousel";
import Products from "@/components/Products";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <DeliverySection />
        <About />
        <ProductCarousel />
        <Products />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
