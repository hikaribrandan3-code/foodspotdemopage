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
              Your brand. Your app.
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-medium leading-[1.15] text-foreground">
              The system your
              <br />
              <span className="italic">restaurant</span>
              <br />
              deserves.
            </h1>
            <p className="text-base text-muted-foreground max-w-xs mx-auto leading-relaxed">
              No more PDFs. No more chaos. Branding, orders, and management — all in one.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <Button size="lg" className="w-full group">
              Start free trial
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full">
              See it in action
            </Button>
          </div>
          
          <div className="relative w-full max-w-sm pt-4">
            <img 
              src={solutionApp} 
              alt="FoodSpot app interface showing menu, orders, and management features"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
          
          <p className="text-xs text-muted-foreground">
            Trusted by 500+ restaurants
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
