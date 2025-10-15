import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const quotes = [
  {
    text: "The fight for democracy is never easy, but it is always worth it. We must never give up on our dreams for a better Kenya.",
    context: "During the 2017 Elections",
  },
  {
    text: "I have been detained without trial, I have been tortured, but I have never given up on the struggle for justice and freedom.",
    context: "Reflecting on his imprisonment",
  },
  {
    text: "The handshake was not about me or Uhuru. It was about Kenya. It was about putting our country first.",
    context: "The Handshake, 2018",
  },
  {
    text: "A Constitution is not just a document. It is the soul of a nation, the guarantee of our rights and freedoms.",
    context: "On the 2010 Constitution",
  },
  {
    text: "I may not be your president, but I will always be your servant. I will continue to fight for your rights.",
    context: "Address to supporters",
  },
  {
    text: "Power without the people is nothing. Leadership is about service, not privilege.",
    context: "Political Rally",
  },
];

export const QuotesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-navy-medium relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              In His Words
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Timeless wisdom from a lifetime of service
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Main Quote Card */}
          <div className="bg-gradient-card backdrop-blur-sm p-12 md:p-16 rounded-2xl border border-border shadow-elevated">
            <Quote className="w-16 h-16 text-primary/30 mb-8 mx-auto" />
            
            <div className="min-h-[200px] flex flex-col justify-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-playfair text-foreground text-center leading-relaxed mb-8 italic animate-fade-in">
                "{quotes[currentIndex].text}"
              </p>
              
              <p className="text-lg text-primary font-semibold text-center font-inter">
                — {quotes[currentIndex].context}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-border hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
