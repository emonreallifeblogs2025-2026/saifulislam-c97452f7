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
    <footer className="border-t border-border/50 py-10 relative overflow-hidden">
      {/* Map background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Cdefs%3E%3Cstyle%3E.land%7Bfill:%23ffffff;opacity:0.15%7D.border%7Bstroke:%23ffffff;stroke-width:0.5;fill:none;opacity:0.1%7D.grid%7Bstroke:%23ffffff;stroke-width:0.3;opacity:0.08%7D%3C/style%3E%3C/defs%3E%3Crect width='800' height='400' fill='none'/%3E%3Cline x1='0' y1='100' x2='800' y2='100' class='grid'/%3E%3Cline x1='0' y1='200' x2='800' y2='200' class='grid'/%3E%3Cline x1='0' y1='300' x2='800' y2='300' class='grid'/%3E%3Cline x1='200' y1='0' x2='200' y2='400' class='grid'/%3E%3Cline x1='400' y1='0' x2='400' y2='400' class='grid'/%3E%3Cline x1='600' y1='0' x2='600' y2='400' class='grid'/%3E%3Cellipse cx='500' cy='160' rx='80' ry='40' class='land'/%3E%3Cellipse cx='480' cy='120' rx='60' ry='50' class='land'/%3E%3Cellipse cx='520' cy='100' rx='40' ry='30' class='land'/%3E%3Cellipse cx='300' cy='150' rx='100' ry='60' class='land'/%3E%3Cellipse cx='280' cy='120' rx='70' ry='40' class='land'/%3E%3Cellipse cx='350' cy='180' rx='50' ry='25' class='land'/%3E%3Cellipse cx='150' cy='170' rx='60' ry='50' class='land'/%3E%3Cellipse cx='650' cy='200' rx='50' ry='30' class='land'/%3E%3Cellipse cx='400' cy='250' rx='30' ry='20' class='land'/%3E%3Cellipse cx='550' cy='280' rx='40' ry='25' class='land'/%3E%3Cellipse cx='200' cy='280' rx='35' ry='45' class='land'/%3E%3Cellipse cx='700' cy='140' rx='45' ry='55' class='land'/%3E%3Ccircle cx='100' cy='100' r='3' fill='%23ffffff' opacity='0.2'/%3E%3Ccircle cx='300' cy='150' r='3' fill='%23ffffff' opacity='0.2'/%3E%3Ccircle cx='500' cy='160' r='3' fill='%23ffffff' opacity='0.2'/%3E%3Ccircle cx='400' cy='200' r='3' fill='%23ffffff' opacity='0.2'/%3E%3Ccircle cx='600' cy='120' r='3' fill='%23ffffff' opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">
            © Saiful Islam 2026 | {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/realliferesearcher" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all text-muted-foreground">
              <Facebook size={14} />
            </a>
            <a href="https://www.tiktok.com/@saifulislam.live?_r=1&_t=ZS-94bFZ1rkh1g" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all text-muted-foreground">
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
