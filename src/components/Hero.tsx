import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState, useEffect, memo, useCallback, MouseEvent } from "react";
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

      <div className="container mx-auto relative z-10 pt-20 sm:pt-12 lg:pt-20 pb-10 sm:pb-16 lg:pb-20 px-4 lg:px-4">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mb-4 sm:mb-6 md:mb-4 lg:mb-8 flex flex-wrap justify-center gap-3">
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

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="order-2 lg:order-1">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="inline-block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase tracking-normal text-muted-foreground font-bold mb-1">
              {t.hero.hello}
            </motion.span>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="text-foreground mb-1">
              <span className="block text-4xl lg:text-5xl xl:text-7xl font-extrabold leading-[1.1]">
                {t.hero.im}
                <span className="text-foreground">{t.hero.name}</span>
              </span>
              <span className="block mt-4 clip-text gradient-text text-lg lg:text-xl xl:text-2xl font-bold min-h-[2em]">
                {text}
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }} className="text-muted-foreground text-sm lg:text-lg mb-6 max-w-md leading-relaxed mt-6">
              {t.hero.bio}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.7 }} className="flex flex-wrap gap-4">
              <a href="#portfolio" className="glass-button text-sm lg:text-base group">
                <span>{t.hero.myWritings}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col items-center relative order-1 lg:order-2">
            <div className="relative w-[18rem] sm:w-[22rem] md:w-[22rem] lg:w-[28rem] xl:w-[42rem]">
              {/* Static 8K-quality fire glow behind hero */}
              <div className="absolute z-0" style={{ inset: '-30%', pointerEvents: 'none' }}>
                {/* Amber warm ambient base */}
                <div className="absolute inset-0" style={{
                  background: 'radial-gradient(ellipse 90% 90% at 50% 60%, hsl(35 90% 55% / 0.5), hsl(45 85% 50% / 0.3) 30%, hsl(20 80% 40% / 0.18) 55%, transparent 85%)',
                  filter: 'blur(18px)',
                  opacity: 0.55,
                }} />
                {/* Deep orange core */}
                <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2" style={{
                  width: '75%', height: '55%',
                  background: 'radial-gradient(ellipse 65% 75% at 50% 85%, hsl(15 95% 55% / 0.6), hsl(30 90% 50% / 0.38) 35%, hsl(45 80% 45% / 0.2) 60%, transparent 80%)',
                  filter: 'blur(18px)',
                  opacity: 0.6,
                }} />
                {/* Golden yellow layer */}
                <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2" style={{
                  width: '100%', height: '90%',
                  background: 'radial-gradient(ellipse 85% 90% at 50% 75%, hsl(50 90% 60% / 0.4), hsl(40 85% 50% / 0.25) 25%, hsl(25 80% 45% / 0.14) 50%, transparent 80%)',
                  filter: 'blur(22px)',
                  opacity: 0.45,
                }} />
                {/* Left warm red-orange */}
                <div className="absolute bottom-[15%] left-[5%]" style={{
                  width: '48%', height: '72%',
                  background: 'radial-gradient(ellipse 80% 80% at 30% 70%, hsl(10 90% 48% / 0.4), hsl(30 85% 45% / 0.22) 40%, transparent 70%)',
                  filter: 'blur(22px)',
                  opacity: 0.4,
                }} />
                {/* Right amber-gold */}
                <div className="absolute bottom-[15%] right-[5%]" style={{
                  width: '48%', height: '72%',
                  background: 'radial-gradient(ellipse 80% 80% at 70% 70%, hsl(40 95% 55% / 0.4), hsl(50 85% 50% / 0.22) 40%, transparent 70%)',
                  filter: 'blur(22px)',
                  opacity: 0.38,
                }} />
                {/* Top crimson haze */}
                <div className="absolute top-[5%] left-1/2 -translate-x-1/2" style={{
                  width: '85%', height: '55%',
                  background: 'radial-gradient(ellipse 70% 60% at 50% 40%, hsl(5 75% 42% / 0.25), hsl(20 70% 38% / 0.14) 40%, transparent 70%)',
                  filter: 'blur(28px)',
                  opacity: 0.28,
                }} />
                {/* Center gold-orange glow */}
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2" style={{
                  width: '65%', height: '65%',
                  background: 'radial-gradient(ellipse 70% 80% at 50% 70%, hsl(35 90% 55% / 0.5), hsl(25 90% 50% / 0.3) 40%, transparent 75%)',
                  filter: 'blur(20px)',
                  opacity: 0.45,
                }} />
                {/* Outer glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2" style={{
                  width: '130%', height: '85%',
                  background: 'radial-gradient(ellipse 75% 80% at 50% 80%, hsl(var(--gold) / 0.3), hsl(25 90% 45% / 0.16) 35%, hsl(var(--primary) / 0.08) 55%, transparent 80%)',
                  filter: 'blur(25px)',
                  opacity: 0.35,
                }} />
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
              className="text-center text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-black uppercase text-foreground/80 tracking-[0.15em] mt-[-1rem] lg:mt-[-2rem] z-20">
              {t.hero.researcher}
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
