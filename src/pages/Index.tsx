import Hero from "@/components/Hero";
import BentoProjects from "@/components/BentoProjects";
import Timeline from "@/components/Timeline";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <BentoProjects />
      <Timeline />
      <TechStack />
      <Footer />
    </main>
  );
};

export default Index;
