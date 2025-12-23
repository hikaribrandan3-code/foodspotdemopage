import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center">
            <MapPin className="w-3.5 h-3.5 text-accent-foreground" />
          </div>
          <span className="text-lg font-semibold text-foreground">FoodSpot</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Sistema internacional</span>
          <span className="text-lg">🇦🇷 🇺🇸</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
