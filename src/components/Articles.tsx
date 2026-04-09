import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import articlesPhoto from "@/assets/articles-photo.png";
import { staggerContainer, fadeUpItem, scaleUpItem } from "@/lib/animations";
import { TiltCard, FloatingOrbs, AnimatedTitle } from "@/components/AnimatedSection";

const Articles = () => {
  const { t, lang } = useLanguage();
  const isBengali = lang === "bn";

  const columns = [
    { title: t.articles.a1Title, content: t.articles.a1Content },
    { title: t.articles.a2Title, content: t.articles.a2Content },
    { title: t.articles.a3Title, content: t.articles.a3Content },
  ];

  return (
    <section id="articles" className="section-padding relative overflow-hidden">
      <FloatingOrbs colors={["hsl(var(--gold) / 0.05)", "hsl(var(--primary) / 0.04)"]} />

      <div className="container mx-auto relative z-10">
        <AnimatedTitle className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">{t.articles.title}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{t.articles.subtitle}</h2>
        </AnimatedTitle>

        <motion.div variants={scaleUpItem} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center mb-12">
          <motion.img
            src={articlesPhoto}
            alt="Saiful Islam"
            className="w-48 md:w-64 rounded-2xl object-cover"
            loading="lazy"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 60%, transparent 85%)',
              maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 60%, transparent 85%)',
            }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:auto-rows-fr"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {columns.map((col, i) => (
            <motion.div key={i} variants={fadeUpItem} className="h-full">
              <TiltCard className="glass-card h-full min-h-[240px] lg:min-h-[260px] p-5 lg:p-6 relative overflow-hidden group flex flex-col">
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                />
                <h3 className={`font-bold text-primary mb-4 leading-snug break-words ${isBengali ? "text-base lg:text-[1.05rem]" : "text-lg"}`}>
                  {col.title}
                </h3>
                <p className={`text-muted-foreground leading-relaxed whitespace-pre-line break-words flex-1 ${isBengali ? "text-sm lg:text-[0.9rem] lg:leading-[1.75]" : "text-sm"}`}>
                  {col.content}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
