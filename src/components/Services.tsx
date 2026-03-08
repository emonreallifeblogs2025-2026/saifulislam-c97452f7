import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Brain, PenTool, Camera } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();
  const services = [
    { icon: Brain, title: t.services.s1Title, desc: t.services.s1Desc },
    { icon: PenTool, title: t.services.s2Title, desc: t.services.s2Desc },
    { icon: Camera, title: t.services.s3Title, desc: t.services.s3Desc },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="gold-line mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold gold-gradient-text mb-4">{t.services.title}</h2>
          <p className="text-muted-foreground text-lg">{t.services.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
              <a href="#contact" className="text-primary text-sm hover:text-gold-light transition-colors">
                {t.services.readMore} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
