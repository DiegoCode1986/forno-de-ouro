import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PaesArtesanais from "./pages/PaesArtesanais";
import CroissantsDoces from "./pages/CroissantsDoces";
import PizzasArtesanais from "./pages/PizzasArtesanais";
import KitsFesta from "./pages/KitsFesta";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/paes-artesanais" element={<PaesArtesanais />} />
          <Route path="/croissants-doces" element={<CroissantsDoces />} />
          <Route path="/pizzas-artesanais" element={<PizzasArtesanais />} />
          <Route path="/kits-festa" element={<KitsFesta />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
