import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  const { t } = useLanguage();
  const stats = [
    { value: 10, label: t.stats.experience, suffix: "+" },
    { value: 50, label: t.stats.projects, suffix: "+" },
    { value: 100, label: t.stats.insights, suffix: "+" },
    { value: 200, label: t.stats.reviews, suffix: "+" },
    { value: 500, label: t.stats.clients, suffix: "+" },
  ];

  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gold-gradient-text mb-2">
                <Counter end={s.value} />{s.suffix}
              </div>
              <p className="text-muted-foreground text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
