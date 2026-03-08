import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import aboutWriting from "@/assets/about-writing.jpeg";

const Education = () => {
  const { t } = useLanguage();

  const education = [
    { title: t.education.edu1, year: t.education.edu1Year, desc: "A curated exploration of human behavior, cognitive patterns, and psychological research methodologies." },
    { title: t.education.edu2, year: t.education.edu2Year, desc: "Advanced qualitative and quantitative research methods for real-life psychological studies." },
    { title: t.education.edu3, year: t.education.edu3Year, desc: "Professional cinematography techniques, visual storytelling, and post-production workflows." },
    { title: t.education.edu4, year: t.education.edu4Year, desc: "AI systems, prompt engineering, and machine learning applications for creative work." },
  ];

  const experiences = [
    { title: t.education.exp1, years: t.education.exp1Year, role: "Psychology Researcher", desc: "Deep insights into human behavior and cognitive patterns through rigorous research." },
    { title: t.education.exp2, years: t.education.exp2Year, role: "AI Prompt Developer", desc: "Leveraging AI for creative problem-solving and innovative prompt engineering." },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Education & Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Empowering Creativity<br />Through
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-8">
              {t.education.eduTitle} <span className="custom-line" />
            </h3>
            <div className="space-y-0">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-t border-border py-6 group"
                >
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
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="glass-card p-6"
                >
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">experience</p>
                  <h4 className="text-xl font-bold text-foreground mb-1">{item.title} ({item.years})</h4>
                  <p className="text-primary text-sm font-medium mb-3">{item.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 rounded-2xl overflow-hidden"
            >
              <img src={aboutWriting} alt="Experience" className="w-full h-64 object-cover rounded-2xl" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
