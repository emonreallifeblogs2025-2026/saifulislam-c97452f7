import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

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
    { href: "#services", label: t.nav.services },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#testimonials", label: t.nav.testimonials },
    { href: "#contact", label: t.nav.contact },
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
          {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
            <a key={i} href="#" className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all text-muted-foreground">
              <Icon size={14} />
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "bn" : "en")}
            className="ml-2 px-4 py-2 rounded-full border border-border text-xs font-medium text-muted-foreground hover:border-primary hover:text-primary transition-all"
          >
            {lang === "en" ? "বাংলা" : "EN"}
          </button>
          {/* Hamburger for sidebar */}
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
                <p>📞 <a href="#" className="hover:text-primary transition-colors">+880 1234-567890</a></p>
                <p>✉ <a href="mailto:saiful@example.com" className="hover:text-primary transition-colors">saiful@example.com</a></p>
              </div>
              <div className="flex gap-3 mt-6">
                {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all text-muted-foreground">
                    <Icon size={14} />
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
              <div className="mt-8">
                <button onClick={() => { setLang(lang === "en" ? "bn" : "en"); }} className="px-6 py-3 rounded-full border border-border text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-all">
                  {lang === "en" ? "বাংলা" : "English"}
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
