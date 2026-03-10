import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-person.png";
import heroBg from "@/assets/hero-bg-dark.jpg";
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
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="absolute inset-0 diagonal-lines" />

      <div className="container mx-auto relative z-10 pt-28 pb-20 px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-xs uppercase tracking-[0.35em] text-muted-foreground font-semibold mb-6"
            >
              {lang === "en" ? "Hello" : "হ্যালো"}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-foreground mb-2"
            >
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1]">
                {lang === "en" ? "i'm " : "আমি "}
                <span className="text-foreground">{t.hero.name}</span>
              </span>
              <span className="block mt-4 clip-text gradient-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                {text}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-muted-foreground text-sm md:text-base lg:text-lg mb-10 max-w-md leading-relaxed mt-6"
            >
              {t.hero.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#portfolio" className="glass-button text-sm md:text-base group">
                <span>{lang === "en" ? "My Writings" : "আমার কিছু লেখা"}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Image with floating background text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center relative order-1 lg:order-2"
          >
            <div className="relative w-[22rem] md:w-[30rem] lg:w-[36rem] xl:w-[42rem]">
              {/* Floating text - BEHIND the image - 50% opacity */}
              <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] font-black uppercase text-foreground/50 leading-none tracking-[0.2em] whitespace-nowrap pointer-events-none select-none z-0 animate-up-down">
                {lang === "en" ? "LIFE RESEARCHER" : "লাইফ রিসার্চার"}
              </h2>
              {/* Hero image */}
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="Saiful Islam"
                  className="w-full"
                  loading="eager"
                  style={{
                    WebkitMaskImage: 'radial-gradient(ellipse 68% 65% at 48% 45%, black 55%, rgba(0,0,0,0.3) 70%, transparent 82%)',
                    maskImage: 'radial-gradient(ellipse 68% 65% at 48% 45%, black 55%, rgba(0,0,0,0.3) 70%, transparent 82%)',
                  }}
                />
              </div>
              {/* Floating text - OVER the image - full opacity */}
              <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] font-black uppercase text-foreground leading-none tracking-[0.2em] whitespace-nowrap pointer-events-none select-none z-20 animate-up-down-2">
                {lang === "en" ? "LIFE RESEARCHER" : "লাইফ রিসার্চার"}
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
