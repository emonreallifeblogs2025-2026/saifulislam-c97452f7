import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowUp, Facebook } from "lucide-react";
import { staggerContainer, fadeUpItem } from "@/lib/animations";

const TikTokIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.2 8.2 0 0 0 4.76 1.52V6.79a4.84 4.84 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: <Facebook size={16} />, href: "https://www.facebook.com/realliferesearcher" },
    { icon: <TikTokIcon />, href: "https://www.tiktok.com/@saifulislam.live" },
  ];

  return (
    <footer className="py-10 relative overflow-hidden" style={{ background: "hsl(0, 70%, 45%)" }}>
      {/* Animated background shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.03), transparent)" }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Tech stack info */}
        <motion.div variants={fadeUpItem} className="text-center mb-6">
          <p className="text-white/90 text-sm mb-3 font-semibold">
            {t.footer.madeWith}
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-white/80 text-xs">
            <span>✅ React</span>
            <span>✅ TypeScript</span>
            <span>✅ Tailwind CSS</span>
            <span>✅ Framer Motion</span>
          </div>
        </motion.div>

        <motion.div variants={fadeUpItem} className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/90 text-sm">
            © সৈয়দ সাইফুল ইসলাম 2026 | {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener"
                onClick={(e: React.MouseEvent) => { e.preventDefault(); window.open(s.href, '_blank', 'noopener'); }}
                className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all"
                style={{
                  background: "linear-gradient(145deg, hsl(0, 60%, 55%), hsl(0, 70%, 38%))",
                  boxShadow: "3px 3px 6px hsl(0, 70%, 30%), -2px -2px 5px hsl(0, 60%, 55%), inset 1px 1px 2px hsl(0, 50%, 65%)",
                  border: "1px solid hsl(0, 50%, 60%)",
                }}
                whileHover={{ scale: 1.15, rotate: 10, boxShadow: "0 0 20px hsl(0 0% 100% / 0.3)" }}
                whileTap={{ scale: 0.9 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeUpItem} className="flex justify-center mt-8">
          <motion.a
            href="#home"
            className="w-11 h-11 rounded-full flex items-center justify-center text-white"
            style={{
              background: "linear-gradient(145deg, hsl(0, 60%, 55%), hsl(0, 70%, 38%))",
              boxShadow: "3px 3px 6px hsl(0, 70%, 30%), -2px -2px 5px hsl(0, 60%, 55%), inset 1px 1px 2px hsl(0, 50%, 65%)",
              border: "1px solid hsl(0, 50%, 60%)",
            }}
            whileHover={{ y: -5, scale: 1.15, boxShadow: "0 8px 25px hsl(0 0% 100% / 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={16} />
          </motion.a>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
