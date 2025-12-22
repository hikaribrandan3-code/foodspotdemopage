import { Utensils, ShoppingBag, Users, Palette, BarChart3, Gift } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Digital Menu",
    description: "Beautiful menus that customers love to browse."
  },
  {
    icon: ShoppingBag,
    title: "Order Management",
    description: "Track every order from placement to pickup."
  },
  {
    icon: Users,
    title: "Customer Insights",
    description: "Understand what your customers love."
  },
  {
    icon: Palette,
    title: "Your Branding",
    description: "Fully customizable to your identity."
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Real-time data on sales and trends."
  },
  {
    icon: Gift,
    title: "Loyalty Rewards",
    description: "Keep customers coming back."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-3">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-foreground">
            Everything you need.
          </h2>
        </div>
        
        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-5 bg-background border border-border"
            >
              <feature.icon className="w-6 h-6 text-accent mb-3" />
              <h3 className="text-sm font-medium text-foreground mb-1">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
