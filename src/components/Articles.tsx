import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import articlesPhoto from "@/assets/articles-photo.png";

const Articles = () => {
  const { t } = useLanguage();

  const columns = [
    { title: t.articles.a1Title, content: t.articles.a1Content },
    { title: t.articles.a2Title, content: t.articles.a2Content },
    { title: t.articles.a3Title, content: t.articles.a3Content },
  ];

  return (
    <section id="articles" className="section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">{t.articles.title}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{t.articles.subtitle}</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center mb-12">
          <img src={articlesPhoto} alt="Saiful Islam" className="w-48 md:w-64 rounded-2xl object-cover" loading="lazy"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 60%, transparent 85%)',
              maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 60%, transparent 85%)',
            }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((col, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-primary mb-4">{col.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{col.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
