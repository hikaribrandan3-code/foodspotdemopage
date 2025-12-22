import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground text-primary-foreground">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center">
              <MapPin className="w-3.5 h-3.5 text-accent-foreground" />
            </div>
            <span className="text-lg font-semibold">FoodSpot</span>
          </div>
          
          <nav className="flex items-center gap-6">
            <a href="#" className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <p className="text-xs text-primary-foreground/50">
            © 2024 FoodSpot
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
