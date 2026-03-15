import { createContext, useContext, useState, useEffect, useMemo, ReactNode } from "react";
import { useContent } from "@/contexts/ContentContext";

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
      hello: "Hello",
      im: "i'm ",
      researcher: "REAL LIFE RESEARCHER",
      writingsBtn: "My Writings",
    },
    stats: { experience: "Years Of Experience", projects: "Projects Complete", insights: "Natural Insights", reviews: "Client Reviews", clients: "Satisfied Clients", longBio: "Have you ever wondered, even after having everything, why does it feel like something is missing? Why do we hide tears behind laughter? Welcome to 'Experience Diary With Saiful'. This is not just a YouTube channel, it is a magical mirror of your unspoken feelings." },
    skills: { title: "My Skills", subtitle: "What I Do Best", design: "Research Skills", development: "Technical Skills", psychologyResearch: "Psychology Research", writing: "Writing", cinematography: "Cinematography", musicComposition: "Music Composition", aiPrompt: "AI Prompt Development", realLifeResearch: "Real Life Research", contentCreation: "Content Creation", videoEditing: "Video Editing" },
    videos: { title: "My Latest Videos", subtitle: "Watch & Learn", myVideos: "My Videos", views: "views" },
    education: { title: "Education & Experience", eduTitle: "Education", expTitle: "Experience", edu1: "Degree in Psychology", edu1Year: "2005 - 2009", edu2: "Advanced Research Methods", edu2Year: "2009 - 2011", edu3: "Cinematography Certificate", edu3Year: "2012 - 2013", edu4: "AI & Machine Learning", edu4Year: "2020 - 2022", exp1: "Psychology Researcher", exp1Year: "5 Years", exp2: "AI Prompt Developer", exp2Year: "3 Years", exp3: "Freelance Writer", exp3Year: "7 Years", exp4: "Cinematographer", exp4Year: "4 Years",
      sectionLabel: "Education & Experience",
      heading: "Empowering Creativity",
      edu3Desc: "Professional cinematography techniques, visual storytelling, and post-production workflows.",
      advancedResearch: "Advanced Research Methods",
      advancedResearchYear: "2014 - 2019",
      advancedResearchDesc: "Advanced qualitative and quantitative research methods for real-life psychological studies.",
      edu4Desc: "AI systems, prompt engineering, and machine learning applications for creative work.",
      exp1Role: "Psychology Researcher",
      exp1Desc: "Deep insights into human behavior and cognitive patterns through rigorous research.",
      exp2Role: "AI Prompt Developer",
      exp2Desc: "Leveraging AI for creative problem-solving and innovative prompt engineering.",
      experienceLabel: "experience",
    },
    portfolio: { title: "Latest Portfolio", subtitle: "Featured Works", p1: "Transforming Ideas into Insights", p2: "AI-Powered Research", p3: "Cinematic Storytelling", p4: "Musical Compositions", p5: "Psychology Case Studies", p6: "Creative Writing Collection" },
    articles: { title: "Articles & Writings", subtitle: "Read My Latest Works" },
    contact: { title: "Get In Touch", subtitle: "Elevate Your Ideas With Me", name: "Your Name", email: "Your Email", message: "Your Message", send: "Send Message", success: "Message sent successfully!", getInTouch: "GET IN TOUCH", contactDesc: "Let's bring your ideas to life. Contact me and let's create something amazing together." },
    footer: { rights: "All Rights Reserved", madeWith: "Crafted with passion" },
    music: { label: "Music", title: "My Music Compositions", subtitle: "Music Composition: Syed Saiful Islam", listenMore: "Listen More Songs" },
    skillCards: { mySkill: "My Skill", elevatedDesigns: "Elevated Designs", personalizedExp: "Personalized Experiences", readMore: "Read More",
      s1Title: "Psychology Research", s1Count: "45 Done", s1Desc: "Deep exploration of human behavior, cognitive patterns, and real-life psychological phenomena.",
      s2Title: "AI & Prompt Design", s2Count: "60 Done", s2Desc: "Leveraging AI prompt engineering for creative problem-solving and innovative automation solutions.",
      s3Title: "Music & Composition", s3Count: "30 Done", s3Desc: "Crafting compelling musical compositions that resonate with emotion and storytelling.",
    },
    writings: { goBack: "Go Back", waitMore: "More chapters coming soon", chapters: "Chapters", author: "Syed Saiful Islam", authorRole: "Real Life Researcher • Writer", comingSoon: "Coming Soon" },
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
      hello: "হ্যালো",
      im: "আমি ",
      researcher: "রিয়েল লাইফ রিসার্চার",
      writingsBtn: "আমার লেখা",
    },
    stats: { experience: "বছরের অভিজ্ঞতা", projects: "প্রকল্প সম্পন্ন", insights: "প্রাকৃতিক অন্তর্দৃষ্টি", reviews: "ক্লায়েন্ট রিভিউ", clients: "সন্তুষ্ট ক্লায়েন্ট", longBio: "কখনও কি ভেবে দেখেছেন, সব থেকেও কেন মনে হয় কী যেন নেই? কেন আমরা হাসির আড়ালে কান্না লুকাই? স্বাগত জানাচ্ছি 'Experience Diary With Saiful'-এ। এটি শুধু একটি ইউটিউব চ্যানেল নয়, এটি আপনার মনের অব্যক্ত অনুভূতির এক জাদুকরী আয়না।\n\nআমরা জানি, জীবন কোনো সোজা রাস্তা নয়। এখানে প্রতি মুহূর্তে আমাদের লড়াই করতে হয়—কখনও নিজের সাথে, কখনও পরিস্থিতির সাথে। কিন্তু কেন এই লড়াই? কেন আমাদের সম্পর্কগুলো ঠুনকো হয়ে যাচ্ছে?" },
    skills: { title: "আমার দক্ষতা", subtitle: "আমি যা সবচেয়ে ভালো করি", design: "গবেষণা দক্ষতা", development: "প্রযুক্তিগত দক্ষতা", psychologyResearch: "সাইকোলজি গবেষণা", writing: "লেখালেখি", cinematography: "সিনেমাটোগ্রাফি", musicComposition: "সংগীত রচনা", aiPrompt: "AI প্রম্পট ডেভেলপমেন্ট", realLifeResearch: "রিয়েল লাইফ গবেষণা", contentCreation: "কন্টেন্ট ক্রিয়েশন", videoEditing: "ভিডিও এডিটিং" },
    videos: { title: "আমার সাম্প্রতিক ভিডিও", subtitle: "দেখুন ও শিখুন", myVideos: "আমার ভিডিও", views: "ভিউ" },
    education: { title: "শিক্ষা ও অভিজ্ঞতা", eduTitle: "শিক্ষা", expTitle: "অভিজ্ঞতা", edu1: "সাইকোলজিতে ডিগ্রি", edu1Year: "২০০৫ - ২০০৯", edu2: "উন্নত গবেষণা পদ্ধতি", edu2Year: "২০০৯ - ২০১১", edu3: "সিনেমাটোগ্রাফি সার্টিফিকেট", edu3Year: "২০১২ - ২০১৩", edu4: "AI ও মেশিন লার্নিং", edu4Year: "২০২০ - ২০২২", exp1: "সাইকোলজি গবেষক", exp1Year: "৫ বছর", exp2: "AI প্রম্পট ডেভেলপার", exp2Year: "৩ বছর", exp3: "ফ্রিল্যান্স লেখক", exp3Year: "৭ বছর", exp4: "সিনেমাটোগ্রাফার", exp4Year: "৪ বছর",
      sectionLabel: "শিক্ষা ও অভিজ্ঞতা",
      heading: "সৃজনশীলতাকে শক্তিশালী করা",
      edu3Desc: "পেশাদার সিনেমাটোগ্রাফি কৌশল, ভিজ্যুয়াল গল্প বলা এবং পোস্ট-প্রোডাকশন ওয়ার্কফ্লো।",
      advancedResearch: "উন্নত গবেষণা পদ্ধতি",
      advancedResearchYear: "২০১৪ - ২০১৯",
      advancedResearchDesc: "বাস্তব জীবনের মনস্তাত্ত্বিক গবেষণার জন্য উন্নত গুণগত ও পরিমাণগত গবেষণা পদ্ধতি।",
      edu4Desc: "AI সিস্টেম, প্রম্পট ইঞ্জিনিয়ারিং এবং সৃজনশীল কাজের জন্য মেশিন লার্নিং অ্যাপ্লিকেশন।",
      exp1Role: "সাইকোলজি গবেষক",
      exp1Desc: "কঠোর গবেষণার মাধ্যমে মানব আচরণ ও জ্ঞানীয় ধরণ সম্পর্কে গভীর অন্তর্দৃষ্টি।",
      exp2Role: "AI প্রম্পট ডেভেলপার",
      exp2Desc: "সৃজনশীল সমস্যা সমাধান এবং উদ্ভাবনী প্রম্পট ইঞ্জিনিয়ারিংয়ের জন্য AI ব্যবহার।",
      experienceLabel: "অভিজ্ঞতা",
    },
    portfolio: { title: "সর্বশেষ পোর্টফোলিও", subtitle: "বৈশিষ্ট্যযুক্ত কাজ", p1: "ধারণাকে অন্তর্দৃষ্টিতে রূপান্তর", p2: "AI-চালিত গবেষণা", p3: "সিনেমাটিক গল্প বলা", p4: "সংগীত রচনা", p5: "সাইকোলজি কেস স্টাডি", p6: "সৃজনশীল লেখা সংগ্রহ" },
    articles: { title: "নিবন্ধ ও লেখালেখি", subtitle: "আমার সর্বশেষ লেখা পড়ুন" },
    contact: { title: "যোগাযোগ করুন", subtitle: "আমার সাথে আপনার ধারণাগুলি উন্নত করুন", name: "আপনার নাম", email: "আপনার ইমেইল", message: "আপনার বার্তা", send: "বার্তা পাঠান", success: "বার্তা সফলভাবে পাঠানো হয়েছে!", getInTouch: "যোগাযোগ করুন", contactDesc: "আপনার ধারণাগুলো বাস্তবে রূপ দিতে যোগাযোগ করুন। একসাথে অসাধারণ কিছু তৈরি করি।" },
    footer: { rights: "সর্বস্বত্ব সংরক্ষিত", madeWith: "আবেগ দিয়ে তৈরি" },
    music: { label: "সংগীত", title: "আমার সংগীত রচনা", subtitle: "মিউজিক কম্পোজিশন: সৈয়দ সাইফুল ইসলাম", listenMore: "আরো গান শুনুন" },
    skillCards: { mySkill: "আমার দক্ষতা", elevatedDesigns: "উন্নত ডিজাইন", personalizedExp: "ব্যক্তিগত অভিজ্ঞতা", readMore: "আরো পড়ুন",
      s1Title: "সাইকোলজি গবেষণা", s1Count: "৪৫ সম্পন্ন", s1Desc: "মানব আচরণ, জ্ঞানীয় ধরণ এবং বাস্তব জীবনের মনস্তাত্ত্বিক ঘটনাগুলোর গভীর অন্বেষণ।",
      s2Title: "AI ও প্রম্পট ডিজাইন", s2Count: "৬০ সম্পন্ন", s2Desc: "সৃজনশীল সমস্যা সমাধান এবং উদ্ভাবনী অটোমেশন সমাধানের জন্য AI প্রম্পট ইঞ্জিনিয়ারিং।",
      s3Title: "সংগীত ও রচনা", s3Count: "৩০ সম্পন্ন", s3Desc: "আবেগ এবং গল্প বলার সাথে অনুরণিত চিত্তাকর্ষক সংগীত রচনা তৈরি।",
    },
    writings: { goBack: "ফিরে যান", waitMore: "আরো পড়তে অপেক্ষা করুন", chapters: "অধ্যায়সমূহ", author: "সৈয়দ সাইফুল ইসলাম", authorRole: "রিয়েল লাইফ রিসার্চার • লেখক", comingSoon: "শীঘ্রই আসছে" },
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", skills: "Compétences", portfolio: "Portfolio", contact: "Contact", letsChat: "Discutons", videos: "Vidéos" },
    hero: { name: "Saiful Islam", titles: "Chercheur en Psychologie • Écrivain • Développeur IA • Compositeur • Cinéaste", bio: "Bonjour, je suis Saiful Islam. Vous êtes-vous déjà demandé pourquoi, même en ayant tout, on a l'impression qu'il manque quelque chose? Bienvenue dans 'Experience Diary With Saiful'.", cta: "Contactez-moi", watchVideo: "Voir la vidéo", myWritings: "Mes écrits", hello: "Bonjour", im: "je suis ", researcher: "CHERCHEUR DE VIE RÉELLE", writingsBtn: "Mes écrits" },
    stats: { experience: "Années d'expérience", projects: "Projets terminés", insights: "Perspectives naturelles", reviews: "Avis clients", clients: "Clients satisfaits", longBio: "Vous êtes-vous déjà demandé, même en ayant tout, pourquoi il semble toujours manquer quelque chose? Bienvenue dans 'Experience Diary With Saiful'." },
    skills: { title: "Mes compétences", subtitle: "Ce que je fais le mieux", design: "Compétences en recherche", development: "Compétences techniques", psychologyResearch: "Recherche en psychologie", writing: "Écriture", cinematography: "Cinématographie", musicComposition: "Composition musicale", aiPrompt: "Développement IA", realLifeResearch: "Recherche sur la vie réelle", contentCreation: "Création de contenu", videoEditing: "Montage vidéo" },
    videos: { title: "Mes dernières vidéos", subtitle: "Regardez et apprenez", myVideos: "Mes vidéos", views: "vues" },
    education: { title: "Éducation et expérience", eduTitle: "Éducation", expTitle: "Expérience", edu1: "Diplôme en psychologie", edu1Year: "2005 - 2009", edu2: "Méthodes de recherche avancées", edu2Year: "2009 - 2011", edu3: "Certificat de cinématographie", edu3Year: "2012 - 2013", edu4: "IA et apprentissage automatique", edu4Year: "2020 - 2022", exp1: "Chercheur en psychologie", exp1Year: "5 ans", exp2: "Développeur IA", exp2Year: "3 ans", exp3: "Écrivain freelance", exp3Year: "7 ans", exp4: "Cinéaste", exp4Year: "4 ans",
      sectionLabel: "Éducation et expérience", heading: "Renforcer la créativité",
      edu3Desc: "Techniques de cinématographie professionnelle, narration visuelle et post-production.",
      advancedResearch: "Méthodes de recherche avancées", advancedResearchYear: "2014 - 2019", advancedResearchDesc: "Méthodes de recherche qualitatives et quantitatives avancées.",
      edu4Desc: "Systèmes d'IA, ingénierie de prompts et applications d'apprentissage automatique.",
      exp1Role: "Chercheur en psychologie", exp1Desc: "Recherche approfondie sur le comportement humain.",
      exp2Role: "Développeur IA", exp2Desc: "Utilisation de l'IA pour la résolution créative.",
      experienceLabel: "expérience",
    },
    portfolio: { title: "Dernier portfolio", subtitle: "Travaux en vedette", p1: "Transformer les idées en perspectives", p2: "Recherche alimentée par l'IA", p3: "Narration cinématique", p4: "Compositions musicales", p5: "Études de cas en psychologie", p6: "Collection d'écriture créative" },
    articles: { title: "Articles et écrits", subtitle: "Lisez mes derniers travaux" },
    contact: { title: "Contactez-moi", subtitle: "Améliorez vos idées avec moi", name: "Votre nom", email: "Votre email", message: "Votre message", send: "Envoyer le message", success: "Message envoyé avec succès!", getInTouch: "CONTACTEZ-MOI", contactDesc: "Contactez-moi pour donner vie à vos idées." },
    footer: { rights: "Tous droits réservés", madeWith: "Créé avec passion" },
    music: { label: "Musique", title: "Mes compositions musicales", subtitle: "Composition musicale: Syed Saiful Islam", listenMore: "Écouter plus" },
    skillCards: { mySkill: "Mes compétences", elevatedDesigns: "Designs élevés", personalizedExp: "Expériences personnalisées", readMore: "Lire la suite",
      s1Title: "Recherche en psychologie", s1Count: "45 terminés", s1Desc: "Exploration approfondie du comportement humain et des phénomènes psychologiques.",
      s2Title: "IA et conception de prompts", s2Count: "60 terminés", s2Desc: "Ingénierie de prompts IA pour la résolution créative de problèmes.",
      s3Title: "Musique et composition", s3Count: "30 terminés", s3Desc: "Compositions musicales captivantes qui résonnent avec émotion.",
    },
    writings: { goBack: "Retour", waitMore: "Plus de chapitres bientôt", chapters: "Chapitres", author: "Syed Saiful Islam", authorRole: "Chercheur • Écrivain", comingSoon: "Bientôt" },
  },
  ar: {
    nav: { home: "الرئيسية", about: "حول", skills: "المهارات", portfolio: "الأعمال", contact: "اتصل", letsChat: "تواصل معنا", videos: "فيديوهات" },
    hero: { name: "سيف الإسلام", titles: "باحث في علم النفس • كاتب • مطور ذكاء اصطناعي • ملحن • مصور سينمائي", bio: "مرحباً، أنا سيف الإسلام. هل تساءلت يوماً لماذا حتى عندما تملك كل شيء، لا يزال يبدو أن شيئاً ما ينقص؟ مرحباً بكم في 'Experience Diary With Saiful'.", cta: "تواصل معي", watchVideo: "شاهد الفيديو", myWritings: "كتاباتي", hello: "مرحباً", im: "أنا ", researcher: "باحث الحياة الواقعية", writingsBtn: "كتاباتي" },
    stats: { experience: "سنوات الخبرة", projects: "مشاريع مكتملة", insights: "رؤى طبيعية", reviews: "مراجعات العملاء", clients: "عملاء راضون", longBio: "هل تساءلت يوماً، حتى عندما تملك كل شيء، لماذا لا يزال يبدو أن شيئاً ما ينقص؟" },
    skills: { title: "مهاراتي", subtitle: "ما أفعله بشكل أفضل", design: "مهارات البحث", development: "المهارات التقنية", psychologyResearch: "بحث علم النفس", writing: "الكتابة", cinematography: "التصوير السينمائي", musicComposition: "التأليف الموسيقي", aiPrompt: "تطوير الذكاء الاصطناعي", realLifeResearch: "بحث الحياة الواقعية", contentCreation: "إنشاء المحتوى", videoEditing: "تحرير الفيديو" },
    videos: { title: "أحدث فيديوهاتي", subtitle: "شاهد وتعلم", myVideos: "فيديوهاتي", views: "مشاهدات" },
    education: { title: "التعليم والخبرة", eduTitle: "التعليم", expTitle: "الخبرة", edu1: "درجة في علم النفس", edu1Year: "٢٠٠٥ - ٢٠٠٩", edu2: "طرق بحث متقدمة", edu2Year: "٢٠٠٩ - ٢٠١١", edu3: "شهادة تصوير سينمائي", edu3Year: "٢٠١٢ - ٢٠١٣", edu4: "الذكاء الاصطناعي", edu4Year: "٢٠٢٠ - ٢٠٢٢", exp1: "باحث في علم النفس", exp1Year: "٥ سنوات", exp2: "مطور ذكاء اصطناعي", exp2Year: "٣ سنوات", exp3: "كاتب مستقل", exp3Year: "٧ سنوات", exp4: "مصور سينمائي", exp4Year: "٤ سنوات",
      sectionLabel: "التعليم والخبرة", heading: "تمكين الإبداع",
      edu3Desc: "تقنيات التصوير السينمائي المهنية.",
      advancedResearch: "طرق بحث متقدمة", advancedResearchYear: "٢٠١٤ - ٢٠١٩", advancedResearchDesc: "طرق بحث متقدمة نوعية وكمية.",
      edu4Desc: "أنظمة الذكاء الاصطناعي وهندسة المطالبات.",
      exp1Role: "باحث في علم النفس", exp1Desc: "رؤى عميقة في السلوك البشري.",
      exp2Role: "مطور ذكاء اصطناعي", exp2Desc: "استخدام الذكاء الاصطناعي للحل الإبداعي.",
      experienceLabel: "خبرة",
    },
    portfolio: { title: "أحدث الأعمال", subtitle: "أعمال مميزة", p1: "تحويل الأفكار إلى رؤى", p2: "بحث مدعوم بالذكاء الاصطناعي", p3: "سرد سينمائي", p4: "مؤلفات موسيقية", p5: "دراسات حالة نفسية", p6: "مجموعة كتابات إبداعية" },
    articles: { title: "مقالات وكتابات", subtitle: "اقرأ أحدث أعمالي" },
    contact: { title: "تواصل معي", subtitle: "ارتقِ بأفكارك معي", name: "اسمك", email: "بريدك الإلكتروني", message: "رسالتك", send: "إرسال الرسالة", success: "تم إرسال الرسالة بنجاح!", getInTouch: "تواصل معي", contactDesc: "تواصل معي لتحويل أفكارك إلى واقع." },
    footer: { rights: "جميع الحقوق محفوظة", madeWith: "صنع بشغف" },
    music: { label: "موسيقى", title: "مؤلفاتي الموسيقية", subtitle: "التأليف الموسيقي: سيد سيف الإسلام", listenMore: "استمع لمزيد" },
    skillCards: { mySkill: "مهاراتي", elevatedDesigns: "تصاميم راقية", personalizedExp: "تجارب شخصية", readMore: "اقرأ المزيد",
      s1Title: "بحث علم النفس", s1Count: "٤٥ مكتمل", s1Desc: "استكشاف عميق للسلوك البشري والأنماط المعرفية.",
      s2Title: "الذكاء الاصطناعي والتصميم", s2Count: "٦٠ مكتمل", s2Desc: "هندسة المطالبات للحلول الإبداعية.",
      s3Title: "الموسيقى والتأليف", s3Count: "٣٠ مكتمل", s3Desc: "مؤلفات موسيقية مقنعة تتردد مع العواطف.",
    },
    writings: { goBack: "العودة", waitMore: "المزيد من الفصول قريباً", chapters: "الفصول", author: "سيد سيف الإسلام", authorRole: "باحث • كاتب", comingSoon: "قريباً" },
  },
  de: {
    nav: { home: "Startseite", about: "Über mich", skills: "Fähigkeiten", portfolio: "Portfolio", contact: "Kontakt", letsChat: "Kontaktieren", videos: "Videos" },
    hero: { name: "Saiful Islam", titles: "Psychologieforscher • Autor • KI-Entwickler • Komponist • Kameramann", bio: "Hallo, ich bin Saiful Islam. Haben Sie sich jemals gefragt, warum es sich so anfühlt, als ob etwas fehlt, selbst wenn man alles hat? Willkommen bei 'Experience Diary With Saiful'.", cta: "Kontaktieren Sie mich", watchVideo: "Video ansehen", myWritings: "Meine Schriften", hello: "Hallo", im: "ich bin ", researcher: "LEBENSERFORSCHER", writingsBtn: "Meine Schriften" },
    stats: { experience: "Jahre Erfahrung", projects: "Abgeschlossene Projekte", insights: "Natürliche Erkenntnisse", reviews: "Kundenbewertungen", clients: "Zufriedene Kunden", longBio: "Haben Sie sich jemals gefragt, warum es sich so anfühlt, als ob etwas fehlt? Willkommen bei 'Experience Diary With Saiful'." },
    skills: { title: "Meine Fähigkeiten", subtitle: "Was ich am besten kann", design: "Forschungsfähigkeiten", development: "Technische Fähigkeiten", psychologyResearch: "Psychologieforschung", writing: "Schreiben", cinematography: "Kameraarbeit", musicComposition: "Musikkomposition", aiPrompt: "KI-Entwicklung", realLifeResearch: "Lebensforschung", contentCreation: "Content-Erstellung", videoEditing: "Videobearbeitung" },
    videos: { title: "Meine neuesten Videos", subtitle: "Ansehen & Lernen", myVideos: "Meine Videos", views: "Aufrufe" },
    education: { title: "Bildung & Erfahrung", eduTitle: "Bildung", expTitle: "Erfahrung", edu1: "Abschluss in Psychologie", edu1Year: "2005 - 2009", edu2: "Fortgeschrittene Forschungsmethoden", edu2Year: "2009 - 2011", edu3: "Kameraarbeit-Zertifikat", edu3Year: "2012 - 2013", edu4: "KI & Maschinelles Lernen", edu4Year: "2020 - 2022", exp1: "Psychologieforscher", exp1Year: "5 Jahre", exp2: "KI-Entwickler", exp2Year: "3 Jahre", exp3: "Freiberuflicher Autor", exp3Year: "7 Jahre", exp4: "Kameramann", exp4Year: "4 Jahre",
      sectionLabel: "Bildung & Erfahrung", heading: "Kreativität stärken",
      edu3Desc: "Professionelle Kameratechniken, visuelles Storytelling und Postproduktion.",
      advancedResearch: "Fortgeschrittene Forschungsmethoden", advancedResearchYear: "2014 - 2019", advancedResearchDesc: "Fortgeschrittene qualitative und quantitative Forschungsmethoden.",
      edu4Desc: "KI-Systeme, Prompt-Engineering und maschinelles Lernen.",
      exp1Role: "Psychologieforscher", exp1Desc: "Tiefe Einblicke in menschliches Verhalten durch rigorose Forschung.",
      exp2Role: "KI-Entwickler", exp2Desc: "Einsatz von KI für kreative Problemlösung.",
      experienceLabel: "Erfahrung",
    },
    portfolio: { title: "Neuestes Portfolio", subtitle: "Ausgewählte Arbeiten", p1: "Ideen in Erkenntnisse verwandeln", p2: "KI-gestützte Forschung", p3: "Filmisches Erzählen", p4: "Musikkompositionen", p5: "Psychologie-Fallstudien", p6: "Kreative Schreibsammlung" },
    articles: { title: "Artikel & Schriften", subtitle: "Lesen Sie meine neuesten Arbeiten" },
    contact: { title: "Kontaktieren Sie mich", subtitle: "Verbessern Sie Ihre Ideen mit mir", name: "Ihr Name", email: "Ihre E-Mail", message: "Ihre Nachricht", send: "Nachricht senden", success: "Nachricht erfolgreich gesendet!", getInTouch: "KONTAKT", contactDesc: "Lassen Sie uns Ihre Ideen zum Leben erwecken." },
    footer: { rights: "Alle Rechte vorbehalten", madeWith: "Mit Leidenschaft erstellt" },
    music: { label: "Musik", title: "Meine Musikkompositionen", subtitle: "Musikkomposition: Syed Saiful Islam", listenMore: "Mehr Songs hören" },
    skillCards: { mySkill: "Meine Fähigkeiten", elevatedDesigns: "Gehobene Designs", personalizedExp: "Persönliche Erfahrungen", readMore: "Weiterlesen",
      s1Title: "Psychologieforschung", s1Count: "45 fertig", s1Desc: "Tiefe Erforschung des menschlichen Verhaltens und psychologischer Phänomene.",
      s2Title: "KI & Prompt-Design", s2Count: "60 fertig", s2Desc: "KI-Prompt-Engineering für kreative Problemlösung.",
      s3Title: "Musik & Komposition", s3Count: "30 fertig", s3Desc: "Fesselnde Musikkompositionen voller Emotion.",
    },
    writings: { goBack: "Zurück", waitMore: "Weitere Kapitel folgen", chapters: "Kapitel", author: "Syed Saiful Islam", authorRole: "Forscher • Autor", comingSoon: "Demnächst" },
  },
  zh: {
    nav: { home: "首页", about: "关于", skills: "技能", portfolio: "作品集", contact: "联系", letsChat: "联系我们", videos: "视频" },
    hero: { name: "赛福尔·伊斯兰", titles: "心理学研究员 • 作家 • AI开发者 • 作曲家 • 摄影师", bio: "你好，我是赛福尔·伊斯兰。你有没有想过，即使拥有一切，为什么仍然感觉缺少什么？欢迎来到'Experience Diary With Saiful'。", cta: "联系我", watchVideo: "观看视频", myWritings: "我的著作", hello: "你好", im: "我是 ", researcher: "现实生活研究员", writingsBtn: "我的著作" },
    stats: { experience: "年经验", projects: "完成项目", insights: "自然洞察", reviews: "客户评价", clients: "满意客户", longBio: "你有没有想过，即使拥有一切，为什么仍然感觉缺少什么？欢迎来到'Experience Diary With Saiful'。" },
    skills: { title: "我的技能", subtitle: "我最擅长的", design: "研究技能", development: "技术技能", psychologyResearch: "心理学研究", writing: "写作", cinematography: "摄影", musicComposition: "音乐创作", aiPrompt: "AI开发", realLifeResearch: "现实生活研究", contentCreation: "内容创作", videoEditing: "视频编辑" },
    videos: { title: "我的最新视频", subtitle: "观看与学习", myVideos: "我的视频", views: "观看" },
    education: { title: "教育与经验", eduTitle: "教育", expTitle: "经验", edu1: "心理学学位", edu1Year: "2005 - 2009", edu2: "高级研究方法", edu2Year: "2009 - 2011", edu3: "摄影证书", edu3Year: "2012 - 2013", edu4: "AI与机器学习", edu4Year: "2020 - 2022", exp1: "心理学研究员", exp1Year: "5年", exp2: "AI开发者", exp2Year: "3年", exp3: "自由撰稿人", exp3Year: "7年", exp4: "摄影师", exp4Year: "4年",
      sectionLabel: "教育与经验", heading: "激发创造力",
      edu3Desc: "专业摄影技术、视觉叙事和后期制作。",
      advancedResearch: "高级研究方法", advancedResearchYear: "2014 - 2019", advancedResearchDesc: "高级定性和定量研究方法。",
      edu4Desc: "AI系统、提示工程和机器学习应用。",
      exp1Role: "心理学研究员", exp1Desc: "通过严谨研究深入了解人类行为。",
      exp2Role: "AI开发者", exp2Desc: "利用AI进行创造性问题解决。",
      experienceLabel: "经验",
    },
    portfolio: { title: "最新作品集", subtitle: "精选作品", p1: "将想法转化为洞察", p2: "AI驱动研究", p3: "电影叙事", p4: "音乐作品", p5: "心理学案例研究", p6: "创意写作集" },
    articles: { title: "文章与著作", subtitle: "阅读我的最新作品" },
    contact: { title: "联系我", subtitle: "与我一起提升您的想法", name: "您的姓名", email: "您的邮箱", message: "您的留言", send: "发送消息", success: "消息发送成功！", getInTouch: "联系我", contactDesc: "让我们一起将您的想法变为现实。" },
    footer: { rights: "版权所有", madeWith: "用热情打造" },
    music: { label: "音乐", title: "我的音乐作品", subtitle: "音乐创作：赛福尔·伊斯兰", listenMore: "听更多歌曲" },
    skillCards: { mySkill: "我的技能", elevatedDesigns: "高级设计", personalizedExp: "个性化体验", readMore: "阅读更多",
      s1Title: "心理学研究", s1Count: "45完成", s1Desc: "深入探索人类行为和心理现象。",
      s2Title: "AI与提示设计", s2Count: "60完成", s2Desc: "利用AI提示工程进行创造性问题解决。",
      s3Title: "音乐与作曲", s3Count: "30完成", s3Desc: "充满情感的引人入胜的音乐作品。",
    },
    writings: { goBack: "返回", waitMore: "更多章节即将推出", chapters: "章节", author: "赛福尔·伊斯兰", authorRole: "研究员 • 作家", comingSoon: "即将推出" },
  },
  ru: {
    nav: { home: "Главная", about: "Обо мне", skills: "Навыки", portfolio: "Портфолио", contact: "Контакт", letsChat: "Связаться", videos: "Видео" },
    hero: { name: "Саифул Ислам", titles: "Исследователь психологии • Писатель • Разработчик ИИ • Композитор • Кинематографист", bio: "Здравствуйте, я Саифул Ислам. Вы когда-нибудь задумывались, почему даже имея всё, кажется, что чего-то не хватает? Добро пожаловать в 'Experience Diary With Saiful'.", cta: "Свяжитесь со мной", watchVideo: "Смотреть видео", myWritings: "Мои сочинения", hello: "Здравствуйте", im: "я ", researcher: "ИССЛЕДОВАТЕЛЬ ЖИЗНИ", writingsBtn: "Мои сочинения" },
    stats: { experience: "Лет опыта", projects: "Завершённых проектов", insights: "Естественных открытий", reviews: "Отзывов клиентов", clients: "Довольных клиентов", longBio: "Вы когда-нибудь задумывались, почему даже имея всё, кажется, что чего-то не хватает? Добро пожаловать в 'Experience Diary With Saiful'." },
    skills: { title: "Мои навыки", subtitle: "Что я делаю лучше всего", design: "Исследовательские навыки", development: "Технические навыки", psychologyResearch: "Исследование психологии", writing: "Писательство", cinematography: "Кинематография", musicComposition: "Музыкальная композиция", aiPrompt: "Разработка ИИ", realLifeResearch: "Исследование реальной жизни", contentCreation: "Создание контента", videoEditing: "Видеомонтаж" },
    videos: { title: "Мои последние видео", subtitle: "Смотрите и учитесь", myVideos: "Мои видео", views: "просмотров" },
    education: { title: "Образование и опыт", eduTitle: "Образование", expTitle: "Опыт", edu1: "Степень по психологии", edu1Year: "2005 - 2009", edu2: "Продвинутые методы исследования", edu2Year: "2009 - 2011", edu3: "Сертификат кинематографии", edu3Year: "2012 - 2013", edu4: "ИИ и машинное обучение", edu4Year: "2020 - 2022", exp1: "Исследователь психологии", exp1Year: "5 лет", exp2: "Разработчик ИИ", exp2Year: "3 года", exp3: "Писатель-фрилансер", exp3Year: "7 лет", exp4: "Кинематографист", exp4Year: "4 года",
      sectionLabel: "Образование и опыт", heading: "Развитие креативности",
      edu3Desc: "Профессиональные методы кинематографии и визуального повествования.",
      advancedResearch: "Продвинутые методы исследования", advancedResearchYear: "2014 - 2019", advancedResearchDesc: "Продвинутые качественные и количественные методы исследования.",
      edu4Desc: "Системы ИИ, инженерия промптов и машинное обучение.",
      exp1Role: "Исследователь психологии", exp1Desc: "Глубокие исследования поведения человека.",
      exp2Role: "Разработчик ИИ", exp2Desc: "Использование ИИ для творческого решения проблем.",
      experienceLabel: "опыт",
    },
    portfolio: { title: "Последнее портфолио", subtitle: "Избранные работы", p1: "Превращение идей в открытия", p2: "ИИ-исследования", p3: "Кинематографическое повествование", p4: "Музыкальные композиции", p5: "Психологические кейсы", p6: "Коллекция творческих текстов" },
    articles: { title: "Статьи и публикации", subtitle: "Читайте мои последние работы" },
    contact: { title: "Свяжитесь со мной", subtitle: "Улучшите свои идеи вместе со мной", name: "Ваше имя", email: "Ваш email", message: "Ваше сообщение", send: "Отправить", success: "Сообщение отправлено!", getInTouch: "СВЯЗАТЬСЯ", contactDesc: "Давайте воплотим ваши идеи в жизнь." },
    footer: { rights: "Все права защищены", madeWith: "Создано с любовью" },
    music: { label: "Музыка", title: "Мои музыкальные композиции", subtitle: "Музыкальная композиция: Саифул Ислам", listenMore: "Слушать ещё" },
    skillCards: { mySkill: "Мои навыки", elevatedDesigns: "Элегантный дизайн", personalizedExp: "Персональный опыт", readMore: "Читать далее",
      s1Title: "Исследование психологии", s1Count: "45 готово", s1Desc: "Глубокое исследование поведения человека и психологических явлений.",
      s2Title: "ИИ и дизайн промптов", s2Count: "60 готово", s2Desc: "Инженерия промптов для творческого решения задач.",
      s3Title: "Музыка и композиция", s3Count: "30 готово", s3Desc: "Захватывающие музыкальные композиции полные эмоций.",
    },
    writings: { goBack: "Назад", waitMore: "Ещё главы скоро", chapters: "Главы", author: "Саифул Ислам", authorRole: "Исследователь • Писатель", comingSoon: "Скоро" },
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
