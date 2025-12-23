import appContext from "@/assets/app-context.jpeg";

const SolutionSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-sm">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium leading-tight text-foreground">
              Este ya es
              <br />
              <span className="italic">tu app.</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Una sola plataforma que representa tu marca. Tu menú, tus pedidos y tus clientes — trabajando juntos, en tiempo real.
            </p>
          </div>

          <div className="w-full max-w-sm">
            <img
              src={appContext}
              alt="FoodSpot app in a restaurant environment"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
