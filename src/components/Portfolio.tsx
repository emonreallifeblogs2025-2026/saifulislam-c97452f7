import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import aboutWriting from "@/assets/about-writing.jpeg";
import aboutCasual from "@/assets/about-casual.png";
import aboutSeated from "@/assets/about-seated.jpeg";

const Portfolio = () => {
  const { t } = useLanguage();
  const items = [
    { title: t.portfolio.p1, img: aboutWriting },
    { title: t.portfolio.p2, img: aboutSeated },
    { title: t.portfolio.p3, img: aboutCasual },
    { title: t.portfolio.p4, img: aboutWriting },
    { title: t.portfolio.p5, img: aboutSeated },
    { title: t.portfolio.p6, img: aboutCasual },
  ];

  return (
    <section id="portfolio" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="gold-line mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold gold-gradient-text mb-4">{t.portfolio.title}</h2>
          <p className="text-muted-foreground text-lg">{t.portfolio.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-primary font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
