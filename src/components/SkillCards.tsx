import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const SkillCards = () => {
  const { t } = useLanguage();
  const skills = [
    { title: "Psychology Research", count: "45 Done", desc: "Deep exploration of human behavior, cognitive patterns, and real-life psychological phenomena." },
    { title: "AI & Prompt Design", count: "60 Done", desc: "Leveraging AI prompt engineering for creative problem-solving and innovative automation solutions." },
    { title: "Music & Composition", count: "30 Done", desc: "Crafting compelling musical compositions that resonate with emotion and storytelling." },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">My Skill</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Elevated Designs<br />Personalized Experiences
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-500"
            >
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
              <p className="text-primary text-sm font-medium mb-4">{skill.count}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{skill.desc}</p>
              <a href="#contact" className="text-sm text-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group/link">
                Read More <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillCards;
