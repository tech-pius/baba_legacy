import { Heart, Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Main tribute text */}
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground font-inter">
              &copy; {currentYear} | In Memory of Raila Amolo Odinga | 1945 - 2025
            </p>
            <p className="text-sm text-muted-foreground/80 font-inter">
              A tribute to Kenya's champion of democracy
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-card/50 hover:bg-primary/10 border border-border hover:border-primary/50 rounded-full flex items-center justify-center transition-all"
            >
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="https://x.com/PiusdenisTech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-card/50 hover:bg-primary/10 border border-border hover:border-primary/50 rounded-full flex items-center justify-center transition-all"
            >
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/pius-denis-b42b53367/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-card/50 hover:bg-primary/10 border border-border hover:border-primary/50 rounded-full flex items-center justify-center transition-all"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="piusdenistech@gmail.com"
              className="w-10 h-10 bg-card/50 hover:bg-primary/10 border border-border hover:border-primary/50 rounded-full flex items-center justify-center transition-all"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-border mx-auto" />

          {/* Developer credit */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span className="text-sm font-inter">Developed with</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-float" />
            <span className="text-sm font-inter">by</span>
            <span className="text-sm font-semibold font-playfair bg-gradient-primary bg-clip-text text-transparent">
              Denis Pius
            </span>
          </div>

          {/* Additional footer note */}
          <div className="pt-4">
            <p className="text-xs text-muted-foreground/60 font-inter">
              This memorial website celebrates the life, legacy, and contributions of Raila Amolo Odinga 
              to Kenya's democratic journey. May his vision for a better Kenya continue to inspire generations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
