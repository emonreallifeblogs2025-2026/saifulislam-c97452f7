import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  const items = [
    { text: t.testimonials.t1, author: t.testimonials.t1Author, role: t.testimonials.t1Role },
    { text: t.testimonials.t2, author: t.testimonials.t2Author, role: t.testimonials.t2Role },
    { text: t.testimonials.t3, author: t.testimonials.t3Author, role: t.testimonials.t3Role },
  ];

  const next = () => setActive((active + 1) % items.length);
  const prev = () => setActive((active - 1 + items.length) % items.length);

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="gold-line mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold gold-gradient-text mb-4">{t.testimonials.title}</h2>
          <p className="text-muted-foreground text-lg">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="glass-card p-10 md:p-14 text-center relative">
          <Quote className="text-primary/30 mx-auto mb-6" size={48} />
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-foreground text-lg md:text-xl leading-relaxed mb-8 italic"
          >
            "{items[active].text}"
          </motion.p>
          <p className="text-primary font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>{items[active].author}</p>
          <p className="text-muted-foreground text-sm">{items[active].role}</p>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border hover:border-primary flex items-center justify-center transition-colors">
              <ChevronLeft size={18} className="text-foreground" />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border hover:border-primary flex items-center justify-center transition-colors">
              <ChevronRight size={18} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
