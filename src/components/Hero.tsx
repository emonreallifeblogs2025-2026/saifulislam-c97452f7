import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-main.png";
import { Play } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsla(38, 70%, 50%, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsla(38, 70%, 50%, 0.1) 0%, transparent 50%)" }} />

      <div className="container mx-auto relative z-10 pt-24 pb-16 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-line mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gold-gradient-text">{t.hero.name}</span>
            </h1>
            <p className="text-sm md:text-base text-primary/80 mb-6 leading-relaxed tracking-wide">
              {t.hero.titles}
            </p>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg leading-relaxed">
              {t.hero.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="glass-button text-base">
                {t.hero.cta}
              </a>
              <a
                href="https://youtu.be/FrJjm7L6MoE?si=btF-Bwu0VgpGHd8H"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button text-base flex items-center gap-2"
              >
                <Play size={16} /> {t.hero.watchVideo}
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-2xl" />
              <img
                src={heroImage}
                alt="Saiful Islam"
                className="relative w-80 md:w-96 drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
