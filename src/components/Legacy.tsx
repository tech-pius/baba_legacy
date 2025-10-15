export const Legacy = () => {
  return (
    <section id="legacy" className="py-20 md:py-32 bg-gradient-to-b from-navy-deep to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                A Legacy Beyond Politics
              </span>
            </h2>
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <p className="text-center text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Raila Odinga was more than a politician—he was a symbol of resilience, democracy, and unwavering dedication to the Kenyan people. His fiery rhetoric, populist charm, and relentless pursuit of justice made him one of Africa's most influential political figures.
            </p>

            {/* Quote */}
            <div className="my-12 p-8 md:p-12 bg-gradient-card backdrop-blur-sm rounded-2xl border-l-4 border-primary shadow-elevated animate-scale-in">
              <blockquote className="text-xl md:text-2xl italic text-primary font-medium text-center">
                "The fight for democracy is never easy, but it is always worth it. We must never give up on our dreams for a better Kenya."
              </blockquote>
              <p className="text-center text-muted-foreground mt-4">— Raila Amolo Odinga</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gradient-card backdrop-blur-sm p-8 rounded-xl border border-border shadow-card animate-slide-in-left">
                <h3 className="text-2xl font-bold text-foreground mb-4">Democratic Pioneer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Though he never became president, his impact on Kenya's democratic journey is immeasurable. He fought for constitutional reforms, championed the rights of the marginalized, and inspired millions to believe in the power of their voice.
                </p>
              </div>

              <div className="bg-gradient-card backdrop-blur-sm p-8 rounded-xl border border-border shadow-card animate-slide-in-right">
                <h3 className="text-2xl font-bold text-foreground mb-4">People's Champion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  His unwavering commitment to social justice and economic equity resonated with millions of Kenyans. He stood with the poor, fought against corruption, and never wavered in his belief that Kenya could be better.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 md:p-12 bg-card/30 backdrop-blur-sm rounded-2xl border border-primary/30 text-center animate-fade-in-up">
              <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
                His Vision Lives On
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Raila Odinga's struggle for a free, just, and prosperous Kenya continues to inspire new generations of leaders and activists. His legacy is not measured in titles held, but in the hearts changed, the systems reformed, and the hope instilled in millions.
              </p>
            </div>

            <div className="text-center mt-16 animate-fade-in-up">
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Rest in Power, Baba
                </span>
              </p>
              <p className="text-xl text-muted-foreground">
                Your legacy will forever guide our nation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
