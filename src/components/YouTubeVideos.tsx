import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const videos = [
  { id: "FrJjm7L6MoE", title: "Psychology Insights" },
  { id: "dQw4w9WgXcQ", title: "Creative Writing Tips" },
  { id: "jNQXAC9IVRw", title: "AI Prompt Techniques" },
  { id: "9bZkp7q19f0", title: "Music Composition" },
  { id: "kJQP7kiw5Fk", title: "Cinematography Basics" },
  { id: "RgKAFK5djSk", title: "Research Methods" },
  { id: "JGwWNGJdvx8", title: "Real Life Analysis" },
  { id: "fJ9rUzIMcZQ", title: "Behavioral Patterns" },
];

const YouTubeVideos = () => {
  const { t } = useLanguage();

  return (
    <section id="videos" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold gold-gradient-text mb-4">{t.videos.title}</h2>
          <p className="text-muted-foreground text-lg">{t.videos.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={v.id + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {v.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
