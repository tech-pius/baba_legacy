import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Main tribute text */}
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground">
              &copy; {currentYear} | In Memory of Raila Amolo Odinga | 1945 - 2025
            </p>
            <p className="text-sm text-muted-foreground/80">
              A tribute to Kenya's champion of democracy
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-border mx-auto" />

          {/* Developer credit */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span className="text-sm">Developed with</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-float" />
            <span className="text-sm">by</span>
            <span className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">
              Denis Pius
            </span>
          </div>

          {/* Additional footer note */}
          <div className="pt-4">
            <p className="text-xs text-muted-foreground/60">
              This memorial website celebrates the life, legacy, and contributions of Raila Amolo Odinga 
              to Kenya's democratic journey. May his vision for a better Kenya continue to inspire generations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
