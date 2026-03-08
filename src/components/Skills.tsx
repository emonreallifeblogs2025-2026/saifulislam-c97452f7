import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProgressBar = ({ label, value, delay }: { label: string; value: number; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-foreground" style={{ fontFamily: "'Poppins', sans-serif" }}>{label}</span>
        <span className="text-sm text-primary">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          className="h-full rounded-full progress-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="gold-line mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold gold-gradient-text mb-4">{t.skills.title}</h2>
          <p className="text-muted-foreground text-lg">{t.skills.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8">
            <h3 className="text-xl font-bold text-primary mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>{t.skills.design}</h3>
            <ProgressBar label={t.skills.psychologyResearch} value={100} delay={0} />
            <ProgressBar label={t.skills.writing} value={95} delay={0.1} />
            <ProgressBar label={t.skills.cinematography} value={90} delay={0.2} />
            <ProgressBar label={t.skills.musicComposition} value={85} delay={0.3} />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8">
            <h3 className="text-xl font-bold text-primary mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>{t.skills.development}</h3>
            <ProgressBar label={t.skills.aiPrompt} value={100} delay={0} />
            <ProgressBar label={t.skills.realLifeResearch} value={95} delay={0.1} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
