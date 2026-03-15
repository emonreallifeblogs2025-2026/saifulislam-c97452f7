import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative">
              <span className="text-[10rem] md:text-[14rem] font-black text-primary/15 leading-none block">
                <Counter target={21} />
              </span>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">{t.stats.experience}</h3>
                <p className="text-muted-foreground mt-3 max-w-sm text-sm leading-relaxed whitespace-pre-line">
                  {t.stats.longBio}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: 50, suffix: " k+", label: t.stats.projects },
              { value: 100, suffix: " k+", label: t.stats.insights },
              { value: 200, suffix: " +", label: t.stats.reviews },
              { value: 500, suffix: " +", label: t.stats.clients },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 text-center">
                <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </h4>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
