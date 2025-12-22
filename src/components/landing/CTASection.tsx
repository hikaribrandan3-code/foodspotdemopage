import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium leading-tight text-foreground">
            Ready to transform
            <br />
            <span className="italic">your restaurant?</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Join hundreds of restaurants already using FoodSpot.
          </p>
          <div className="flex flex-col gap-3 pt-2">
            <Button size="lg" className="w-full group">
              Start your free trial
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full">
              Schedule a demo
            </Button>
          </div>
          <p className="text-xs text-muted-foreground pt-2">
            No credit card required · 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
