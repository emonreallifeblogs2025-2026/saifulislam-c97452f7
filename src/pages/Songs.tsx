import { useLanguage, Lang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, Music, Copy, Check, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import songsCover from "@/assets/songs-cover.png";
import { useState } from "react";
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

// Musical instrument unicode symbols for CSS-only animation
const instrumentSymbols = ["♪", "♫", "♬", "🎵", "🎶", "🎸", "🎹", "🎺", "🎻", "🥁", "🎷", "🎤", "🎼", "♩", "𝄞"];

const langLabels: Record<string, string> = {
  bn: "বাংলা", en: "EN", hi: "हिन्दी", fr: "FR", ar: "عربي", de: "DE", zh: "中文", ru: "RU",
};
const allLangs: Lang[] = ["bn", "en", "hi", "fr", "ar", "de", "zh", "ru"];

const ShareButtons = ({ track, t }: { track: Track; t: any }) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const shareUrl = PAGE_URL;
  const shareText = `🎵 ${track.title} — ${t.songs?.artist || "Syed Saiful Islam"}`;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`, "_blank");
  };

  const handleFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, "_blank");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    setCopied(true);
    toast({ title: t.songs?.linkCopied || "Link copied!", description: track.title });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-1.5">
      <button onClick={handleWhatsApp} className="p-1.5 rounded-full hover:bg-accent/20 transition-colors" title="WhatsApp">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="hsl(var(--destructive))">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
      <button onClick={handleFacebook} className="p-1.5 rounded-full hover:bg-accent/20 transition-colors" title="Facebook">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="hsl(var(--destructive))">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </button>
      <button onClick={handleCopy} className="p-1.5 rounded-full hover:bg-accent/20 transition-colors" title="Copy Link">
        {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-destructive" />}
      </button>
    </div>
  );
};

const SoundCloudPlayer = memo(({ track, t }: { track: Track; t: any }) => {
  const [loadPlayer, setLoadPlayer] = useState(false);

  useEffect(() => {
    if (!track.soundcloudUrl) return;
    const timer = setTimeout(() => setLoadPlayer(true), 100);
    return () => clearTimeout(timer);
  }, [track.soundcloudUrl]);

  if (track.soundcloudUrl) {
    return (
      <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-4 sm:p-5 hover:border-primary/30 transition-all duration-300">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              {String(track.id).padStart(2, "0")}
            </span>
            <h3 className="text-sm sm:text-base font-semibold text-foreground truncate">{track.title}</h3>
          </div>
          <ShareButtons track={track} t={t} />
        </div>
        {loadPlayer ? (
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            loading="lazy"
            src={track.soundcloudUrl}
            className="rounded-lg"
          />
        ) : (
          <div className="w-full h-[166px] rounded-lg bg-muted animate-pulse flex items-center justify-center">
            <Music size={24} className="text-muted-foreground" />
          </div>
        )}
        <p className="text-xs text-muted-foreground mt-2">{t.songs?.artist || "Syed Saiful Islam"}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-4 sm:p-5 opacity-60">
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
            <ShareButtons track={track} t={t} />
          </div>
          <p className="text-xs text-muted-foreground">{t.songs?.comingSoon || "Coming soon..."}</p>
          <p className="text-xs text-muted-foreground mt-1">{t.songs?.artist || "Syed Saiful Islam"}</p>
        </div>
      </div>
    </div>
  );
};

// CSS-only floating instruments background
const FloatingInstrumentsCSS = () => (
  <>
    <style>{`
      @keyframes float-instrument {
        0% { opacity: 0; transform: translateY(20px) scale(0.5) rotate(0deg); }
        15% { opacity: var(--inst-opacity); }
        50% { transform: translateY(-30px) scale(0.85) rotate(15deg); }
        85% { opacity: var(--inst-opacity); }
        100% { opacity: 0; transform: translateY(-60px) scale(0.5) rotate(-10deg); }
      }
      .floating-inst {
        position: absolute;
        animation: float-instrument var(--inst-dur) var(--inst-delay) ease-in-out infinite;
        font-size: var(--inst-size);
        opacity: 0;
        pointer-events: none;
        will-change: transform, opacity;
        color: hsl(43, 74%, 49%);
        filter: drop-shadow(0 0 4px hsl(43, 74%, 49%, 0.3));
      }
    `}</style>
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {Array.from({ length: 35 }, (_, i) => {
        const symbol = instrumentSymbols[i % instrumentSymbols.length];
        const left = ((i * 37 + 13) % 90) + 3;
        const top = ((i * 53 + 7) % 85) + 5;
        const dur = 6 + (i % 5) * 1.5;
        const delay = (i % 7) * 1.2;
        const size = 16 + (i % 4) * 6;
        const opacity = 0.15 + (i % 3) * 0.1;
        return (
          <span
            key={i}
            className="floating-inst"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              "--inst-dur": `${dur}s`,
              "--inst-delay": `${delay}s`,
              "--inst-size": `${size}px`,
              "--inst-opacity": opacity,
            } as React.CSSProperties}
          >
            {symbol}
          </span>
        );
      })}
    </div>
  </>
);

const Songs = () => {
  const { t, lang, setLang } = useLanguage();
  const [pageShareCopied, setPageShareCopied] = useState(false);
  const { toast } = useToast();

  const pageShareText = `🎵 ${t.songs?.pageTitle || "আমার সুর"} — ${t.songs?.artist || "Syed Saiful Islam"}`;

  const handlePageWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(pageShareText + " " + PAGE_URL)}`, "_blank");
  };
  const handlePageMessenger = () => {
    window.open(`https://www.facebook.com/dialog/send?link=${encodeURIComponent(PAGE_URL)}&app_id=966242223397117&redirect_uri=${encodeURIComponent(PAGE_URL)}`, "_blank");
  };
  const handlePageCopy = async () => {
    await navigator.clipboard.writeText(PAGE_URL);
    setPageShareCopied(true);
    toast({ title: t.songs?.linkCopied || "Link copied!" });
    setTimeout(() => setPageShareCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingInstrumentsCSS />

      {/* Header with Language Bar */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-3 py-3 flex items-center justify-between gap-2">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm font-medium flex-shrink-0"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">{t.writings.goBack}</span>
          </Link>
          
          <div className="flex items-center gap-0.5 sm:gap-1 flex-wrap justify-end">
            {allLangs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium transition-all whitespace-nowrap ${
                  lang === l
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 pt-8 relative z-10"
      >
        <div className="relative rounded-2xl overflow-hidden max-w-3xl mx-auto shadow-2xl shadow-background/50">
          <img
            src={songsCover}
            alt={t.songs?.pageTitle || "My Melodies"}
            className="w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="container mx-auto px-4 pt-8 pb-4 text-center relative z-10"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <Music size={24} className="text-primary" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            {t.songs?.pageTitle || "আমার সুর"}
          </h1>
        </div>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-lg mx-auto mb-5">
          {t.songs?.pageSubtitle || "কম্পোজিশন ও রচিত গান সমূহ"}
        </p>

        {/* Full Page Share Buttons */}
        <div className="flex items-center justify-center gap-3">
          <span className="text-xs text-muted-foreground mr-1">
            <Share2 size={14} className="inline -mt-0.5 mr-1" />
            {t.songs?.sharePageLabel || "শেয়ার করুন"}:
          </span>
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePageWhatsApp}
            className="p-2.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 transition-colors"
            title="WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePageMessenger}
            className="p-2.5 rounded-full bg-[#0099FF]/15 hover:bg-[#0099FF]/25 transition-colors"
            title="Messenger"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#0099FF">
              <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.732 8.2l3.131 3.259L19.752 8.2l-6.559 6.763z" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePageCopy}
            className="p-2.5 rounded-full bg-primary/15 hover:bg-primary/25 transition-colors"
            title="Copy Link"
          >
            {pageShareCopied ? <Check size={20} className="text-green-500" /> : <Copy size={20} className="text-primary" />}
          </motion.button>
        </div>
      </motion.div>

      {/* Players */}
      <div className="container mx-auto px-4 py-8 max-w-3xl relative z-10">
        <div className="grid gap-4">
          {tracks.map((track) => (
            <SoundCloudPlayer key={track.id} track={track} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Songs;
