import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto text-center">
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
