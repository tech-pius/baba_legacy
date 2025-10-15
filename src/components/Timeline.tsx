import { useEffect, useRef, useState } from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
}

const TimelineItem = ({ year, title, description, index }: TimelineItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={itemRef}
      className={`relative flex items-center mb-16 md:mb-24 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } ${isVisible ? "opacity-100" : "opacity-0"} transition-all duration-800`}
      style={{
        transform: isVisible
          ? "translateX(0)"
          : `translateX(${isEven ? "-50px" : "50px"})`,
      }}
    >
      {/* Timeline marker */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-primary border-4 border-navy-deep rounded-full shadow-glow z-10 animate-scale-in" />

      {/* Content card */}
      <div className={`w-full md:w-[45%] ml-12 md:ml-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
        <div className="bg-gradient-card backdrop-blur-sm p-6 md:p-8 rounded-xl border border-border shadow-card hover:shadow-elevated hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-glow-pulse">
            {year}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const timelineData = [
  {
    year: "1945",
    title: "The Beginning",
    description: "Born on January 7, 1945, at Maseno Church Missionary Society Hospital in Kisumu County. Son of Jaramogi Oginga Odinga, Kenya's first Vice President, and Mary Ajuma Odinga. Born into a family deeply rooted in Kenya's independence struggle.",
  },
  {
    year: "1962-1970",
    title: "Academic Excellence",
    description: "Attended Kisumu Union Primary School and Maranda High School. At age 17, traveled to East Germany where he studied at Herder Institution and Technical School Magdeburg. Graduated with a Master of Science in Mechanical Engineering from University of Leipzig in 1970.",
  },
  {
    year: "1970s",
    title: "Professional Life",
    description: "Returned to Kenya and worked as a lecturer at Nairobi University and later at the Kenya Bureau of Standards. Founded East African Spectre, a company dealing in liquid petroleum gas cylinders, establishing himself as a successful businessman.",
  },
  {
    year: "1982",
    title: "Imprisonment",
    description: "Detained without trial for six years after being linked to a failed coup attempt by air force officers against President Daniel arap Moi's government. This period solidified his reputation as a fighter against authoritarian rule.",
  },
  {
    year: "1992",
    title: "Political Breakthrough",
    description: "Elected as Member of Parliament for Langata Constituency, a position he held until 2013. Rose to prominence as a political activist fighting against one-party rule, advocating for multi-party democracy and constitutional reforms.",
  },
  {
    year: "1997",
    title: "Presidential Aspirations Begin",
    description: "Made his first attempt at the presidency, marking the beginning of a five-decade quest for Kenya's highest office. Built a massive political following, especially in Western Kenya, Nyanza, and among urban supporters.",
  },
  {
    year: "2007",
    title: "The Controversial Election",
    description: "Ran as Orange Democratic Movement (ODM) candidate, winning 46.4% of the vote in a highly disputed election against Mwai Kibaki. The contested results triggered post-election violence that claimed over 1,200 lives.",
  },
  {
    year: "2008-2013",
    title: "Prime Minister Era",
    description: "Became Kenya's second Prime Minister on April 17, 2008, in a power-sharing agreement. Under his tenure, Kenya experienced 5.5% annual GDP growth and successfully enacted the landmark 2010 Constitution.",
  },
  {
    year: "2013-2022",
    title: "The Opposition Leader",
    description: "Contested presidency three more times in 2013 (CORD), 2017 (NASA), and 2022 (Azimio la Umoja). Despite never winning, his campaigns shaped Kenya's political landscape, championing reforms and economic justice.",
  },
  {
    year: "2018",
    title: "Historic Reconciliation",
    description: "His famous 'handshake' with President Uhuru Kenyatta on March 9, 2018, brought an end to months of political tension. This act demonstrated his commitment to Kenya's stability over personal ambition.",
  },
  {
    year: "2025",
    title: "The End of an Era",
    description: "Passed away on October 15, 2025, at age 80, leaving behind an unparalleled legacy. For over four decades, he shaped Kenya's destiny, leading the charge for freedom, justice, and good governance.",
  },
];

export const Timeline = () => {
  return (
    <section id="political-journey" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-transparent to-navy-deep/50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Political Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A timeline of courage, resilience, and unwavering dedication to democracy
          </p>
        </div>

        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-48 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-transparent md:-translate-x-1/2" />

        {/* Timeline items */}
        <div className="relative">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
