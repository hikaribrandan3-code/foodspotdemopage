import platformDefinition from "@/assets/platform-definition.jpg";

const SolutionSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 max-w-sm mx-auto">
          {/* TOP TEXT */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-medium leading-tight text-foreground">
              Branding. Pedidos. Gestión.
              <br />
              Todo en un solo lugar.
            </h2>
          </div>

          {/* IMAGE CENTER */}
          <div className="w-full">
            <img
              src={platformDefinition}
              alt="Tu Negocio. Tu Marca. Tu App."
              className="w-full rounded-xl"
            />
          </div>

          {/* BOTTOM TEXT */}
          <div className="space-y-3">
            <p className="text-base text-muted-foreground leading-relaxed">
              Tu marca, 100% bajo tu control.
              <br />
              Sin comisiones externas.
              <br />
              Sin depender de diseñadores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
