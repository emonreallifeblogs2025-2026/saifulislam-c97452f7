import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import heroImage from "@/assets/hero-person.png";
import heroBg from "@/assets/hero-bg-dark.jpg";
import { ArrowRight } from "lucide-react";

const roles = {
  en: ["Psychology Researcher.", "Writer.", "AI Prompt Developer.", "Cinematographer.", "Music Composer."],
  bn: ["সাইকোলজি রিসার্চার।", "লেখক।", "AI প্রম্পট ডেভেলপার।", "সিনেমাটোগ্রাফার।", "সংগীত রচয়িতা।"],
};

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const generateParticles = (count: number): Particle[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 5,
  }));

const Hero = () => {
  const { t, lang } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles] = useState(() => generateParticles(40));

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

  const researcherText = lang === "en" ? "REAL LIFE RESEARCHER" : "রিয়েল লাইফ রিসার্চার";

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="absolute inset-0 diagonal-lines" />

      {/* Floating particles */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary/40"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -60, -120],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.3],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

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
              <span className="block mt-4 clip-text gradient-text text-lg md:text-xl lg:text-xl xl:text-2xl font-bold">
                {text}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-muted-foreground text-sm md:text-base lg:text-lg mb-6 max-w-md leading-relaxed mt-6"
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

          {/* Right - Image with researcher text below */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center relative order-1 lg:order-2"
          >
            <div className="relative w-[22rem] sm:w-[26rem] md:w-[32rem] lg:w-[36rem] xl:w-[42rem]">
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
            </div>
            {/* Researcher text below image */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black uppercase text-foreground/80 tracking-[0.15em] mt-[-2rem] z-20"
            >
              {researcherText}
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
