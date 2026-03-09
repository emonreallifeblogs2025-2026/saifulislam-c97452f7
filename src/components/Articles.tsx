import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import articlesPhoto from "@/assets/articles-photo.png";

const Articles = () => {
  const { t, lang } = useLanguage();

  const columns = lang === "bn" ? [
    {
      title: "মানসিক স্বাস্থ্য ও আত্মসচেতনতা",
      content: `আমাদের সমাজে মানসিক স্বাস্থ্য নিয়ে কথা বলা এখনও অনেকটাই নিষিদ্ধ। কিন্তু বাস্তবতা হলো, শারীরিক স্বাস্থ্যের মতোই মানসিক স্বাস্থ্য আমাদের জীবনের একটি অপরিহার্য অংশ। প্রতিদিন আমরা অসংখ্য চাপের মুখোমুখি হই—কর্মক্ষেত্রে, পারিবারিক জীবনে, সামাজিক সম্পর্কে। এই চাপগুলো যখন সঠিকভাবে মোকাবেলা করা হয় না, তখন তা উদ্বেগ, বিষণ্নতা এবং অন্যান্য মানসিক সমস্যার জন্ম দেয়।

আত্মসচেতনতা হলো মানসিক সুস্থতার প্রথম পদক্ষেপ। নিজের আবেগ, চিন্তা এবং আচরণ সম্পর্কে সচেতন থাকা আমাদের জীবনকে আরও অর্থবহ করে তোলে। যখন আমরা নিজেদের ভালোভাবে বুঝতে পারি, তখন আমরা আরও ভালো সিদ্ধান্ত নিতে পারি, আরও গভীর সম্পর্ক তৈরি করতে পারি এবং জীবনের চ্যালেঞ্জগুলো আরও কার্যকরভাবে মোকাবেলা করতে পারি।

মেডিটেশন, জার্নালিং এবং থেরাপি—এই তিনটি টুল আমাদের মানসিক স্বাস্থ্যকে শক্তিশালী করতে পারে। প্রতিদিন মাত্র ১০ মিনিট মেডিটেশন আমাদের মনকে শান্ত করতে পারে। জার্নালিং আমাদের চিন্তাগুলোকে সংগঠিত করতে সাহায্য করে। এবং থেরাপি আমাদের গভীর সমস্যাগুলো সমাধান করতে পেশাদার সহায়তা প্রদান করে। মনে রাখবেন, সাহায্য চাওয়া দুর্বলতা নয়—এটি সাহসের চিহ্ন।`
    },
    {
      title: "সম্পর্কের মনস্তত্ত্ব ও যোগাযোগ",
      content: `মানুষ সামাজিক প্রাণী। আমাদের জীবনের অধিকাংশ সুখ এবং দুঃখ আমাদের সম্পর্কগুলোর সাথে জড়িত। কিন্তু কেন কিছু সম্পর্ক টিকে থাকে আর কিছু ভেঙে যায়? এর উত্তর লুকিয়ে আছে যোগাযোগের মধ্যে।

কার্যকর যোগাযোগ শুধু কথা বলা নয়—এটি শোনা, বোঝা এবং সহানুভূতি দেখানোর বিষয়। অনেক সময় আমরা প্রতিক্রিয়া দেওয়ার জন্য শুনি, বোঝার জন্য নয়। এই অভ্যাস আমাদের সম্পর্কগুলোকে ক্ষতিগ্রস্ত করে।

সম্পর্কের মনস্তত্ত্ব অনুযায়ী, প্রতিটি সুস্থ সম্পর্কের তিনটি স্তম্ভ রয়েছে: বিশ্বাস, সম্মান এবং যোগাযোগ। যখন এই তিনটির যেকোনো একটি দুর্বল হয়, সম্পর্ক ভেঙে পড়তে শুরু করে। বিশ্বাস হলো ভিত্তি—এটি ছাড়া কোনো সম্পর্ক দাঁড়াতে পারে না। সম্মান হলো দেয়াল—এটি সম্পর্ককে সুরক্ষিত রাখে। আর যোগাযোগ হলো ছাদ—এটি সম্পর্ককে সম্পূর্ণ করে।

আমাদের প্রতিটি সম্পর্কে সক্রিয় শ্রবণ অনুশীলন করা উচিত। এর মানে হলো অন্য ব্যক্তির কথা মনোযোগ দিয়ে শোনা, তার অনুভূতি বোঝার চেষ্টা করা এবং বিচার না করে প্রতিক্রিয়া জানানো। এই সহজ অভ্যাস আমাদের সম্পর্কগুলোকে আমূল পরিবর্তন করতে পারে।`
    },
    {
      title: "AI যুগে সৃজনশীলতা ও ভবিষ্যৎ",
      content: `আর্টিফিশিয়াল ইন্টেলিজেন্স আমাদের জীবনকে দ্রুত পরিবর্তন করছে। এটি শুধু প্রযুক্তির ক্ষেত্রে নয়, সৃজনশীলতার ক্ষেত্রেও বিপ্লব ঘটাচ্ছে। AI এখন লেখা, চিত্রকলা, সংগীত এবং চলচ্চিত্র নির্মাণে ব্যবহৃত হচ্ছে। কিন্তু প্রশ্ন হলো—AI কি মানুষের সৃজনশীলতাকে প্রতিস্থাপন করবে?

উত্তর হলো—না। AI হলো একটি টুল, একজন সহযোগী। এটি মানুষের সৃজনশীলতাকে বাড়িয়ে তোলে, প্রতিস্থাপন করে না। একজন AI প্রম্পট ডেভেলপার হিসেবে, আমি দেখেছি কীভাবে সঠিক প্রম্পট ইঞ্জিনিয়ারিং অসাধারণ ফলাফল তৈরি করতে পারে। কিন্তু সেই প্রম্পটের পেছনে থাকে মানুষের চিন্তা, অভিজ্ঞতা এবং সৃজনশীলতা।

ভবিষ্যতে AI এবং মানুষের সহযোগিতা আরও গভীর হবে। যারা AI-কে ভয় পায়, তারা পিছিয়ে পড়বে। আর যারা AI-কে শিখবে এবং ব্যবহার করবে, তারা এগিয়ে যাবে। AI শর্ট ফিল্ম, AI মিউজিক, AI আর্ট—এগুলো ভবিষ্যতের সৃজনশীলতার নতুন মাধ্যম।

আমাদের চ্যানেলে আমরা AI-এর এই সম্ভাবনাকে কাজে লাগিয়ে গল্প বলি—এমন গল্প যা মানুষের হৃদয় স্পর্শ করে। কারণ শেষ পর্যন্ত, প্রযুক্তি যতই উন্নত হোক, গল্প বলার ক্ষমতা এবং মানবিক সংযোগ সবসময়ই সবচেয়ে শক্তিশালী হাতিয়ার থাকবে।`
    }
  ] : [
    {
      title: "Mental Health & Self-Awareness",
      content: `In our society, talking about mental health is still largely taboo. But the reality is that mental health, like physical health, is an essential part of our lives. Every day we face countless pressures—at work, in family life, in social relationships. When these pressures are not properly addressed, they give rise to anxiety, depression, and other mental health problems.

Self-awareness is the first step to mental well-being. Being aware of our emotions, thoughts, and behaviors makes our lives more meaningful. When we understand ourselves well, we can make better decisions, build deeper relationships, and cope more effectively with life's challenges.

Meditation, journaling, and therapy—these three tools can strengthen our mental health. Just 10 minutes of daily meditation can calm our minds. Journaling helps us organize our thoughts. And therapy provides professional support to resolve our deeper issues. Remember, asking for help is not weakness—it is a sign of courage.

The journey toward self-awareness begins with honest self-reflection. Take time each day to check in with yourself. How are you really feeling? What thoughts keep recurring? What patterns do you notice in your behavior? These questions, while simple, can unlock profound insights about who you are and who you want to become.`
    },
    {
      title: "Psychology of Relationships",
      content: `Humans are social creatures. Most of our happiness and sadness is tied to our relationships. But why do some relationships last while others fall apart? The answer lies in communication.

Effective communication is not just about talking—it's about listening, understanding, and showing empathy. Often we listen to react, not to understand. This habit damages our relationships.

According to relationship psychology, every healthy relationship has three pillars: trust, respect, and communication. When any one of these weakens, the relationship begins to crumble. Trust is the foundation—without it, no relationship can stand. Respect is the wall—it keeps the relationship protected. And communication is the roof—it completes the relationship.

We should practice active listening in all our relationships. This means listening attentively to the other person, trying to understand their feelings, and responding without judgment. This simple habit can fundamentally transform our relationships.

The key to lasting relationships isn't avoiding conflict—it's learning to navigate it with grace, empathy, and genuine care for the other person's well-being.`
    },
    {
      title: "Creativity & Future in the AI Era",
      content: `Artificial Intelligence is rapidly changing our lives. It is revolutionizing not just technology, but also creativity. AI is now being used in writing, painting, music, and filmmaking. But the question is—will AI replace human creativity?

The answer is no. AI is a tool, a collaborator. It enhances human creativity, it doesn't replace it. As an AI prompt developer, I have seen how proper prompt engineering can produce extraordinary results. But behind that prompt is human thought, experience, and creativity.

In the future, collaboration between AI and humans will deepen. Those who fear AI will fall behind. And those who learn and use AI will move forward. AI short films, AI music, AI art—these are the new mediums of future creativity.

On our channel, we harness this potential of AI to tell stories—stories that touch people's hearts. Because ultimately, no matter how advanced technology becomes, the ability to tell stories and human connection will always be the most powerful tools.

The future belongs to those who can blend human intuition with artificial intelligence, creating something neither could achieve alone.`
    }
  ];

  return (
    <section id="articles" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">{t.articles.title}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{t.articles.subtitle}</h2>
        </motion.div>

        {/* Author photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <img
            src={articlesPhoto}
            alt="Saiful Islam"
            className="w-48 md:w-64 rounded-2xl object-cover"
            loading="lazy"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 60%, transparent 85%)',
              maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 60%, transparent 85%)',
            }}
          />
        </motion.div>

        {/* 3 column articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-primary mb-4">{col.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{col.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
