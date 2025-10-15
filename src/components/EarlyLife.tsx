import { GraduationCap, Briefcase, Award } from "lucide-react";

export const EarlyLife = () => {
  return (
    <section id="early-life" className="py-20 md:py-32 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Early Life & Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From humble beginnings to academic excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Birth & Family */}
          <div className="bg-gradient-card backdrop-blur-sm p-8 rounded-xl border border-border shadow-card hover:shadow-elevated hover:border-primary/50 transition-all duration-300 animate-scale-in">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Birth & Heritage</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-foreground">Born:</strong> January 7, 1945
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Place:</strong> Maseno CMS Hospital, Kisumu
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Father:</strong> Jaramogi Oginga Odinga (Kenya's first VP)
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Mother:</strong> Mary Ajuma Odinga
              </p>
              <p className="leading-relaxed mt-4">
                Born into a family at the heart of Kenya's independence struggle, young Raila was destined for greatness.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="bg-gradient-card backdrop-blur-sm p-8 rounded-xl border border-border shadow-card hover:shadow-elevated hover:border-primary/50 transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Academic Journey</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-foreground">Primary:</strong> Kisumu Union Primary School
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Secondary:</strong> Maranda High School
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Higher Ed:</strong> East Germany (1962-1970)
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Degree:</strong> Master of Science in Mechanical Engineering
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Institution:</strong> University of Leipzig
              </p>
              <p className="leading-relaxed mt-4">
                At just 17, he left Kenya to pursue education in East Germany, returning a highly qualified engineer.
              </p>
            </div>
          </div>

          {/* Early Career */}
          <div className="bg-gradient-card backdrop-blur-sm p-8 rounded-xl border border-border shadow-card hover:shadow-elevated hover:border-primary/50 transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Professional Life</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-foreground">Lecturer:</strong> Nairobi University
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Standards Expert:</strong> Kenya Bureau of Standards
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Entrepreneur:</strong> Founded East African Spectre
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Business:</strong> Liquid petroleum gas cylinders
              </p>
              <p className="leading-relaxed mt-4">
                Before entering politics, Raila established himself as a successful engineer, academic, and businessman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
