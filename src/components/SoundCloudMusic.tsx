import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Music, ExternalLink } from "lucide-react";

const tracks = [
  {
    url: "https://on.soundcloud.com/3JxN6LGw4qJ3cwRge2",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fon.soundcloud.com%2F3JxN6LGw4qJ3cwRge2&color=%23e11d48&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    url: "https://on.soundcloud.com/uCZlbblKHZUE0uFPfu",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fon.soundcloud.com%2FuCZlbblKHZUE0uFPfu&color=%23e11d48&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    url: "https://on.soundcloud.com/SQxJ3PFoWczWYfeoUP",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fon.soundcloud.com%2FSQxJ3PFoWczWYfeoUP&color=%23e11d48&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    url: "https://on.soundcloud.com/A3NpqoLCKvSSSJodAR",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fon.soundcloud.com%2FA3NpqoLCKvSSSJodAR&color=%23e11d48&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    url: "https://on.soundcloud.com/2rYA7Bc9OnuZ5fBqHE",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fon.soundcloud.com%2F2rYA7Bc9OnuZ5fBqHE&color=%23e11d48&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    url: "https://on.soundcloud.com/R7XOj6XrhLDtioEKff",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fon.soundcloud.com%2FR7XOj6XrhLDtioEKff&color=%23e11d48&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    url: "https://on.soundcloud.com/w5D2vIIOFnohNBfOxN",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fon.soundcloud.com%2Fw5D2vIIOFnohNBfOxN&color=%23e11d48&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    url: "https://on.soundcloud.com/hNzNznRjopp7PERDZ5",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fon.soundcloud.com%2FhNzNznRjopp7PERDZ5&color=%23e11d48&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {tracks.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-3 sm:p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Music size={14} className="text-primary flex-shrink-0" />
                <h4 className="text-xs sm:text-sm font-semibold text-foreground truncate">
                  {trackNames[lang][i]}
                </h4>
              </div>
              <p className="text-[10px] sm:text-xs text-muted-foreground mb-2">
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
