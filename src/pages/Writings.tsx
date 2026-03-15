import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import authorImg from "@/assets/author-writings.png";
import bookCover from "@/assets/book-cover.jpeg";
import LanguageToggle from "@/components/LanguageToggle";

interface FloatingBook {
  id: number; x: number; y: number; size: number; duration: number; delay: number; rotate: number; direction: number;
}

const generateFloatingBooks = (count: number): FloatingBook[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 60 + 40,
    duration: Math.random() * 8 + 10,
    delay: Math.random() * 8,
    rotate: Math.random() * 40 - 20,
    direction: Math.random() > 0.5 ? 1 : -1,
  }));

interface GoldParticle {
  id: number; x: number; y: number; size: number; duration: number; delay: number;
}

const generateGoldParticles = (count: number): GoldParticle[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100, size: Math.random() * 5 + 2, duration: Math.random() * 4 + 3, delay: Math.random() * 5,
  }));

const chapters = [
  { title: "অধ্যায় ১: তুমি কি স্বাধীন, নাকি অ্যালগরিদমের পালিত পশু?", content: `খুব শান্ত হয়ে একবার নিজের দিকে তাকাও। এই যে তুমি এখন এই লেখাটা পড়ছো, তোমার কি মনে হয় এটা তুমি নিজের স্বাধীন ইচ্ছায় বা 'ফ্রি উইল' দিয়ে বেছে নিয়েছো? তোমার ইগো হয়তো চিৎকার করে বলছে, "হ্যাঁ! আমি আমার জীবনের নিয়ন্ত্রক। আমি স্বাধীন।" কিন্তু বাস্তবতার আয়নায় তোমার এই তথাকথিত স্বাধীনতার দিকে তাকালে শিউরে উঠতে হয়। চরম সত্যটি হলো, তুমি স্বাধীন নও; তুমি সিলিকন ভ্যালির এসি রুমে বসে থাকা কিছু মানুষের তৈরি করা কোডের, কিছু অদৃশ্য অ্যালগরিদমের এক সুশৃঙ্খল, পালিত পশু।

সকালে ঘুম ভাঙার পর থেকে রাতে চোখ বন্ধ করা পর্যন্ত তুমি যা ভাবো, যা চাও, যা নিয়ে রাগ করো বা যাকে ভালোবাসো—তার কতটুকু আসলে তোমার নিজস্ব, আর কতটুকু তোমার মস্তিষ্কের ভেতর ইনজেক্ট করে দেওয়া হয়েছে, সেই পার্থক্য করার ক্ষমতা তুমি বহু আগেই হারিয়ে ফেলেছো।

একটু ভেবে দেখো, আজ সকালে ঘুম থেকে উঠে তুমি প্রথম কী ছুঁয়েছিলে? তোমার পাশে শুয়ে থাকা প্রিয় মানুষটির হাত, নাকি তোমার স্মার্টফোনের ঠান্ডা, নিষ্প্রাণ কাঁচের স্ক্রিন? তুমি কি জানো, প্রতিদিন গড়ে তুমি আড়াই হাজার বারের বেশি ওই স্ক্রিনে হাত রাখো? এটা কোনো স্বাভাবিক অভ্যাস নয়, এটা নিখুঁতভাবে ডিজাইন করা এক বায়োকেমিক্যাল দাসত্ব।

মানুষের মস্তিষ্কের গভীরে থাকা রিওয়ার্ড সিস্টেম বা ডোপামিন পাথওয়েকে হ্যাক করে নিয়েছে আধুনিক টেকনোলজি। ডোপামিন আসলে কোনো 'সুখের' হরমোন নয়, এটি হলো 'আকাঙ্ক্ষার' হরমোন। বিবর্তনের ধারায় মানুষকে টিকে থাকার জন্য, খাবার খোঁজার জন্য প্রকৃতি এই ডোপামিন তৈরি করেছিল। কিন্তু আজ? আজ তুমি একজন ল্যাবরেটরির ইঁদুর।

বিখ্যাত সাইকোলজিস্ট বি. এফ. স্কিনারের সেই 'স্কিনার বক্স'-এর ইঁদুরের মতো, যে বোতাম চাপলে খাবার পেত। তোমার হাতের ওই স্মার্টফোনটি হলো পৃথিবীর সবচেয়ে নিখুঁত স্কিনার বক্স, আর তুমি প্রতিবার স্ক্রল করে করে আসলে সেই বোতামটিই চাপছো একটা নতুন নোটিফিকেশন, একটা লাইক, বা একটা সস্তা উত্তেজনার আশায়।

তুমি প্রতিবার স্ক্রল করো, আর তোমার মস্তিষ্কে এক ফোঁটা ডোপামিন ক্ষরণ হয়। তুমি নেশাগ্রস্তের মতো আরও গভীরে তলিয়ে যাও। তুমি ভাবছো তুমি টেকনোলজি ব্যবহার করছো? ভুল। টেকনোলজি তোমাকে ব্যবহার করছে। তুমি এই কর্পোরেট দুনিয়ার প্রোডাক্ট, আর তোমার মনোযোগ, তোমার চেতনা, তোমার সময় হলো তাদের কারেন্সি।

তোমার এই দাসত্ব শুধু যে তোমার সময় কেড়ে নিচ্ছে তা নয়, এটি তোমার আত্মাকে ভেতর থেকে পচিয়ে দিচ্ছে। প্রতিদিন অন্তত এক ঘণ্টা সম্পূর্ণ অফলাইনে থাকো। নিস্তব্ধতার মুখোমুখি বসো। বোরিং বা একঘেয়েমিকে ভয় না পেয়ে তাকে আলিঙ্গন করো, কারণ এই 'বোরডম'-এর শূন্যস্থান থেকেই জন্ম নেয় মানুষের প্রকৃত সৃজনশীলতা।

যেদিন তুমি তোমার নিজের ডোপামিনকে নিয়ন্ত্রণ করতে শিখবে, যেদিন তুমি অ্যালগরিদমের ছকে পা না দিয়ে নিজের ইচ্ছায় নিজের বোরডমকে এনজয় করতে পারবে, সেদিন তুমি প্রকৃত অর্থে 'স্বাধীন' হবে। তুমি কি প্রস্তুত নিজের শেকল ভাঙার এই যুদ্ধে নামতে?` },
  { title: "অধ্যায় ২: তোমার অতীত বলে আসলে কিছুর অস্তিত্ব নেই", content: `ডোপামিনের ডিজিটাল শেকল ছিঁড়ে যখন তুমি প্রথমবার নিজের নিস্তব্ধতার মুখোমুখি বসবে, তখন তোমার পলায়নপর মস্তিষ্ক বাঁচার জন্য ভয়ংকর এক নতুন খেলার আশ্রয় নেবে; আর সেই সাইকোলজিক্যাল এস্কেপ রুট বা পালানোর পথটির নাম হলো—তোমার 'অতীত'।

কগনিটিভ সাইকোলজি এবং স্নায়ুবিজ্ঞানের লেটেস্ট রিসার্চ, বিশেষ করে ড. এলিজাবেথ লফটাসের 'ফলস মেমোরি সিনড্রোম' এবং 'মেমোরি রিকনসোলিডেশন' থিওরি প্রমাণ করে দিয়েছে যে, তুমি যখনই অতীতের কোনো ঘটনা মনে করো, তুমি আসলে মূল ঘটনাটি মনে করছো না; তুমি সর্বশেষ যেদিন ঘটনাটি মনে করেছিলে, তুমি কেবল সেই 'মনে করাটাকে' মনে করছো!

তোমার মস্তিষ্ক একটা মাইক্রোসফট ওয়ার্ড ডকুমেন্টের মতো, যেখানে প্রতিবার তুমি যখন ফাইলটা ওপেন করো, তোমার বর্তমানের আবেগ দিয়ে সেই মেমোরিটাকে একটু একটু করে এডিট করো এবং নতুন করে 'সেভ' করো।

জীববিজ্ঞানের সেলুলার টার্নওভারের নিয়ম অনুযায়ী, আজ থেকে ৭-১০ বছর আগে তোমার শরীরে যে কোষগুলো ছিল, তার একটিও আজ আর বেঁচে নেই। অর্থাৎ, যে মানুষটির সাথে দশ বছর আগে অন্যায় হয়েছিল, ফিজিক্যালি সেই মানুষটির আজ কোনো অস্তিত্বই নেই!

অতীত কোনো ফিক্সড ডেস্টিনেশন নয়, অতীত হলো একটা কাঁচামাটি। আজ থেকে, এই মুহূর্ত থেকে তুমি সচেতনভাবে একজন লেখকের মতো তোমার নিজের অতীতকে রি-রাইট করো! মনে রেখো, মহাবিশ্বের কোনো ঘড়িতে অতীত বা ভবিষ্যৎ বলে কিছু নেই, শুধু এই বর্তমান মুহূর্তটিই হলো একমাত্র ধ্রুব সত্য।` },
  { title: "অধ্যায় ৩: তুমি এই মহাবিশ্বের কোনো উদ্দেশ্য নও, স্রেফ একটি দুর্ঘটনা", content: `তুমি আয়নার সামনে দাঁড়িয়ে নিজের চোখে চোখ রেখে নিজেকে একটা স্পেশাল কিছু ভাবো, তাই না? ছোটবেলা থেকে তোমার পরিবার, সমাজ, ধর্ম আর সস্তা মোটিভেশনাল স্পিকাররা তোমার ব্রেইনওয়াশ করে বুঝিয়েছে যে তুমি এই মহাবিশ্বের এক শ্রেষ্ঠ সৃষ্টি।

কিন্তু অ্যাস্ট্রোফিজিক্স আর কোয়ান্টাম কসমোলজির নির্দয় ডেটার সামনে দাঁড়িয়ে তোমার অস্তিত্ব এই ৯৩ বিলিয়ন আলোকবর্ষ বিস্তৃত, শীতল, অন্ধকার আর সম্পূর্ণ উদাসীন এক মহাবিশ্বের বুকে ভাসমান একটা ধূলিকণার চাইতেও তুচ্ছ!

তুমি কোনো 'মাস্টারপ্ল্যান'-এর অংশ নও; তুমি স্রেফ সাড়ে ছয় কোটি বছর আগে পৃথিবীতে আছড়ে পড়া একটা উল্কাপিণ্ডের অ্যাক্সিডেন্টাল বাই-প্রোডাক্ট!

যদি তোমার জীবনের কোনো ডিফল্ট পারপাস না-ই থাকে, তার মানে হলো—তুমি সম্পূর্ণ স্বাধীন তোমার নিজের জীবনের উদ্দেশ্য নিজে তৈরি করার জন্য! কার্ল সেগানের ভাষায়, "আমরা হলাম মহাবিশ্বের নিজেকে জানার একটি মাধ্যম।" তোমার চোখ দিয়েই মহাবিশ্ব নিজেকে দেখছে।

নিজের অর্থহীনতাকে উদযাপন করো। কারণ যেদিন তুমি তোমার নিজের অস্তিত্বের এই নিরেট অর্থহীনতাকে ভালোবেসে হাসিমুখে মেনে নিতে পারবে, সেদিন মহাবিশ্বের সমস্ত ভয় তোমার পায়ের কাছে এসে আত্মসমর্পণ করবে।` },
  { title: "অধ্যায় ৪: তোমার 'সত্য' আসলে তোমার জন্মস্থানের লটারি", content: `তুমি ভাবছো, তুমি যেটাকে চরম সত্য বলে জানো, সেটাই মহাবিশ্বের একমাত্র ধ্রুব সত্য? তুমি ভাবছো তোমার বিশ্বাস, তোমার খাদ্যাভ্যাস, তোমার পোশাক, তোমার জীবনদর্শন—এগুলো সব তোমার স্বাধীন চিন্তার ফসল?

তুমি যদি আজ এই নির্দিষ্ট দেশের, নির্দিষ্ট শহরের, নির্দিষ্ট ধর্মের একটি পরিবারে জন্ম না নিয়ে, নবম শতাব্দীর স্ক্যান্ডিনেভিয়ান কোনো ভাইকিং পরিবারে জন্ম নিতে, তাহলে তোমার আজকের এই 'পবিত্র সত্য'গুলো কোথায় থাকতো?

তোমার মস্তিষ্ক আসলে একটা ব্ল্যাংক হার্ডড্রাইভ নিয়ে পৃথিবীতে এসেছিল; তুমি যখন কথা বলতে শেখোনি, সেই সময় তোমার পরিবার আর সমাজ তাদের নিজেদের বিশ্বাস, ভয় আর সংস্কারগুলো তোমার ওই খালি হার্ডড্রাইভে একটা ভাইরাসের মতো ইন্সটল করে দিয়েছে।

যেদিন তুমি বলতে পারবে, "আমার সত্য কোনো পরম সত্য নয়, এটি কেবলই একটি ভৌগোলিক এবং কালচারাল দৃষ্টিভঙ্গি মাত্র," সেদিনই তোমার ভেতর থেকে সমস্ত ঘৃণা, সমস্ত জাজমেন্ট চিরতরে ধুয়ে মুছে সাফ হয়ে যাবে।` },
  { title: "অধ্যায় ৫: তোমার ডিপ্রেশন এখন কর্পোরেট দুনিয়ার সবচেয়ে দামি প্রোডাক্ট", content: `তোমার এই বিষণ্ণতা কোনো মহান শিল্প নয়—চরম সত্যটি হলো তোমার এই চোখের জল, তোমার একাকীত্ব, এগুলো হলো আধুনিক কর্পোরেট দুনিয়ার সবচেয়ে দামি, সবচেয়ে লাভজনক প্রোডাক্ট!

তুমি যখন সুখী থাকো, তৃপ্ত থাকো, তখন তুমি ফোনটা পাশে রেখে নিজের জীবন বাঁচো। কিন্তু তুমি যখন হতাশ থাকো, ডিপ্রেসড থাকো, ঠিক তখনই তুমি সবচেয়ে বেশি স্ক্রল করো, সবচেয়ে বেশি শপিং করো।

তোমার এই শূন্যতাকে পুঁজি করেই গড়ে উঠেছে মাল্টি-বিলিয়ন ডলারের ফার্মাসিউটিক্যাল সাম্রাজ্য। পুঁজিবাদের নির্মম ভাষায়—একজন পুরোপুরি সুস্থ মানুষ ইকোনমির কোনো কাজে আসে না, সবচেয়ে লাভজনক হলো সেই মানুষটি, যে চিরকাল অর্ধেক অসুস্থ, অর্ধেক ডিপ্রেসড হয়ে বেঁচে থাকে।

সমাধান হলো—তোমার নিজের কষ্টের ওপর থেকে কর্পোরেট মালিকানা ছিনিয়ে নেওয়া এবং নিজের 'ইমোশনাল সভরেনটি' বা আবেগীয় সার্বভৌমত্ব প্রতিষ্ঠা করা। যেদিন তুমি তোমার দুঃখকে আর বিক্রি হতে দেবে না, সেদিন এই কর্পোরেট অ্যালগরিদম তোমার কাছে চিরতরে হেরে যাবে।` },
  { title: "অধ্যায় ৬", content: "" },
  { title: "অধ্যায় ৭", content: "" },
  { title: "অধ্যায় ৮", content: "" },
  { title: "অধ্যায় ৯", content: "" },
  { title: "অধ্যায় ১০", content: "" },
  { title: "অধ্যায় ১১", content: "" },
  { title: "অধ্যায় ১২", content: "" },
  { title: "অধ্যায় ১৩", content: "" },
  { title: "অধ্যায় ১৪", content: "" },
  { title: "অধ্যায় ১৫", content: "" },
  { title: "অধ্যায় ১৬", content: "" },
];

const Writings = () => {
  const { lang, t } = useLanguage();
  const [openChapter, setOpenChapter] = useState<number | null>(null);
  const [particles] = useState(() => generateGoldParticles(80));

  const [floatingBooks] = useState(() => generateFloatingBooks(12));

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Gold particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div key={p.id} className="absolute rounded-full"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: `hsl(40, 85%, ${48 + p.size * 4}%)` }}
            animate={{ y: [0, -50, -100], opacity: [0, 0.8, 0], scale: [0.4, 1.2, 0.3] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }} />
        ))}

        {/* Floating book covers */}
        {floatingBooks.map((b) => (
          <motion.div
            key={`book-${b.id}`}
            className="absolute pointer-events-none"
            style={{ left: `${b.x}%`, top: `${b.y}%` }}
            animate={{
              x: [0, b.direction * 80, b.direction * -40, 0],
              y: [0, -120, -60, 0],
              opacity: [0, 0.25, 0.2, 0],
              rotate: [b.rotate, b.rotate + 15, b.rotate - 10, b.rotate],
              scale: [0.3, 0.7, 0.5, 0.3],
            }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={bookCover}
              alt=""
              className="rounded-lg shadow-2xl shadow-primary/10"
              style={{ width: b.size, height: "auto", opacity: 0.6 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Back button & Language toggle */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-xl border border-border text-foreground hover:text-primary hover:border-primary transition-all text-sm">
          <ArrowLeft size={16} /> {t.writings.goBack}
        </Link>
      </div>
      <div className="fixed top-6 right-6 z-50">
        <LanguageToggle />
      </div>

      {/* Author photo with glow */}
      <div className="relative z-10 flex flex-col items-center pt-24 pb-8 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow behind image */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(40, 85%, 55%) 0%, hsl(340, 82%, 52%) 40%, transparent 70%)",
              filter: "blur(40px)",
              transform: "scale(1.3)",
            }}
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1.2, 1.4, 1.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <img
            src={authorImg}
            alt="Saiful Islam - Author"
            className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/30"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-6 text-center"
        >
          সৈয়দ সাইফুল ইসলাম
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-sm mt-2 text-center"
        >
          রিয়েল লাইফ রিসার্চার • লেখক
        </motion.p>
      </div>

      {/* Chapters */}
      <div className="relative z-10 container mx-auto max-w-3xl px-4 pb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl sm:text-2xl font-bold text-foreground mb-8 text-center"
        >
          অধ্যায়সমূহ
        </motion.h2>

        <div className="space-y-3">
          {chapters.map((ch, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => ch.content ? setOpenChapter(openChapter === i ? null : i) : undefined}
                className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors ${ch.content ? "hover:bg-secondary/30 cursor-pointer" : "opacity-50 cursor-not-allowed"}`}
              >
                <span className="text-sm sm:text-base font-semibold text-foreground">{ch.title}</span>
                {ch.content ? (
                  openChapter === i ? <ChevronUp size={18} className="text-primary flex-shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground flex-shrink-0" />
                ) : (
                  <span className="text-xs text-muted-foreground flex-shrink-0">শীঘ্রই আসছে</span>
                )}
              </button>
              {openChapter === i && ch.content && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5"
                >
                  <div className="h-px w-full bg-border mb-4" />
                  <div className="text-muted-foreground text-sm leading-[1.9] whitespace-pre-line">
                    {ch.content}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Wait button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            className="glass-button text-sm"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            disabled
          >
            {waitText}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Writings;
