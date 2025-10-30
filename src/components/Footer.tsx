import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Padaria <span className="text-amber-400">Artesanal</span>
            </h3>
            <p className="text-primary-foreground/80">
              Tradição e qualidade em cada fornada. Feito com amor desde 2009.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horários</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Segunda a Sábado: 6h às 20h</li>
              <li>Domingo: 6h às 14h</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@padariaartesanal.com.br"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Padaria Artesanal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
