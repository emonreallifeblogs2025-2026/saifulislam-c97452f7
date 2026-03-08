import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import aboutSeated from "@/assets/about-seated.jpeg";

const Services = () => {
  const { t } = useLanguage();
  const services = [
    { num: "01", title: t.services.s1Title, desc: t.services.s1Desc },
    { num: "02", title: t.services.s2Title, desc: t.services.s2Desc },
    { num: "03", title: t.services.s3Title, desc: t.services.s3Desc },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Latest Service</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {t.services.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">{t.services.subtitle}</p>
            </motion.div>

            <div className="space-y-0">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group border-t border-border py-8 hover:border-primary/30 transition-all cursor-pointer"
                >
                  <div className="flex gap-4">
                    <span className="text-primary font-bold text-lg">{s.num}.</span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden">
              <img src={aboutSeated} alt="Services" className="w-full h-[600px] object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
