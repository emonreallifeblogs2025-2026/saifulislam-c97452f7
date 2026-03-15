import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "bn" | "en" | "fr" | "ar" | "de" | "zh" | "ru";

const LANG_KEY = "saiful-lang";

const translations: Record<Lang, any> = {
  en: {
    nav: { home: "Home", about: "About", skills: "Skills", portfolio: "Portfolio", contact: "Contact", letsChat: "Let's Chat", videos: "Videos" },
    hero: {
      name: "Saiful Islam",
      titles: "Psychology & Real Life Researcher • Writer • AI Prompt Developer • Music & Composition • Cinematographer",
      bio: "Hello, I'm Saiful Islam. Have you ever wondered why, even when you have everything, it still feels like something is missing? Why do we hide tears behind laughter? Welcome to 'Experience Diary With Saiful'. It's not just a YouTube channel — it's a magical mirror of your unspoken emotions.",
      cta: "Get in Touch",
      watchVideo: "Watch Video",
      myWritings: "My Writings",
    },
    stats: { experience: "Years Of Experience", projects: "Projects Complete", insights: "Natural Insights", reviews: "Client Reviews", clients: "Satisfied Clients" },
    skills: { title: "My Skills", subtitle: "What I Do Best", design: "Research Skills", development: "Technical Skills", psychologyResearch: "Psychology Research", writing: "Writing", cinematography: "Cinematography", musicComposition: "Music Composition", aiPrompt: "AI Prompt Development", realLifeResearch: "Real Life Research" },
    videos: { title: "My Latest Videos", subtitle: "Watch & Learn" },
    education: { title: "Education & Experience", eduTitle: "Education", expTitle: "Experience", edu1: "Degree in Psychology", edu1Year: "2005 - 2009", edu2: "Advanced Research Methods", edu2Year: "2009 - 2011", edu3: "Cinematography Certificate", edu3Year: "2012 - 2013", edu4: "AI & Machine Learning", edu4Year: "2020 - 2022", exp1: "Psychology Researcher", exp1Year: "5 Years", exp2: "AI Prompt Developer", exp2Year: "3 Years", exp3: "Freelance Writer", exp3Year: "7 Years", exp4: "Cinematographer", exp4Year: "4 Years" },
    portfolio: { title: "Latest Portfolio", subtitle: "Featured Works", p1: "Transforming Ideas into Insights", p2: "AI-Powered Research", p3: "Cinematic Storytelling", p4: "Musical Compositions", p5: "Psychology Case Studies", p6: "Creative Writing Collection" },
    articles: { title: "Articles & Writings", subtitle: "Read My Latest Works" },
    contact: { title: "Get In Touch", subtitle: "Elevate Your Ideas With Me", name: "Your Name", email: "Your Email", message: "Your Message", send: "Send Message", success: "Message sent successfully!" },
    footer: { rights: "All Rights Reserved", madeWith: "Crafted with passion" },
  },
  bn: {
    nav: { home: "হোম", about: "আমার সম্পর্কে", skills: "দক্ষতা", portfolio: "পোর্টফোলিও", contact: "যোগাযোগ", letsChat: "যোগাযোগ করুন", videos: "ভিডিও" },
    hero: {
      name: "সাইফুল ইসলাম",
      titles: "সাইকোলজি ও রিয়েল লাইফ রিসার্চার • লেখক • AI প্রম্পট ডেভেলপার • মিউজিক ও কম্পোজিশন • সিনেমাটোগ্রাফার",
      bio: "কখনও কি ভেবে দেখেছেন, সব থেকেও কেন মনে হয় কী যেন নেই? কেন আমরা হাসির আড়ালে কান্না লুকাই? স্বাগত জানাচ্ছি 'Experience Diary With Saiful'-এ। এটি শুধু একটি ইউটিউব চ্যানেল নয়, এটি আপনার মনের অব্যক্ত অনুভূতির এক জাদুকরী আয়না।",
      cta: "যোগাযোগ করুন",
      watchVideo: "ভিডিও দেখুন",
      myWritings: "আমার লেখা",
    },
    stats: { experience: "বছরের অভিজ্ঞতা", projects: "প্রকল্প সম্পন্ন", insights: "প্রাকৃতিক অন্তর্দৃষ্টি", reviews: "ক্লায়েন্ট রিভিউ", clients: "সন্তুষ্ট ক্লায়েন্ট" },
    skills: { title: "আমার দক্ষতা", subtitle: "আমি যা সবচেয়ে ভালো করি", design: "গবেষণা দক্ষতা", development: "প্রযুক্তিগত দক্ষতা", psychologyResearch: "সাইকোলজি গবেষণা", writing: "লেখালেখি", cinematography: "সিনেমাটোগ্রাফি", musicComposition: "সংগীত রচনা", aiPrompt: "AI প্রম্পট ডেভেলপমেন্ট", realLifeResearch: "রিয়েল লাইফ গবেষণা" },
    videos: { title: "আমার সাম্প্রতিক ভিডিও", subtitle: "দেখুন ও শিখুন" },
    education: { title: "শিক্ষা ও অভিজ্ঞতা", eduTitle: "শিক্ষা", expTitle: "অভিজ্ঞতা", edu1: "সাইকোলজিতে ডিগ্রি", edu1Year: "২০০৫ - ২০০৯", edu2: "উন্নত গবেষণা পদ্ধতি", edu2Year: "২০০৯ - ২০১১", edu3: "সিনেমাটোগ্রাফি সার্টিফিকেট", edu3Year: "২০১২ - ২০১৩", edu4: "AI ও মেশিন লার্নিং", edu4Year: "২০২০ - ২০২২", exp1: "সাইকোলজি গবেষক", exp1Year: "৫ বছর", exp2: "AI প্রম্পট ডেভেলপার", exp2Year: "৩ বছর", exp3: "ফ্রিল্যান্স লেখক", exp3Year: "৭ বছর", exp4: "সিনেমাটোগ্রাফার", exp4Year: "৪ বছর" },
    portfolio: { title: "সর্বশেষ পোর্টফোলিও", subtitle: "বৈশিষ্ট্যযুক্ত কাজ", p1: "ধারণাকে অন্তর্দৃষ্টিতে রূপান্তর", p2: "AI-চালিত গবেষণা", p3: "সিনেমাটিক গল্প বলা", p4: "সংগীত রচনা", p5: "সাইকোলজি কেস স্টাডি", p6: "সৃজনশীল লেখা সংগ্রহ" },
    articles: { title: "নিবন্ধ ও লেখালেখি", subtitle: "আমার সর্বশেষ লেখা পড়ুন" },
    contact: { title: "যোগাযোগ করুন", subtitle: "আমার সাথে আপনার ধারণাগুলি উন্নত করুন", name: "আপনার নাম", email: "আপনার ইমেইল", message: "আপনার বার্তা", send: "বার্তা পাঠান", success: "বার্তা সফলভাবে পাঠানো হয়েছে!" },
    footer: { rights: "সর্বস্বত্ব সংরক্ষিত", madeWith: "আবেগ দিয়ে তৈরি" },
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", skills: "Compétences", portfolio: "Portfolio", contact: "Contact", letsChat: "Discutons", videos: "Vidéos" },
    hero: { name: "Saiful Islam", titles: "Chercheur en Psychologie • Écrivain • Développeur IA • Compositeur • Cinéaste", bio: "Bonjour, je suis Saiful Islam. Vous êtes-vous déjà demandé pourquoi, même en ayant tout, on a l'impression qu'il manque quelque chose? Bienvenue dans 'Experience Diary With Saiful'.", cta: "Contactez-moi", watchVideo: "Voir la vidéo", myWritings: "Mes écrits" },
    stats: { experience: "Années d'expérience", projects: "Projets terminés", insights: "Perspectives naturelles", reviews: "Avis clients", clients: "Clients satisfaits" },
    skills: { title: "Mes compétences", subtitle: "Ce que je fais le mieux", design: "Compétences en recherche", development: "Compétences techniques", psychologyResearch: "Recherche en psychologie", writing: "Écriture", cinematography: "Cinématographie", musicComposition: "Composition musicale", aiPrompt: "Développement IA", realLifeResearch: "Recherche sur la vie réelle" },
    videos: { title: "Mes dernières vidéos", subtitle: "Regardez et apprenez" },
    education: { title: "Éducation et expérience", eduTitle: "Éducation", expTitle: "Expérience", edu1: "Diplôme en psychologie", edu1Year: "2005 - 2009", edu2: "Méthodes de recherche avancées", edu2Year: "2009 - 2011", edu3: "Certificat de cinématographie", edu3Year: "2012 - 2013", edu4: "IA et apprentissage automatique", edu4Year: "2020 - 2022", exp1: "Chercheur en psychologie", exp1Year: "5 ans", exp2: "Développeur IA", exp2Year: "3 ans", exp3: "Écrivain freelance", exp3Year: "7 ans", exp4: "Cinéaste", exp4Year: "4 ans" },
    portfolio: { title: "Dernier portfolio", subtitle: "Travaux en vedette", p1: "Transformer les idées en perspectives", p2: "Recherche alimentée par l'IA", p3: "Narration cinématique", p4: "Compositions musicales", p5: "Études de cas en psychologie", p6: "Collection d'écriture créative" },
    articles: { title: "Articles et écrits", subtitle: "Lisez mes derniers travaux" },
    contact: { title: "Contactez-moi", subtitle: "Améliorez vos idées avec moi", name: "Votre nom", email: "Votre email", message: "Votre message", send: "Envoyer le message", success: "Message envoyé avec succès!" },
    footer: { rights: "Tous droits réservés", madeWith: "Créé avec passion" },
  },
  ar: {
    nav: { home: "الرئيسية", about: "حول", skills: "المهارات", portfolio: "الأعمال", contact: "اتصل", letsChat: "تواصل معنا", videos: "فيديوهات" },
    hero: { name: "سيف الإسلام", titles: "باحث في علم النفس • كاتب • مطور ذكاء اصطناعي • ملحن • مصور سينمائي", bio: "مرحباً، أنا سيف الإسلام. هل تساءلت يوماً لماذا حتى عندما تملك كل شيء، لا يزال يبدو أن شيئاً ما ينقص؟ مرحباً بكم في 'Experience Diary With Saiful'.", cta: "تواصل معي", watchVideo: "شاهد الفيديو", myWritings: "كتاباتي" },
    stats: { experience: "سنوات الخبرة", projects: "مشاريع مكتملة", insights: "رؤى طبيعية", reviews: "مراجعات العملاء", clients: "عملاء راضون" },
    skills: { title: "مهاراتي", subtitle: "ما أفعله بشكل أفضل", design: "مهارات البحث", development: "المهارات التقنية", psychologyResearch: "بحث علم النفس", writing: "الكتابة", cinematography: "التصوير السينمائي", musicComposition: "التأليف الموسيقي", aiPrompt: "تطوير الذكاء الاصطناعي", realLifeResearch: "بحث الحياة الواقعية" },
    videos: { title: "أحدث فيديوهاتي", subtitle: "شاهد وتعلم" },
    education: { title: "التعليم والخبرة", eduTitle: "التعليم", expTitle: "الخبرة", edu1: "درجة في علم النفس", edu1Year: "٢٠٠٥ - ٢٠٠٩", edu2: "طرق بحث متقدمة", edu2Year: "٢٠٠٩ - ٢٠١١", edu3: "شهادة تصوير سينمائي", edu3Year: "٢٠١٢ - ٢٠١٣", edu4: "الذكاء الاصطناعي", edu4Year: "٢٠٢٠ - ٢٠٢٢", exp1: "باحث في علم النفس", exp1Year: "٥ سنوات", exp2: "مطور ذكاء اصطناعي", exp2Year: "٣ سنوات", exp3: "كاتب مستقل", exp3Year: "٧ سنوات", exp4: "مصور سينمائي", exp4Year: "٤ سنوات" },
    portfolio: { title: "أحدث الأعمال", subtitle: "أعمال مميزة", p1: "تحويل الأفكار إلى رؤى", p2: "بحث مدعوم بالذكاء الاصطناعي", p3: "سرد سينمائي", p4: "مؤلفات موسيقية", p5: "دراسات حالة نفسية", p6: "مجموعة كتابات إبداعية" },
    articles: { title: "مقالات وكتابات", subtitle: "اقرأ أحدث أعمالي" },
    contact: { title: "تواصل معي", subtitle: "ارتقِ بأفكارك معي", name: "اسمك", email: "بريدك الإلكتروني", message: "رسالتك", send: "إرسال الرسالة", success: "تم إرسال الرسالة بنجاح!" },
    footer: { rights: "جميع الحقوق محفوظة", madeWith: "صنع بشغف" },
  },
  de: {
    nav: { home: "Startseite", about: "Über mich", skills: "Fähigkeiten", portfolio: "Portfolio", contact: "Kontakt", letsChat: "Kontaktieren", videos: "Videos" },
    hero: { name: "Saiful Islam", titles: "Psychologieforscher • Autor • KI-Entwickler • Komponist • Kameramann", bio: "Hallo, ich bin Saiful Islam. Haben Sie sich jemals gefragt, warum es sich so anfühlt, als ob etwas fehlt, selbst wenn man alles hat? Willkommen bei 'Experience Diary With Saiful'.", cta: "Kontaktieren Sie mich", watchVideo: "Video ansehen", myWritings: "Meine Schriften" },
    stats: { experience: "Jahre Erfahrung", projects: "Abgeschlossene Projekte", insights: "Natürliche Erkenntnisse", reviews: "Kundenbewertungen", clients: "Zufriedene Kunden" },
    skills: { title: "Meine Fähigkeiten", subtitle: "Was ich am besten kann", design: "Forschungsfähigkeiten", development: "Technische Fähigkeiten", psychologyResearch: "Psychologieforschung", writing: "Schreiben", cinematography: "Kameraarbeit", musicComposition: "Musikkomposition", aiPrompt: "KI-Entwicklung", realLifeResearch: "Lebensforschung" },
    videos: { title: "Meine neuesten Videos", subtitle: "Ansehen & Lernen" },
    education: { title: "Bildung & Erfahrung", eduTitle: "Bildung", expTitle: "Erfahrung", edu1: "Abschluss in Psychologie", edu1Year: "2005 - 2009", edu2: "Fortgeschrittene Forschungsmethoden", edu2Year: "2009 - 2011", edu3: "Kameraarbeit-Zertifikat", edu3Year: "2012 - 2013", edu4: "KI & Maschinelles Lernen", edu4Year: "2020 - 2022", exp1: "Psychologieforscher", exp1Year: "5 Jahre", exp2: "KI-Entwickler", exp2Year: "3 Jahre", exp3: "Freiberuflicher Autor", exp3Year: "7 Jahre", exp4: "Kameramann", exp4Year: "4 Jahre" },
    portfolio: { title: "Neuestes Portfolio", subtitle: "Ausgewählte Arbeiten", p1: "Ideen in Erkenntnisse verwandeln", p2: "KI-gestützte Forschung", p3: "Filmisches Erzählen", p4: "Musikkompositionen", p5: "Psychologie-Fallstudien", p6: "Kreative Schreibsammlung" },
    articles: { title: "Artikel & Schriften", subtitle: "Lesen Sie meine neuesten Arbeiten" },
    contact: { title: "Kontaktieren Sie mich", subtitle: "Verbessern Sie Ihre Ideen mit mir", name: "Ihr Name", email: "Ihre E-Mail", message: "Ihre Nachricht", send: "Nachricht senden", success: "Nachricht erfolgreich gesendet!" },
    footer: { rights: "Alle Rechte vorbehalten", madeWith: "Mit Leidenschaft erstellt" },
  },
  zh: {
    nav: { home: "首页", about: "关于", skills: "技能", portfolio: "作品集", contact: "联系", letsChat: "联系我们", videos: "视频" },
    hero: { name: "赛福尔·伊斯兰", titles: "心理学研究员 • 作家 • AI开发者 • 作曲家 • 摄影师", bio: "你好，我是赛福尔·伊斯兰。你有没有想过，即使拥有一切，为什么仍然感觉缺少什么？欢迎来到'Experience Diary With Saiful'。", cta: "联系我", watchVideo: "观看视频", myWritings: "我的著作" },
    stats: { experience: "年经验", projects: "完成项目", insights: "自然洞察", reviews: "客户评价", clients: "满意客户" },
    skills: { title: "我的技能", subtitle: "我最擅长的", design: "研究技能", development: "技术技能", psychologyResearch: "心理学研究", writing: "写作", cinematography: "摄影", musicComposition: "音乐创作", aiPrompt: "AI开发", realLifeResearch: "现实生活研究" },
    videos: { title: "我的最新视频", subtitle: "观看与学习" },
    education: { title: "教育与经验", eduTitle: "教育", expTitle: "经验", edu1: "心理学学位", edu1Year: "2005 - 2009", edu2: "高级研究方法", edu2Year: "2009 - 2011", edu3: "摄影证书", edu3Year: "2012 - 2013", edu4: "AI与机器学习", edu4Year: "2020 - 2022", exp1: "心理学研究员", exp1Year: "5年", exp2: "AI开发者", exp2Year: "3年", exp3: "自由撰稿人", exp3Year: "7年", exp4: "摄影师", exp4Year: "4年" },
    portfolio: { title: "最新作品集", subtitle: "精选作品", p1: "将想法转化为洞察", p2: "AI驱动研究", p3: "电影叙事", p4: "音乐作品", p5: "心理学案例研究", p6: "创意写作集" },
    articles: { title: "文章与著作", subtitle: "阅读我的最新作品" },
    contact: { title: "联系我", subtitle: "与我一起提升您的想法", name: "您的姓名", email: "您的邮箱", message: "您的留言", send: "发送消息", success: "消息发送成功！" },
    footer: { rights: "版权所有", madeWith: "用热情打造" },
  },
  ru: {
    nav: { home: "Главная", about: "Обо мне", skills: "Навыки", portfolio: "Портфолио", contact: "Контакт", letsChat: "Связаться", videos: "Видео" },
    hero: { name: "Саифул Ислам", titles: "Исследователь психологии • Писатель • Разработчик ИИ • Композитор • Кинематографист", bio: "Здравствуйте, я Саифул Ислам. Вы когда-нибудь задумывались, почему даже имея всё, кажется, что чего-то не хватает? Добро пожаловать в 'Experience Diary With Saiful'.", cta: "Свяжитесь со мной", watchVideo: "Смотреть видео", myWritings: "Мои сочинения" },
    stats: { experience: "Лет опыта", projects: "Завершённых проектов", insights: "Естественных открытий", reviews: "Отзывов клиентов", clients: "Довольных клиентов" },
    skills: { title: "Мои навыки", subtitle: "Что я делаю лучше всего", design: "Исследовательские навыки", development: "Технические навыки", psychologyResearch: "Исследование психологии", writing: "Писательство", cinematography: "Кинематография", musicComposition: "Музыкальная композиция", aiPrompt: "Разработка ИИ", realLifeResearch: "Исследование реальной жизни" },
    videos: { title: "Мои последние видео", subtitle: "Смотрите и учитесь" },
    education: { title: "Образование и опыт", eduTitle: "Образование", expTitle: "Опыт", edu1: "Степень по психологии", edu1Year: "2005 - 2009", edu2: "Продвинутые методы исследования", edu2Year: "2009 - 2011", edu3: "Сертификат кинематографии", edu3Year: "2012 - 2013", edu4: "ИИ и машинное обучение", edu4Year: "2020 - 2022", exp1: "Исследователь психологии", exp1Year: "5 лет", exp2: "Разработчик ИИ", exp2Year: "3 года", exp3: "Писатель-фрилансер", exp3Year: "7 лет", exp4: "Кинематографист", exp4Year: "4 года" },
    portfolio: { title: "Последнее портфолио", subtitle: "Избранные работы", p1: "Превращение идей в открытия", p2: "ИИ-исследования", p3: "Кинематографическое повествование", p4: "Музыкальные композиции", p5: "Психологические кейсы", p6: "Коллекция творческих текстов" },
    articles: { title: "Статьи и публикации", subtitle: "Читайте мои последние работы" },
    contact: { title: "Свяжитесь со мной", subtitle: "Улучшите свои идеи вместе со мной", name: "Ваше имя", email: "Ваш email", message: "Ваше сообщение", send: "Отправить", success: "Сообщение отправлено!" },
    footer: { rights: "Все права защищены", madeWith: "Создано с любовью" },
  },
};

type Translations = typeof translations.en;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "bn",
  setLang: () => {},
  t: translations.bn,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && saved in translations) return saved as Lang;
    return "bn";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(LANG_KEY, l);
  };

  useEffect(() => {
    document.body.setAttribute("data-lang", lang);
    if (lang === "ar") {
      document.body.setAttribute("dir", "rtl");
    } else {
      document.body.setAttribute("dir", "ltr");
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
