import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Music, ExternalLink } from "lucide-react";
import soundcloudCover from "@/assets/soundcloud-cover.png";
import { useState } from "react";

const SOUNDCLOUD_LIBRARY = "https://on.soundcloud.com/7tA9rG7ceUPUXfSiWp";

// Music note SVG paths
const noteShapes = [
  "M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z", // quarter note
  "M9 3v10.55A4 4 0 1 0 11 17V7h4V3H9zM15 3v10.55A4 4 0 1 0 17 17V7h4V3h-6z", // beam notes
  "M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z", // quarter note
];

interface NoteParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  shape: number;
  rotate: number;
}

const generateNoteParticles = (count: number): NoteParticle[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 16 + 10,
    duration: Math.random() * 5 + 4,
    delay: Math.random() * 6,
    shape: Math.floor(Math.random() * noteShapes.length),
    rotate: Math.random() * 60 - 30,
  }));

const SoundCloudMusic = () => {
  const { lang } = useLanguage();
  const [particles] = useState(() => generateNoteParticles(30));

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Staff note particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -40, -80],
              opacity: [0, 0.7, 0],
              rotate: [p.rotate, p.rotate + 15, p.rotate - 10],
              scale: [0.5, 1, 0.4],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill={`hsl(40, 85%, ${50 + Math.random() * 15}%)`}
              opacity={0.6}
            >
              <path d={noteShapes[p.shape]} />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
            {lang === "bn" ? "সংগীত" : "Music"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {lang === "bn" ? "আমার সংগীত রচনা" : "My Music Compositions"}
          </h2>
          <p className="text-muted-foreground mt-4 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            {lang === "bn" ? "মিউজিক কম্পোজিশন: সৈয়দ সাইফুল ইসলাম" : "Music Composition: Syed Saiful Islam"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 max-w-md mx-auto"
        >
          {/* Square cover with animated border */}
          <div className="relative group">
            <div className="absolute -inset-[3px] rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity" 
              style={{ background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--pink-light)), hsl(var(--pink-dark)), hsl(var(--primary)))`, backgroundSize: '300% 300%', animation: 'borderGlow 3s ease infinite' }} 
            />
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/50">
              <img
                src={soundcloudCover}
                alt="SoundCloud Music Library"
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover"
              />
            </div>
          </div>

          {/* SoundCloud button */}
          <a
            href={SOUNDCLOUD_LIBRARY}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button text-sm md:text-base group inline-flex items-center gap-2"
          >
            <Music size={18} className="animate-pulse" />
            <span>{lang === "bn" ? "আরো গান শুনুন" : "Listen More Songs"}</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SoundCloudMusic;
