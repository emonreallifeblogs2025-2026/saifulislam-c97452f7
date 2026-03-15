import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProgressBar = ({ label, percent }: { label: string; percent: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{label}</span>
        <span className="text-xs text-primary font-semibold">{percent}%</span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={isInView ? { width: `${percent}%` } : { width: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} className="h-full rounded-full progress-bar-fill" />
      </div>
    </div>
  );
};

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              {t.skills.design} <span className="custom-line" />
            </h3>
            <ProgressBar label={t.skills.psychologyResearch} percent={100} />
            <ProgressBar label={t.skills.writing} percent={95} />
            <ProgressBar label={t.skills.cinematography} percent={90} />
            <ProgressBar label={t.skills.musicComposition} percent={85} />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              {t.skills.development} <span className="custom-line" />
            </h3>
            <ProgressBar label={t.skills.aiPrompt} percent={100} />
            <ProgressBar label={t.skills.realLifeResearch} percent={95} />
            <ProgressBar label={t.skills.contentCreation} percent={88} />
            <ProgressBar label={t.skills.videoEditing} percent={80} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
