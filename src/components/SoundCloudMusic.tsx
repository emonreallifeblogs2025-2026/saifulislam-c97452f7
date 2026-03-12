import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Music, ExternalLink } from "lucide-react";
import soundcloudCover from "@/assets/soundcloud-cover.png";

const SOUNDCLOUD_LIBRARY = "https://on.soundcloud.com/7tA9rG7ceUPUXfSiWp";

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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 max-w-md mx-auto"
        >
          {/* Square cover with animated border */}
          <div className="relative group">
            <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-primary via-pink-light to-primary opacity-75 blur-sm animate-pulse group-hover:opacity-100 transition-opacity" 
              style={{ background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--pink-light)), hsl(var(--pink-dark)), hsl(var(--primary)))`, backgroundSize: '300% 300%', animation: 'borderGlow 3s ease infinite' }} 
            />
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/50">
              <img
                src={soundcloudCover}
                alt="SoundCloud Music Library"
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover"
              />
            </div>
          </div>

          {/* SoundCloud button */}
          <a
            href={SOUNDCLOUD_LIBRARY}
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
