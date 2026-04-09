import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem } from "@/lib/animations";
import { TiltCard, FloatingOrbs, AnimatedTitle } from "@/components/AnimatedSection";

const SkillCards = () => {
  const { t, lang } = useLanguage();
  const isBengali = lang === "bn";

  const skills = [
    { title: t.skillCards.s1Title, count: t.skillCards.s1Count, desc: t.skillCards.s1Desc },
    { title: t.skillCards.s2Title, count: t.skillCards.s2Count, desc: t.skillCards.s2Desc },
    { title: t.skillCards.s3Title, count: t.skillCards.s3Count, desc: t.skillCards.s3Desc },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <FloatingOrbs />

      <div className="container mx-auto relative z-10">
        <AnimatedTitle className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">{t.skillCards.mySkill}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {t.skillCards.elevatedDesigns}<br />{t.skillCards.personalizedExp}
          </h2>
        </AnimatedTitle>

        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto md:auto-rows-fr"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, i) => (
            <motion.div key={i} variants={fadeUpItem} className="h-full">
              <TiltCard className="glass-card h-full min-h-[230px] lg:min-h-[250px] p-6 group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col">
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.08), transparent 70%)" }}
                />
                <h3 className={`text-foreground mb-2 font-bold leading-snug break-words group-hover:text-primary transition-colors relative z-10 ${isBengali ? "text-lg lg:text-[1.05rem]" : "text-lg"}`}>
                  {skill.title}
                </h3>
                <p className={`text-primary font-medium mb-4 relative z-10 whitespace-nowrap ${isBengali ? "text-sm lg:text-[0.95rem]" : "text-sm"}`}>
                  {skill.count}
                </p>
                <p className={`text-muted-foreground leading-relaxed mb-6 relative z-10 flex-1 break-words ${isBengali ? "text-sm lg:text-[0.95rem] lg:leading-[1.75]" : "text-sm"}`}>
                  {skill.desc}
                </p>
                <a href="#contact" className={`inline-flex items-center gap-2 mt-auto text-foreground hover:text-primary transition-colors group/link relative z-10 ${isBengali ? "text-sm lg:text-[0.95rem]" : "text-sm"}`}>
                  {t.skillCards.readMore}
                  <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>→</motion.span>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillCards;
