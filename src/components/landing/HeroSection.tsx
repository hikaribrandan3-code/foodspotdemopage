import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import solutionApp from "@/assets/solution-app.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-14 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-medium text-accent uppercase tracking-[0.2em]">
              Tu marca. Tu app.
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-medium leading-[1.15] text-foreground">
              El sistema que tu
              <br />
              <span className="italic">restaurante</span>
              <br />
              merece.
            </h1>
            <p className="text-base text-muted-foreground max-w-xs mx-auto leading-relaxed">
              No más PDFs. No más caos. Menú, pedidos y gestión — todo en un solo lugar.
            </p>
          </div>

          <div className="flex flex-col w-full max-w-xs">
            <Button size="lg" className="w-full group">
              Ver demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative w-full max-w-sm pt-4">
            <img
              src={solutionApp}
              alt="FoodSpot app interface"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
