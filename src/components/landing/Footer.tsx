import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-background border-t border-border/40">
      <div className="container mx-auto max-w-sm space-y-12">
        <div className="space-y-6">
          <h3 className="font-serif text-2xl font-medium text-foreground">Contacto</h3>
          <div className="space-y-6 text-sm text-muted-foreground">
            <div className="space-y-1">
              <p className="font-medium text-foreground">📞 Teléfono / WhatsApp</p>
              <p>+54 9 351 212-2600</p>
              <p className="text-xs opacity-70">Llamadas y WhatsApp</p>
            </div>

            <div className="space-y-1">
              <p className="font-medium text-foreground">📧 Email</p>
              <p>hikaristudioai@gmail.com</p>
            </div>

            <div className="space-y-1">
              <p className="font-medium text-foreground">🕒 Horarios de atención</p>
              <p>Lunes a Sábado</p>
              <p>10:00 a 18:00 (Argentina)</p>
              <p className="text-xs opacity-70">Domingos cerrado</p>
            </div>

            <div className="space-y-1">
              <p className="font-medium text-foreground">📍 Ubicación</p>
              <p>Córdoba Capital, Argentina</p>
            </div>

            <div className="space-y-1">
              <p className="font-medium text-foreground">📸 Instagram</p>
              <a href="https://instagram.com/foodspotmobile" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                @foodspotmobile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 text-center space-y-6">
          <p className="italic font-serif text-muted-foreground">
            Todo lo puedo en Cristo que me fortalece.<br />
            Filipenses 4:13
          </p>
          <p className="text-xs text-muted-foreground/60">
            © 2024 FoodSpot
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
