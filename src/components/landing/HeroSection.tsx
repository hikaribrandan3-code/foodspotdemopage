import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroApp from "@/assets/hero-app.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-14 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Hero image with embedded headline - replaces logo + text */}
          <div className="relative w-full max-w-sm">
            <img
              src={heroApp}
              alt="Este ya es tu app. El sistema con el que funciona tu negocio."
              className="w-full rounded-xl"
            />
          </div>

          <div className="flex flex-col w-full max-w-xs">
            <Button size="lg" className="w-full group">
              Probar demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
