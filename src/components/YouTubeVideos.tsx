import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const videos = [
  { id: "pcsv8gicm7U", title: "Psychology Insights" },
  { id: "9OAOGPUDcq8", title: "Creative Writing" },
  { id: "sRo3Rd8JsGo", title: "AI Prompt Techniques" },
  { id: "FrJjm7L6MoE", title: "Music & Composition" },
  { id: "ovnAq3KA1UI", title: "Cinematography" },
  { id: "K8WFoX0OBac", title: "Research Methods" },
];

const YouTubeVideos = () => {
  const { t } = useLanguage();

  return (
    <section id="videos" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">My Videos</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{t.videos.title}</h2>
          <p className="text-muted-foreground text-base">{t.videos.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
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
                <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
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
