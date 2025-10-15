import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Raila Odinga was not just a politician; he was a symbol of hope for millions of Kenyans. His unwavering commitment to democracy will inspire generations.",
    author: "Political Analyst",
    role: "Kenyan Media",
  },
  {
    quote: "His handshake with President Uhuru showed the world that Kenya's leaders could put the country first. That's the mark of true statesmanship.",
    author: "International Observer",
    role: "African Union",
  },
  {
    quote: "Baba fought for us when no one else would. He gave voice to the voiceless and hope to the hopeless. His legacy will never die.",
    author: "Youth Leader",
    role: "ODM Party",
  },
  {
    quote: "The 2010 Constitution stands as a testament to his vision for a democratic Kenya. His contribution to our nation's governance is immeasurable.",
    author: "Constitutional Lawyer",
    role: "Law Society of Kenya",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDuration: "15s" }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDuration: "20s", animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Voices of Remembrance
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tributes from those whose lives he touched
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-card backdrop-blur-sm p-8 rounded-xl border border-border shadow-card hover:shadow-elevated hover:border-primary/50 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="w-12 h-12 text-primary/30 mb-4" />
              <p className="text-lg text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
