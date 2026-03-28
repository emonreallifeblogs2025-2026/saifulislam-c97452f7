import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState, useEffect, memo, useCallback, MouseEvent, useMemo } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-person.png";
import heroBg from "@/assets/hero-bg-dark.jpg";
import { ArrowRight, BookOpen, Music } from "lucide-react";

const roles: Record<string, string[]> = {
  en: ["Psychology Researcher.", "Writer.", "AI Prompt Engineer.", "AI Film Creator.", "Website Builder.", "React — Top Technology.", "Tailwind CSS Framework.", "Cinematographer.", "Music Composer."],
  bn: ["সাইকোলজি রিসার্চার।", "লেখক।", "AI প্রম্পট ইন্জিনিয়ার।", "AI ফিল্ম ক্রিয়েটর।", "ওয়েবসাইট বিল্ডার।", "React — শীর্ষ টেকনোলজি।", "Tailwind CSS ফ্রেমওয়ার্ক।", "সিনেমাটোগ্রাফার।", "সংগীত রচয়িতা।"],
  hi: ["मनोविज्ञान शोधकर्ता।", "लेखक।", "AI प्रॉम्प्ट इंजीनियर।", "AI फिल्म क्रिएटर।", "वेबसाइट बिल्डर।", "React — शीर्ष तकनीक।", "Tailwind CSS फ्रेमवर्क।", "सिनेमैटोग्राफर।", "संगीत रचयिता।"],
  fr: ["Chercheur en psychologie.", "Écrivain.", "Ingénieur IA Prompt.", "Créateur de films IA.", "Constructeur de sites web.", "React — Technologie de pointe.", "Tailwind CSS Framework.", "Cinéaste.", "Compositeur."],
  ar: ["باحث في علم النفس.", "كاتب.", "مهندس ذكاء اصطناعي.", "صانع أفلام بالذكاء الاصطناعي.", "مطور مواقع.", "React — أفضل تقنية.", "Tailwind CSS إطار عمل.", "مصور سينمائي.", "ملحن."],
  de: ["Psychologieforscher.", "Autor.", "KI-Prompt-Ingenieur.", "KI-Filmemacher.", "Website-Entwickler.", "React — Spitzentechnologie.", "Tailwind CSS Framework.", "Kameramann.", "Komponist."],
  zh: ["心理学研究员。", "作家。", "AI提示工程师。", "AI电影创作者。", "网站建设者。", "React — 顶级技术。", "Tailwind CSS 框架。", "摄影师。", "作曲家。"],
  ru: ["Исследователь психологии.", "Писатель.", "AI-промпт-инженер.", "Создатель AI-фильмов.", "Веб-разработчик.", "React — лучшая технология.", "Tailwind CSS фреймворк.", "Кинематографист.", "Композитор."],
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
    const speed = isDeleting ? 60 : 120;
    if (!isDeleting && text === currentRole) { setTimeout(() => setIsDeleting(true), 1800); return; }
    if (isDeleting && text === "") { setIsDeleting(false); setRoleIndex((prev) => (prev + 1) % currentRoles.length); return; }
    const timer = setTimeout(() => {
      setText(isDeleting ? currentRole.substring(0, text.length - 1) : currentRole.substring(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, currentRoles]);

  useEffect(() => { setText(""); setRoleIndex(0); setIsDeleting(false); }, [lang]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ minHeight: '100dvh' }}>
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="sync" />
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
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mb-8 flex flex-wrap justify-center gap-3">
          <Link to="/writings" className="hero-3d-btn group" onClick={handleRipple}>
            <span className="hero-3d-btn-glow" />
            <span className="hero-3d-btn-inner text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3">
              <motion.span animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                <BookOpen size={16} />
              </motion.span>
              <span>{t.hero.writingsBtn}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link to="/songs" className="hero-3d-btn group" onClick={handleRipple}>
            <span className="hero-3d-btn-glow" />
            <span className="hero-3d-btn-inner text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3">
              <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                <Music size={16} />
              </motion.span>
              <span>{t.hero.songsBtn || "আমার রচিত গান"}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="order-2 lg:order-1">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-normal text-muted-foreground font-bold mb-6">
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

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col items-center relative order-1 lg:order-2">
            <div className="relative w-[22rem] sm:w-[26rem] md:w-[32rem] lg:w-[36rem] xl:w-[42rem]">
              {/* Fire effect behind hero */}
              <div className="absolute z-0" style={{ inset: '-30%', pointerEvents: 'none' }}>
                {/* Amber warm ambient - base layer */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(ellipse 90% 90% at 50% 60%, hsl(35 90% 55% / 0.4), hsl(45 85% 50% / 0.25) 30%, hsl(20 80% 40% / 0.15) 55%, transparent 85%)',
                    filter: 'blur(18px)',
                  }}
                  animate={{ opacity: [0.35, 0.6, 0.4, 0.65, 0.38, 0.58, 0.35] }}
                  transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Deep orange core - shifts to crimson */}
                <motion.div
                  className="absolute bottom-[8%] left-1/2 -translate-x-1/2"
                  style={{
                    width: '75%',
                    height: '55%',
                    background: 'radial-gradient(ellipse 65% 75% at 50% 85%, hsl(15 95% 55% / 0.55), hsl(30 90% 50% / 0.35) 35%, hsl(45 80% 45% / 0.18) 60%, transparent 80%)',
                    filter: 'blur(18px)',
                  }}
                  animate={{ opacity: [0.4, 0.7, 0.48, 0.72, 0.42, 0.65, 0.4] }}
                  transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Golden yellow layer */}
                <motion.div
                  className="absolute bottom-[5%] left-1/2 -translate-x-1/2"
                  style={{
                    width: '100%',
                    height: '90%',
                    background: 'radial-gradient(ellipse 85% 90% at 50% 75%, hsl(50 90% 60% / 0.35), hsl(40 85% 50% / 0.22) 25%, hsl(25 80% 45% / 0.12) 50%, transparent 80%)',
                    filter: 'blur(22px)',
                  }}
                  animate={{ opacity: [0.3, 0.55, 0.35, 0.58, 0.32, 0.52, 0.3] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Left side - warm red-orange */}
                <motion.div
                  className="absolute bottom-[15%] left-[5%]"
                  style={{
                    width: '48%',
                    height: '72%',
                    background: 'radial-gradient(ellipse 80% 80% at 30% 70%, hsl(10 90% 48% / 0.35), hsl(30 85% 45% / 0.2) 40%, transparent 70%)',
                    filter: 'blur(22px)',
                  }}
                  animate={{ opacity: [0.28, 0.5, 0.32, 0.52, 0.3, 0.48, 0.28] }}
                  transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                {/* Right side - amber-gold */}
                <motion.div
                  className="absolute bottom-[15%] right-[5%]"
                  style={{
                    width: '48%',
                    height: '72%',
                    background: 'radial-gradient(ellipse 80% 80% at 70% 70%, hsl(40 95% 55% / 0.35), hsl(50 85% 50% / 0.2) 40%, transparent 70%)',
                    filter: 'blur(22px)',
                  }}
                  animate={{ opacity: [0.25, 0.48, 0.3, 0.5, 0.27, 0.45, 0.25] }}
                  transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                />
                {/* Top crimson haze */}
                <motion.div
                  className="absolute top-[5%] left-1/2 -translate-x-1/2"
                  style={{
                    width: '85%',
                    height: '55%',
                    background: 'radial-gradient(ellipse 70% 60% at 50% 40%, hsl(5 75% 42% / 0.2), hsl(20 70% 38% / 0.12) 40%, transparent 70%)',
                    filter: 'blur(28px)',
                  }}
                  animate={{ opacity: [0.15, 0.35, 0.18, 0.38, 0.16, 0.32, 0.15] }}
                  transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Color-shifting center glow (gold → orange → crimson) */}
                <motion.div
                  className="absolute bottom-[10%] left-1/2 -translate-x-1/2"
                  style={{
                    width: '65%',
                    height: '65%',
                    filter: 'blur(20px)',
                  }}
                  animate={{
                    opacity: [0.3, 0.55, 0.35, 0.58, 0.3],
                    background: [
                      'radial-gradient(ellipse 70% 80% at 50% 70%, hsl(45 90% 58% / 0.45), transparent 75%)',
                      'radial-gradient(ellipse 70% 80% at 50% 70%, hsl(25 90% 50% / 0.45), transparent 75%)',
                      'radial-gradient(ellipse 70% 80% at 50% 70%, hsl(8 85% 45% / 0.4), transparent 75%)',
                      'radial-gradient(ellipse 70% 80% at 50% 70%, hsl(35 90% 55% / 0.45), transparent 75%)',
                      'radial-gradient(ellipse 70% 80% at 50% 70%, hsl(45 90% 58% / 0.45), transparent 75%)',
                    ],
                  }}
                  transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Flame layers */}
                {fireParticles.map((particle, i) => (
                  <motion.div
                    key={`flame-${particle.id}`}
                    className="absolute rounded-full"
                    style={{
                      left: `${particle.left}%`,
                      bottom: `${particle.bottom}%`,
                      width: `${particle.width * 1.5}px`,
                      height: `${particle.height * 1.5}px`,
                      background: `radial-gradient(ellipse at 50% 90%, hsl(var(--gold-light) / ${particle.opacity * 1.2}), hsl(var(--gold) / 0.25) 35%, hsl(25 100% 50% / 0.12) 55%, transparent 78%)`,
                      filter: `blur(${particle.blur + 3}px)`,
                    }}
                    animate={{ opacity: [0.15, 0.35, 0.2, 0.38, 0.15] }}
                    transition={{
                      duration: particle.duration + i * 0.5 + 4,
                      repeat: Infinity,
                      delay: particle.delay,
                      ease: "easeInOut",
                    }}
                  />
                ))}
                {/* Ember sparks */}
                {sparkParticles.map((particle) => (
                  <motion.div
                    key={`spark-${particle.id}`}
                    className="absolute rounded-full"
                    style={{
                      left: `${particle.left}%`,
                      bottom: `${particle.bottom}%`,
                      width: `${particle.size * 1.3}px`,
                      height: `${particle.size * 1.3}px`,
                      background: particle.color,
                      boxShadow: `0 0 ${particle.glow * 0.6}px ${particle.glowColor}`,
                    }}
                    animate={{ opacity: [0.1, 0.38, 0.18, 0.4, 0.1], scale: [0.97, 1.05, 0.98, 1.06, 0.97] }}
                    transition={{
                      duration: particle.duration + 5,
                      repeat: Infinity,
                      delay: particle.delay,
                      ease: "easeInOut",
                    }}
                  />
                ))}
                {/* Outer glow */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2"
                  style={{
                    width: '130%',
                    height: '85%',
                    background: 'radial-gradient(ellipse 75% 80% at 50% 80%, hsl(var(--gold) / 0.25), hsl(25 90% 45% / 0.14) 35%, hsl(var(--primary) / 0.07) 55%, transparent 80%)',
                    filter: 'blur(25px)',
                  }}
                  animate={{ opacity: [0.2, 0.4, 0.25, 0.42, 0.2] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Smoke */}
                {smokeParticles.map((particle) => (
                  <motion.div
                    key={`smoke-${particle.id}`}
                    className="absolute rounded-full"
                    style={{
                      left: `${particle.left}%`,
                      bottom: `${particle.bottom}%`,
                      width: `${particle.width * 1.3}px`,
                      height: `${particle.height * 1.3}px`,
                      background: `radial-gradient(circle, hsl(25 15% 25% / ${particle.opacity * 0.8}), hsl(25 10% 18% / 0.1) 45%, transparent 70%)`,
                      filter: `blur(${particle.blur + 5}px)`,
                    }}
                    animate={{ opacity: [0, 0.1, 0.06, 0], scale: [0.9, 1.05, 1.15] }}
                    transition={{
                      duration: particle.duration + 4,
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
                  decoding="sync"
                  style={{
                    WebkitMaskImage: 'radial-gradient(ellipse 68% 65% at 48% 45%, black 55%, rgba(0,0,0,0.3) 70%, transparent 82%)',
                    maskImage: 'radial-gradient(ellipse 68% 65% at 48% 45%, black 55%, rgba(0,0,0,0.3) 70%, transparent 82%)',
                  }} />
              </div>
            </div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
              className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black uppercase text-foreground/80 tracking-[0.15em] mt-[-2rem] z-20">
              {t.hero.researcher}
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
