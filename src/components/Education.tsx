import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const Education = () => {
  const { t } = useLanguage();

  const edu = [
    { title: t.education.edu1, year: t.education.edu1Year },
    { title: t.education.edu2, year: t.education.edu2Year },
    { title: t.education.edu3, year: t.education.edu3Year },
    { title: t.education.edu4, year: t.education.edu4Year },
  ];
  const exp = [
    { title: t.education.exp1, year: t.education.exp1Year },
    { title: t.education.exp2, year: t.education.exp2Year },
    { title: t.education.exp3, year: t.education.exp3Year },
    { title: t.education.exp4, year: t.education.exp4Year },
  ];

  const TimelineItem = ({ title, year, i }: { title: string; year: string; i: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="flex gap-4 mb-6"
    >
      <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
      <div>
        <h4 className="text-foreground font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>{title}</h4>
        <span className="text-primary text-sm">{year}</span>
      </div>
    </motion.div>
  );

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="gold-line mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold gold-gradient-text mb-4">{t.education.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="text-xl font-bold text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>{t.education.eduTitle}</h3>
            </div>
            {edu.map((e, i) => <TimelineItem key={i} title={e.title} year={e.year} i={i} />)}
          </div>
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-primary" size={24} />
              <h3 className="text-xl font-bold text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>{t.education.expTitle}</h3>
            </div>
            {exp.map((e, i) => <TimelineItem key={i} title={e.title} year={e.year} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
