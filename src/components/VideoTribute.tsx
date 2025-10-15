import { Play } from "lucide-react";

const videos = [
  {
    title: "Historic 2018 Handshake",
    description: "The moment that united Kenya",
    embedId: "dQw4w9WgXcQ", // Placeholder - replace with actual video IDs
  },
  {
    title: "Prime Minister Swearing-In",
    description: "Taking oath as Kenya's PM in 2008",
    embedId: "dQw4w9WgXcQ", // Placeholder
  },
  {
    title: "Fighting for Democracy",
    description: "A compilation of his most powerful speeches",
    embedId: "dQw4w9WgXcQ", // Placeholder
  },
];

export const VideoTribute = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDuration: "25s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDuration: "20s", animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Video Memories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Relive the moments that shaped a nation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group bg-gradient-card backdrop-blur-sm rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-elevated transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-navy-medium to-navy-deep">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                    <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 font-playfair">
                  {video.title}
                </h3>
                <p className="text-muted-foreground font-inter">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note about videos */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground font-inter italic">
            Video placeholders - Replace with actual YouTube video IDs for full experience
          </p>
        </div>
      </div>
    </section>
  );
};
