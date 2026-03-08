import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">
            © Saiful Islam 2026 | {t.footer.rights}
          </p>
          <div className="flex items-center gap-6 text-muted-foreground text-sm">
            <a href="#" className="hover:text-primary transition-colors">Terms & Condition</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact Us</a>
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
