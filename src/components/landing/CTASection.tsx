import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-6 max-w-sm mx-auto">
          {/* TOP TEXT */}
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-foreground">
            Probalo hoy.
          </h2>

          {/* BUTTON */}
          <Button size="lg" className="w-full group">
            Probar demo
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
