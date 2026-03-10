import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";

const articlesBn = [
  `আজ আমি আপনাদের কোনো রূপকথার গল্প শোনাতে আসিনি, এসেছি আপনাদের ঘুমন্ত মগজে একটি শব্দবোমা ফাটাতে! আপনারা যারা আজ এখানে খুব শান্তিতে বসে আছেন, বুকে হাত দিয়ে একবার নিজেদের প্রশ্ন করুন তো—আপনারা কি সত্যিই বেঁচে আছেন? নাকি শ্বাস নেওয়া আর খাবার হজম করাকেই আপনারা 'বেঁচে থাকা' বলে ধরে নিয়েছেন? একবার চোখ খুলে চারপাশের বাস্তবতার দিকে তাকান! পৃথিবী জুড়ে চলছে রক্তক্ষয়ী যুদ্ধ, ঘরে ঘরে জ্বলছে বিবেকহীন হিংসার আগুন, পবিত্র সম্পর্কগুলোকে পদদলিত করে চলছে নোংরা পরকীয়া আর প্রতারণা! আর আমরা কী করছি? নিজের যোগ্যতায় বড় হওয়ার ক্ষমতা আমাদের নেই, তাই সারাদিন চলছে একে অপরকে পেছন থেকে 'বাঁশ দেওয়ার' কাপুরুষোচিত প্রতিযোগিতা! আত্মসম্মান আর মেরুদণ্ড বিক্রি করে দিয়ে চলছে ক্ষমতার উচ্ছিষ্ট কুড়াতে নির্লজ্জ পা চাটাচাটি! স্মার্টফোনের স্ক্রিনে চোখ রেখে, যত্রতত্র ছড়িয়ে পড়া সস্তা গুজবের নেশায় বুঁদ হয়ে আমরা একেকজন পরিণত হয়েছি মগজ-ধোলাই হওয়া জ্যান্ত রোবটে!

আর এই চূড়ান্ত সামাজিক ও নৈতিক পচনের মাঝখানে দাঁড়িয়ে আপনারা যখন চোখ বন্ধ করে আত্মতৃপ্তিতে বলেন— "আমার কী? আমি তো বেশ ভালো আছি!"—তখন আপনাদের দিকে তাকালে আমার করুণা হয়! আপনাদের এই 'ভালো থাকা' কোনো সাফল্য নয়, এটি এক চরম মানসিক পঙ্গুত্ব! অন্যের ঘরে আগুন লাগলে যে মানুষটি নেভাতে না গিয়ে পৈশাচিক উল্লাসে নিজের হাত সেঁকে নেয়, সে সুস্থ মানুষ নয়, সে আস্ত একটা বিকারগ্রস্ত অমানুষ! আজ আমাদের স্বীকার করতেই হবে, আমরা সবাই এই বিকারগ্রস্ত মহামারীতে আক্রান্ত!

আজ এই মঞ্চ থেকে আমি আপনাদের প্রত্যেককে কাঠগড়ায় দাঁড় করাচ্ছি! নিজেকে প্রশ্ন করুন! আপনি কি স্বাধীন চিন্তার অধিকারী কোনো মানুষ, নাকি অন্যের ছড়ানো গুজবে ভেসে যাওয়া কোনো পরজীবী? যদি আপনাদের শিরদাঁড়া বলে কিছু অবশিষ্ট থাকে, তবে এই মেকি 'ভালো থাকার' অভিনয় আজই, এই মুহূর্ত থেকে ছুড়ে ফেলুন! অন্যের পতন দেখে উল্লাস করা বন্ধ করুন, পা চাটাচাটির শেকল ভেঙে সোজা হয়ে দাঁড়ান! মনে রাখবেন, যে সমাজে আপনার চারপাশের মানুষ শান্তিতে নেই, সেখানে আপনার এই 'ভালো থাকার' অহংকার একটা টাইম-বোমা ছাড়া আর কিছুই নয়—যা যেকোনো দিন আপনার নিজের ঘরেই বিস্ফোরিত হবে!

তাই আজ জেগে উঠুন! পচে যাওয়া এই বিকারগ্রস্ত মানসিকতা থেকে নিজেকে টেনে তুলুন। প্রমাণ করুন যে আপনাদের বিবেক এখনো মরে যায়নি, প্রমাণ করুন—আপনারা এখনো সত্যিকারের মানুষ হিসেবেই বেঁচে আছেন!`,

  `খুব মনোযোগ দিয়ে শুনুন, কারণ আপনার ভেতরে জমে থাকা অহংকারের যে ফানুসটি আপনি প্রতিদিন ফুলিয়ে চলেছেন, আজ ইতিহাসের নির্মম সত্য দিয়ে সেই ফানুসে আমি পিন ফোটাতে যাচ্ছি; একটু ভেবে দেখুন তো, আপনি আসলে কে এবং আপনার এই আকাশচুম্বী অহংকার ঠিক কিসের ওপর দাঁড়িয়ে আছে? আপনি যেদিন এই পৃথিবীতে এসেছিলেন, আপনার নিজের গায়ে এক টুকরো সুতো পর্যন্ত ছিল না, আপনি ছিলেন অন্যের দয়ায় বেঁচে থাকা এক অসহায় মাংসপিণ্ড, যার প্রথম শ্বাসটা নেওয়ার ক্ষমতাও নিজের ছিল না, আর যেদিন এই পৃথিবী থেকে বিদায় নেবেন, সেদিনও আপনার নিজের হাতে গড়া কোটি টাকার সাম্রাজ্য, দামি ব্র্যান্ডের পোশাক কিংবা ক্ষমতার দম্ভ—সব পড়ে থাকবে, আর আপনাকে সেই নগ্ন করেই সাদা কাপড়ে পেঁচিয়ে মাটির নিচে পুঁতে আসা হবে, যেখানে আপনার শেষ গোসলটাও অন্য কেউ করিয়ে দেবে; তাহলে আমাকে বলুন, আপনার শুরুটা যেখানে অন্যের দয়ায় আর শেষটা অন্যের কাঁধে, সেখানে মাঝখানের এই কটা দিনের ভাড়ায় নেওয়া জীবনের জন্য আপনার এত কিসের দম্ভ? মহাকালের ক্যালেন্ডারে ১৩.৮ বিলিয়ন বছরের এই বিশাল মহাবিশ্বে আপনার সত্তর-আশি বছরের জীবনটা একটা সেকেন্ডের ভগ্নাংশ মাত্র, আপনি কেবল প্রকৃতির কাছ থেকে কিছু কার্বন আর অক্সিজেন ধার করে তৈরি হওয়া এক অস্থায়ী অতিথি, অথচ আপনি ভাবছেন আপনিই সবকিছুর নিয়ন্ত্রক! একটু ইতিহাসের দিকে তাকান, পৃথিবী জয় করা আলেকজান্ডার মৃত্যুর আগে নিজের হাত কফিনের বাইরে ঝুলিয়ে রাখতে বলেছিলেন পৃথিবীকে এটা বোঝাতে যে তিনি খালি হাতেই ফিরে যাচ্ছেন, আর নিজেকে ঈশ্বর দাবি করা ফারাও রামসেসের লাশ হাজার বছর পর মিউজিয়ামে পচে যাওয়ার সময় ছত্রাক থেকে বাঁচাতে তাকে যখন ফ্রান্সে নেওয়া হলো, তখন সেই "ঈশ্বর"-এর জন্য আধুনিক বিশ্বকে মৃত মানুষের পাসপোর্ট বানাতে হয়েছিল; এই হলো ক্ষমতার দৌড়, এই হলো মানুষের শেষ পরিণতি! আপনি আপনার নিজের শরীরের একটা হার্টবিট, একটা কোষের ওপর নিয়ন্ত্রণ রাখেন না, যেকোনো মুহূর্তে মস্তিষ্কের একটা সূক্ষ্ম শিরা ছিঁড়ে গেলে আপনার সমস্ত অহংকার, সমস্ত ক্ষমতা বিছানার এক কোণে পক্ষাঘাতগ্রস্ত হয়ে পড়ে থাকবে, আর আপনার সবচেয়ে প্রিয় মানুষটিও আপনার মৃত্যুর পর আপনার লাশটা বেশিক্ষণ ঘরে রাখতে চাইবে না; তাই এই মোহ থেকে বেরিয়ে আসুন, নিজের এই অতিমানব হওয়ার বিভ্রমকে আজই গলা টিপে হত্যা করুন, কারণ অহংকার তাকেই মানায় যার নিজের সৃষ্টির ওপর নিয়ন্ত্রণ আছে, আর আপনি হলেন সেই ক্ষুদ্রতম ধূলিকণা যে কিনা এক ফুঁকাতেই বাতাসে মিলিয়ে যাবে, তাই এই সামান্য সময়ের অতিথিশালায় বিনয়ী হতে শিখুন, নয়তো মহাকাল আপনার এই মিথ্যা দম্ভকে আস্তাকুঁড়ে ছুঁড়ে ফেলতে এক সেকেন্ডও সময় নেবে না।`,

  `"পৃথিবীতে কেউ মানুষ খোঁজে না, খোঁজে টাকা ও পদবী"— এই নগ্ন, বীভৎস এবং রক্তাক্ত সত্যটিকে অস্বীকার করা মানে নিজের সাথেই এক জঘন্যতম আত্মপ্রবঞ্চনায় লিপ্ত হওয়া, কারণ সভ্যতার এই চকচকে মুখোশের আড়ালে আমরা প্রত্যেকেই আসলে এক একজন সুনিপুণ ভণ্ড, যারা প্রতিদিন নিজের স্বার্থের বেদিতে মনুষ্যত্বকে বলি দিচ্ছি! একবার নিজের বিবেকের কলার চেপে ধরে আয়নার সামনে দাঁড়িয়ে প্রশ্ন করুন তো, আজ যদি আপনার পকেটে কানাকড়ি না থাকে আর নামের পাশে কোনো গালভরা পদবী না ঝোলে, তবে আপনার অতি আপনজনদের ক'জন আপনার সেই তথাকথিত 'পবিত্র আত্মা' বা 'মনুষ্যত্ব'কে সম্মান জানাতে আসবে? কেউ না, ঠিক ধরেছেন, একদম কেউ না; কারণ এই বিষাক্ত পুঁজিবাদী ইঁদুর দৌড়ের সমাজে 'মানুষ' নামক সত্তাটি এখন আর কোনো ধ্রুবক নয়, বরং এটি একটি সস্তা পণ্য, যার বাজারমূল্য নির্মমভাবে নির্ধারিত হয় ব্যাংক ব্যালেন্সের অঙ্ক, পরনের ব্র্যান্ড আর ভিজিটিং কার্ডের ওজনের ওপর ভিত্তি করে। আপনি যখন বলেন 'সবাই সমর্পিত হয়', তখন আপনি মূলত মানুষের টিকে থাকার সেই চরম সুবিধাবাদী প্রবৃত্তিকেই দর্শনের আতশকাঁচে তুলে ধরেছেন, যেখানে অস্তিত্ব রক্ষার তাগিদে নিরাপত্তা, অর্থ আর ক্ষমতার কাছে নিঃশর্ত আত্মসমর্পণ করাটাই বিবর্তনের এক নির্মম, যৌক্তিক উপহাস হয়ে দাঁড়িয়েছে। ভালোবাসা, বন্ধুত্ব, বা সমাজতন্ত্রের যে সুমধুর বুলি আমরা প্রতিদিন আওড়াই, তার প্রতিটি স্তরে স্তরে কি লুকিয়ে নেই এক ভয়ংকর সূক্ষ্ম লেনদেনের অংক? একজন সফল, ক্ষমতাবান মানুষের পদতলে যে সমাজ নিজের শিরদাঁড়া বিকিয়ে দিয়ে কুকুরের মতো লেজ নাড়তে পেরে ধন্য হয়, সেই একই সমাজ একজন সৎ, ব্যর্থ, রিক্ত মানুষের ছায়াও মাড়াতে চায় না—এটাই কি আমাদের সেই পরম কাঙ্ক্ষিত মনুষ্যত্বের চূড়ান্ত নজির নয়? মগজ ধোলাইয়ের এই অসুস্থ যুগে আমাদের মাতৃজঠর থেকে বের হওয়ার পর থেকেই শেখানো হয় প্রতিযোগিতায় জিততে, আর সফলতার একমাত্র ঈশ্বর হিসেবে মগজে গেঁথে দেওয়া হয় ক্ষমতা আর অর্থকে, যার ফলে আমরা বড় হতে হতে মানুষের চামড়া পড়া একেকটা অনুভূতিহীন, স্বার্থান্ধ রোবটে পরিণত হই। এই রূঢ়, অমানবিক বাস্তবতায় দাঁড়িয়ে আপনি যখন চারপাশের এই জীবন্ত লাশের গন্ধ পান, তখন হতাশায় ভেঙে না পড়ে বরং এই নগ্ন সত্যের ছুরিকাঘাতকে নিজের ভেতরে ধারণ করুন এক শীতল, দার্শনিক নির্লিপ্ততায়। চারপাশের এই মেকি চামচামির ভিড়ে, স্বার্থের এই উলঙ্গ আস্ফালনে টিকে থাকার জন্যই আপনাকে এই সমাজের নিয়ম মেনে হয়তো অর্থ বা পদবীর পেছনে ছুটতে হবে, কিন্তু সেই ইঁদুর দৌড়ের ঘুঁটি হিসেবে নিজের ভেতরের আদিম, খাঁটি 'মানুষ'টাকে যেন কোনোভাবেই সস্তা নিলামে তুলবেন না। নিজেকে ভেতর থেকে মানুষ রাখার এবং এই মানসিক পচন থেকে বাঁচার একমাত্র জাদুকরী উপায় হলো—বুক চিতিয়ে এই নগ্ন সত্যকে মেনে নেওয়া এবং নিজের ভেতরে একটি নিভৃত, অভেদ্য আত্মিক বলয় তৈরি করা, যেখানে এই সস্তা দুনিয়ার মোহ, অহংকার বা অন্যের স্তুতির নোংরা বাতাস কোনো আঁচড় কাটতে পারবে না।`,

  `কখনো কি স্থির হয়ে নিজেকে প্রশ্ন করেছেন, আমরা আসলে সারাজীবন এত কিসের পেছনে ছুটছি? সুখের পেছনে, তাই তো? কিন্তু একটু ভেবে দেখুন, বিশাল প্রাসাদের দামি নরম বিছানায় শুয়েও মানুষের চোখে ঘুম থাকে না, অথচ হাড়ভাঙা খাটুনির পর একজন দিনমজুর রাস্তার ধারের টং দোকানে বসে কেমন প্রাণখুলে হাসে! পার্থক্যটা পকেটের টাকায় নয়, পার্থক্যটা আমাদের 'মনে'। আপনার সব কিছু আছে, কিন্তু মন যদি ভেতর থেকে বলে "আমি ভালো নেই", তবে পৃথিবীর কোনো জাদুই আপনাকে সুখী করতে পারবে না। মনের এই অদৃশ্য কারাগারের সবচেয়ে মজবুত শেকলটির নাম হলো দুশ্চিন্তা বা ওভারথিংকিং। আয়নার সামনে দাঁড়িয়ে নিজেকে একবার জিজ্ঞেস করুন তো— আজ থেকে ৫ বছর আগে যে বিষয়টা নিয়ে আপনি ভয়ে কেঁদে ভাসিয়েছিলেন, আজ কি আপনার জীবনে সেই কান্নার কোনো অস্তিত্ব আছে? নেই। আমরা ছোটবেলায় রেজাল্টের চিন্তায় বর্তমানকে হারাই, বড় হয়ে চাকরির চিন্তায়, আর চাকরি পেলে প্রমোশন বা ভবিষ্যতের চিন্তায়। আমরা তো কেবল ভবিষ্যতের অলীক ভয়ে আমাদের সুন্দর 'আজ' আর 'বর্তমান'-কে নিজ হাতে খুন করে চলেছি! আমরা কথায় কথায় বলি, "জীবন একবারই পাওয়া যায়", কিন্তু কথাটা চরম ভুল; মৃত্যু আমরা জীবনে একবার পাই, আর জীবন আমরা প্রতিদিন সকালে ঘুম থেকে উঠলেই নতুন করে পাই! এই লাগামহীন দুশ্চিন্তাকে বশ করতে হলে আজ থেকেই কিছু বিষয় মগজে গেঁথে নিতে হবে। যখনই কোনো দুশ্চিন্তা আসবে, নিজেকে শুধু একটা প্রশ্ন করুন— যে বিষয়টা নিয়ে আমি এত ভাবছি, সেটা কি পরিবর্তন করা আদৌ আমার হাতে আছে? যদি উত্তর 'না' হয়, তবে অন্যের মতামত বা ভবিষ্যতের ভয়ের মতো নিয়ন্ত্রণের বাইরের বিষয়গুলোর দায়ভার নেওয়া আজই ছেড়ে দিন। মনকে দুশ্চিন্তা করতে জোর করে বাধা দিলে সে আরও বেশি করে ফিরে আসে, তাই মনের সাথে লড়াই না করে চুক্তি করুন; মনকে বলুন, "আমি এই সমস্যাটা নিয়ে ভাবব, তবে সারাদিন নয়, দিনের শেষে নির্দিষ্ট একটা সময়ে।" খেয়াল করে দেখবেন, দুশ্চিন্তা সবসময় হয় 'অতীত' নিয়ে, নয়তো 'ভবিষ্যৎ' নিয়ে; দুশ্চিন্তা কখনো বর্তমানে বাঁচে না। তাই যখনই মন অস্থির হয়ে উঠবে, একটা গভীর শ্বাস নিন এবং চারপাশের বর্তমানের দিকে তাকিয়ে নিজেকে বারবার মনে করিয়ে দিন— আমার ভবিষ্যৎ আমি জানি না, কিন্তু আমার বর্তমান এই মুহূর্তটি একেবারে নিরাপদ। জীবন খুব ছোট নয়, আমরাই আসলে বাঁচতে শুরু করি অনেক দেরিতে, তাই আজ থেকে, ঠিক এই মুহূর্ত থেকে সিদ্ধান্ত নিন— আপনার নিজের মনের রিমোট কন্ট্রোল আপনি আর কখনোই দুশ্চিন্তার হাতে তুলে দেবেন না।`,
];

const articlesEn = [
  `Today I haven't come to tell you a fairy tale, I've come to set off a word-bomb in your sleeping brain! You who are sitting here so peacefully today, put your hand on your chest and ask yourself—are you truly alive? Or have you accepted breathing and digesting food as 'being alive'? Open your eyes and look at the reality around you! Across the world, bloody wars rage, in every home burns the fire of conscienceless jealousy, sacred relationships are being trampled by filthy affairs and betrayal! And what are we doing? We don't have the ability to grow through our own merit, so all day long there's a cowardly competition of backstabbing each other! Selling our self-respect and spine, there's shameless boot-licking to collect the scraps of power! With eyes glued to smartphone screens, intoxicated by cheap rumors spreading everywhere, we've each become brain-washed living robots!

And standing in the middle of this ultimate social and moral decay, when you close your eyes with self-satisfaction and say— "What's it to me? I'm doing just fine!"—I feel pity looking at you! This 'being fine' of yours is not a success, it is an extreme mental paralysis! The person who, when their neighbor's house is on fire, doesn't go to extinguish it but gleefully warms their hands in demonic joy, is not a healthy person, they are a complete deranged non-human! Today we must admit, we are all infected by this deranged epidemic!

Today from this stage, I'm putting each one of you in the dock! Question yourself! Are you a person with independent thought, or a parasite floating on others' spread rumors? If you have any backbone left, throw away this fake act of 'being fine' from today, from this very moment! Stop celebrating others' downfall, break the chains of boot-licking and stand straight! Remember, in a society where the people around you are not at peace, your pride of 'being fine' is nothing but a time-bomb—which will explode in your own home any day!

So wake up today! Pull yourself out of this rotten, deranged mentality. Prove that your conscience hasn't died yet, prove—you are still living as real human beings!`,

  `Listen very carefully, because the balloon of arrogance that you inflate inside yourself every day, today I'm going to prick that balloon with the cruel truth of history; think for a moment, who are you really and what exactly is this sky-high arrogance of yours standing on? The day you came into this world, you didn't even have a thread on your body, you were a helpless lump of flesh surviving on others' mercy, who didn't even have the ability to take their first breath, and the day you depart from this world, your self-built empire of millions, expensive branded clothes or the arrogance of power—everything will remain behind, and you'll be wrapped naked in white cloth and buried underground, where even your last bath will be given by someone else; so tell me, when your beginning is at others' mercy and your end is on others' shoulders, what is all this arrogance for in this rented life of a few days in between? In the calendar of eternity, in this vast universe of 13.8 billion years, your seventy-eighty year life is merely a fraction of a second, you are just a temporary guest made from borrowed carbon and oxygen from nature, yet you think you are the controller of everything! Look at history a little, Alexander who conquered the world asked before death to hang his hands outside the coffin to show the world that he was going back empty-handed, and when the self-proclaimed god Pharaoh Ramses' corpse needed to be taken to France after thousands of years to save it from fungus in the museum, the modern world had to make a passport for that dead "God"; this is the race of power, this is humanity's final fate!`,

  `"Nobody in the world looks for humans, they look for money and titles"—denying this naked, grotesque and bloody truth means engaging in the most heinous self-deception, because behind this shiny mask of civilization, we are each actually skilled hypocrites, who daily sacrifice humanity at the altar of self-interest! Grab the collar of your conscience and stand before the mirror and ask yourself, if today your pocket has not a penny and no grand title hangs beside your name, how many of your closest people will come to respect your so-called 'sacred soul' or 'humanity'? Nobody, you guessed right, absolutely nobody; because in this poisonous capitalist rat-race society, the entity called 'human' is no longer a constant, rather it is a cheap commodity, whose market value is ruthlessly determined based on bank balance figures, brand of clothing, and the weight of visiting cards. When you say 'everyone surrenders', you are essentially holding up the magnifying glass of philosophy to humanity's ultimate opportunistic instinct of survival, where unconditional surrender to security, money and power in the urgency of self-preservation has become evolution's one cruel, logical mockery.`,

  `Have you ever stopped to ask yourself, what are we chasing all our lives? Happiness, right? But think about it, lying on expensive soft beds in grand palaces, people can't sleep, yet after bone-breaking labor, a day laborer sitting at a roadside tea stall laughs with all his heart! The difference isn't in the money in pockets, the difference is in our 'mind'. You have everything, but if the mind says from within "I'm not well", then no magic in the world can make you happy. The strongest chain of this invisible prison of the mind is called worry or overthinking. Stand before a mirror and ask yourself— the thing you cried about in fear 5 years ago, does that crying have any existence in your life today? No. In childhood we lose the present worrying about results, growing up about jobs, and after getting a job about promotions or the future. We are simply murdering our beautiful 'today' and 'present' with our own hands out of illusory fear of the future! We casually say, "Life comes only once", but that statement is absolutely wrong; death we get once in life, and life we get anew every morning when we wake up!`,
];

const titlesBn = [
  "জেগে উঠুন — মানসিক পঙ্গুত্ব থেকে মুক্তি",
  "অহংকারের ফানুস — ইতিহাসের নির্মম সত্য",
  "টাকা ও পদবী — মনুষ্যত্বের নিলাম",
  "দুশ্চিন্তার শেকল — মনের কারাগার থেকে মুক্তি",
];

const titlesEn = [
  "Wake Up — Freedom from Mental Paralysis",
  "The Balloon of Arrogance — Cruel Truth of History",
  "Money & Titles — The Auction of Humanity",
  "Chains of Worry — Freedom from Mind's Prison",
];

const Portfolio = () => {
  const { lang } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const articles = lang === "bn" ? articlesBn : articlesEn;
  const titles = lang === "bn" ? titlesBn : titlesEn;

  return (
    <section id="portfolio" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
            {lang === "bn" ? "আমার কিছু লেখা" : "My Writings"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {lang === "bn" ? "চিন্তার খোরাক" : "Food for Thought"}
          </h2>
          <p className="text-muted-foreground text-base mt-4 max-w-2xl mx-auto">
            {lang === "bn" ? "জীবন, সমাজ ও মনস্তত্ত্ব নিয়ে গভীর চিন্তাভাবনা" : "Deep reflections on life, society and psychology"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 cursor-pointer group"
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center text-lg font-bold">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {titles[i]}
                </h3>
              </div>
              <p className={`text-muted-foreground text-sm leading-relaxed whitespace-pre-line ${expandedIndex === i ? "" : "line-clamp-6"}`}>
                {article}
              </p>
              <button className="mt-4 text-primary text-sm font-medium hover:underline">
                {expandedIndex === i
                  ? (lang === "bn" ? "সংক্ষিপ্ত করুন" : "Show Less")
                  : (lang === "bn" ? "আরও পড়ুন" : "Read More")}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
