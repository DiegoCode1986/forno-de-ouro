const DeliverySection = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Peça pelo iFood
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Agora você pode pedir nossos produtos pelo iFood e receber no conforto da sua casa!
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.ifood.com.br/delivery/brasilia-df/forno-de-ouro-panificadora-taguatinga-norte-taguatinga/87a5577e-28ac-40f8-b6bb-6d02843a59d3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img 
                src="/ifood.png" 
                alt="Peça pelo iFood" 
                className="h-22 md:h-24 hover:opacity-90 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
