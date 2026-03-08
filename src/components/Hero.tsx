import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-main-new.png";
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Diagonal lines overlay - Reeni style */}
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
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] text-foreground mb-2"
            >
              {lang === "en" ? "i'm " : "আমি "}
              <span className="text-foreground">{t.hero.name}</span>
              {lang === "en" ? " a" : ""}
              <br />
              <span className="clip-text gradient-text text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
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
                <span>{lang === "en" ? "View Portfolio" : "পোর্টফোলিও দেখুন"}</span>
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
            <div className="relative w-72 md:w-96 lg:w-[26rem] xl:w-[30rem] overflow-visible">
              {/* Floating text - BEHIND the image */}
              <h2 className="absolute top-[20%] left-1/2 -translate-x-1/2 text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-black uppercase text-foreground/[0.06] leading-none tracking-[0.2em] whitespace-nowrap pointer-events-none select-none z-0 animate-up-down">
                {lang === "en" ? "RESEARCHER" : "রিসার্চার"}
              </h2>
              {/* Hero image with gradient mask to blend white BG */}
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="Saiful Islam"
                  className="w-full mix-blend-screen"
                  loading="eager"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                    WebkitMaskComposite: 'destination-in',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                    maskComposite: 'intersect',
                  }}
                />
              </div>
              {/* Floating text - OVER the image */}
              <h2 className="absolute bottom-[15%] left-1/2 -translate-x-1/2 text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-black uppercase text-foreground/[0.10] leading-none tracking-[0.2em] whitespace-nowrap pointer-events-none select-none z-20 animate-up-down-2">
                {lang === "en" ? "RESEARCHER" : "রিসার্চার"}
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
