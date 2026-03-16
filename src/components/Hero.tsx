import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-person.png";
import heroBg from "@/assets/hero-bg-dark.jpg";
import { ArrowRight, BookOpen, Music } from "lucide-react";

const roles: Record<string, string[]> = {
  en: ["Psychology Researcher.", "Writer.", "AI Prompt Developer.", "Cinematographer.", "Music Composer."],
  bn: ["সাইকোলজি রিসার্চার।", "লেখক।", "AI প্রম্পট ডেভেলপার।", "সিনেমাটোগ্রাফার।", "সংগীত রচয়িতা।"],
  hi: ["मनोविज्ञान शोधकर्ता।", "लेखक।", "AI प्रॉम्प्ट डेवलपर।", "सिनेमैटोग्राफर।", "संगीत रचयिता।"],
  fr: ["Chercheur en psychologie.", "Écrivain.", "Développeur IA.", "Cinéaste.", "Compositeur."],
  ar: ["باحث في علم النفس.", "كاتب.", "مطور ذكاء اصطناعي.", "مصور سينمائي.", "ملحن."],
  de: ["Psychologieforscher.", "Autor.", "KI-Entwickler.", "Kameramann.", "Komponist."],
  zh: ["心理学研究员。", "作家。", "AI开发者。", "摄影师。", "作曲家。"],
  ru: ["Исследователь психологии.", "Писатель.", "Разработчик ИИ.", "Кинематографист.", "Композитор."],
};

interface Particle {
  id: number; x: number; y: number; size: number; duration: number; delay: number;
}

const generateParticles = (count: number): Particle[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100, size: Math.random() * 4 + 1, duration: Math.random() * 4 + 3, delay: Math.random() * 5,
  }));

const Hero = () => {
  const { t, lang } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles] = useState(() => generateParticles(40));

  const currentRoles = roles[lang] || roles.en;

  useEffect(() => {
    const currentRole = currentRoles[roleIndex];
    const speed = isDeleting ? 40 : 80;
    if (!isDeleting && text === currentRole) { setTimeout(() => setIsDeleting(true), 1800); return; }
    if (isDeleting && text === "") { setIsDeleting(false); setRoleIndex((prev) => (prev + 1) % currentRoles.length); return; }
    const timer = setTimeout(() => {
      setText(isDeleting ? currentRole.substring(0, text.length - 1) : currentRole.substring(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, currentRoles]);

  useEffect(() => { setText(""); setRoleIndex(0); setIsDeleting(false); }, [lang]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="absolute inset-0 diagonal-lines" />

      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div key={p.id} className="absolute rounded-full" style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: `hsl(40, 85%, ${50 + p.size * 5}%)` }}
            animate={{ y: [0, -60, -120], opacity: [0, 1, 0], scale: [0.5, 1.2, 0.3] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }} />
        ))}
      </div>

      <div className="container mx-auto relative z-10 pt-20 pb-20 px-4">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mb-8 flex flex-wrap gap-3">
          <Link to="/writings" className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-foreground/5 backdrop-blur-2xl border border-foreground/10 text-foreground text-sm font-semibold hover:bg-foreground/10 hover:border-primary/30 transition-all duration-300 group shadow-lg shadow-background/10">
            <motion.span animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <BookOpen size={16} />
            </motion.span>
            {t.hero.writingsBtn}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/songs" className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-foreground/5 backdrop-blur-2xl border border-foreground/10 text-foreground text-sm font-semibold hover:bg-foreground/10 hover:border-primary/30 transition-all duration-300 group shadow-lg shadow-background/10">
            <motion.span animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <Music size={16} />
            </motion.span>
            {t.hero.songsBtn || "আমার রচিত গান"}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="order-2 lg:order-1">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="inline-block text-xs uppercase tracking-[0.35em] text-muted-foreground font-semibold mb-6">
              {t.hero.hello}
            </motion.span>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="text-foreground mb-2">
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1]">
                {t.hero.im}
                <span className="text-foreground">{t.hero.name}</span>
              </span>
              <span className="block mt-4 clip-text gradient-text text-lg md:text-xl lg:text-xl xl:text-2xl font-bold min-h-[2em]">
                {text}
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }} className="text-muted-foreground text-sm md:text-base lg:text-lg mb-6 max-w-md leading-relaxed mt-6">
              {t.hero.bio}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.7 }} className="flex flex-wrap gap-4">
              <a href="#portfolio" className="glass-button text-sm md:text-base group">
                <span>{t.hero.myWritings}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} className="flex flex-col items-center relative order-1 lg:order-2">
            <div className="relative w-[22rem] sm:w-[26rem] md:w-[32rem] lg:w-[36rem] xl:w-[42rem]">
              {/* Glow behind hero pic */}
              <motion.div
                className="absolute inset-0 z-0 rounded-full"
                style={{
                  background: 'radial-gradient(ellipse 60% 55% at 50% 45%, hsl(var(--primary) / 0.25), hsl(var(--primary) / 0.08) 50%, transparent 75%)',
                  filter: 'blur(40px)',
                }}
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative z-10">
                <img src={heroImage} alt="Saiful Islam - Psychology & Real Life Researcher" className="w-full" loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  style={{
                    WebkitMaskImage: 'radial-gradient(ellipse 68% 65% at 48% 45%, black 55%, rgba(0,0,0,0.3) 70%, transparent 82%)',
                    maskImage: 'radial-gradient(ellipse 68% 65% at 48% 45%, black 55%, rgba(0,0,0,0.3) 70%, transparent 82%)',
                  }} />
              </div>
            </div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
              className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black uppercase text-foreground/80 tracking-[0.15em] mt-[-2rem] z-20">
              {t.hero.researcher}
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
