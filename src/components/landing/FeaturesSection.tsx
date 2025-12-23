import customizationControl from "@/assets/customization-control.jpg";
import cameraFeature from "@/assets/camera-feature.png";

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-16">
          {/* Image 4 - Customization / Control */}
          <div className="w-full max-w-sm">
            <img
              src={customizationControl}
              alt="Color customization, UI control, brand ownership"
              className="w-full rounded-xl"
            />
          </div>

          {/* Image 6 - Camera Feature (replaces previous camera image) */}
          <div className="w-full max-w-sm">
            <img
              src={cameraFeature}
              alt="La primera app de negocios gastronómicos diseñada con cámara integrada"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
