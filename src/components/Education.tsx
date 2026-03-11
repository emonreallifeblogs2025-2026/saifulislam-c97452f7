import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import aboutSeated from "@/assets/about-seated.jpeg";

const Education = () => {
  const { t, lang } = useLanguage();

  const education = [
    { 
      title: t.education.edu3, 
      year: t.education.edu3Year, 
      desc: lang === "bn" ? "পেশাদার সিনেমাটোগ্রাফি কৌশল, ভিজ্যুয়াল গল্প বলা এবং পোস্ট-প্রোডাকশন ওয়ার্কফ্লো।" : "Professional cinematography techniques, visual storytelling, and post-production workflows." 
    },
    { 
      title: lang === "bn" ? "উন্নত গবেষণা পদ্ধতি" : "Advanced Research Methods", 
      year: lang === "bn" ? "২০১৪ - ২০১৯" : "2014 - 2019", 
      desc: lang === "bn" ? "বাস্তব জীবনের মনস্তাত্ত্বিক গবেষণার জন্য উন্নত গুণগত ও পরিমাণগত গবেষণা পদ্ধতি।" : "Advanced qualitative and quantitative research methods for real-life psychological studies." 
    },
    { 
      title: t.education.edu4, 
      year: t.education.edu4Year, 
      desc: lang === "bn" ? "AI সিস্টেম, প্রম্পট ইঞ্জিনিয়ারিং এবং সৃজনশীল কাজের জন্য মেশিন লার্নিং অ্যাপ্লিকেশন।" : "AI systems, prompt engineering, and machine learning applications for creative work." 
    },
  ];

  const experiences = [
    { title: t.education.exp1, years: t.education.exp1Year, role: lang === "bn" ? "সাইকোলজি গবেষক" : "Psychology Researcher", desc: lang === "bn" ? "কঠোর গবেষণার মাধ্যমে মানব আচরণ ও জ্ঞানীয় ধরণ সম্পর্কে গভীর অন্তর্দৃষ্টি।" : "Deep insights into human behavior and cognitive patterns through rigorous research." },
    { title: t.education.exp2, years: t.education.exp2Year, role: lang === "bn" ? "AI প্রম্পট ডেভেলপার" : "AI Prompt Developer", desc: lang === "bn" ? "সৃজনশীল সমস্যা সমাধান এবং উদ্ভাবনী প্রম্পট ইঞ্জিনিয়ারিংয়ের জন্য AI ব্যবহার।" : "Leveraging AI for creative problem-solving and innovative prompt engineering." },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">{lang === "bn" ? "শিক্ষা ও অভিজ্ঞতা" : "Education & Experience"}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {lang === "bn" ? "সৃজনশীলতাকে শক্তিশালী করা" : "Empowering Creativity"}<br />{lang === "bn" ? "মাধ্যমে" : "Through"}
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
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{lang === "bn" ? "অভিজ্ঞতা" : "experience"}</p>
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
              <img src={aboutSeated} alt="Experience" className="w-full h-auto object-contain rounded-2xl" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
