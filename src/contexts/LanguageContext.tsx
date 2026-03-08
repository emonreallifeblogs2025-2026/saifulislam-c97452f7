import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "bn";

const translations = {
  en: {
    nav: { home: "Home", about: "About", skills: "Skills", portfolio: "Portfolio", services: "Services", testimonials: "Testimonials", contact: "Contact", letsChat: "Let's Chat", videos: "Videos" },
    hero: {
      name: "Saiful Islam",
      titles: "Psychology & Real Life Researcher • Writer • AI Prompt Developer • Music & Composition • Cinematographer",
      bio: "A passionate psychology researcher, writer, AI prompt developer, cinematographer, and music composer delivering exceptional creative insights.",
      cta: "Get in Touch",
      watchVideo: "Watch Video",
    },
    stats: {
      experience: "Years Of Experience",
      projects: "Projects Complete",
      insights: "Natural Insights",
      reviews: "Client Reviews",
      clients: "Satisfied Clients",
    },
    skills: {
      title: "My Skills",
      subtitle: "What I Do Best",
      design: "Research Skills",
      development: "Technical Skills",
      psychologyResearch: "Psychology Research",
      writing: "Writing",
      cinematography: "Cinematography",
      musicComposition: "Music Composition",
      aiPrompt: "AI Prompt Development",
      realLifeResearch: "Real Life Research",
    },
    services: {
      title: "Latest Services",
      subtitle: "What I Offer",
      s1Title: "Psychology & Research",
      s1Desc: "Deep insights into human behavior, cognitive patterns, and real-life psychology research that transforms understanding.",
      s2Title: "Writing & Composition",
      s2Desc: "Crafting compelling narratives, articles, and compositions that resonate with audiences across cultures.",
      s3Title: "AI & Cinematography",
      s3Desc: "Leveraging AI prompt engineering and cinematic storytelling to create immersive visual experiences.",
      readMore: "Read More",
    },
    videos: {
      title: "My Latest Videos",
      subtitle: "Watch & Learn",
    },
    education: {
      title: "Education & Experience",
      eduTitle: "Education",
      expTitle: "Experience",
      edu1: "Degree in Psychology",
      edu1Year: "2005 - 2009",
      edu2: "Advanced Research Methods",
      edu2Year: "2009 - 2011",
      edu3: "Cinematography Certificate",
      edu3Year: "2012 - 2013",
      edu4: "AI & Machine Learning",
      edu4Year: "2020 - 2022",
      exp1: "Psychology Researcher",
      exp1Year: "5 Years",
      exp2: "AI Prompt Developer",
      exp2Year: "3 Years",
      exp3: "Freelance Writer",
      exp3Year: "7 Years",
      exp4: "Cinematographer",
      exp4Year: "4 Years",
    },
    portfolio: {
      title: "Latest Portfolio",
      subtitle: "Featured Works",
      p1: "Transforming Ideas into Insights",
      p2: "AI-Powered Research",
      p3: "Cinematic Storytelling",
      p4: "Musical Compositions",
      p5: "Psychology Case Studies",
      p6: "Creative Writing Collection",
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "What Clients Say",
      t1: "Saiful's psychology research provided invaluable insights for our project. His depth of understanding is remarkable.",
      t1Author: "Ahmed Rahman",
      t1Role: "Research Director",
      t2: "An exceptional AI prompt developer. His creative approach to problem-solving is truly innovative.",
      t2Author: "Sarah Chen",
      t2Role: "Tech Lead",
      t3: "His cinematography work brought our vision to life beautifully. Highly recommended!",
      t3Author: "Michael Torres",
      t3Role: "Film Producer",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Elevate Your Ideas With Me",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      success: "Message sent successfully!",
    },
    footer: {
      rights: "All Rights Reserved",
      madeWith: "Crafted with passion",
    },
  },
  bn: {
    nav: { home: "হোম", about: "আমার সম্পর্কে", skills: "দক্ষতা", portfolio: "পোর্টফোলিও", services: "সেবাসমূহ", testimonials: "প্রশংসাপত্র", contact: "যোগাযোগ", letsChat: "যোগাযোগ করুন", videos: "ভিডিও" },
    hero: {
      name: "সাইফুল ইসলাম",
      titles: "সাইকোলজি ও রিয়েল লাইফ রিসার্চার • লেখক • AI প্রম্পট ডেভেলপার • মিউজিক ও কম্পোজিশন • সিনেমাটোগ্রাফার",
      bio: "কখনও কি ভেবে দেখেছেন, সব থেকেও কেন মনে হয় কী যেন নেই? স্বাগত জানাচ্ছি 'Experience Diary With Saiful'-এ। এটি শুধু একটি ইউটিউব চ্যানেল নয়, এটি আপনার মনের অব্যক্ত অনুভূতির এক জাদুকরী আয়না।",
      cta: "যোগাযোগ করুন",
      watchVideo: "ভিডিও দেখুন",
    },
    stats: {
      experience: "বছরের অভিজ্ঞতা",
      projects: "প্রকল্প সম্পন্ন",
      insights: "প্রাকৃতিক অন্তর্দৃষ্টি",
      reviews: "ক্লায়েন্ট রিভিউ",
      clients: "সন্তুষ্ট ক্লায়েন্ট",
    },
    skills: {
      title: "আমার দক্ষতা",
      subtitle: "আমি যা সবচেয়ে ভালো করি",
      design: "গবেষণা দক্ষতা",
      development: "প্রযুক্তিগত দক্ষতা",
      psychologyResearch: "সাইকোলজি গবেষণা",
      writing: "লেখালেখি",
      cinematography: "সিনেমাটোগ্রাফি",
      musicComposition: "সংগীত রচনা",
      aiPrompt: "AI প্রম্পট ডেভেলপমেন্ট",
      realLifeResearch: "রিয়েল লাইফ গবেষণা",
    },
    services: {
      title: "সর্বশেষ সেবাসমূহ",
      subtitle: "আমি যা অফার করি",
      s1Title: "সাইকোলজি ও গবেষণা",
      s1Desc: "মানব আচরণ, জ্ঞানীয় প্যাটার্ন এবং বাস্তব জীবনের মনোবিজ্ঞান গবেষণায় গভীর অন্তর্দৃষ্টি।",
      s2Title: "লেখালেখি ও রচনা",
      s2Desc: "আকর্ষণীয় আখ্যান, নিবন্ধ এবং রচনা তৈরি যা সংস্কৃতি জুড়ে দর্শকদের সাথে অনুরণিত হয়।",
      s3Title: "AI ও সিনেমাটোগ্রাফি",
      s3Desc: "AI প্রম্পট ইঞ্জিনিয়ারিং এবং সিনেমাটিক গল্প বলার মাধ্যমে নিমগ্ন ভিজ্যুয়াল অভিজ্ঞতা তৈরি।",
      readMore: "আরো পড়ুন",
    },
    videos: {
      title: "আমার সাম্প্রতিক ভিডিও",
      subtitle: "দেখুন ও শিখুন",
    },
    education: {
      title: "শিক্ষা ও অভিজ্ঞতা",
      eduTitle: "শিক্ষা",
      expTitle: "অভিজ্ঞতা",
      edu1: "সাইকোলজিতে ডিগ্রি",
      edu1Year: "২০০৫ - ২০০৯",
      edu2: "উন্নত গবেষণা পদ্ধতি",
      edu2Year: "২০০৯ - ২০১১",
      edu3: "সিনেমাটোগ্রাফি সার্টিফিকেট",
      edu3Year: "২০১২ - ২০১৩",
      edu4: "AI ও মেশিন লার্নিং",
      edu4Year: "২০২০ - ২০২২",
      exp1: "সাইকোলজি গবেষক",
      exp1Year: "৫ বছর",
      exp2: "AI প্রম্পট ডেভেলপার",
      exp2Year: "৩ বছর",
      exp3: "ফ্রিল্যান্স লেখক",
      exp3Year: "৭ বছর",
      exp4: "সিনেমাটোগ্রাফার",
      exp4Year: "৪ বছর",
    },
    portfolio: {
      title: "সর্বশেষ পোর্টফোলিও",
      subtitle: "বৈশিষ্ট্যযুক্ত কাজ",
      p1: "ধারণাকে অন্তর্দৃষ্টিতে রূপান্তর",
      p2: "AI-চালিত গবেষণা",
      p3: "সিনেমাটিক গল্প বলা",
      p4: "সংগীত রচনা",
      p5: "সাইকোলজি কেস স্টাডি",
      p6: "সৃজনশীল লেখা সংগ্রহ",
    },
    testimonials: {
      title: "প্রশংসাপত্র",
      subtitle: "ক্লায়েন্টরা কী বলেন",
      t1: "সাইফুলের সাইকোলজি গবেষণা আমাদের প্রকল্পের জন্য অমূল্য অন্তর্দৃষ্টি প্রদান করেছে।",
      t1Author: "আহমেদ রহমান",
      t1Role: "গবেষণা পরিচালক",
      t2: "একজন অসাধারণ AI প্রম্পট ডেভেলপার। তার সৃজনশীল পদ্ধতি সত্যিই উদ্ভাবনী।",
      t2Author: "সারাহ চেন",
      t2Role: "টেক লিড",
      t3: "তার সিনেমাটোগ্রাফি কাজ আমাদের দৃষ্টিভঙ্গিকে সুন্দরভাবে জীবন্ত করেছে।",
      t3Author: "মাইকেল টরেস",
      t3Role: "ফিল্ম প্রযোজক",
    },
    contact: {
      title: "যোগাযোগ করুন",
      subtitle: "আমার সাথে আপনার ধারণাগুলি উন্নত করুন",
      name: "আপনার নাম",
      email: "আপনার ইমেইল",
      message: "আপনার বার্তা",
      send: "বার্তা পাঠান",
      success: "বার্তা সফলভাবে পাঠানো হয়েছে!",
    },
    footer: {
      rights: "সর্বস্বত্ব সংরক্ষিত",
      madeWith: "আবেগ দিয়ে তৈরি",
    },
  },
};

type Translations = typeof translations.en;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.body.setAttribute("data-lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
