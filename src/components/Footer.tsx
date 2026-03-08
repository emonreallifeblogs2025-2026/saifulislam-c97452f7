import { useLanguage } from "@/contexts/LanguageContext";
import { Youtube, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="gold-gradient-text text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Saiful
          </a>

          <div className="flex items-center gap-4">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border hover:border-primary flex items-center justify-center transition-colors">
              <Youtube size={16} className="text-muted-foreground hover:text-primary" />
            </a>
            <a href="mailto:contact@saiful.com" className="w-10 h-10 rounded-full border border-border hover:border-primary flex items-center justify-center transition-colors">
              <Mail size={16} className="text-muted-foreground hover:text-primary" />
            </a>
          </div>

          <p className="text-muted-foreground text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
            © 2026 Saiful Islam. {t.footer.rights}.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <a href="#home" className="w-10 h-10 rounded-full border border-border hover:border-primary flex items-center justify-center transition-all hover:-translate-y-1">
            <ArrowUp size={16} className="text-muted-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
