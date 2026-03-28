import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeLeftItem, fadeRightItem } from "@/lib/animations";
import { FloatingOrbs } from "@/components/AnimatedSection";

const ProgressBar = ({ label, percent, delay = 0 }: { label: string; percent: number; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.15, duration: 0.5 }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{label}</span>
        <motion.span
          className="text-xs text-primary font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2 + delay * 0.15 }}
        >
          {percent}%
        </motion.span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: delay * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full progress-bar-fill relative"
        >
          <motion.div
            className="absolute right-0 top-0 w-2 h-full rounded-full bg-white/50"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: 2, delay: 1 + delay * 0.15 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <FloatingOrbs colors={["hsl(var(--primary) / 0.04)", "hsl(var(--gold) / 0.04)"]} />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div variants={fadeLeftItem} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              {t.skills.design} <span className="custom-line" />
            </h3>
            <ProgressBar label={t.skills.psychologyResearch} percent={100} delay={0} />
            <ProgressBar label={t.skills.writing} percent={95} delay={1} />
            <ProgressBar label={t.skills.cinematography} percent={90} delay={2} />
            <ProgressBar label={t.skills.musicComposition} percent={85} delay={3} />
          </motion.div>

          <motion.div variants={fadeRightItem} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              {t.skills.development} <span className="custom-line" />
            </h3>
            <ProgressBar label={t.skills.aiPrompt} percent={100} delay={0} />
            <ProgressBar label={t.skills.realLifeResearch} percent={95} delay={1} />
            <ProgressBar label={t.skills.contentCreation} percent={88} delay={2} />
            <ProgressBar label={t.skills.videoEditing} percent={80} delay={3} />
          </motion.div>
        </div>

        {/* প্রযুক্তিগত দক্ষতা */}
        <motion.div
          className="max-w-5xl mx-auto mt-16"
          variants={fadeLeftItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-x-16">
            <ProgressBar label="React" percent={70} delay={0} />
            <ProgressBar label="TypeScript" percent={70} delay={1} />
            <ProgressBar label="Tailwind CSS" percent={70} delay={2} />
            <ProgressBar label="Framer Motion" percent={70} delay={3} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
