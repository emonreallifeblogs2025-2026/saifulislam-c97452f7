import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { staggerContainer, fadeUpItem } from "@/lib/animations";
import { FloatingOrbs, AnimatedTitle } from "@/components/AnimatedSection";

const videos = [
  { id: "pcsv8gicm7U", titleKey: "v1", views: "12K" },
  { id: "9OAOGPUDcq8", titleKey: "v2", views: "8.5K" },
  { id: "sRo3Rd8JsGo", titleKey: "v3", views: "15K" },
  { id: "FrJjm7L6MoE", titleKey: "v4", views: "6.2K" },
  { id: "ovnAq3KA1UI", titleKey: "v5", views: "9.8K" },
  { id: "K8WFoX0OBac", titleKey: "v6", views: "11K" },
  { id: "eF-uIlp548k", titleKey: "v7", views: "7.3K" },
  { id: "R__BMe95qF4", titleKey: "v8", views: "5.1K" },
  { id: "ecUpbCnX4QE", titleKey: "v9", views: "13K" },
];

// Background floating play button behind each card
const FloatingPlayBg = ({ index = 0 }: { index?: number }) => (
  <motion.div
    className="absolute -bottom-4 -right-4 z-0 pointer-events-none"
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{
      opacity: [0, 0.18, 0.08, 0.2, 0],
      scale: [0.7, 1.1, 0.9, 1.15, 0.7],
      rotateZ: [0, 8, -5, 6, 0],
    }}
    transition={{
      duration: 8 + index * 1.2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * 1.5,
    }}
  >
    <div style={{ width: '80px', height: '80px', perspective: '400px' }}>
      <motion.div
        className="w-full h-full rounded-2xl flex items-center justify-center"
        style={{
          background: 'linear-gradient(145deg, hsl(0 80% 50% / 0.25), hsl(0 90% 40% / 0.3))',
          boxShadow: '0 12px 40px hsl(0 80% 40% / 0.2)',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: [5, -8, 5],
          rotateY: [-6, 10, -6],
        }}
        transition={{
          duration: 10 + index * 0.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.6,
        }}
      >
        <svg viewBox="0 0 24 24" fill="hsl(0 70% 50% / 0.5)" className="w-[45%] h-[45%] ml-[6%]">
          <path d="M8 5v14l11-7z" />
        </svg>
      </motion.div>
    </div>
  </motion.div>
);

// Overlay play button on video thumbnail
const YouTubePlayButton = ({ index = 0 }: { index?: number }) => (
  <motion.div
    className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0.3, 0.85, 0.3] }}
    transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.8 }}
  >
    <div className="relative flex items-center justify-center" style={{ width: '70%', maxWidth: '72px', aspectRatio: '1', perspective: '600px' }}>
      <motion.div
        className="w-full h-full rounded-2xl flex items-center justify-center"
        style={{
          background: 'linear-gradient(145deg, hsl(0 80% 50% / 0.9), hsl(0 90% 40% / 0.95))',
          boxShadow: '0 8px 32px hsl(0 80% 40% / 0.5), 0 2px 8px hsl(0 0% 0% / 0.3), inset 0 1px 2px hsl(0 0% 100% / 0.2)',
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateX: [2, -2, 2], rotateY: [-3, 3, -3], scale: [1, 1.06, 1] }}
        transition={{ duration: 7 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-[40%] h-[40%] ml-[6%]">
          <path d="M8 5v14l11-7z" />
        </svg>
      </motion.div>
    </div>
  </motion.div>
);

const YouTubeVideos = () => {
  const { t } = useLanguage();

  return (
    <section id="videos" className="section-padding bg-secondary/20 relative overflow-hidden">
      <FloatingOrbs colors={["hsl(0 70% 45% / 0.04)", "hsl(var(--primary) / 0.03)"]} />

      <div className="container mx-auto relative z-10">
        <AnimatedTitle className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">{t.videos.myVideos}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{t.videos.title}</h2>
          <p className="text-muted-foreground text-base">{t.videos.subtitle}</p>
        </AnimatedTitle>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
              variants={fadeUpItem}
              className="glass-card overflow-hidden group relative"
              whileHover={{ y: -5, boxShadow: "0 20px 40px hsl(0 0% 0% / 0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FloatingPlayBg index={i} />
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative aspect-video">
                <iframe src={`https://www.youtube.com/embed/${v.id}`} title={(t.videos as any)[v.titleKey] || v.titleKey} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" loading="lazy" />
                <YouTubePlayButton index={i} />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">{(t.videos as any)[v.titleKey] || v.titleKey}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-xs">
                  <Eye size={12} />
                  <span>{v.views} {t.videos.views}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
