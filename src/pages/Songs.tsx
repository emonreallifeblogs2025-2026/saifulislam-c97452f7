import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, Music, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import songsCover from "@/assets/songs-cover.png";
import { useState, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";

interface Track {
  id: number;
  title: string;
  soundcloudUrl: string;
}

const tracks: Track[] = [
  { id: 1, title: "Bhool Manush Ke Bhalobasha", soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fsyed-saiful-islam-626619287%2Fbhool-manush-ke-bhalobasha&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false" },
  { id: 2, title: "Bhuler Chhayay", soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fsyed-saiful-islam-626619287%2Fbhuler-chhayay-wav&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false" },
  { id: 3, title: "Love Fact Saiful", soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fsyed-saiful-islam-626619287%2Flove-fact-saiful-wav&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false" },
  { id: 4, title: "সঙ্গী শুধু ছায়া", soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fsyed-saiful-islam-626619287%2Fwav&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false" },
  { id: 5, title: "আয়না সবটা জানে", soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fsyed-saiful-islam-626619287%2Fwav-1&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false" },
  { id: 6, title: "Ma, Tomar Ador Aar Tomar Bhalobasha", soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fsyed-saiful-islam-626619287%2Fma-tomar-ador-aar-tomar&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false" },
  { id: 7, title: "Konna Sudur Amerikay", soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fsyed-saiful-islam-626619287%2Fkonna-sudur-amerikay-wav&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false" },
  { id: 8, title: "গান ৮", soundcloudUrl: "" },
  { id: 9, title: "গান ৯", soundcloudUrl: "" },
  { id: 10, title: "গান ১০", soundcloudUrl: "" },
  { id: 11, title: "গান ১১", soundcloudUrl: "" },
  { id: 12, title: "গান ১২", soundcloudUrl: "" },
  { id: 13, title: "গান ১৩", soundcloudUrl: "" },
  { id: 14, title: "গান ১৪", soundcloudUrl: "" },
  { id: 15, title: "গান ১৫", soundcloudUrl: "" },
  { id: 16, title: "গান ১৬", soundcloudUrl: "" },
  { id: 17, title: "গান ১৭", soundcloudUrl: "" },
  { id: 18, title: "গান ১৮", soundcloudUrl: "" },
  { id: 19, title: "গান ১৯", soundcloudUrl: "" },
  { id: 20, title: "গান ২০", soundcloudUrl: "" },
  { id: 21, title: "গান ২১", soundcloudUrl: "" },
  { id: 22, title: "গান ২২", soundcloudUrl: "" },
  { id: 23, title: "গান ২৩", soundcloudUrl: "" },
  { id: 24, title: "গান ২৪", soundcloudUrl: "" },
  { id: 25, title: "গান ২৫", soundcloudUrl: "" },
  { id: 26, title: "গান ২৬", soundcloudUrl: "" },
  { id: 27, title: "গান ২৭", soundcloudUrl: "" },
  { id: 28, title: "গান ২৮", soundcloudUrl: "" },
  { id: 29, title: "গান ২৯", soundcloudUrl: "" },
  { id: 30, title: "গান ৩০", soundcloudUrl: "" },
];

const PAGE_URL = "https://saifulislam.lovable.app/songs";

// Musical instrument SVG paths (real instruments at 70% scale)
const instrumentPaths = [
  // Treble clef
  "M12 2c-1 0-2 1.5-2 3.5 0 1.5.5 2.8 1.2 3.5-.7 1-1.2 2.3-1.2 3.5 0 2.5 1.5 4.5 3 4.5s3-2 3-4.5c0-1.2-.5-2.5-1.2-3.5.7-.7 1.2-2 1.2-3.5C16 3.5 15 2 14 2h-2z",
  // Quarter note
  "M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z",
  // Eighth notes (beamed)
  "M9 3v10.55A4 4 0 1 0 11 17V7h4v6.55A4 4 0 1 0 17 17V3H9z",
  // Guitar body outline
  "M12 2C9 2 7 4 7 6c0 1.5.8 2.8 2 3.5C7.8 10.8 7 12.5 7 14c0 3.3 2.2 6 5 6s5-2.7 5-6c0-1.5-.8-3.2-2-4.5 1.2-.7 2-2 2-3.5 0-2-2-4-5-4z",
  // Piano key
  "M6 4h12v16H6V4zm3 0v10h2V4H9zm4 0v10h2V4h-2z",
  // Violin
  "M11 2v3c-2 .5-3 2-3 4 0 1 .3 2 1 2.5-.7.8-1 1.8-1 3 0 2.5 1.8 4.5 4 4.5s4-2 4-4.5c0-1.2-.3-2.2-1-3 .7-.5 1-1.5 1-2.5 0-2-1-3.5-3-4V2h-2z",
  // Drum
  "M6 8c0-1.7 2.7-3 6-3s6 1.3 6 3v8c0 1.7-2.7 3-6 3s-6-1.3-6-3V8z",
  // Microphone
  "M12 2a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM7 10a5 5 0 0 0 10 0h-2a3 3 0 0 1-6 0H7zm4 8v4h2v-4h-2z",
  // Staff/music lines with note
  "M4 6h16M4 10h16M4 14h16M4 18h16M12 4v12",
  // Saxophone curve
  "M16 3c-1 0-2 1-2 2v4c0 2-1 3-2 4s-2 2.5-2 4c0 2 1.5 3 3 3s3-1.5 3-3c0-1-.5-2-1-2.5.5-1 1-2 1-3.5V5c0-1-1-2-2-2z",
];

interface FloatingInstrument {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  pathIndex: number;
  rotate: number;
  opacity: number;
}

const generateInstruments = (count: number): FloatingInstrument[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 95 + 2,
    y: Math.random() * 95 + 2,
    size: (Math.random() * 18 + 14) * 0.7, // 70% size
    duration: Math.random() * 6 + 5,
    delay: Math.random() * 8,
    pathIndex: Math.floor(Math.random() * instrumentPaths.length),
    rotate: Math.random() * 60 - 30,
    opacity: Math.random() * 0.3 + 0.15,
  }));

const ShareButtons = ({ track }: { track: Track }) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const shareUrl = PAGE_URL;
  const shareText = `🎵 ${track.title} — Syed Saiful Islam`;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`, "_blank");
  };

  const handleFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, "_blank");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    setCopied(true);
    toast({ title: "লিংক কপি হয়েছে!", description: track.title });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-1.5">
      {/* WhatsApp */}
      <button onClick={handleWhatsApp} className="p-1.5 rounded-full hover:bg-accent transition-colors" title="WhatsApp">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="hsl(var(--gold))">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
      {/* Facebook */}
      <button onClick={handleFacebook} className="p-1.5 rounded-full hover:bg-accent transition-colors" title="Facebook">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="hsl(var(--gold))">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </button>
      {/* Copy Link */}
      <button onClick={handleCopy} className="p-1.5 rounded-full hover:bg-accent transition-colors" title="Copy Link">
        {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} style={{ color: "hsl(var(--gold))" }} />}
      </button>
    </div>
  );
};

const SoundCloudPlayer = ({ track }: { track: Track }) => {
  if (track.soundcloudUrl) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-4 sm:p-5 hover:border-primary/30 transition-all duration-300"
      >
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              {String(track.id).padStart(2, "0")}
            </span>
            <h3 className="text-sm sm:text-base font-semibold text-foreground truncate">{track.title}</h3>
          </div>
          <ShareButtons track={track} />
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
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                {String(track.id).padStart(2, "0")}
              </span>
              <h3 className="text-sm sm:text-base font-semibold text-foreground truncate">{track.title}</h3>
            </div>
            <ShareButtons track={track} />
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
  const instruments = useMemo(() => generateInstruments(35), []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating Instruments Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {instruments.map((inst) => (
          <motion.div
            key={inst.id}
            className="absolute"
            style={{ left: `${inst.x}%`, top: `${inst.y}%` }}
            animate={{
              y: [0, -30, 0, 20, 0],
              x: [0, 10, -10, 5, 0],
              opacity: [0, inst.opacity, inst.opacity, inst.opacity, 0],
              rotate: [inst.rotate, inst.rotate + 20, inst.rotate - 15, inst.rotate + 10, inst.rotate],
              scale: [0.3, 0.7, 0.7, 0.7, 0.3],
            }}
            transition={{
              duration: inst.duration,
              delay: inst.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              width={inst.size}
              height={inst.size}
              viewBox="0 0 24 24"
              fill="hsl(var(--gold))"
              opacity={0.7}
            >
              <path d={instrumentPaths[inst.pathIndex]} />
            </svg>
          </motion.div>
        ))}
      </div>

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
        className="container mx-auto px-4 pt-8 relative z-10"
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
        className="container mx-auto px-4 pt-8 pb-4 text-center relative z-10"
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
      <div className="container mx-auto px-4 py-8 max-w-3xl relative z-10">
        <div className="grid gap-4">
          {tracks.map((track) => (
            <SoundCloudPlayer key={track.id} track={track} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Songs;
