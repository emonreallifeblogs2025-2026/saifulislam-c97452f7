import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import YouTubeVideos from "@/components/YouTubeVideos";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Portfolio from "@/components/Portfolio";
import SkillCards from "@/components/SkillCards";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServiceCards />
      <YouTubeVideos />
      <Stats />
      <Skills />
      <Services />
      <Education />
      <Portfolio />
      <SkillCards />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
