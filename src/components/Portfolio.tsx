import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { staggerContainer, fadeUpItem } from "@/lib/animations";
import { TiltCard, FloatingOrbs, AnimatedTitle } from "@/components/AnimatedSection";

const articlesBn = [
  `আজ আমি আপনাদের কোনো রূপকথার গল্প শোনাতে আসিনি, এসেছি আপনাদের ঘুমন্ত মগজে একটি শব্দবোমা ফাটাতে! আপনারা যারা আজ এখানে খুব শান্তিতে বসে আছেন, বুকে হাত দিয়ে একবার নিজেদের প্রশ্ন করুন তো—আপনারা কি সত্যিই বেঁচে আছেন? নাকি শ্বাস নেওয়া আর খাবার হজম করাকেই আপনারা 'বেঁচে থাকা' বলে ধরে নিয়েছেন?

প্রতিদিন সকালে উঠে অফিসে যাওয়া, সন্ধ্যায় ক্লান্ত হয়ে ঘরে ফেরা, রাতে টিভি দেখে ঘুমিয়ে পড়া—এটাই কি জীবন? এই যান্ত্রিক রুটিনের মধ্যে কখনো কি একটু থেমে ভেবেছেন, আমি আসলে কী করছি? কেন করছি? আমাদের মগজ পচে যাচ্ছে অলসতায়, ভয়ে, আত্মতৃপ্তিতে। আমরা নিজেদের 'ভালো মানুষ' ভাবতে ভালোবাসি, কিন্তু বাস্তবে আমরা শুধু ভিড়ের একটা অংশ।

আজ আমাদের স্বীকার করতেই হবে, আমরা সবাই এই বিকারগ্রস্ত মহামারীতে আক্রান্ত! মানসিক পঙ্গুত্ব শারীরিক পঙ্গুত্বের চেয়েও ভয়ঙ্কর—কারণ শরীর অচল হলে মানুষ টের পায়, কিন্তু মগজ অচল হলে মানুষ হাসতে হাসতে ডুবে যায়। তাই আজ জেগে উঠুন! পচে যাওয়া এই বিকারগ্রস্ত মানসিকতা থেকে নিজেকে টেনে তুলুন।`,
  `খুব মনোযোগ দিয়ে শুনুন, কারণ আপনার ভেতরে জমে থাকা অহংকারের যে ফানুসটি আপনি প্রতিদিন ফুলিয়ে চলেছেন, আজ ইতিহাসের নির্মম সত্য দিয়ে সেই ফানুসে আমি পিন ফোটাতে যাচ্ছি। আপনি যেদিন এই পৃথিবীতে এসেছিলেন, আপনার নিজের গায়ে এক টুকরো সুতো পর্যন্ত ছিল না। মহাকালের ক্যালেন্ডারে আপনার জীবন একটা সেকেন্ডের ভগ্নাংশ মাত্র।

অহংকার মানুষকে অন্ধ করে দেয়। ইতিহাস সাক্ষী—যত বড় সাম্রাজ্য, তত বড় পতন। ফেরাউন ভেবেছিল সে ঈশ্বর, আলেকজান্ডার ভেবেছিল পুরো পৃথিবী তার মুঠোয়। কিন্তু শেষে? মাটির নিচে একটা ছোট্ট জায়গাও তাদের নিজের নয়। আপনার ব্যাংক ব্যালেন্স, আপনার গাড়ি, আপনার পদবী—এসব কিছুই আপনার সাথে যাবে না। যাবে শুধু আপনার কর্ম, আপনার চরিত্র। তাই অহংকারের ফানুস ফাটিয়ে দিন, নিজেকে চিনুন।`,
  `"পৃথিবীতে কেউ মানুষ খোঁজে না, খোঁজে টাকা ও পদবী"— এই নগ্ন, বীভৎস এবং রক্তাক্ত সত্যটিকে অস্বীকার করা মানে নিজের সাথেই এক জঘন্যতম আত্মপ্রবঞ্চনায় লিপ্ত হওয়া। আধুনিক পুঁজিবাদী সমাজে 'মানুষ' নামক সত্তাটি এখন একটি সস্তা পণ্য।

একজন মানুষ যখন গরিব থাকে, তখন তার আত্মীয়রাও তাকে চেনে না। কিন্তু সেই একই মানুষ যখন টাকা আর পদবী পায়, তখন সবাই তার 'আপনজন' হয়ে যায়। এটাই সমাজের সবচেয়ে কুৎসিত সত্য। আমরা মানুষকে ভালোবাসি না, ভালোবাসি তার ক্ষমতাকে, তার পকেটকে। বন্ধুত্ব, আত্মীয়তা, এমনকি ভালোবাসাও এখন বাজারের পণ্য। যেদিন আপনি এই সত্যটা হৃদয় দিয়ে বুঝবেন, সেদিন থেকে আপনি সত্যিকারের মুক্ত মানুষ হবেন।`,
  `কখনো কি স্থির হয়ে নিজেকে প্রশ্ন করেছেন, আমরা আসলে সারাজীবন এত কিসের পেছনে ছুটছি? সুখের পেছনে, তাই তো? কিন্তু বিশাল প্রাসাদের দামি নরম বিছানায় শুয়েও মানুষের চোখে ঘুম থাকে না, অথচ একজন দিনমজুর রাস্তার ধারে কেমন প্রাণখুলে হাসে! পার্থক্যটা পকেটের টাকায় নয়, পার্থক্যটা আমাদের 'মনে'।`,
];

const articlesEn = [
  `Today I haven't come to tell you a fairy tale, I've come to set off a word-bomb in your sleeping brain! You who are sitting here so peacefully today, put your hand on your chest and ask yourself—are you truly alive? Or have you accepted breathing and digesting food as 'being alive'? Today we must admit, we are all infected by this deranged epidemic! So wake up today! Pull yourself out of this rotten mentality.`,
  `Listen very carefully, because the balloon of arrogance that you inflate inside yourself every day, today I'm going to prick that balloon with the cruel truth of history. The day you came into this world, you didn't even have a thread on your body. In the calendar of eternity, your life is merely a fraction of a second.`,
  `"Nobody in the world looks for humans, they look for money and titles"—denying this naked truth means engaging in the most heinous self-deception. In modern capitalist society, the entity called 'human' is now a cheap commodity.`,
  `Have you ever stopped to ask yourself, what are we chasing all our lives? Happiness, right? But lying on expensive beds in grand palaces, people can't sleep, yet a day laborer at a roadside tea stall laughs with all his heart! The difference isn't in the money, the difference is in our 'mind'.`,
];

const articlesHi = [
  `आज मैं आपको कोई परीकथा सुनाने नहीं आया, मैं आपके सोए हुए दिमाग में एक शब्द-बम फोड़ने आया हूँ! आज जो आप यहाँ इतनी शांति से बैठे हैं, छाती पर हाथ रखकर खुद से पूछें — क्या आप सच में जीवित हैं? आज हमें स्वीकार करना होगा कि हम सब इस विकृत महामारी से ग्रस्त हैं! तो आज जागो!`,
  `बहुत ध्यान से सुनिए, क्योंकि आपके अंदर जमा अहंकार का गुब्बारा जो आप रोज़ फुलाते हैं, आज इतिहास की निर्मम सच्चाई से उस गुब्बारे में मैं पिन चुभोने जा रहा हूँ। जिस दिन आप इस दुनिया में आए, आपके शरीर पर एक धागा तक नहीं था। महाकाल के कैलेंडर में आपका जीवन एक सेकंड का अंश मात्र है।`,
  `"दुनिया में कोई इंसान नहीं खोजता, पैसा और पद खोजता है"— इस नग्न सच्चाई को नकारना सबसे जघन्य आत्मवंचना है। आधुनिक पूँजीवादी समाज में 'इंसान' नामक सत्ता अब एक सस्ता उत्पाद है।`,
  `क्या कभी रुककर खुद से पूछा है, हम सारी ज़िंदगी किसके पीछे भाग रहे हैं? खुशी के पीछे, है ना? लेकिन महलों के महँगे बिस्तरों पर भी नींद नहीं आती, जबकि एक मज़दूर सड़क किनारे दिल खोलकर हँसता है! फ़र्क़ पैसों में नहीं, फ़र्क़ हमारे 'मन' में है।`,
];

const articlesFr = [
  `Aujourd'hui je ne suis pas venu vous raconter un conte de fées, je suis venu faire exploser une bombe verbale dans votre cerveau endormi ! Nous devons admettre que nous sommes tous infectés par cette épidémie dérangée ! Alors réveillez-vous aujourd'hui !`,
  `Écoutez très attentivement, car le ballon d'arrogance que vous gonflez chaque jour, aujourd'hui je vais le percer avec la vérité cruelle de l'histoire. Le jour où vous êtes venu au monde, vous n'aviez pas même un fil sur le corps.`,
  `"Personne ne cherche des humains, on cherche l'argent et les titres" — nier cette vérité nue est la pire auto-tromperie. Dans la société capitaliste moderne, l'être 'humain' est devenu une marchandise bon marché.`,
  `Vous êtes-vous jamais arrêté pour vous demander, que poursuivons-nous toute notre vie ? Le bonheur, n'est-ce pas ? Mais dans les palais somptueux, le sommeil manque, tandis qu'un ouvrier rit de tout cœur au bord de la route !`,
];

const articlesAr = [
  `اليوم لم آتِ لأروي لكم قصة خيالية، بل جئت لأفجر قنبلة كلمات في أدمغتكم النائمة! يجب أن نعترف أننا جميعاً مصابون بهذا الوباء المختل! لذا استيقظوا اليوم!`,
  `استمعوا بعناية شديدة، لأن بالون الغرور الذي تنفخونه كل يوم، اليوم سأثقبه بحقيقة التاريخ القاسية. يوم أتيتم إلى هذا العالم، لم يكن على أجسادكم خيط واحد.`,
  `"لا أحد في العالم يبحث عن إنسان، الكل يبحث عن المال والألقاب" — إنكار هذه الحقيقة العارية هو أبشع خداع للذات. في المجتمع الرأسمالي الحديث، أصبح 'الإنسان' سلعة رخيصة.`,
  `هل توقفت يوماً لتسأل نفسك، وراء ماذا نركض طوال حياتنا؟ السعادة، أليس كذلك؟ لكن في القصور الفخمة لا ينام الناس، بينما العامل يضحك من قلبه على جانب الطريق!`,
];

const articlesDe = [
  `Heute bin ich nicht gekommen, um ein Märchen zu erzählen, sondern um eine Wortbombe in eurem schlafenden Gehirn zu zünden! Wir müssen zugeben, dass wir alle von dieser gestörten Epidemie betroffen sind! Also wacht heute auf!`,
  `Hört genau zu, denn den Ballon der Arroganz, den ihr jeden Tag aufbläht, werde ich heute mit der grausamen Wahrheit der Geschichte durchstechen. Am Tag eurer Geburt hattet ihr nicht einmal einen Faden am Körper.`,
  `"Niemand sucht Menschen, sie suchen Geld und Titel" — diese nackte Wahrheit zu leugnen ist die schlimmste Selbsttäuschung. In der modernen kapitalistischen Gesellschaft ist der 'Mensch' eine billige Ware geworden.`,
  `Habt ihr euch jemals gefragt, was wir unser ganzes Leben lang jagen? Glück, oder? Aber in Palästen fehlt der Schlaf, während ein Tagelöhner am Straßenrand von Herzen lacht!`,
];

const articlesZh = [
  `今天我不是来给你们讲童话的，我是来在你们沉睡的大脑里引爆一颗文字炸弹的！我们必须承认，我们都感染了这种扭曲的流行病！所以今天醒来吧！`,
  `仔细听，因为你每天膨胀的傲慢气球，今天我要用历史的残酷真相戳破它。你来到这个世界的那天，身上连一根线都没有。在永恒的日历上，你的生命只是一秒钟的碎片。`,
  `"世界上没人找人，找的是钱和头衔"——否认这个赤裸裸的真相是最卑鄙的自欺欺人。在现代资本主义社会中，"人"已经成了廉价商品。`,
  `你有没有停下来问过自己，我们这辈子到底在追什么？幸福，对吧？但躺在豪华宫殿的昂贵床上也睡不着，而路边的劳动者却开怀大笑！区别不在钱，在我们的"心"。`,
];

const articlesRu = [
  `Сегодня я пришёл не рассказывать сказку, а взорвать словесную бомбу в вашем спящем мозге! Мы должны признать — мы все заражены этой безумной эпидемией! Так проснитесь сегодня!`,
  `Слушайте очень внимательно, потому что воздушный шар высокомерия, который вы надуваете каждый день, сегодня я проткну жестокой правдой истории. В день вашего рождения на вас не было даже нитки.`,
  `"Никто в мире не ищет людей, ищут деньги и титулы" — отрицать эту голую правду — худший самообман. В современном капиталистическом обществе 'человек' стал дешёвым товаром.`,
  `Вы когда-нибудь останавливались и спрашивали себя — за чем мы гонимся всю жизнь? За счастьем, верно? Но в роскошных дворцах не спится, а подёнщик у дороги смеётся от души!`,
];

const allArticles: Record<string, string[]> = { bn: articlesBn, en: articlesEn, hi: articlesHi, fr: articlesFr, ar: articlesAr, de: articlesDe, zh: articlesZh, ru: articlesRu };

const Portfolio = () => {
  const { lang, t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const articles = allArticles[lang] || allArticles.en;
  const titles = [t.portfolio.t1, t.portfolio.t2, t.portfolio.t3, t.portfolio.t4];
  const isBengali = lang === "bn";

  return (
    <section id="portfolio" className="section-padding bg-secondary/20 relative overflow-hidden">
      <FloatingOrbs colors={["hsl(var(--primary) / 0.05)", "hsl(var(--gold) / 0.04)", "hsl(var(--primary) / 0.03)"]} />

      <div className="container mx-auto relative z-10">
        <AnimatedTitle className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">{t.portfolio.sectionLabel}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">{t.portfolio.sectionTitle}</h2>
          <p className="text-muted-foreground text-base mt-4 max-w-2xl mx-auto">{t.portfolio.sectionSubtitle}</p>
        </AnimatedTitle>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {articles.map((article, i) => (
            <motion.div key={i} variants={fadeUpItem} className="h-full">
              <TiltCard className="glass-card h-full min-h-[320px] lg:min-h-[360px] xl:min-h-[380px] p-6 lg:p-7 cursor-pointer group relative overflow-hidden flex flex-col">
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.06), transparent 70%)" }}
                />
                <div className="relative z-10 flex h-full flex-col" onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}>
                  <div className="mb-4 flex items-start gap-3 lg:mb-5">
                    <motion.span
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-lg font-bold text-primary"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {i + 1}
                    </motion.span>
                    <h3 className={`font-bold leading-snug break-words text-foreground transition-colors group-hover:text-primary ${isBengali ? "text-base lg:text-[1.05rem]" : "text-lg"}`}>{titles[i]}</h3>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={expandedIndex === i ? "expanded" : "collapsed"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`flex-1 whitespace-pre-line break-words text-muted-foreground ${isBengali ? "text-[0.95rem] leading-[1.8] lg:text-[0.9rem]" : "text-sm leading-relaxed"} ${expandedIndex === i ? "" : "line-clamp-4 lg:line-clamp-5"}`}
                    >
                      {article}
                    </motion.p>
                  </AnimatePresence>
                  <motion.button
                    className="mt-5 inline-flex items-center text-primary text-sm font-medium hover:underline"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {expandedIndex === i ? t.portfolio.showLess : t.portfolio.readMore}
                  </motion.button>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
