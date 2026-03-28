import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import aboutSeated from "@/assets/about-seated.jpeg";
import { staggerContainer, fadeUpItem, fadeLeftItem, fadeRightItem, scaleUpItem } from "@/lib/animations";
import { TiltCard, FloatingOrbs, AnimatedTitle } from "@/components/AnimatedSection";

const Education = () => {
  const { t } = useLanguage();

  const education = [
    { title: t.education.edu3, year: t.education.edu3Year, desc: t.education.edu3Desc },
    { title: t.education.advancedResearch, year: t.education.advancedResearchYear, desc: t.education.advancedResearchDesc },
    { title: t.education.edu4, year: t.education.edu4Year, desc: t.education.edu4Desc },
  ];

  const experiences = [
    { title: t.education.exp1, years: t.education.exp1Year, role: t.education.exp1Role, desc: t.education.exp1Desc },
    { title: t.education.exp2, years: t.education.exp2Year, role: t.education.exp2Role, desc: t.education.exp2Desc },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <FloatingOrbs colors={["hsl(var(--primary) / 0.04)", "hsl(var(--gold) / 0.03)"]} />

      <div className="container mx-auto relative z-10">
        <AnimatedTitle className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">{t.education.sectionLabel}</p>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">{t.education.heading}</h2>
        </AnimatedTitle>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <motion.div variants={fadeLeftItem} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-xl font-bold text-foreground mb-8">
              {t.education.eduTitle} <span className="custom-line" />
            </h3>
            <motion.div className="space-y-0" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {education.map((item, i) => (
                <motion.div key={i} variants={fadeUpItem} className="border-t border-border py-6 group relative overflow-hidden">
                  {/* Animated timeline dot */}
                  <motion.div
                    className="absolute left-0 top-6 w-2 h-2 rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, type: "spring" }}
                  />
                  <div className="pl-5">
                    <p className="text-xs text-muted-foreground mb-1">{item.title}</p>
                    <motion.h4
                      className="text-2xl font-bold text-primary mb-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.year}
                    </motion.h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeRightItem} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-xl font-bold text-foreground mb-8">
              {t.education.expTitle} <span className="custom-line" />
            </h3>
            <motion.div className="space-y-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {experiences.map((item, i) => (
                <motion.div key={i} variants={fadeUpItem}>
                  <TiltCard className="glass-card p-6 relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.05), transparent)" }}
                    />
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 relative z-10">{t.education.experienceLabel}</p>
                    <h4 className="text-xl font-bold text-foreground mb-1 relative z-10">{item.title} ({item.years})</h4>
                    <p className="text-primary text-sm font-medium mb-3 relative z-10">{item.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{item.desc}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={scaleUpItem} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 rounded-2xl overflow-hidden">
              <motion.img
                src={aboutSeated}
                alt="Experience"
                className="w-full h-auto object-contain rounded-2xl"
                loading="lazy"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
