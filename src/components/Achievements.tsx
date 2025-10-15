import { Trophy, Users, BookOpen, Heart, Scale, Lightbulb } from "lucide-react";

const achievements = [
  {
    icon: Users,
    title: "Prime Minister of Kenya",
    description: "Served as Kenya's second Prime Minister from 2008-2013, leading the Grand Coalition Government during a critical period of national healing.",
    years: "2008-2013",
  },
  {
    icon: BookOpen,
    title: "2010 Constitution",
    description: "Played a pivotal role in the enactment of Kenya's progressive 2010 Constitution, transforming the country's governance structure and protecting citizen rights.",
    years: "2010",
  },
  {
    icon: Scale,
    title: "Champion of Democracy",
    description: "Fought tirelessly for multi-party democracy, constitutional reforms, and free and fair elections throughout his political career spanning five decades.",
    years: "1970s-2020s",
  },
  {
    icon: Heart,
    title: "The Handshake",
    description: "Historic reconciliation with President Uhuru Kenyatta in 2018, prioritizing national unity over political rivalry and ending months of political tension.",
    years: "2018",
  },
  {
    icon: Trophy,
    title: "Economic Growth",
    description: "As Prime Minister, oversaw Kenya's impressive 5.5% annual GDP growth, implementing policies that strengthened the economy during the coalition government.",
    years: "2008-2013",
  },
  {
    icon: Lightbulb,
    title: "Political Innovation",
    description: "Founded and led multiple political movements (ODM, CORD, NASA, Azimio) that reshaped Kenya's political landscape and inspired millions.",
    years: "1990s-2020s",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Major Achievements
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            A legacy of transformation, reform, and unwavering dedication to the people
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-gradient-card backdrop-blur-sm p-8 rounded-xl border border-border shadow-card hover:shadow-elevated hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-primary font-semibold mb-1">
                      {achievement.years}
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-playfair">
                      {achievement.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed font-inter">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-card/50 rounded-xl border border-border">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5</div>
            <div className="text-sm text-muted-foreground">Presidential Campaigns</div>
          </div>
          <div className="text-center p-6 bg-card/50 rounded-xl border border-border">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Years in Politics</div>
          </div>
          <div className="text-center p-6 bg-card/50 rounded-xl border border-border">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">21</div>
            <div className="text-sm text-muted-foreground">Years as MP</div>
          </div>
          <div className="text-center p-6 bg-card/50 rounded-xl border border-border">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Legacy Impact</div>
          </div>
        </div>
      </div>
    </section>
  );
};
