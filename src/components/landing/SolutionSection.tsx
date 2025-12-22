import appContext from "@/assets/app-context.jpeg";

const SolutionSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-sm">
            <p className="text-xs font-medium text-accent uppercase tracking-[0.2em]">
              The solution
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium leading-tight text-foreground">
              This is already
              <br />
              <span className="italic">your app.</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              One unified platform that represents your brand perfectly. Your menu, orders, and customers — working together seamlessly.
            </p>
          </div>
          
          <div className="w-full max-w-sm">
            <img 
              src={appContext} 
              alt="FoodSpot app in a restaurant environment"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-8 pt-4 w-full max-w-xs">
            <div className="space-y-1">
              <p className="text-3xl font-serif font-medium text-foreground">85%</p>
              <p className="text-xs text-muted-foreground">Less customer questions</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-serif font-medium text-foreground">3x</p>
              <p className="text-xs text-muted-foreground">Faster order processing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
