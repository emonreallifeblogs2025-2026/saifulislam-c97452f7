import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUp, Facebook } from "lucide-react";

const TikTokIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.2 8.2 0 0 0 4.76 1.52V6.79a4.84 4.84 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-10 relative overflow-hidden" style={{ background: "hsl(0, 70%, 45%)" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/90 text-sm">
            © Saiful Islam 2026 | {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/realliferesearcher"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
              style={{
                background: "linear-gradient(145deg, hsl(0, 60%, 55%), hsl(0, 70%, 38%))",
                boxShadow: "3px 3px 6px hsl(0, 70%, 30%), -2px -2px 5px hsl(0, 60%, 55%), inset 1px 1px 2px hsl(0, 50%, 65%)",
                border: "1px solid hsl(0, 50%, 60%)",
              }}
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.tiktok.com/@saifulislam.live?_r=1&_t=ZS-94bFZ1rkh1g"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
              style={{
                background: "linear-gradient(145deg, hsl(0, 60%, 55%), hsl(0, 70%, 38%))",
                boxShadow: "3px 3px 6px hsl(0, 70%, 30%), -2px -2px 5px hsl(0, 60%, 55%), inset 1px 1px 2px hsl(0, 50%, 65%)",
                border: "1px solid hsl(0, 50%, 60%)",
              }}
            >
              <TikTokIcon />
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="#home"
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:-translate-y-1 text-white hover:scale-110"
            style={{
              background: "linear-gradient(145deg, hsl(0, 60%, 55%), hsl(0, 70%, 38%))",
              boxShadow: "3px 3px 6px hsl(0, 70%, 30%), -2px -2px 5px hsl(0, 60%, 55%), inset 1px 1px 2px hsl(0, 50%, 65%)",
              border: "1px solid hsl(0, 50%, 60%)",
            }}
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
