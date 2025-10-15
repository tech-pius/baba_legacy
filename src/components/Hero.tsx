import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/raila-portrait.jpg";

export const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById("early-life");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-primary/10 via-transparent to-transparent animate-float" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground mb-2">RAILA AMOLO</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
                ODINGA
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground/90">
              The People's Champion
            </h2>
            
            <div className="text-xl md:text-2xl font-semibold text-primary">
              1945 - 2025
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 italic">
              "A lifetime dedicated to democracy, justice, and the dreams of millions"
            </p>

            <div className="pt-4">
              <div className="inline-block px-6 py-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border shadow-card">
                <p className="text-sm text-muted-foreground">
                  In Memory of Kenya's Champion of Democracy
                </p>
              </div>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="relative animate-scale-in">
            <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border-4 border-primary/30 shadow-elevated">
              <img
                src={heroImage}
                alt="Raila Amolo Odinga"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            
            {/* Decorative glow effect */}
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl -z-10 animate-glow-pulse" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer group"
        aria-label="Scroll to next section"
      >
        <div className="w-8 h-12 border-2 border-primary rounded-full flex items-start justify-center p-2 group-hover:border-primary-glow transition-colors">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-float" />
        </div>
        <ChevronDown className="w-6 h-6 text-primary mt-2 mx-auto" />
      </button>
    </section>
  );
};
