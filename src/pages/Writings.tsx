import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import authorImg from "@/assets/author-writings.png";
import bookCover from "@/assets/book-cover.jpeg";
import LanguageToggle from "@/components/LanguageToggle";
import { getTranslatedChapters } from "@/data/chaptersData";

interface FloatingBook {
  id: number; x: number; y: number; size: number; duration: number; delay: number; rotate: number; direction: number;
}

const generateFloatingBooks = (count: number): FloatingBook[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 90 + 5,
    y: Math.random() * 90 + 5,
    size: Math.random() * 80 + 100,
    duration: Math.random() * 10 + 14,
    delay: Math.random() * 10,
    rotate: Math.random() * 20 - 10,
    direction: Math.random() > 0.5 ? 1 : -1,
  }));

interface GoldParticle {
  id: number; x: number; y: number; size: number; duration: number; delay: number;
}

const generateGoldParticles = (count: number): GoldParticle[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100, size: Math.random() * 5 + 2, duration: Math.random() * 4 + 3, delay: Math.random() * 5,
  }));


const Writings = () => {
  const { t, lang } = useLanguage();
  const [openChapter, setOpenChapter] = useState<number | null>(null);
  const displayChapters = useMemo(() => getTranslatedChapters(lang), [lang]);
  const [particles] = useState(() => generateGoldParticles(80));

  const [floatingBooks] = useState(() => generateFloatingBooks(12));

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Gold particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div key={p.id} className="absolute rounded-full"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: `hsl(40, 85%, ${48 + p.size * 4}%)` }}
            animate={{ y: [0, -50, -100], opacity: [0, 0.8, 0], scale: [0.4, 1.2, 0.3] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }} />
        ))}

        {/* Floating book covers */}
        {floatingBooks.map((b) => (
          <motion.div
            key={`book-${b.id}`}
            className="absolute pointer-events-none"
            style={{ left: `${b.x}%`, top: `${b.y}%` }}
            animate={{
              x: [0, b.direction * 60, b.direction * -30, 0],
              y: [0, -80, -40, 0],
              opacity: [0, 0.55, 0.45, 0],
              rotate: [b.rotate, b.rotate + 8, b.rotate - 5, b.rotate],
              scale: [0.6, 1, 0.8, 0.6],
            }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={bookCover}
              alt="Book Cover"
              className="rounded-lg shadow-2xl shadow-primary/20 border border-border/30"
              style={{ width: b.size, height: "auto", opacity: 0.85 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Back button & Language toggle */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-xl border border-border text-foreground hover:text-primary hover:border-primary transition-all text-sm">
          <ArrowLeft size={16} /> {t.writings.goBack}
        </Link>
      </div>
      <div className="fixed top-6 right-6 z-50">
        <LanguageToggle />
      </div>

      {/* Author photo with glow */}
      <div className="relative z-10 flex flex-col items-center pt-24 pb-8 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow behind image */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(40, 85%, 55%) 0%, hsl(340, 82%, 52%) 40%, transparent 70%)",
              filter: "blur(40px)",
              transform: "scale(1.3)",
            }}
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1.2, 1.4, 1.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <img
            src={authorImg}
            alt="Saiful Islam - Author"
            className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/30"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-6 text-center"
        >
          {t.writings.author}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-sm mt-2 text-center"
        >
          {t.writings.authorRole}
        </motion.p>
      </div>

      {/* Chapters */}
      <div className="relative z-10 container mx-auto max-w-3xl px-4 pb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl sm:text-2xl font-bold text-foreground mb-8 text-center"
        >
          {t.writings.chapters}
        </motion.h2>

        <div className="space-y-3">
          {displayChapters.map((ch, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => ch.content ? setOpenChapter(openChapter === i ? null : i) : undefined}
                className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors ${ch.content ? "hover:bg-secondary/30 cursor-pointer" : "opacity-50 cursor-not-allowed"}`}
              >
                <span className="text-sm sm:text-base font-semibold text-foreground">{ch.title}</span>
                {ch.content ? (
                  openChapter === i ? <ChevronUp size={18} className="text-primary flex-shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground flex-shrink-0" />
                ) : (
                  <span className="text-xs text-muted-foreground flex-shrink-0">{t.writings.comingSoon}</span>
                )}
              </button>
              {openChapter === i && ch.content && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5"
                >
                  <div className="h-px w-full bg-border mb-4" />
                  <div className="text-muted-foreground text-sm leading-[1.9] whitespace-pre-line">
                    {ch.content}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Wait button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            className="glass-button text-sm"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            disabled
          >
            {t.writings.waitMore}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Writings;
