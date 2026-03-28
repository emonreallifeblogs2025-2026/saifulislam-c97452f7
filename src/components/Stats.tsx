import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { staggerContainer, fadeUpItem, fadeLeftItem } from "@/lib/animations";
import { TiltCard, FloatingOrbs } from "@/components/AnimatedSection";

const colorCycle = [
  "hsl(var(--primary))",
  "hsl(45, 100%, 55%)",
  "hsl(150, 80%, 50%)",
  "hsl(280, 80%, 60%)",
  "hsl(0, 85%, 60%)",
  "hsl(200, 90%, 55%)",
  "hsl(30, 100%, 55%)",
];

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2500;
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
    <section className="section-padding pt-20 relative overflow-hidden">
      <FloatingOrbs colors={["hsl(var(--primary) / 0.06)", "hsl(var(--gold) / 0.05)"]} />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeLeftItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative text-center lg:text-left">
              <motion.div
                className="text-[16rem] sm:text-[22rem] md:text-[28rem] font-black leading-none"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.span
                  className="block"
                  animate={{ color: colorCycle }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Counter target={21} />
                </motion.span>
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-2">{t.stats.experience}</h3>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: 50, suffix: " k+", label: t.stats.projects },
              { value: 100, suffix: " k+", label: t.stats.insights },
              { value: 200, suffix: " +", label: t.stats.reviews },
              { value: 500, suffix: " +", label: t.stats.clients },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUpItem}>
                <TiltCard className="glass-card p-6 text-center">
                  <motion.h4
                    className="text-2xl md:text-3xl font-bold text-foreground mb-2"
                    whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </motion.h4>
                  <p className="text-muted-foreground text-xs uppercase tracking-widest">{stat.label}</p>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
