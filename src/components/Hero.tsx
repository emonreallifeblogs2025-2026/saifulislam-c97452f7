import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-main.png";
import heroBg from "@/assets/hero-bg.jpeg";
import { ArrowRight } from "lucide-react";

const roles = {
  en: ["Psychology Researcher.", "Writer.", "AI Prompt Developer.", "Cinematographer.", "Music Composer."],
  bn: ["সাইকোলজি রিসার্চার।", "লেখক।", "AI প্রম্পট ডেভেলপার।", "সিনেমাটোগ্রাফার।", "সংগীত রচয়িতা।"],
};

const Hero = () => {
  const { t, lang } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[lang][roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && text === currentRole) {
      setTimeout(() => setIsDeleting(true), 1800);
      return;
    }
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles[lang].length);
      return;
    }

    const timer = setTimeout(() => {
      setText(isDeleting ? currentRole.substring(0, text.length - 1) : currentRole.substring(0, text.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, lang]);

  useEffect(() => {
    setText("");
    setRoleIndex(0);
    setIsDeleting(false);
  }, [lang]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-background/40" />

      <div className="container mx-auto relative z-10 pt-24 pb-16 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4"
            >
              Hello
            </motion.p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-foreground">
              {lang === "en" ? "i'm " : "আমি "}
              <span className="text-foreground">{t.hero.name}</span>
              {" "}{lang === "en" ? "a" : ""}
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-primary typing-cursor">{text}</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-lg leading-relaxed">
              {t.hero.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="glass-button text-base">
                View Portfolio <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Image with background text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Background role text */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none z-0 overflow-hidden">
                <p className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black uppercase text-foreground/[0.04] leading-none tracking-wider whitespace-nowrap">
                  {lang === "en" ? "RESEARCHER" : "রিসার্চার"}
                </p>
                <p className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black uppercase text-foreground/[0.04] leading-none tracking-wider whitespace-nowrap text-right">
                  {lang === "en" ? "RESEARCHER" : "রিসার্চার"}
                </p>
              </div>
              <img
                src={heroImage}
                alt="Saiful Islam"
                className="relative z-10 w-72 md:w-96 lg:w-[28rem] drop-shadow-2xl"
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
