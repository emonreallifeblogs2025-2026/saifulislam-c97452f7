import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Brain, PenTool, Camera, Cpu } from "lucide-react";

const ServiceCards = () => {
  const { lang } = useLanguage();
  const cards = lang === "en" ? [
    { icon: Brain, title: "Psychology & Research", count: "120 Projects", link: "https://youtu.be/pcsv8gicm7U" },
    { icon: PenTool, title: "Writing & Composition", count: "95 Projects", link: "https://youtu.be/9OAOGPUDcq8" },
    { icon: Camera, title: "Cinematography", count: "80 Projects", link: "https://youtu.be/ovnAq3KA1UI" },
    { icon: Cpu, title: "AI Prompt Development", count: "150 Projects", link: "https://youtu.be/sRo3Rd8JsGo" },
  ] : [
    { icon: Brain, title: "সাইকোলজি ও গবেষণা", count: "১২০ প্রজেক্ট", link: "https://youtu.be/pcsv8gicm7U" },
    { icon: PenTool, title: "লেখালেখি ও রচনা", count: "৯৫ প্রজেক্ট", link: "https://youtu.be/9OAOGPUDcq8" },
    { icon: Camera, title: "সিনেমাটোগ্রাফি", count: "৮০ প্রজেক্ট", link: "https://youtu.be/ovnAq3KA1UI" },
    { icon: Cpu, title: "AI প্রম্পট ডেভেলপমেন্ট", count: "১৫০ প্রজেক্ট", link: "https://youtu.be/sRo3Rd8JsGo" },
  ];

  return (
    <section className="relative z-20 -mt-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <motion.a
              key={i}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 md:p-8 text-center group cursor-pointer transition-all duration-500 hover:-translate-y-2 block"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <card.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
              <p className="text-xs text-muted-foreground">{card.count}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
