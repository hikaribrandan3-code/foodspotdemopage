import customizationControl from "@/assets/customization-control.jpg";
import cameraFeature from "@/assets/camera-feature.png";

const FeaturesSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-12">
          {/* Image 4 - Customization / Control */}
          <div className="w-full max-w-sm">
            <img
              src={customizationControl}
              alt="Color customization, UI control, brand ownership"
              className="w-full rounded-xl"
            />
          </div>

          {/* Camera / Visual Creation Section */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="space-y-3 max-w-sm">
              <h2 className="text-2xl sm:text-3xl font-serif font-medium leading-tight text-foreground">
                Creá categorías, menús y contenido visual en segundos
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Fotos, edición y publicación directa en redes — por vos y por tus clientes.
              </p>
            </div>
            <div className="w-full max-w-sm">
              <img
                src={cameraFeature}
                alt="Camera-native visual creation: photos, editing, publishing"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
