import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const SkillCards = () => {
  const { t, lang } = useLanguage();
  const skills = lang === "bn" ? [
    { title: "সাইকোলজি গবেষণা", count: "৪৫ সম্পন্ন", desc: "মানব আচরণ, জ্ঞানীয় ধরণ এবং বাস্তব জীবনের মনস্তাত্ত্বিক ঘটনাগুলোর গভীর অন্বেষণ।" },
    { title: "AI ও প্রম্পট ডিজাইন", count: "৬০ সম্পন্ন", desc: "সৃজনশীল সমস্যা সমাধান এবং উদ্ভাবনী অটোমেশন সমাধানের জন্য AI প্রম্পট ইঞ্জিনিয়ারিং।" },
    { title: "সংগীত ও রচনা", count: "৩০ সম্পন্ন", desc: "আবেগ এবং গল্প বলার সাথে অনুরণিত চিত্তাকর্ষক সংগীত রচনা তৈরি।" },
  ] : [
    { title: "Psychology Research", count: "45 Done", desc: "Deep exploration of human behavior, cognitive patterns, and real-life psychological phenomena." },
    { title: "AI & Prompt Design", count: "60 Done", desc: "Leveraging AI prompt engineering for creative problem-solving and innovative automation solutions." },
    { title: "Music & Composition", count: "30 Done", desc: "Crafting compelling musical compositions that resonate with emotion and storytelling." },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">{lang === "bn" ? "আমার দক্ষতা" : "My Skill"}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {lang === "bn" ? "উন্নত ডিজাইন" : "Elevated Designs"}<br />{lang === "bn" ? "ব্যক্তিগত অভিজ্ঞতা" : "Personalized Experiences"}
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
                {lang === "bn" ? "আরো পড়ুন" : "Read More"} <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillCards;
