import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { BookOpen, Music2 } from "lucide-react";

const InlinePageLinks = () => {
  const { t } = useLanguage();

  const buttons = [
    {
      to: "/songs",
      icon: <Music2 size={20} className="text-primary" strokeWidth={2.2} />,
      label: t.hero.songsBtn,
    },
    {
      to: "/writings",
      icon: <BookOpen size={20} className="text-primary" strokeWidth={2.2} />,
      label: t.hero.writingsBtn,
    },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7 md:gap-10">
        {buttons.map((b, i) => (
          <motion.div
            key={b.to}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto flex justify-center"
          >
            <Link
              to={b.to}
              className="group relative inline-flex items-center justify-center gap-3 px-7 sm:px-9 md:px-12 py-3.5 sm:py-4 rounded-full text-base sm:text-lg md:text-xl font-semibold text-foreground transition-all duration-300"
              style={{
                background: "linear-gradient(145deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)",
                border: "1.5px solid hsl(var(--primary) / 0.55)",
                boxShadow:
                  "0 0 18px hsl(var(--primary) / 0.45), 0 0 38px hsl(var(--primary) / 0.22), inset 0 1px 0 hsl(0 0% 100% / 0.08), 0 6px 14px hsl(0 0% 0% / 0.35)",
                textShadow: "0 0 10px hsl(var(--primary) / 0.45)",
              }}
            >
              <span className="flex items-center gap-2.5">
                {b.icon}
                <span className="whitespace-nowrap">{b.label}</span>
                <span aria-hidden className="text-primary transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InlinePageLinks;
