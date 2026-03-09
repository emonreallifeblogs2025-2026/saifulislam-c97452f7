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
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">
            © Saiful Islam 2026 | {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/realliferesearcher" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all text-muted-foreground">
              <Facebook size={14} />
            </a>
            <a href="https://www.facebook.com/share/1HietSG5n6/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all text-muted-foreground">
              <TikTokIcon />
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a href="#home" className="w-10 h-10 rounded-full border border-border hover:border-primary flex items-center justify-center transition-all hover:-translate-y-1 text-muted-foreground hover:text-primary">
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
