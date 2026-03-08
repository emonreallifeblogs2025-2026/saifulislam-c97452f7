import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Brain, PenTool, Camera, Cpu } from "lucide-react";

const ServiceCards = () => {
  const { t } = useLanguage();
  const cards = [
    { icon: Brain, title: t.services.s1Title, count: "120 Projects" },
    { icon: PenTool, title: t.services.s2Title, count: "95 Projects" },
    { icon: Camera, title: "Cinematography", count: "80 Projects" },
    { icon: Cpu, title: "AI Development", count: "150 Projects" },
  ];

  return (
    <section className="relative z-20 -mt-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 md:p-8 text-center group cursor-pointer transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <card.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-xs text-muted-foreground">{card.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
