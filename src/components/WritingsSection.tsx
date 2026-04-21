import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import authorImg from "@/assets/author-writings.png";
import { getTranslatedChapters } from "@/data/chaptersData";

const WritingsSection = () => {
  const { t, lang } = useLanguage();
  const [openChapter, setOpenChapter] = useState<number | null>(null);
  const displayChapters = useMemo(() => getTranslatedChapters(lang), [lang]);

  return (
    <section id="writings" className="relative py-12 sm:py-16 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center pb-8 px-4">
        <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: "radial-gradient(circle, hsl(40, 85%, 55%) 0%, hsl(340, 82%, 52%) 40%, transparent 70%)", filter: "blur(40px)", transform: "scale(1.3)" }}
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1.2, 1.4, 1.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <img src={authorImg} alt="Saiful Islam - Author" loading="lazy" className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/30" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-6 text-center">
          {t.writings.author}
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-muted-foreground text-sm mt-2 text-center">
          {t.writings.authorRole}
        </motion.p>
      </div>

      <div className="relative z-10 container mx-auto max-w-3xl px-4">
        <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-xl sm:text-2xl font-bold text-foreground mb-8 text-center">
          {t.writings.chapters}
        </motion.h3>

        <div className="space-y-3">
          {displayChapters.map((ch, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
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
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="px-5 pb-5">
                  <div className="h-px w-full bg-border mb-4" />
                  <div className="text-muted-foreground text-sm leading-[1.9] whitespace-pre-line">{ch.content}</div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="flex justify-center mt-12">
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
    </section>
  );
};

export default WritingsSection;
