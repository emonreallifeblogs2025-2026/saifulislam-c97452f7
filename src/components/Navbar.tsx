import { useState, useEffect, useRef } from "react";
import { useLanguage, Lang } from "@/contexts/LanguageContext";
import { Menu, X, Facebook, ChevronDown } from "lucide-react";
import { openExternalLink } from "@/lib/openLink";

const TikTokIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.2 8.2 0 0 0 4.76 1.52V6.79a4.84 4.84 0 0 1-1-.1z"/>
  </svg>
);

const langLabels: Record<string, string> = {
  bn: "বাংলা", en: "EN", hi: "हिन्दी", fr: "FR", ar: "عربي", de: "DE", zh: "中文", ru: "RU",
};

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#videos", label: t.nav.videos },
    { href: "#skills", label: t.nav.skills },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#contact", label: t.nav.contact },
  ];

  const socialLinks = [
    { icon: <Facebook size={14} />, href: "https://www.facebook.com/realliferesearcher" },
    { icon: <TikTokIcon />, href: "https://www.tiktok.com/@saifulislam.live" },
  ];

  const allLangs: Lang[] = ["bn", "en", "hi", "fr", "ar", "de", "zh", "ru"];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-background/50" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex flex-col items-start">
          <a href="#home" className="text-[2.5rem] font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            <span className="text-primary">⟐</span> Saiful
          </a>
          <div className="hidden lg:flex items-center gap-2 -mt-1">
            <a href="/writings" className="text-xs font-medium px-3 py-1 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              {t.hero.writingsBtn}
            </a>
            <a href="/songs" className="text-xs font-medium px-3 py-1 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              {t.hero.songsBtn}
            </a>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 lg:gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-base lg:text-lg text-muted-foreground hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-2">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" onClick={(e) => openExternalLink(s.href, e)} className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all text-muted-foreground">
                {s.icon}
              </a>
            ))}
          </div>

          <div className="relative" ref={langRef}>
            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 px-3 py-2 rounded-full border border-border text-xs font-medium text-foreground hover:border-primary hover:text-primary transition-all">
              {langLabels[lang]}
              <ChevronDown size={12} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute top-full mt-1 right-0 bg-background border border-border rounded-xl shadow-lg overflow-hidden z-50 min-w-[100px] max-h-[280px] overflow-y-auto">
                {allLangs.map((l) => (
                  <button key={l} onClick={() => { setLang(l); setLangOpen(false); }} className={`w-full px-4 py-2.5 text-xs font-medium text-left transition-colors ${lang === l ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"}`}>
                    {langLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="lg:hidden w-10 h-10 rounded-full bg-primary flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={18} className="text-primary-foreground" /> : <Menu size={18} className="text-primary-foreground" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl animate-fade-in">
          <div className="flex justify-end p-6">
            <button onClick={() => setMobileOpen(false)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all">
              <X size={20} />
            </button>
          </div>
          <div className="container mx-auto px-8 py-8 flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <a href="#home" className="text-[2.5rem] font-bold text-foreground flex items-center gap-2 mb-8">
                <span className="text-primary">⟐</span> Saiful
              </a>
              <p className="text-muted-foreground text-sm mb-6 max-w-sm leading-relaxed">
                {t.hero.bio}
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📞 <a href="https://wa.me/8801999708880" className="hover:text-primary transition-colors">+880 1999-708880</a></p>
              </div>
              <div className="flex gap-3 mt-6">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" onClick={(e) => openExternalLink(s.href, e)} className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all text-muted-foreground">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <nav className="flex flex-col gap-4">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-2xl font-semibold text-foreground hover:text-primary transition-colors py-1">
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 flex flex-wrap gap-2">
                {allLangs.map((l) => (
                  <button key={l} onClick={() => setLang(l)} className={`px-4 py-2.5 rounded-full border text-sm font-medium transition-all ${lang === l ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}>
                    {langLabels[l]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
