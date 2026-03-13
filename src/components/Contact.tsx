import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";

interface GoldParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const generateGoldParticles = (count: number): GoldParticle[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 2,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 5,
  }));

const Contact = () => {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [particles] = useState(() => generateGoldParticles(60));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `নাম: ${form.name}%0Aইমেইল: ${form.email}%0Aবার্তা: ${form.message}`;
    window.open(`https://wa.me/8801999708880?text=${whatsappMessage}`, '_blank');
    toast.success(t.contact.success);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Gold particles background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: `hsl(40, 85%, ${48 + p.size * 4}%)`,
            }}
            animate={{
              y: [0, -50, -100],
              opacity: [0, 0.9, 0],
              scale: [0.4, 1.2, 0.3],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">GET IN TOUCH</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t.contact.subtitle}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {lang === "bn" ? "আপনার ধারণাগুলো বাস্তবে রূপ দিতে যোগাযোগ করুন। একসাথে অসাধারণ কিছু তৈরি করি।" : lang === "ar" ? "تواصل معي لتحويل أفكارك إلى واقع." : lang === "fr" ? "Contactez-moi pour donner vie à vos idées." : "Let's bring your ideas to life. Contact me and let's create something amazing together."}
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder={t.contact.name}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm"
            />
            <input
              type="email"
              placeholder={t.contact.email}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm"
            />
            <textarea
              placeholder={t.contact.message}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm resize-none"
            />
            <button type="submit" className="glass-button text-sm w-full justify-center">
              {t.contact.send} <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
