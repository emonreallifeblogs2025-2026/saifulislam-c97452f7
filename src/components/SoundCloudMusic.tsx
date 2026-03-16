import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Music, ExternalLink } from "lucide-react";
import soundcloudCover from "@/assets/soundcloud-cover.png";
import { useState } from "react";
import { scaleUpItem } from "@/lib/animations";
import { FloatingOrbs, AnimatedTitle } from "@/components/AnimatedSection";

const SOUNDCLOUD_LIBRARY = "https://on.soundcloud.com/7tA9rG7ceUPUXfSiWp";

const noteShapes = [
  "M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z",
  "M9 3v10.55A4 4 0 1 0 11 17V7h4V3H9zM15 3v10.55A4 4 0 1 0 17 17V7h4V3h-6z",
  "M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z",
];

interface NoteParticle {
  id: number; x: number; y: number; size: number; duration: number; delay: number; shape: number; rotate: number;
}

const generateNoteParticles = (count: number): NoteParticle[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100, size: Math.random() * 16 + 10, duration: Math.random() * 5 + 4, delay: Math.random() * 6, shape: Math.floor(Math.random() * noteShapes.length), rotate: Math.random() * 60 - 30,
  }));

const SoundCloudMusic = () => {
  const { t } = useLanguage();
  const [particles] = useState(() => generateNoteParticles(30));

  return (
    <section className="section-padding pb-24 relative overflow-hidden">
      <FloatingOrbs colors={["hsl(var(--gold) / 0.06)", "hsl(var(--primary) / 0.04)"]} />

      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div key={p.id} className="absolute" style={{ left: `${p.x}%`, top: `${p.y}%` }}
            animate={{ y: [0, -40, -80], opacity: [0, 0.7, 0], rotate: [p.rotate, p.rotate + 15, p.rotate - 10], scale: [0.5, 1, 0.4] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}>
            <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill={`hsl(40, 85%, ${50 + Math.random() * 15}%)`} opacity={0.6}>
              <path d={noteShapes[p.shape]} />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <AnimatedTitle className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">{t.music.label}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">{t.music.title}</h2>
          <p className="text-muted-foreground mt-4 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-sm md:max-w-md mx-auto">{t.music.subtitle}</p>
        </AnimatedTitle>

        <motion.div variants={scaleUpItem} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col items-center gap-8 max-w-md mx-auto">
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="absolute -inset-[3px] rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity"
              style={{ background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--pink-light)), hsl(var(--pink-dark)), hsl(var(--primary)))`, backgroundSize: '300% 300%', animation: 'borderGlow 3s ease infinite' }} />
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/50">
              <img src={soundcloudCover} alt="SoundCloud Music Library" className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover" />
            </div>
          </motion.div>

          <motion.a
            href={SOUNDCLOUD_LIBRARY}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button text-sm md:text-base group inline-flex items-center gap-2 mb-8"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px hsl(var(--primary) / 0.3)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Music size={18} className="animate-pulse" />
            <span>{t.music.listenMore}</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SoundCloudMusic;
