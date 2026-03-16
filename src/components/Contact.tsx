import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { fadeLeftItem, fadeRightItem } from "@/lib/animations";

interface GoldParticle {
  id: number; x: number; y: number; size: number; duration: number; delay: number;
}

const generateGoldParticles = (count: number): GoldParticle[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100, size: Math.random() * 5 + 2, duration: Math.random() * 4 + 3, delay: Math.random() * 5,
  }));

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [particles] = useState(() => generateGoldParticles(60));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `${t.contact.name}: ${form.name}%0A${t.contact.email}: ${form.email}%0A${t.contact.message}: ${form.message}`;
    window.open(`https://wa.me/8801999708880?text=${whatsappMessage}`, '_blank');
    toast.success(t.contact.success);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div key={p.id} className="absolute rounded-full"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: `hsl(40, 85%, ${48 + p.size * 4}%)` }}
            animate={{ y: [0, -50, -100], opacity: [0, 0.9, 0], scale: [0.4, 1.2, 0.3] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }} />
        ))}
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeLeftItem} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">{t.contact.getInTouch}</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{t.contact.subtitle}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.contact.contactDesc}</p>
          </motion.div>

          <motion.form variants={fadeRightItem} initial="hidden" whileInView="visible" viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-4">
            {[
              { type: "text", placeholder: t.contact.name, key: "name" as const },
              { type: "email", placeholder: t.contact.email, key: "email" as const },
            ].map((field, i) => (
              <motion.input
                key={field.key}
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.key]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                required
                className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-all text-sm"
                whileFocus={{ scale: 1.01, boxShadow: "0 0 20px hsl(var(--primary) / 0.15)" }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
              />
            ))}
            <motion.textarea
              placeholder={t.contact.message}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-all text-sm resize-none"
              whileFocus={{ scale: 1.01, boxShadow: "0 0 20px hsl(var(--primary) / 0.15)" }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            />
            <motion.button
              type="submit"
              className="glass-button text-sm w-full justify-center"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px hsl(var(--primary) / 0.3)" }}
              whileTap={{ scale: 0.97 }}
            >
              {t.contact.send} <Send size={16} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
