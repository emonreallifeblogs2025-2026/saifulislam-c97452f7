import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Facebook } from "lucide-react";

const TikTokIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.2 8.2 0 0 0 4.76 1.52V6.79a4.84 4.84 0 0 1-1-.1z"/>
  </svg>
);

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
    { icon: <TikTokIcon />, href: "https://www.facebook.com/share/1HietSG5n6/?mibextid=wwXIfr" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-background/50" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-foreground flex items-center gap-2">
          <span className="text-primary">⟐</span> Saiful
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          {socialLinks.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all text-muted-foreground">
              {s.icon}
            </a>
          ))}
          <div className="ml-2 flex gap-1">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-2 rounded-l-full border text-xs font-medium transition-all ${lang === "en" ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("bn")}
              className={`px-3 py-2 rounded-r-full border text-xs font-medium transition-all ${lang === "bn" ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}
            >
              বাংলা
            </button>
          </div>
          <button className="ml-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={18} className="text-primary-foreground" /> : <Menu size={18} className="text-primary-foreground" />}
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile / Sidebar menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl animate-fade-in">
          <div className="flex justify-end p-6">
            <button onClick={() => setMobileOpen(false)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all">
              <X size={20} />
            </button>
          </div>
          <div className="container mx-auto px-8 py-8 flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <a href="#home" className="text-2xl font-bold text-foreground flex items-center gap-2 mb-8">
                <span className="text-primary">⟐</span> Saiful
              </a>
              <p className="text-muted-foreground text-sm mb-6 max-w-sm leading-relaxed">
                Freelancer delivering exceptional insights in psychology, writing, AI, music, and cinematography.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📞 <a href="https://wa.me/8801999708880" className="hover:text-primary transition-colors">+880 1999-708880</a></p>
              </div>
              <div className="flex gap-3 mt-6">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all text-muted-foreground">
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
              <div className="mt-8 flex gap-2">
                <button onClick={() => setLang("en")} className={`px-6 py-3 rounded-full border text-sm font-medium transition-all ${lang === "en" ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}>
                  English
                </button>
                <button onClick={() => setLang("bn")} className={`px-6 py-3 rounded-full border text-sm font-medium transition-all ${lang === "bn" ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}>
                  বাংলা
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
