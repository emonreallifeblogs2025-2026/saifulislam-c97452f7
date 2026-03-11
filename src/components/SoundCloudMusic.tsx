import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Music, ExternalLink } from "lucide-react";

const tracks = [
  {
    url: "https://on.soundcloud.com/H32AAIDUk0kNeUDZnQ",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/H32AAIDUk0kNeUDZnQ&color=%23e11d48&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    url: "https://on.soundcloud.com/3lQcsbg4dRAb8NEtGj",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/3lQcsbg4dRAb8NEtGj&color=%23e11d48&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    url: "https://on.soundcloud.com/id6gLePbZcCt1QvapG",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/id6gLePbZcCt1QvapG&color=%23e11d48&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    url: "https://on.soundcloud.com/QQH68WskiumfWi2F7C",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/QQH68WskiumfWi2F7C&color=%23e11d48&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    url: "https://on.soundcloud.com/c4ELETgXLapopLzKQs",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/c4ELETgXLapopLzKQs&color=%23e11d48&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    url: "https://on.soundcloud.com/szDPxyRiWoiziZpu2X",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/szDPxyRiWoiziZpu2X&color=%23e11d48&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    url: "https://on.soundcloud.com/L1B20SiElaQnTmW7Zs",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/L1B20SiElaQnTmW7Zs&color=%23e11d48&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    url: "https://on.soundcloud.com/JnIUvuvf2AmZQ43tK0",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/JnIUvuvf2AmZQ43tK0&color=%23e11d48&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false",
  },
];

const trackNames = {
  bn: [
    "অনুভূতির সুর ১", "অনুভূতির সুর ২", "অনুভূতির সুর ৩", "অনুভূতির সুর ৪",
    "অনুভূতির সুর ৫", "অনুভূতির সুর ৬", "অনুভূতির সুর ৭", "অনুভূতির সুর ৮"
  ],
  en: [
    "Melody of Feelings 1", "Melody of Feelings 2", "Melody of Feelings 3", "Melody of Feelings 4",
    "Melody of Feelings 5", "Melody of Feelings 6", "Melody of Feelings 7", "Melody of Feelings 8"
  ],
};

const SoundCloudMusic = () => {
  const { lang } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
            {lang === "bn" ? "সংগীত" : "Music"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {lang === "bn" ? "আমার সংগীত রচনা" : "My Music Compositions"}
          </h2>
          <p className="text-muted-foreground mt-4 text-sm">
            {lang === "bn" ? "মিউজিক কম্পোজিশন: সৈয়দ সাইফুল ইসলাম" : "Music Composition: Syed Saiful Islam"}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {tracks.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <Music size={14} className="text-primary" />
                <h4 className="text-sm font-semibold text-foreground truncate">
                  {trackNames[lang][i]}
                </h4>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                {lang === "bn" ? "সৈয়দ সাইফুল ইসলাম" : "Syed Saiful Islam"}
              </p>
              <iframe
                width="100%"
                height="80"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={track.embedUrl}
                className="rounded-lg"
                title={trackNames[lang][i]}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://on.soundcloud.com/6aLoWVDBeNQKpDE0yl"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button text-sm md:text-base group inline-flex items-center gap-2 soundcloud-pulse"
          >
            <Music size={18} className="animate-pulse" />
            <span>{lang === "bn" ? "আরো গান শুনুন" : "Listen More Songs"}</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SoundCloudMusic;
