import platformDefinition from "@/assets/platform-definition.jpg";

const SolutionSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Image 3 - Platform Definition with embedded headline */}
          <div className="w-full max-w-sm">
            <img
              src={platformDefinition}
              alt="Tu Negocio. Tu Marca. Tu App. - Branding, Pedidos, Gestión"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
