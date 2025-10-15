import { useEffect, useRef, useState } from "react";
import { Trophy, Users, Calendar, Heart } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 50,
    suffix: "+",
    label: "Years in Politics",
    color: "text-primary",
  },
  {
    icon: Trophy,
    value: 5,
    suffix: "",
    label: "Presidential Campaigns",
    color: "text-accent",
  },
  {
    icon: Users,
    value: 21,
    suffix: "",
    label: "Years as MP",
    color: "text-primary",
  },
  {
    icon: Heart,
    value: 47,
    suffix: "M",
    label: "Kenyans Inspired",
    color: "text-accent",
  },
];

const useCountUp = (end: number, duration: number = 2000, shouldStart: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
};

export const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-navy-deep relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,126,34,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              A Lifetime of Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Numbers that tell a story of dedication and service
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const count = useCountUp(stat.value, 2500, isVisible);
            
            return (
              <div
                key={index}
                className="bg-gradient-card backdrop-blur-sm p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  
                  <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2 font-playfair`}>
                    {count}{stat.suffix}
                  </div>
                  
                  <p className="text-sm text-muted-foreground font-inter">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
