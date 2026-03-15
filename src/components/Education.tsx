import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import aboutSeated from "@/assets/about-seated.jpeg";

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
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">{t.education.sectionLabel}</p>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">{t.education.heading}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-8">
              {t.education.eduTitle} <span className="custom-line" />
            </h3>
            <div className="space-y-0">
              {education.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border-t border-border py-6 group">
                  <p className="text-xs text-muted-foreground mb-1">{item.title}</p>
                  <h4 className="text-2xl font-bold text-primary mb-2">{item.year}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-8">
              {t.education.expTitle} <span className="custom-line" />
            </h3>
            <div className="space-y-6">
              {experiences.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="glass-card p-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{t.education.experienceLabel}</p>
                  <h4 className="text-xl font-bold text-foreground mb-1">{item.title} ({item.years})</h4>
                  <p className="text-primary text-sm font-medium mb-3">{item.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 rounded-2xl overflow-hidden">
              <img src={aboutSeated} alt="Experience" className="w-full h-auto object-contain rounded-2xl" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
