import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft } from "lucide-react";

const notFoundText: Record<string, { title: string; desc: string; back: string }> = {
  bn: { title: "পৃষ্ঠা পাওয়া যায়নি", desc: "দুঃখিত! আপনি যে পৃষ্ঠাটি খুঁজছেন তা বিদ্যমান নেই।", back: "হোমে ফিরে যান" },
  en: { title: "Page Not Found", desc: "Sorry! The page you're looking for doesn't exist.", back: "Return to Home" },
  hi: { title: "पृष्ठ नहीं मिला", desc: "क्षमा करें! आप जिस पृष्ठ की तलाश कर रहे हैं वह मौजूद नहीं है।", back: "होम पर लौटें" },
  fr: { title: "Page introuvable", desc: "Désolé ! La page que vous recherchez n'existe pas.", back: "Retour à l'accueil" },
  ar: { title: "الصفحة غير موجودة", desc: "عذراً! الصفحة التي تبحث عنها غير موجودة.", back: "العودة إلى الرئيسية" },
  de: { title: "Seite nicht gefunden", desc: "Entschuldigung! Die gesuchte Seite existiert nicht.", back: "Zur Startseite" },
  zh: { title: "页面未找到", desc: "抱歉！您要找的页面不存在。", back: "返回首页" },
  ru: { title: "Страница не найдена", desc: "Извините! Страница, которую вы ищете, не существует.", back: "Вернуться на главную" },
};

const NotFound = () => {
  const location = useLocation();
  const { lang } = useLanguage();
  const text = notFoundText[lang] || notFoundText.en;

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="mb-4 text-8xl font-black gradient-text">404</h1>
        <p className="mb-2 text-2xl font-bold text-foreground">{text.title}</p>
        <p className="mb-8 text-muted-foreground">{text.desc}</p>
        <Link to="/" className="glass-button inline-flex items-center gap-2">
          <ArrowLeft size={18} />
          {text.back}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
