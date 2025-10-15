import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EarlyLife } from "@/components/EarlyLife";
import { Timeline } from "@/components/Timeline";
import { Achievements } from "@/components/Achievements";
import { Legacy } from "@/components/Legacy";
import { Support } from "@/components/Support";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <EarlyLife />
      <Timeline />
      <Achievements />
      <Legacy />
      <Support />
      <Footer />
    </div>
  );
};

export default Index;
