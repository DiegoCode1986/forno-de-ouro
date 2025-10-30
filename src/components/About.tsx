import bakeryInterior from "@/assets/bakery-interior.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Nossa História
            </h2>
            <div className="w-20 h-1 bg-secondary"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Há mais de 15 anos, nossa padaria vem trazendo para você o melhor
              em pães artesanais, pizzas e doces. Com receitas tradicionais e
              ingredientes selecionados, cada produto é feito com dedicação e
              carinho.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa missão é proporcionar momentos especiais através de produtos
              de qualidade excepcional. Seja para o café da manhã, um lanche da
              tarde ou uma festa especial, estamos aqui para tornar cada ocasião
              ainda mais saborosa.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">15+</div>
                <div className="text-sm text-muted-foreground">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Produtos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">1000+</div>
                <div className="text-sm text-muted-foreground">Clientes</div>
              </div>
            </div>
          </div>
          <div className="animate-slide-in-right">
            <img
              src={bakeryInterior}
              alt="Interior da padaria"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
