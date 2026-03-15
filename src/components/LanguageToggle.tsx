import { useState, useRef, useEffect } from "react";
import { useLanguage, Lang } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

const langLabels: Record<string, string> = {
  bn: "বাংলা", en: "EN", hi: "हिन्दी", fr: "FR", ar: "عربي", de: "DE", zh: "中文", ru: "RU",
};

const allLangs: Lang[] = ["bn", "en", "hi", "fr", "ar", "de", "zh", "ru"];

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1 px-3 py-2 rounded-full border border-border bg-background/80 backdrop-blur-xl text-xs font-medium text-foreground hover:border-primary hover:text-primary transition-all">
        {langLabels[lang]}
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full mt-1 right-0 bg-background border border-border rounded-xl shadow-lg overflow-hidden z-50 min-w-[100px] max-h-[280px] overflow-y-auto">
          {allLangs.map((l) => (
            <button key={l} onClick={() => { setLang(l); setOpen(false); }} className={`w-full px-4 py-2.5 text-xs font-medium text-left transition-colors ${lang === l ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"}`}>
              {langLabels[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
