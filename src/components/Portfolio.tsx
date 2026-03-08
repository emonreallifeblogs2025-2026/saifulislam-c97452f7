import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import aboutWriting from "@/assets/about-writing.jpeg";
import aboutCasual from "@/assets/about-casual.png";
import aboutSeated from "@/assets/about-seated.jpeg";
import heroImage from "@/assets/hero-main.png";

const Portfolio = () => {
  const { t } = useLanguage();
  const items = [
    { title: t.portfolio.p1, category: "Research", img: aboutWriting },
    { title: t.portfolio.p2, category: "AI Development", img: aboutSeated },
    { title: t.portfolio.p3, category: "Cinematography", img: aboutCasual },
    { title: t.portfolio.p4, category: "Music", img: heroImage },
  ];

  return (
    <section id="portfolio" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Latest Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {t.portfolio.title}
          </h2>
          <p className="text-muted-foreground text-base mt-4 max-w-2xl mx-auto">{t.portfolio.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-primary text-sm">{item.category}</p>
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
