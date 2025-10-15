import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EarlyLife } from "@/components/EarlyLife";
import { Timeline } from "@/components/Timeline";
import { Achievements } from "@/components/Achievements";
import { Statistics } from "@/components/Statistics";
import { Gallery } from "@/components/Gallery";
import { QuotesCarousel } from "@/components/QuotesCarousel";
import { VideoTribute } from "@/components/VideoTribute";
import { Testimonials } from "@/components/Testimonials";
import { Legacy } from "@/components/Legacy";
import { Support } from "@/components/Support";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <EarlyLife />
      <Timeline />
      <Achievements />
      <Statistics />
      <Gallery />
      <QuotesCarousel />
      <VideoTribute />
      <Testimonials />
      <Legacy />
      <Support />
      <Footer />
    </div>
  );
};

export default Index;
