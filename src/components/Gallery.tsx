import { useState } from "react";
import { X } from "lucide-react";

const galleryItems = [
  {
    title: "Prime Minister Swearing-In Ceremony",
    year: "2008",
    description: "Historic moment as Kenya's second Prime Minister",
  },
  {
    title: "The Handshake with President Uhuru",
    year: "2018",
    description: "A moment that changed Kenya's political landscape",
  },
  {
    title: "2010 Constitution Promulgation",
    year: "2010",
    description: "Celebrating Kenya's new constitution",
  },
  {
    title: "Campaign Trail",
    year: "2017",
    description: "Connecting with supporters across Kenya",
  },
  {
    title: "African Union Commission Chairperson Campaign",
    year: "2017",
    description: "Taking his vision to continental level",
  },
  {
    title: "Meeting with World Leaders",
    year: "2010s",
    description: "Representing Kenya on the global stage",
  },
  {
    title: "Political Rallies",
    year: "1990s-2020s",
    description: "The voice of the people",
  },
  {
    title: "With His Family",
    year: "Various",
    description: "A devoted family man",
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-gradient-to-b from-background via-navy-medium to-background relative overflow-hidden">
      {/* Parallax background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(230,126,34,0.08),transparent_50%)] animate-float" style={{ animationDuration: "20s" }} />
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(231,76,60,0.06),transparent_50%)] animate-float" style={{ animationDuration: "25s", animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Photo Gallery
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Moments that defined a legacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl border-2 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-medium to-navy-deep flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-6xl mb-2">📸</div>
                  <div className="text-sm text-primary font-semibold">{item.year}</div>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-white/80 text-xs">{item.description}</p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="max-w-4xl w-full">
            <div className="aspect-video bg-gradient-to-br from-navy-medium to-navy-deep rounded-xl flex items-center justify-center mb-6">
              <div className="text-center p-8">
                <div className="text-8xl mb-4">📸</div>
                <div className="text-2xl text-primary font-bold mb-2">
                  {galleryItems[selectedImage].year}
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {galleryItems[selectedImage].title}
              </h3>
              <p className="text-white/70">
                {galleryItems[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
