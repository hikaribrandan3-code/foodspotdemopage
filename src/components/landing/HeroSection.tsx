import heroApp from "@/assets/hero-app.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 max-w-sm mx-auto">
          {/* TOP TEXT */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-serif font-medium leading-tight text-foreground">
              Tu cocina no para.
              <br />
              Tu tecnología tampoco debería.
            </h1>
          </div>

          {/* IMAGE CENTER */}
          <div className="w-full">
            <img
              src={heroApp}
              alt="FoodSpot en acción - tu app en la cocina"
              className="w-full rounded-xl"
            />
          </div>

          {/* BOTTOM TEXT */}
          <div className="space-y-3">
            <p className="text-xl font-medium text-foreground">
              Este ya es tu app.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              El sistema operativo que convierte tu esfuerzo diario en una marca real.
              <br />
              Sin intermediarios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
