import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState, useEffect, memo, useCallback, MouseEvent, useMemo } from "react";
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

interface FireParticle {
  id: number;
  left: number;
  bottom: number;
  width: number;
  height: number;
  opacity: number;
  blur: number;
  duration: number;
  delay: number;
}

interface SparkParticle {
  id: number;
  left: number;
  bottom: number;
  size: number;
  glow: number;
  duration: number;
  delay: number;
  color: string;
  glowColor: string;
}

interface SmokeParticle {
  id: number;
  left: number;
  bottom: number;
  width: number;
  height: number;
  opacity: number;
  blur: number;
  duration: number;
  delay: number;
}

const generateFireParticles = (count: number): FireParticle[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    left: 15 + Math.random() * 70,
    bottom: 8 + Math.random() * 25,
    width: 25 + Math.random() * 35,
    height: 50 + Math.random() * 80,
    opacity: 0.3 + Math.random() * 0.15,
    blur: 10 + Math.random() * 5,
    duration: 8 + Math.random() * 5,
    delay: Math.random() * 4,
  }));

const generateSparkParticles = (count: number): SparkParticle[] => {
  const colors = [
    { color: 'hsl(45 100% 80%)', glowColor: 'hsl(45 100% 70%)' },
    { color: 'hsl(30 100% 60%)', glowColor: 'hsl(25 100% 55%)' },
    { color: 'hsl(15 100% 50%)', glowColor: 'hsl(20 100% 50%)' },
  ];

  return Array.from({ length: count }, (_, i) => {
    const tone = colors[i % colors.length];
    return {
      id: i,
      left: 20 + Math.random() * 60,
      bottom: 15 + Math.random() * 30,
      size: 2 + Math.random() * 4,
      glow: 4 + Math.random() * 6,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 5,
      color: tone.color,
      glowColor: tone.glowColor,
    };
  });
};

const generateSmokeParticles = (count: number): SmokeParticle[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    left: 10 + Math.random() * 80,
    bottom: 15 + Math.random() * 30,
    width: 80 + Math.random() * 100,
    height: 80 + Math.random() * 100,
    opacity: 0.12 + Math.random() * 0.1,
    blur: 30 + Math.random() * 20,
    duration: 10 + Math.random() * 6,
    delay: Math.random() * 6,
  }));

const Hero = () => {
  const { t, lang } = useLanguage();

  const handleRipple = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const circle = document.createElement("span");
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${e.clientX - rect.left - size / 2}px`;
    circle.style.top = `${e.clientY - rect.top - size / 2}px`;
    circle.className = "hero-ripple";
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  }, []);
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles] = useState(() => generateParticles(40));
  const fireParticles = useMemo(() => generateFireParticles(6), []);
  const sparkParticles = useMemo(() => generateSparkParticles(10), []);
  const smokeParticles = useMemo(() => generateSmokeParticles(8), []);

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
        {particles.slice(0, 20).map((p) => (
          <motion.div key={p.id} className="absolute rounded-full" style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: `hsl(40, 85%, ${50 + p.size * 5}%)` }}
            animate={{ y: [0, -60, -120], opacity: [0, 1, 0], scale: [0.5, 1.2, 0.3] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }} />
        ))}
      </div>

      <div className="container mx-auto relative z-10 pt-20 pb-20 px-4">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mb-8 flex flex-wrap gap-2.5">
          <Link to="/writings" className="hero-3d-btn group" onClick={handleRipple}>
            <span className="hero-3d-btn-glow" />
            <span className="hero-3d-btn-inner">
              <motion.span animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                <BookOpen size={13} />
              </motion.span>
              <span className="text-[11px] sm:text-xs">{t.hero.writingsBtn}</span>
              <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link to="/songs" className="hero-3d-btn group" onClick={handleRipple}>
            <span className="hero-3d-btn-glow" />
            <span className="hero-3d-btn-inner">
              <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                <Music size={13} />
              </motion.span>
              <span className="text-[11px] sm:text-xs">{t.hero.songsBtn || "আমার রচিত গান"}</span>
              <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
            </span>
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
              {/* Fire effect behind hero */}
              <div className="absolute z-0" style={{ inset: '-35%', pointerEvents: 'none' }}>
                {/* White-hot core */}
                <motion.div
                  className="absolute bottom-[12%] left-1/2 -translate-x-1/2"
                  style={{
                    width: '60%',
                    height: '50%',
                    background: 'radial-gradient(ellipse 50% 60% at 50% 85%, hsl(var(--gold-light) / 0.95), hsl(var(--gold) / 0.65) 30%, transparent 60%)',
                    filter: 'blur(15px)',
                  }}
                  animate={{ opacity: [0.5, 0.8, 0.58, 0.82, 0.5] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Main fire core */}
                <motion.div
                  className="absolute bottom-[10%] left-1/2 -translate-x-1/2"
                  style={{
                    width: '90%',
                    height: '95%',
                    background: 'radial-gradient(ellipse 75% 85% at 50% 80%, hsl(var(--gold-light) / 0.88), hsl(var(--gold) / 0.72) 25%, hsl(var(--primary) / 0.42) 52%, transparent 75%)',
                    filter: 'blur(18px)',
                  }}
                  animate={{ opacity: [0.48, 0.74, 0.55, 0.78, 0.48] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Stable flame layers */}
                {fireParticles.map((particle, i) => (
                  <motion.div
                    key={`flame-${particle.id}`}
                    className="absolute rounded-full"
                    style={{
                      left: `${particle.left}%`,
                      bottom: `${particle.bottom}%`,
                      width: `${particle.width}px`,
                      height: `${particle.height}px`,
                      background: `radial-gradient(ellipse at 50% 90%, hsl(var(--gold-light) / ${particle.opacity}), hsl(var(--gold) / 0.45) 38%, hsl(var(--primary) / 0.16) 62%, transparent 78%)`,
                      filter: `blur(${particle.blur}px)`,
                    }}
                    animate={{ opacity: [0.16, 0.38, 0.22, 0.4, 0.16] }}
                    transition={{
                      duration: particle.duration + i * 0.15,
                      repeat: Infinity,
                      delay: particle.delay,
                      ease: "easeInOut",
                    }}
                  />
                ))}
                {/* Stable ember glow */}
                {sparkParticles.map((particle) => (
                  <motion.div
                    key={`spark-${particle.id}`}
                    className="absolute rounded-full"
                    style={{
                      left: `${particle.left}%`,
                      bottom: `${particle.bottom}%`,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      background: particle.color,
                      boxShadow: `0 0 ${particle.glow}px ${particle.glowColor}`,
                    }}
                    animate={{ opacity: [0.1, 0.55, 0.18, 0.6, 0.1], scale: [0.95, 1.08, 0.98, 1.12, 0.95] }}
                    transition={{
                      duration: particle.duration,
                      repeat: Infinity,
                      delay: particle.delay,
                      ease: "easeInOut",
                    }}
                  />
                ))}
                {/* Outer glow */}
                <motion.div
                  className="absolute bottom-[5%] left-1/2 -translate-x-1/2"
                  style={{
                    width: '130%',
                    height: '85%',
                    background: 'radial-gradient(ellipse 65% 75% at 50% 85%, hsl(var(--gold) / 0.42), hsl(var(--primary) / 0.18) 40%, transparent 70%)',
                    filter: 'blur(25px)',
                  }}
                  animate={{ opacity: [0.24, 0.46, 0.28, 0.5, 0.24] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Smoke / Dhoa effect - dense & slow */}
                {smokeParticles.map((particle) => (
                  <motion.div
                    key={`smoke-${particle.id}`}
                    className="absolute rounded-full"
                    style={{
                      left: `${particle.left}%`,
                      bottom: `${particle.bottom}%`,
                      width: `${particle.width}px`,
                      height: `${particle.height}px`,
                      background: `radial-gradient(circle, hsl(220 8% 25% / ${particle.opacity}), hsl(220 8% 18% / 0.12) 45%, transparent 70%)`,
                      filter: `blur(${particle.blur}px)`,
                    }}
                    animate={{ opacity: [0, 0.26, 0.18, 0], scale: [0.82, 1.08, 1.35] }}
                    transition={{
                      duration: particle.duration,
                      repeat: Infinity,
                      delay: particle.delay,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
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

export default memo(Hero);
