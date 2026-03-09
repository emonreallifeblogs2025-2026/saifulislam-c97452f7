import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import YouTubeVideos from "@/components/YouTubeVideos";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Portfolio from "@/components/Portfolio";
import SkillCards from "@/components/SkillCards";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <YouTubeVideos />
      <Stats />
      <Skills />
      <Education />
      <Portfolio />
      <SkillCards />
      <Articles />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
