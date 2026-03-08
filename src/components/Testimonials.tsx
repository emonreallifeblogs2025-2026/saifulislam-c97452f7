import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    { quote: t.testimonials.t1, author: t.testimonials.t1Author, role: t.testimonials.t1Role },
    { quote: t.testimonials.t2, author: t.testimonials.t2Author, role: t.testimonials.t2Role },
    { quote: t.testimonials.t3, author: t.testimonials.t3Author, role: t.testimonials.t3Role },
  ];

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Quote className="mx-auto text-primary mb-8" size={48} />
          <blockquote className="text-2xl md:text-4xl font-bold text-foreground leading-snug mb-8">
            {testimonials[current].quote}
          </blockquote>
          <p className="text-foreground font-semibold">{testimonials[current].author}</p>
          <p className="text-primary text-sm">{testimonials[current].role}</p>
        </motion.div>

        <div className="flex justify-center gap-4 mt-12">
          <button onClick={prev} className="w-12 h-12 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center text-muted-foreground transition-all">
            <ChevronLeft size={20} />
          </button>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all my-auto ${i === current ? "bg-primary scale-125" : "bg-border"}`} />
          ))}
          <button onClick={next} className="w-12 h-12 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center text-muted-foreground transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
