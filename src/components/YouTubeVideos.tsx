import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const videos = [
  { id: "pcsv8gicm7U", title: "জীবনের অব্যক্ত কথা | Unspoken Words of Life", views: "12K" },
  { id: "9OAOGPUDcq8", title: "মনের গভীরে লুকানো সত্য | Hidden Truth Within", views: "8.5K" },
  { id: "sRo3Rd8JsGo", title: "সম্পর্কের মনস্তত্ত্ব | Psychology of Relationships", views: "15K" },
  { id: "FrJjm7L6MoE", title: "একাকীত্বের শক্তি | Power of Solitude", views: "6.2K" },
  { id: "ovnAq3KA1UI", title: "আত্মবিশ্বাস গড়ে তোলা | Building Self-Confidence", views: "9.8K" },
  { id: "K8WFoX0OBac", title: "জীবন যুদ্ধের কৌশল | Life Battle Strategy", views: "11K" },
  { id: "eF-uIlp548k", title: "মানসিক শান্তির সন্ধানে | Seeking Inner Peace", views: "7.3K" },
  { id: "R__BMe95qF4", title: "পরিবর্তনের সাহস | Courage to Change", views: "5.1K" },
  { id: "ecUpbCnX4QE", title: "সফলতার গোপন সূত্র | Secret Formula of Success", views: "13K" },
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
                <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                  {v.title}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground text-xs">
                  <Eye size={12} />
                  <span>{v.views} views</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
