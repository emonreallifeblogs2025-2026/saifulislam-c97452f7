import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, Music } from "lucide-react";
import { Link } from "react-router-dom";
import songsCover from "@/assets/songs-cover.png";
import songsCover from "@/assets/songs-cover.png";

interface Track {
  id: number;
  title: string;
  url: string;
  soundcloudUrl: string;
}

const tracks: Track[] = [
  { id: 1, title: "Bhool Manush Ke Bhalobasha Oporadh", url: "", soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fsyed-saiful-islam-626619287%2Fbhool-manush-ke-bhalobasha&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false" },
  { id: 2, title: "গান ২", url: "", soundcloudUrl: "" },
  { id: 3, title: "গান ৩", url: "", soundcloudUrl: "" },
  { id: 4, title: "গান ৪", url: "", soundcloudUrl: "" },
  { id: 5, title: "গান ৫", url: "", soundcloudUrl: "" },
  { id: 6, title: "গান ৬", url: "", soundcloudUrl: "" },
  { id: 7, title: "গান ৭", url: "", soundcloudUrl: "" },
  { id: 8, title: "গান ৮", url: "", soundcloudUrl: "" },
  { id: 9, title: "গান ৯", url: "", soundcloudUrl: "" },
  { id: 10, title: "গান ১০", url: "", soundcloudUrl: "" },
];

// Generate random waveform bars
const generateWaveform = (count: number) =>
  Array.from({ length: count }, () => Math.random() * 0.7 + 0.3);

const SoundCloudPlayer = ({ track }: { track: Track }) => {
  if (track.soundcloudUrl) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-4 sm:p-5 hover:border-primary/30 transition-all duration-300"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
            {String(track.id).padStart(2, "0")}
          </span>
          <h3 className="text-sm sm:text-base font-semibold text-foreground">{track.title}</h3>
        </div>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={track.soundcloudUrl}
          className="rounded-lg"
        />
        <p className="text-xs text-muted-foreground mt-2">Syed Saiful Islam</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-4 sm:p-5 opacity-60"
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-muted flex items-center justify-center">
          <Music size={20} className="text-muted-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              {String(track.id).padStart(2, "0")}
            </span>
            <h3 className="text-sm sm:text-base font-semibold text-foreground truncate">{track.title}</h3>
          </div>
          <p className="text-xs text-muted-foreground">Coming soon...</p>
          <p className="text-xs text-muted-foreground mt-1">Syed Saiful Islam</p>
        </div>
      </div>
    </motion.div>
  );
};

const Songs = () => {
  const { t } = useLanguage();
  const [playingId, setPlayingId] = useState<number | null>(null);

  const handleToggle = useCallback((id: number) => {
    setPlayingId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            <ArrowLeft size={18} />
            {t.writings.goBack}
          </Link>
        </div>
      </div>

      {/* Cover Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pt-8"
      >
        <div className="relative rounded-2xl overflow-hidden max-w-3xl mx-auto shadow-2xl shadow-background/50">
          <img
            src={songsCover}
            alt="Syed Saiful Islam - Music Compositions"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="container mx-auto px-4 pt-8 pb-4 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <Music size={24} className="text-primary" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            {t.songs?.pageTitle || "আমার সুর"}
          </h1>
        </div>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-lg mx-auto">
          {t.songs?.pageSubtitle || "কম্পোজিশন ও রচিত গান সমূহ"}
        </p>
      </motion.div>

      {/* Players */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="grid gap-4">
          {tracks.map((track) => (
            <WaveformPlayer
              key={track.id}
              track={track}
              isPlaying={playingId === track.id}
              onToggle={() => handleToggle(track.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Songs;
