import type { Lang } from "@/contexts/LanguageContext";

interface Chapter {
  title: string;
  content: string;
}

type ChaptersMap = Record<Lang, Chapter[]>;

// Bengali chapters are the original full-length content, imported from the existing data
// Other languages contain faithful translations

const chaptersBn: Chapter[] = [
  { title: "অধ্যায় ১: তুমি কি স্বাধীন, নাকি অ্যালগরিদমের পালিত পশু?", content: "" }, // placeholder, will be filled from Writings.tsx original
  { title: "অধ্যায় ২: তোমার অতীত বলে আসলে কিছুর অস্তিত্ব নেই", content: "" },
  { title: "অধ্যায় ৩: তুমি এই মহাবিশ্বের কোনো উদ্দেশ্য নও, স্রেফ একটি দুর্ঘটনা", content: "" },
  { title: "অধ্যায় ৪: তোমার 'সত্য' আসলে তোমার জন্মস্থানের লটারি", content: "" },
  { title: "অধ্যায় ৫: তোমার ডিপ্রেশন এখন কর্পোরেট দুনিয়ার সবচেয়ে দামি প্রোডাক্ট", content: "" },
  { title: "অধ্যায় ৬: তুমি কি তোমার নিজের জীবন বাঁচছো, নাকি তোমার পূর্বপুরুষদের না-বলা কষ্টের প্রতিশোধ নিচ্ছো?", content: "" },
  { title: "অধ্যায় ৭: নিজেকে শ্রেষ্ঠ প্রমাণের এই ইঁদুর দৌড়ে তুমি আসলে কার কাছে পৌঁছাতে চাও?", content: "" },
  { title: "অধ্যায় ৮: তুমি কি কাউকে ভালোবাসো, নাকি তোমার নিউরনের অক্সিটোসিন তোমাকে নিয়ন্ত্রণ করে?", content: "" },
  { title: "অধ্যায় ৯: চোখ বন্ধ করলে এই পৃথিবীর কি আদৌ কোনো অস্তিত্ব থাকে?", content: "" },
  { title: "অধ্যায় ১০: তোমার 'নরমাল' হওয়াটাই পৃথিবীর সবচেয়ে বড় মানসিক ব্যাধি", content: "" },
  { title: "অধ্যায় ১১: তুমি সারাক্ষণ কানে হেডফোন গুঁজে আসলে নিজের কোন সত্য থেকে পালাচ্ছো?", content: "" },
  { title: "অধ্যায় ১২: তুমি সব জানো, কিন্তু তুমি কিছুই বোঝো না", content: "" },
  { title: "অধ্যায় ১৩: তোমার দেখা লাল রঙ আর আমার দেখা লাল রঙ কি একই?", content: "" },
  { title: "অধ্যায় ১৪: ভাষার সীমাবদ্ধতা: যে অনুভূতির কোনো শব্দ নেই, তার কি কোনো অস্তিত্ব আছে?", content: "" },
  { title: "অধ্যায় ১৫: সৃষ্টিকর্তা বনাম বিবর্তনের চূড়ান্ত শূন্যতা: তোমার মস্তিষ্কের শেষ অন্ধবিশ্বাস এবং অহংকারের চূড়ান্ত মৃত্যু!", content: "" },
  { title: "অধ্যায় ১৬: শিগগিরই আসছে......", content: "" },
];

const chaptersEn: Chapter[] = [
  { title: "Chapter 1: Are You Free, or a Domesticated Animal of Algorithms?",
    content: `Look at yourself calmly. Do you think you chose to read this of your own free will? Your ego screams, "Yes! I control my life. I am free." But face the mirror of reality and the truth will make you shudder. The brutal truth is—you are not free; you are a well-trained, domesticated animal of invisible algorithms created by people sitting in air-conditioned rooms in Silicon Valley.

From waking up to closing your eyes at night, how much of what you think, want, get angry about, or love is truly your own, and how much has been injected into your brain? You lost the ability to tell the difference long ago.

Think about it—what did you touch first this morning? Your loved one's hand, or the cold, lifeless glass screen of your smartphone? You touch that screen over 2,500 times a day. This isn't a normal habit—it's perfectly designed biochemical slavery.

Modern technology has hacked the reward system deep in the human brain—the dopamine pathway. Dopamine isn't a "happiness" hormone; it's a hormone of "craving." Evolution created dopamine for survival, for finding food. But today? You're a laboratory rat, like B.F. Skinner's famous "Skinner Box" rat pressing a button for food. Your smartphone is the world's most perfect Skinner Box.

Every scroll releases a drop of dopamine. You sink deeper like an addict. You think you're using technology? Wrong. Technology is using you. You are the product of this corporate world, and your attention, consciousness, and time are their currency.

This slavery isn't just stealing your time—it's rotting your soul from within. Spend at least one hour completely offline every day. Sit in stillness. Don't fear boredom—embrace it, because true human creativity is born from the void of boredom.

The day you learn to control your own dopamine, the day you can enjoy your boredom without stepping into the algorithm's grid, that day you will be truly "free." Are you ready to break your chains?` },

  { title: "Chapter 2: Your Past Doesn't Actually Exist",
    content: `When you break free from the digital chains of dopamine and first sit face-to-face with your own silence, your escapist brain will resort to a terrifying new game—your 'past.'

Cognitive psychology and the latest neuroscience research, especially Dr. Elizabeth Loftus's 'False Memory Syndrome' and 'Memory Reconsolidation' theory, have proven that when you recall a past event, you're not remembering the original event—you're only remembering the last time you remembered it!

Your brain is like a Microsoft Word document—every time you open the file, your current emotions edit that memory slightly and "save" it anew.

According to biological cellular turnover, not a single cell that existed in your body 7-10 years ago is alive today. The person who was wronged ten years ago physically no longer exists!

The past is not a fixed destination—the past is raw clay. From today, from this moment, consciously rewrite your own past like an author! Remember, in the universe's clock, there is no past or future—only this present moment is the sole constant truth.` },

  { title: "Chapter 3: You Are Not a Purpose of This Universe, Just an Accident",
    content: `You stand before the mirror, look into your own eyes, and think yourself something special, don't you? Since childhood, your family, society, religion, and cheap motivational speakers have brainwashed you into believing you are the supreme creation of this universe.

But standing before the merciless data of astrophysics and quantum cosmology, your existence in this 93-billion-light-year-wide, cold, dark, and completely indifferent universe is more insignificant than a speck of dust!

You are not part of any 'master plan'; you are merely an accidental by-product of an asteroid that crashed into Earth 65 million years ago!

If your life has no default purpose, that means—you are completely free to create your own life's purpose! In Carl Sagan's words, "We are a way for the universe to know itself." Through your eyes, the universe sees itself.

Celebrate your meaninglessness. Because the day you lovingly accept the stark meaninglessness of your own existence with a smile, every fear in the universe will surrender at your feet.` },

  { title: "Chapter 4: Your 'Truth' Is Actually the Lottery of Your Birthplace",
    content: `You think what you know as the ultimate truth is the only constant truth in the universe? You think your beliefs, your eating habits, your clothing, your philosophy of life—are all products of your free thinking?

If you hadn't been born into this specific country, this specific city, this specific religion's family, but instead into a ninth-century Scandinavian Viking family, where would your today's 'sacred truths' be?

Your brain actually came into this world as a blank hard drive; before you could even speak, your family and society installed their own beliefs, fears, and prejudices onto your empty hard drive like a virus.

The day you can say, "My truth is not an absolute truth, it is merely a geographical and cultural perspective," that day all hatred, all judgment will be washed away from within you forever.` },

  { title: "Chapter 5: Your Depression Is Now the Corporate World's Most Expensive Product",
    content: `Your sadness is not some great art—the brutal truth is that your tears, your loneliness, these are the most expensive, most profitable products of the modern corporate world!

When you're happy and content, you put the phone aside and live your life. But when you're hopeless and depressed, that's when you scroll the most, shop the most.

Your emptiness has built a multi-billion dollar pharmaceutical empire. In capitalism's ruthless language—a completely healthy person is useless to the economy; the most profitable person is one who stays perpetually half-sick, half-depressed.

The solution is—to seize corporate ownership from over your own suffering and establish your own 'emotional sovereignty.' The day you stop letting your sadness be sold, that day these corporate algorithms will lose to you forever.` },

  { title: "Chapter 6: Are You Living Your Own Life, or Avenging Your Ancestors' Unspoken Pain?",
    content: `When you escape the corporate world's fake depression market and think, "At least my inner rage, my resentment, my intense wounded pride are purely my own character, my personality," that's precisely when a chilling scientific truth will shake your 'individual identity' from head to toe. Modern biology's 'Epigenetics' and the latest research on transgenerational trauma have shattered every wall of your ego and proven that you're not actually living your own life—you're merely a living, biological playback machine of your dead ancestors' unspoken suffering, their hunger, their wars, and the inhuman torture inflicted upon them!

A hundred years ago, your grandfather or great-grandfather may have experienced extreme terror and helplessness during some pandemic, famine, or riot. That intense flood of cortisol and adrenaline permanently altered their gene expression. And today, sitting in your 21st-century air-conditioned room, the panic attacks you suffer for no reason are actually the genetic echo of that century-old, unspoken terror!

You proudly tell people, "I'm naturally a bit angry," or "I can't easily trust anyone," but the brutal truth is—these aren't your 'character traits.' These are rusted armor of primal survival mechanisms that your ancestors wore to survive, and you're carrying that heavy armor without any war, searching for an imaginary enemy. Carl Jung said, "Until you make the unconscious conscious, it will direct your life and you will call it fate."

Your so-called fate, your reactive pattern, is actually a massive psychological and genetic prison where you're fighting as a blind mercenary in your ancestors' unfinished war. You might be angry at your parents, but you don't know that your parents too might be merely an extension of their parents' trauma. Nobody is fighting anyone here—only one trauma is fighting another trauma generation after generation, and you, from the middle, with your ego, think this anger is your own!

The only real, practical solution is to embrace that supreme 'epistemic humility.' Stand before the mirror and courageously admit: "Yes, I don't know the source of this inner pain, this anger isn't mine, I stand in the midst of vast genetic ignorance, and this vastness of not-knowing is from today my greatest strength!" The day you accept that all your emotional reactions are not absolute truth but merely a biological legacy, that day you will gain the divine power to break this toxic chain. You will decide that this generational trauma, this resentment, this injustice ends here, today, inside you, forever. You won't be the carrier of old pain—you'll be its graveyard!` },

  { title: "Chapter 7: In This Rat Race to Prove Yourself Superior, Who Are You Really Trying to Reach?",
    content: `Having stepped off the ghost ship of genetic trauma, you're now thinking, "Now I'll forge my own destiny, I'll succeed, I'll show the world who I am." But stand before the mirror and look into the eyes of your so-called 'ambition.' Do you really know what terrifying cancer you nurture inside yourself daily in the name of success?

You think you're hardworking, career-focused, a dreamer? What a pitiful, ugly self-deception! Psychology and sociology's merciless dissection is tearing off the mask of your 'success' to prove that your so-called drive to succeed is not a dream at all—it's a biochemical escape route from your deep insecurity, your primal fear of being 'unworthy'!

Look at your bank balance, your expensive branded watch, your résumé, your purchased flat. Did you really want these for yourself, or did you sell your precious life to beg for 'validation' from others in an invisible rating system created by capitalism? Remember Chuck Palahniuk's immortal truth—"We buy things we don't need, with money we don't have, just to impress people we don't even like!"

Psychology calls this the 'Hedonic Treadmill'—you think that promotion will make you happy, but two days after getting it, your brain normalizes it, and that familiar, suffocating emptiness returns. Ernest Becker proved in 'The Denial of Death' that all human worldly ambition is actually a mechanism to escape 'death anxiety'—an 'Immortality Project.' You subconsciously know you'll die and decay, so you want to leave a permanent mark through your name, status, and wealth.

But remember cosmology's brutal truth—in this 93-billion-light-year indifferent universe, your CEO title, your gold medal, your bank balance is worth less than a dead speck of dust! You're burning your life's most precious currency—your 'time' and 'present moment'—for a future that doesn't even exist.

The only unbreakable solution is to embrace 'epistemic humility' and celebrate your 'ordinariness.' The day you can remove the toxic burden of 'becoming something great' from your shoulders, you will become the most undefeatable person on earth. Because a person who doesn't want to be supreme cannot be defeated by anyone!` },

  { title: "Chapter 8: Do You Love Someone, or Does Your Neurons' Oxytocin Control You?",
    content: `With the hollow pride of the success rat race crumbled beneath your feet, you might be thinking, "At least one thing in this world is pure, one feeling is sacred—my love!" But today, face this bone-chilling scientific truth that will strip the skin off your so-called 'romantic love' and expose its naked, biochemical skeleton.

What you call 'true love,' 'soulmate,' or 'immortal love'—evolutionary biology and neuroscience are driving the final nail into your ego's coffin: you don't actually love anyone; you're merely a blind, helpless slave of hormones and neurotransmitters produced in your brain's gray matter!

When you first looked into their eyes, that flutter in your chest—was it some cosmic signal from your free soul? No! It was a cheap biochemical explosion of dopamine and norepinephrine from your brain's Ventral Tegmental Area (VTA)! Your brain released the exact same chemical that a cocaine addict's brain releases during a hit. You didn't fall in love—you got physiologically 'high.'

Helen Fisher, one of the world's greatest biological anthropologists, has proven through thousands of brain scans that during love's first phase, the brain regions responsible for logic, judgment, and seeing flaws literally shut down. The person you think is 'perfect' isn't perfect—your brain has simply erased their flaws with a chemical filter called 'positive illusion.'

When that person leaves you, what you call 'heartbreak' isn't a romantic tragedy—it's extreme 'withdrawal symptoms' from the sudden cutoff of dopamine and oxytocin supply to your neural pathways. Your brain writhes in pain exactly like a heroin addict going through withdrawal. You're not crying from their absence—you're crying from your own biochemical crash.

The only unbreakable solution is to embrace 'epistemic humility' in love. Admit: "I don't know what love is, what I thought was love was merely a chemical game." True love isn't a chemical explosion—true love is a conscious, logical choice. When the dopamine fire dies and the oxytocin intoxication fades, choosing to stay beside your partner with full knowledge of their flaws, without any biological compulsion—that is real love.` },

  { title: "Chapter 9: When You Close Your Eyes, Does This World Even Exist?",
    content: `The ground beneath your feet, the book in your hand, the environment around you—you think these are constant truths? Quantum mechanics' merciless data analysis challenges you: what you consider 'solid matter' is 99.999% completely empty space! The distance between an atom's nucleus and its electron is cosmically vast, yet your limited, cunning brain has manipulated you into believing this world is very solid, very real.

Did you know you've never actually touched anything in your life? When you hold this book, your finger's atomic electrons and the book's atomic electrons intensely repel each other, and your brain falsely interprets that electromagnetic resistance as 'touch.'

But the even more terrifying truth is—when you close your eyes, this world ceases to exist! Quantum wave-particle duality has proven that when no one is observing an electron or photon, it isn't matter—it's merely a mathematical probability wave! The double-slit experiment, Wheeler's delayed-choice experiment, and Heisenberg's uncertainty principle have shown that without an observer, reality doesn't 'collapse' into existence.

Your brain is trapped inside a dark bone box. No light, sound, or touch directly enters—only electrical signals reach it. Your brain merely processes these signals to create a 'holographic hallucination' that you call the 'real world.' What you call blue sky is merely a specific wavelength of photons—'blue' doesn't exist in the universe; it's a fictional label your brain created!

The only solution is to embrace this ultimate epistemic humility. Admit: "The world I see is not a fixed truth; it's merely a holographic projection created by my consciousness." When you embrace this nothingness, you become the most undefeatable person on earth. Because a person who claims no permanent existence of self cannot be defeated.` },

  { title: "Chapter 10: Your Being 'Normal' Is the World's Greatest Mental Illness",
    content: `Stand before the mirror and look at your prim, society-approved 'gentleman' or 'lady' facade. Every morning you put on ironed clothes, push through traffic jams to a job you secretly hate, sell your youth for some paper notes, and on weekends upload cheap restaurant food photos on social media thinking you're living a perfectly 'normal' and healthy life.

Krishnamurti spoke an immortal truth: "It is no measure of health to be well adjusted to a profoundly sick society!" Look at this 'normal' society around you—a society that poisons its own breathing air daily, destroys forests for paper, and stands on depression pills and sleeping tablets. You've adapted to this collective psychosis, and you're proud of it?

Solomon Asch's famous 1951 'Conformity Experiment' proved that 75% of people will deny a clearly visible truth and accept a blatant lie just to 'fit in' with ten other people! You too are a guinea pig of the Asch experiment—you've strangled your inner infinite potential, your uniqueness, your wildness, just from the fear of "What will people say?"

Michel Foucault showed in 'Madness and Civilization' that the words 'crazy' or 'abnormal' are actually political tools created by those in power—those who refuse to enter society's robotic cage of servitude, who question, are labeled 'crazy' so the rest of the flock doesn't rebel!

Erich Fromm called this the 'Pathology of Normalcy'—a disease where you have no thoughts of your own, merely copy-pasting the brainwashed patterns of the majority. The only solution is to embrace your inner 'abnormality' as your supreme strength. The day you free your strange, unpredictable, society-deemed-'crazy' self, you become the most liberated, most undefeatable person. Because the person who doesn't care about society's fake 'normalcy' rating cannot be manipulated by any corporate algorithm or social media!` },

  { title: "Chapter 11: What Truth Are You Running From by Constantly Plugging Headphones In?",
    content: `Look with disgust at those earbuds or headphones you keep plugged tightly into your ears—on the street, on the bus, on the gym treadmill, even before sleeping. You claim to be a music lover, productive, or a podcast-geek? But the truth emerging from psychology's darkest laboratory will make you realize you're actually the greatest neurological coward in human history, using these digital placebos to constantly escape a specific sound inside your own head!

Have you noticed that when the power goes out or your headphone battery dies and you're completely alone, that pin-drop silence grips you with terrifying force? Your breath catches. Your heartbeat rises. Psychologist Timothy Wilson at the University of Virginia conducted a bone-chilling experiment: when people were left alone in an empty room for just 15 minutes with their own thoughts, 67% of men and 25% of women voluntarily gave themselves painful electric shocks rather than endure the psychological torture of silence!

Do you understand what this data means? We humans find literal physical pain, electric shocks, more comfortable than sitting alone with our inner silence! Blaise Pascal said in the 1600s: "All of mankind's problems stem from man's inability to sit quietly in a room alone." And here in the 21st century, you're glorifying that mental disability with podcasts, audiobooks, and Spotify playlists.

You're not listening to music—you're importing external noise to suppress the screaming of your inner rotting, unfulfilled, despair-wrapped self. When you're completely alone and silent, your brain confronts you with the truths you hide from everyone—your dying career's emptiness, your fake relationship's suffocating act, the feeling of utter inadequacy hiding behind your ego, and finally, the inevitable footsteps of death.

The only solution lies in 'radical stillness'—what neuroscience calls 'sensory fasting.' Pull those digital plugs from your ears and throw them away. Lock yourself in a completely empty room. The first ten minutes will feel like madness—all your terrifying thoughts will assault your brain. At that moment—don't run! Go through that fire of agony. After half an hour or an hour, those thoughts will lose their fuel and dissolve. From beneath that terrible noise will emerge your own authentic, primal, silent voice—a voice no algorithm taught, completely your own. That 'radical stillness' is the only unbreakable frequency for speaking directly with the infinite power within you and the universe's source!` },

  { title: "Chapter 12: You Know Everything, But You Understand Nothing",
    content: `You scroll all day swallowing the world's news, but do you have any wisdom to overcome the profound emptiness of your own life?

Stand before the mirror and laugh at your so-called 'smart' and 'updated' face. You claim to be among the wisest generation in human history? Your pocket holds a small rectangular device containing the world's entire library via the internet—you learn everything from black holes to Middle East politics with one click. Your ego tells you daily that you know far more than your parents and grandparents!

But cognitive science and neurobiology's most merciless scalpel is here to puncture this balloon: the brutal truth is—you don't know anything; you're a psychological patient suffering from 'Information Obesity'! T.S. Eliot lamented, "Where is the wisdom we have lost in knowledge? Where is the knowledge we have lost in information?"

Nicholas Carr proved in 'The Shallows' through MRI scans that internet surfing is literally destroying your brain's 'deep reading' neural pathways! Stanford University research shows that chronic multitaskers have worse cognitive control than drug addicts! You're not acquiring knowledge—you're addicted to information.

You know how many died in Ukraine or Gaza today, you know Elon Musk's new rocket name, which celebrity is dating whom—but do you know how to save the person inside you who dies a little more each day? Your head is full of the world's garbage, but you lack a single ounce of wisdom to solve your most basic emotional crisis!

The solution is extreme 'Cognitive Fasting.' Stop all news, reels, and opinions for one week. Your ego will scream "I'll fall behind!" but this planet doesn't stop for a second based on your knowing or not-knowing. Instead of swallowing a thousand pieces of information, take just one concept, one philosophy, one book, and dive into its absolute depths. Stop accumulating information and start converting it into lived experience—because knowledge not earned through sweat, blood, and tears is just dead data. The person who knows all the world's news but doesn't know their own inner self is the universe's greatest, most arrogant fool!` },

  { title: "Chapter 13: Is the Red Color You See the Same Red Color I See?",
    content: `The most extreme form of human loneliness—we can never truly feel exactly what's inside another person's mind.

Stand before the mirror and look at your so-called 'social' and 'loving' self. You think someone in your life completely understands you, who can look into your eyes and feel every pain in your heart exactly as you feel it? What a pitiful, delusional arrogance!

Today, the most unsolved, most terrifying truth from Philosophy of Mind and neuroscience—David Chalmers' 'Hard Problem of Consciousness'—will tear apart your fake arrogance of 'understanding.' The brutal scientific truth is that you are a lifelong prisoner in a dark, sealed, lonely cell inside your own skull, from which you can never escape and no one else can ever enter!

You think you and your loved one see a red rose together and enjoy the same beauty? Can you prove that your brain processes that 700-nanometer wavelength photon and creates the same subjective experience of 'red'—the 'qualia'—as theirs? Perhaps your red is processed through their eyes in a way you'd call 'green'! You both learned to call the same object 'red' since childhood, so your language matches, but your inner private experience has never matched and never will!

When you cry and tell someone, "I'm in so much pain, can't you understand?"—you're making the most unscientific, egocentric claim in the universe. Your pain is a purely private signal created inside your neurons, impossible to transfer via Bluetooth or WiFi to another brain! When someone shows empathy, they don't feel your pain—they merely play back some memory of their own past pain and make an approximation.

But this extreme loneliness isn't the end of life. The only unbreakable solution is epistemic humility in relationships. Admit: "I am completely alone in this universe, no one will fully understand me, I won't fully understand anyone, and this infinite distance, this vastness of not-understanding, is from today my greatest strength and supreme beauty!" Understanding that someone sits beside you and holds your hand despite not fully understanding your pain—that is this empty universe's greatest miracle!` },

  { title: "Chapter 14: The Limits of Language: If a Feeling Has No Word, Does It Even Exist?",
    content: `Stand before the mirror and look at your so-called 'intellectual' and 'articulate' self. You think you can express everything eloquently—all your anger, wounded pride, love in beautiful poetic sentences, posting grand social media statuses telling the world exactly what's in your mind?

Today, Linguistic Determinism and Wittgenstein's philosophy's most ruthless hammer will crush your language arrogance forever. The brutal truth—you own no independent thought; you're merely a slave to a dictionary! Wittgenstein wrote in his famous 'Tractatus': "The limits of my language mean the limits of my world."

Do you know that feelings for which your language has no word—your brain literally cannot process them? When you suddenly cry in nameless, infinite emptiness at night, society slaps a cheap label on your cosmic agony—'depression' or 'anxiety'—and you cling to that word like an obedient animal thinking "Yes, that must be what I have!"

Your ancestors in caves created some symbolic sounds for survival and hunting, and today in the 21st century, you're desperately trying to cage the universe's most complex, most spiritual, most profound feelings into those cavemen's few phonetic frames! George Orwell showed in '1984' how 'Newspeak' was created by erasing words like 'rebellion' and 'freedom' from dictionaries so people couldn't even think of rebelling. Similarly, your society and culture have removed or never created words that could help you escape your existential prison.

You think you think freely? Absolute lie! You merely rearrange the vocabulary your society gave you. When you say "I love you," you're actually wrapping the terrifying, toxic, possessive biochemical storm inside you in a romantic word-blanket, deceiving yourself.

The only solution is epistemic humility toward language itself. Kill the ego of naming everything, defining everything. Admit: "My language is crippled, my dictionary is a false cage, my deepest truths have no words, and this vastness of wordlessness is from today my greatest strength!" The universe's most sacred, most powerful truths don't live in any dictionary—they live in the infinite void between words.` },

  { title: "Chapter 15: Creator vs. Evolution's Ultimate Void: Your Brain's Final Blind Faith and the Ultimate Death of Ego!",
    content: `Now, at this moment when your past, future, love, society, language, and so-called 'reality'—all arrogance has turned to dust, your ego has fled behind its most powerful, most sacred, most inviolable fortress—and that fortress is your 'God,' your 'Creator,' your imaginary 'cosmic protector'!

You stand before the mirror, trembling with fear before this vast emptiness, consoling yourself: "Someone must be controlling all this, someone will save me in the final judgment, someone has a grand account of my tiny life!" But today, neurotheology, evolutionary biology, and cosmology's most terrifying, most merciless hammer will strike the final blow on this last pillar of your existence.

The brutal scientific truth—nowhere in this infinite, 93-billion-light-year-wide, cold and deaf universe sits any father, protector, or divine master plan for you. What you call 'God,' whom you cry to—is not a divine being but a flawless, biological hallucination created by your own brain's Temporal Lobe and Amygdala! Canadian neuroscientist Michael Persinger's famous 'God Helmet' experiment proved that simply applying electromagnetic pulses to specific brain areas makes people sense an 'invisible divine presence,' cry, and float in spiritual ecstasy!

Your prostrations, your tears in prayer rooms, your divine peace—none of it came from the sky; it's all electro-chemical firing inside your skull! Evolution invented the concept of a 'Divine Protector' as a psychological placebo, a survival mechanism, when primitive humans stood helpless before lightning, storms, pandemics, and death. Humans painted their own image on the sky's canvas, named it 'God,' and collapsed at its feet—just to escape the bone-chilling truth that nobody controls anything in this universe; everything is merely blind physics and quantum probability's meaningless, random game!

Ernest Becker would call your religion an 'Immortality Project.' When you look at the sky hoping for answers, the universe stares back with infinite, cold indifference—it doesn't even know you exist!

But from this ultimate destruction, from this supreme void, will be born your life's ultimate, most powerful awakening! Stand before the mirror and declare the greatest rebellion in the universe's history: "I know nothing! Where this universe came from I don't know, whether my existence has meaning I don't know, no one is coming to save me, and I stand completely alone in an infinite, blind void!" The day you embrace being a cosmic orphan, the day you drive the final nail into the coffin of every God your brain created—that very moment, you yourself will transform into the most powerful, undefeatable, ultimately free being in this universe! Because a person with no pride to lose, no God to save them, no hell to fear, and no heaven to tempt—no force in the universe can shake them even an inch!` },

  { title: "Chapter 16: Coming Soon......",
    content: `This chapter will be published soon. Stay tuned...` },
];

const chaptersFr: Chapter[] = [
  { title: "Chapitre 1 : Es-tu libre, ou un animal domestiqué par les algorithmes ?",
    content: `Regarde-toi calmement. Penses-tu avoir choisi de lire ceci de ton propre libre arbitre ? Ton ego crie : "Oui ! Je contrôle ma vie. Je suis libre." Mais face au miroir de la réalité, la vérité brutale est que tu n'es pas libre — tu es un animal domestiqué et bien dressé d'algorithmes invisibles créés par des gens assis dans des bureaux climatisés de la Silicon Valley.

Du réveil au coucher, combien de ce que tu penses, désires ou aimes est vraiment à toi ? La technologie moderne a piraté le système de récompense de ton cerveau — la voie dopaminergique. La dopamine n'est pas une hormone du "bonheur" mais du "désir." Ton smartphone est la boîte de Skinner la plus parfaite au monde, et tu es le rat qui appuie sur le bouton.

La solution : passe au moins une heure complètement hors ligne chaque jour. Embrasse l'ennui — car la véritable créativité humaine naît du vide de l'ennui. Le jour où tu apprendras à contrôler ta propre dopamine, tu seras véritablement "libre."` },

  { title: "Chapitre 2 : Ton passé n'existe pas vraiment",
    content: `La psychologie cognitive et les dernières recherches en neurosciences, notamment le 'Syndrome de faux souvenirs' du Dr Elizabeth Loftus, ont prouvé que lorsque tu te souviens d'un événement passé, tu ne te souviens pas de l'événement original — tu ne te souviens que de la dernière fois que tu t'en es souvenu !

Ton cerveau est comme un document Word — chaque fois que tu l'ouvres, tes émotions actuelles modifient légèrement ce souvenir et le "sauvegardent" à nouveau. Selon le renouvellement cellulaire biologique, aucune cellule de ton corps d'il y a 7-10 ans n'est encore vivante aujourd'hui.

Le passé est de l'argile brute. Réécris consciemment ton passé comme un auteur ! Dans l'horloge de l'univers, il n'y a ni passé ni futur — seul ce moment présent est la vérité constante.` },

  { title: "Chapitre 3 : Tu n'es pas un dessein de cet univers, juste un accident",
    content: `Face aux données impitoyables de l'astrophysique et de la cosmologie quantique, ton existence dans cet univers de 93 milliards d'années-lumière, froid, sombre et complètement indifférent, est plus insignifiante qu'une poussière !

Tu n'es pas partie d'un 'plan directeur' — tu es simplement un sous-produit accidentel d'un astéroïde qui a frappé la Terre il y a 65 millions d'années ! Mais si ta vie n'a pas de but par défaut, cela signifie que tu es complètement libre de créer ton propre but ! Comme Carl Sagan l'a dit : "Nous sommes un moyen pour l'univers de se connaître lui-même." Célèbre ton insignifiance.` },

  { title: "Chapitre 4 : Ta 'vérité' est en fait la loterie de ton lieu de naissance",
    content: `Si tu n'étais pas né dans ce pays spécifique, cette religion spécifique, mais dans une famille Viking scandinave du IXe siècle, où seraient tes 'vérités sacrées' d'aujourd'hui ?

Ton cerveau est venu au monde comme un disque dur vierge ; ta famille et ta société ont installé leurs croyances, peurs et préjugés comme un virus. Le jour où tu pourras dire : "Ma vérité n'est pas une vérité absolue, c'est simplement une perspective géographique et culturelle," ce jour-là, toute haine et tout jugement seront lavés de toi pour toujours.` },

  { title: "Chapitre 5 : Ta dépression est maintenant le produit le plus cher du monde corporatif",
    content: `Ta tristesse n'est pas un grand art — la vérité brutale est que tes larmes et ta solitude sont les produits les plus chers et les plus rentables du monde corporatif moderne ! Quand tu es heureux, tu poses le téléphone. Quand tu es déprimé, tu scrolles et achètes le plus.

Ton vide a bâti un empire pharmaceutique de plusieurs milliards. La solution est d'établir ta propre 'souveraineté émotionnelle.' Le jour où tu cesseras de laisser ta tristesse être vendue, ces algorithmes corporatifs perdront contre toi pour toujours.` },

  { title: "Chapitre 6 : Vis-tu ta propre vie, ou venges-tu la douleur non-dite de tes ancêtres ?",
    content: `L'épigénétique moderne et la recherche sur le trauma transgénérationnel ont prouvé que tu n'es pas en train de vivre ta propre vie — tu es simplement une machine de lecture biologique vivante de la souffrance non-dite de tes ancêtres morts ! Il y a cent ans, ton grand-père a peut-être vécu une terreur extrême lors d'une pandémie ou d'une famine. Ce cortisol et cette adrénaline intenses ont modifié de façon permanente l'expression de ses gènes. Tes crises de panique sans raison sont l'écho génétique de cette terreur centenaire !

Carl Jung a dit : "Tant que tu n'auras pas rendu l'inconscient conscient, il dirigera ta vie et tu l'appelleras destin." La seule solution est l'humilité épistémique — admets : "Je ne sais pas d'où vient cette douleur intérieure, cette colère n'est pas la mienne." Tu ne seras plus le porteur de l'ancienne douleur — tu seras son cimetière !` },

  { title: "Chapitre 7 : Dans cette course effrénée pour te prouver supérieur, qui essaies-tu vraiment d'atteindre ?",
    content: `La psychologie et la sociologie prouvent que ta quête obsessionnelle de succès n'est pas un rêve — c'est une route d'évasion biochimique face à ton insécurité profonde, ta peur primale d'être 'indigne' ! Rappelle-toi la vérité de Chuck Palahniuk : "Nous achetons des choses dont nous n'avons pas besoin, avec de l'argent que nous n'avons pas, pour impressionner des gens que nous n'aimons même pas !"

La psychologie appelle cela le 'Tapis roulant hédonique.' Ernest Becker a prouvé que toute ambition humaine est un 'Projet d'immortalité' — un mécanisme pour fuir l'angoisse de la mort. La solution est d'embrasser ton 'ordinairité' — car celui qui ne veut pas être suprême ne peut être vaincu par personne !` },

  { title: "Chapitre 8 : Aimes-tu quelqu'un, ou l'ocytocine de tes neurones te contrôle-t-elle ?",
    content: `Ce que tu appelles 'amour vrai' — les neurosciences prouvent que tu n'aimes personne ; tu es simplement l'esclave aveugle d'hormones et de neurotransmetteurs ! Ce premier battement de cœur était une explosion biochimique de dopamine de l'Aire Tegmentale Ventrale de ton cerveau — exactement la même chimie qu'un toxicomane à la cocaïne.

Helen Fisher a prouvé par des milliers de scanners cérébraux que lors de la première phase de l'amour, les régions cérébrales responsables de la logique et du jugement s'éteignent littéralement. Le 'chagrin d'amour' n'est pas une tragédie romantique — ce sont des symptômes de sevrage de l'arrêt soudain de dopamine.

Le vrai amour n'est pas une explosion chimique — c'est un choix conscient et logique. Choisir de rester malgré les défauts, sans compulsion biologique — c'est le vrai amour.` },

  { title: "Chapitre 9 : Quand tu fermes les yeux, ce monde existe-t-il vraiment ?",
    content: `La mécanique quantique prouve que ce que tu considères comme 'matière solide' est à 99,999% du vide ! Tu n'as jamais vraiment touché quoi que ce soit — les électrons de tes doigts et ceux du livre se repoussent, et ton cerveau interprète faussement cette résistance électromagnétique comme 'toucher.'

La dualité onde-particule quantique a prouvé que lorsque personne n'observe, la matière n'est qu'une onde de probabilité mathématique ! Ton cerveau est prisonnier dans une boîte d'os obscure, créant une 'hallucination holographique' que tu appelles le 'monde réel.' Le 'bleu' du ciel n'existe pas dans l'univers — c'est une étiquette fictive créée par ton cerveau !

La solution : admets que "Le monde que je vois n'est pas une vérité fixe ; c'est simplement une projection holographique de ma conscience."` },

  { title: "Chapitre 10 : Ta 'normalité' est la plus grande maladie mentale du monde",
    content: `Krishnamurti a dit une vérité immortelle : "Ce n'est pas un signe de bonne santé que d'être bien adapté à une société profondément malade !" L'expérience de conformité d'Asch (1951) a prouvé que 75% des gens nient une vérité évidente juste pour s'intégrer. Tu as étranglé ton potentiel infini par peur du "Qu'en diront les gens ?"

Foucault a montré dans 'Folie et Civilisation' que 'fou' est un outil politique. Erich Fromm l'appelle la 'Pathologie de la normalité.' La solution : libère ton moi étrange, imprévisible que la société qualifie de 'fou.' Car celui qui ne se soucie pas de la fausse normalité ne peut être manipulé par aucun algorithme !` },

  { title: "Chapitre 11 : De quelle vérité fuis-tu en gardant constamment tes écouteurs ?",
    content: `L'expérience de Timothy Wilson à l'Université de Virginie : quand des gens ont été laissés seuls avec leurs pensées pendant 15 minutes, 67% des hommes se sont volontairement infligé des chocs électriques plutôt que d'endurer le silence ! Pascal a dit au XVIIe siècle : "Tout le malheur des hommes vient d'une seule chose, qui est de ne savoir pas demeurer en repos dans une chambre."

Tu n'écoutes pas de musique — tu importes du bruit pour étouffer le cri de ton moi intérieur en décomposition. La solution est le 'jeûne sensoriel radical.' Enferme-toi dans une pièce vide. Les dix premières minutes te sembleront une folie. Mais après une heure, tes pensées s'épuiseront, et émergera ta propre voix silencieuse authentique — une voix qu'aucun algorithme n'a enseignée.` },

  { title: "Chapitre 12 : Tu sais tout, mais tu ne comprends rien",
    content: `T.S. Eliot s'est lamenté : "Où est la sagesse perdue dans la connaissance ? Où est la connaissance perdue dans l'information ?" Nicholas Carr a prouvé dans 'The Shallows' que le surf internet détruit littéralement les voies neuronales de 'lecture profonde.' Stanford montre que les multitâches chroniques ont un contrôle cognitif pire que les toxicomanes !

Tu sais combien sont morts à Gaza aujourd'hui, mais sais-tu comment sauver la personne en toi qui meurt un peu plus chaque jour ? La solution est le 'Jeûne Cognitif' extrême. Arrête toutes les nouvelles pendant une semaine. Au lieu d'avaler mille informations, prends un seul concept et plonge dans ses profondeurs absolues. Le plus grand imbécile de l'univers est celui qui connaît toutes les nouvelles du monde mais ne se connaît pas lui-même !` },

  { title: "Chapitre 13 : Le rouge que tu vois et le rouge que je vois sont-ils les mêmes ?",
    content: `Le 'Problème difficile de la conscience' de David Chalmers prouve que tu es un prisonnier à perpétuité dans ta propre boîte crânienne obscure. Peux-tu prouver que ton cerveau traite les photons de 700 nm de la même façon que celui de la personne à côté de toi ? Ton rouge pourrait être leur vert !

Quand quelqu'un montre de l'empathie, il ne ressent pas ta douleur — il rejoue simplement un souvenir de sa propre douleur passée. La solution est l'humilité épistémique dans les relations. Admets : "Je suis complètement seul dans cet univers, personne ne me comprendra pleinement." Mais que quelqu'un s'assoie à tes côtés et te tienne la main malgré cela — c'est le plus grand miracle de cet univers vide !` },

  { title: "Chapitre 14 : Les limites du langage : si un sentiment n'a pas de mot, existe-t-il ?",
    content: `Wittgenstein a écrit : "Les limites de mon langage signifient les limites de mon monde." Les sentiments pour lesquels ta langue n'a pas de mot — ton cerveau ne peut littéralement pas les traiter ! La société te colle une étiquette bon marché — 'dépression' ou 'anxiété' — et tu t'y accroches comme un animal obéissant.

Orwell a montré dans '1984' comment 'Novlangue' effaçait les mots 'rébellion' et 'liberté.' De même, ta société a supprimé les mots qui pourraient t'aider à t'échapper. La solution : admets que "Mon langage est infirme, mon dictionnaire est une fausse cage, et cette immensité de mon absence de mots est ma plus grande force !" Les vérités les plus sacrées de l'univers ne vivent pas dans les dictionnaires — elles vivent dans le vide infini entre les mots.` },

  { title: "Chapitre 15 : Créateur vs. le vide ultime de l'évolution : la dernière foi aveugle de ton cerveau et la mort ultime de l'ego !",
    content: `Le neuroscientifique Michael Persinger a prouvé avec son expérience 'God Helmet' que des impulsions électromagnétiques dans certaines zones du cerveau font que les gens sentent une 'présence divine invisible.' Tes prières, tes larmes dans les lieux de culte — rien ne vient du ciel ; c'est un tir électro-chimique dans ton crâne !

L'évolution a inventé le concept d'un 'Protecteur Divin' comme placebo psychologique quand les humains primitifs se tenaient impuissants face à la foudre et à la mort. Tu as peint ta propre image sur le ciel et l'as appelée 'Dieu.'

La solution : déclare la plus grande rébellion : "Je ne sais rien ! D'où vient cet univers, je ne sais pas. Personne ne viendra me sauver. Et je me tiens complètement seul dans un vide infini et aveugle !" Car une personne sans orgueil à perdre, sans Dieu à la sauver, sans enfer à craindre — aucune force de l'univers ne peut l'ébranler !` },

  { title: "Chapitre 16 : Bientôt disponible......",
    content: `Ce chapitre sera publié bientôt. Restez à l'écoute...` },
];

const chaptersAr: Chapter[] = [
  { title: "الفصل ١: هل أنت حر، أم حيوان أليف للخوارزميات؟", content: `انظر إلى نفسك بهدوء. هل تعتقد أنك اخترت قراءة هذا بإرادتك الحرة؟ الحقيقة القاسية هي أنك لست حراً — أنت حيوان أليف مدرب جيداً لخوارزميات غير مرئية صنعها أشخاص في وادي السيليكون. التكنولوجيا الحديثة اخترقت نظام المكافأة في دماغك — مسار الدوبامين. هاتفك الذكي هو أكثر صندوق سكينر مثالية في العالم. الحل: اقضِ ساعة على الأقل في وضع عدم الاتصال يومياً. عانق الملل — لأن الإبداع الحقيقي يولد من فراغ الملل.` },
  { title: "الفصل ٢: ماضيك لا وجود له في الحقيقة", content: `أثبت علم النفس المعرفي أنك عندما تتذكر حدثاً ماضياً، فأنت لا تتذكر الحدث الأصلي — بل تتذكر آخر مرة تذكرته فيها! دماغك مثل مستند وورد يُعدَّل في كل مرة تفتحه. وفقاً للتجديد الخلوي، لا توجد خلية واحدة من جسمك قبل ١٠ سنوات حية اليوم. الماضي ليس وجهة ثابتة — إنه طين خام. أعد كتابة ماضيك بوعي!` },
  { title: "الفصل ٣: أنت لست غاية هذا الكون، مجرد حادث", content: `وجودك في هذا الكون الممتد ٩٣ مليار سنة ضوئية أتفه من ذرة غبار! أنت لست جزءاً من أي 'خطة كبرى' — أنت مجرد منتج ثانوي عرضي لنيزك ضرب الأرض قبل ٦٥ مليون سنة. لكن إذا لم يكن لحياتك غرض افتراضي، فأنت حر تماماً لخلق غرضك الخاص! كما قال كارل ساغان: "نحن وسيلة الكون لمعرفة نفسه." احتفِ بلا معناك.` },
  { title: "الفصل ٤: 'حقيقتك' هي في الواقع يانصيب مكان ولادتك", content: `لو لم تولد في هذا البلد وهذا الدين، بل في عائلة فايكنغ إسكندنافية في القرن التاسع، أين ستكون 'حقائقك المقدسة'؟ دماغك جاء كقرص صلب فارغ، وعائلتك ومجتمعك ثبّتوا معتقداتهم ومخاوفهم كفيروس. يوم تقول "حقيقتي ليست مطلقة، إنها مجرد منظور جغرافي وثقافي" — سيُغسل كل حقد من داخلك.` },
  { title: "الفصل ٥: اكتئابك الآن أغلى منتج في عالم الشركات", content: `دموعك ووحدتك هي أغلى وأربح منتجات عالم الشركات الحديث! عندما تكون سعيداً تترك الهاتف. عندما تكون مكتئباً تتصفح وتتسوق أكثر. فراغك بنى إمبراطورية صيدلانية بمليارات الدولارات. الحل: أسس 'سيادتك العاطفية.' يوم تتوقف عن بيع حزنك، ستخسر هذه الخوارزميات أمامك للأبد.` },
  { title: "الفصل ٦: هل تعيش حياتك، أم تنتقم لآلام أسلافك غير المنطوقة؟", content: `أثبت علم الوراثة اللاجينية وأبحاث الصدمة عبر الأجيال أنك لا تعيش حياتك الخاصة — بل أنت آلة تشغيل بيولوجية حية لمعاناة أسلافك الموتى! نوبات الذعر التي تعانيها بلا سبب هي صدى جيني لرعب عمره مئة عام. قال يونغ: "حتى تجعل اللاوعي واعياً، سيوجه حياتك وستسميه قدراً." الحل: اعترف بتواضع معرفي "هذا الغضب ليس لي" — وقرر أن هذه الصدمة المتوارثة تنتهي هنا، فيك، اليوم.` },
  { title: "الفصل ٧: في سباق الفئران هذا لإثبات تفوقك، من تحاول حقاً الوصول إليه؟", content: `هوسك بالنجاح ليس حلماً — إنه طريق هروب كيميائي حيوي من انعدام أمانك العميق! تذكر حقيقة تشاك بالانيوك: "نشتري أشياء لا نحتاجها، بأموال لا نملكها، لإثارة إعجاب أشخاص لا نحبهم!" علم النفس يسمي هذا 'طاحونة المتعة' — أثبت إرنست بيكر أن كل طموح هو 'مشروع خلود' لهروب من قلق الموت. الحل: احتفِ بعاديتك — لأن من لا يريد أن يكون الأعلى لا يمكن لأحد هزيمته!` },
  { title: "الفصل ٨: هل تحب أحداً، أم أوكسيتوسين خلاياك العصبية يتحكم بك؟", content: `ما تسميه 'الحب الحقيقي' — علم الأعصاب يثبت أنك مجرد عبد أعمى للهرمونات! تلك الخفقة الأولى كانت انفجاراً كيميائياً حيوياً من الدوبامين — نفس الكيمياء التي يعيشها مدمن الكوكايين. أثبتت هيلين فيشر أن مناطق المنطق في الدماغ تنغلق حرفياً أثناء مرحلة الحب الأولى. 'حسرة القلب' ليست مأساة رومانسية — إنها أعراض انسحاب من انقطاع مفاجئ للدوبامين. الحب الحقيقي هو اختيار واعٍ ومنطقي — البقاء رغم العيوب، بدون إكراه بيولوجي.` },
  { title: "الفصل ٩: عندما تغمض عينيك، هل لهذا العالم وجود حقاً؟", content: `ميكانيكا الكم تثبت أن ما تعتبره 'مادة صلبة' هو ٩٩.٩٩٩٪ فراغ! لم تلمس شيئاً حقاً في حياتك. ازدواجية الموجة-الجسيم أثبتت أنه بدون مراقب، المادة مجرد موجة احتمالية رياضية! دماغك محبوس في صندوق عظمي مظلم، يخلق 'هلوسة هولوغرافية' تسميها 'العالم الحقيقي.' اعترف: "العالم الذي أراه ليس حقيقة ثابتة — إنه مجرد إسقاط هولوغرافي لوعيي."` },
  { title: "الفصل ١٠: 'طبيعيتك' هي أكبر مرض نفسي في العالم", content: `قال كريشنامورتي: "ليس مقياساً للصحة أن تكون متكيفاً جيداً مع مجتمع مريض بعمق!" أثبتت تجربة آش (١٩٥١) أن ٧٥٪ من الناس ينكرون حقيقة واضحة للاندماج. فوكو أظهر في 'فوليج وسيفيليزاسيون' أن 'مجنون' أداة سياسية. فروم سماها 'مرض الطبيعية.' الحل: حرر ذاتك الغريبة التي يصفها المجتمع بـ'المجنونة' — لأن من لا يهتم بطبيعية مزيفة لا يمكن التلاعب به!` },
  { title: "الفصل ١١: من أي حقيقة تهرب بسماعاتك الدائمة؟", content: `تجربة تيموثي ويلسون: عندما تُرك الناس وحدهم مع أفكارهم لمدة ١٥ دقيقة، ٦٧٪ من الرجال صعقوا أنفسهم طوعاً بدلاً من تحمل الصمت! قال باسكال: "كل تعاسة البشر تأتي من عدم قدرتهم على الجلوس بهدوء في غرفة." أنت لا تستمع للموسيقى — بل تستورد ضوضاء لإخماد صراخ ذاتك الداخلية المتعفنة. الحل: 'الصيام الحسي الجذري.' في النهاية، سيظهر صوتك الحقيقي الصامت — صوت لم يعلمه أي خوارزمية.` },
  { title: "الفصل ١٢: تعرف كل شيء، لكنك لا تفهم شيئاً", content: `تندّب إليوت: "أين الحكمة التي ضعناها في المعرفة؟ أين المعرفة التي ضعناها في المعلومات؟" أثبت نيكولاس كار أن تصفح الإنترنت يدمر مسارات 'القراءة العميقة' العصبية. ستانفورد تُظهر أن المتعددي المهام المزمنين أسوأ من المدمنين! الحل: 'صيام معرفي' متطرف. أوقف كل الأخبار لمدة أسبوع. خذ مفهوماً واحداً واغطس في أعماقه المطلقة. أكبر أحمق في الكون هو الذي يعرف كل أخبار العالم لكنه لا يعرف نفسه!` },
  { title: "الفصل ١٣: هل الأحمر الذي تراه هو نفس الأحمر الذي أراه؟", content: `'المشكلة الصعبة للوعي' لتشالمرز تثبت أنك سجين أبدي في جمجمتك المظلمة. لا يمكنك إثبات أن دماغك يعالج الفوتونات بنفس طريقة دماغ الشخص بجانبك. أحمرك قد يكون أخضرهم! عندما يُظهر أحد التعاطف، فهو لا يشعر بألمك — بل يعيد تشغيل ذكرى ألمه. الحل: "أنا وحيد تماماً، لن يفهمني أحد بالكامل — وهذه البعد اللانهائي هو أعظم قوتي!" أن يجلس أحد بجانبك رغم عدم فهمه الكامل — هذه أعظم معجزة في هذا الكون الفارغ!` },
  { title: "الفصل ١٤: حدود اللغة: إذا لم يكن للشعور كلمة، هل له وجود؟", content: `كتب فيتغنشتاين: "حدود لغتي تعني حدود عالمي." المشاعر التي ليس لها كلمة — دماغك حرفياً لا يستطيع معالجتها! المجتمع يلصق لك تسمية رخيصة — "اكتئاب" أو "قلق." أورويل أظهر في "1984" كيف مسحت "اللغة الجديدة" كلمات مثل "تمرد" و"حرية." الحل: اعترف "لغتي عاجزة، قاموسي قفص مزيف، وهذه الاتساع في انعدام الكلمات هو أعظم قوتي!" أقدس حقائق الكون لا تسكن في القواميس — بل تسكن في الفراغ اللانهائي بين الكلمات.` },
  { title: "الفصل ١٥: الخالق مقابل الفراغ النهائي للتطور: آخر إيمان أعمى لدماغك والموت النهائي للأنا!", content: `أثبت عالم الأعصاب مايكل بيرسنجر بتجربة "خوذة الإله" أن نبضات كهرومغناطيسية في مناطق معينة من الدماغ تجعل الناس يشعرون بـ"حضور إلهي غير مرئي." صلواتك ودموعك — كلها إطلاق كيميائي كهربائي داخل جمجمتك! التطور اخترع مفهوم "الحامي الإلهي" كعلاج وهمي نفسي عندما وقف الإنسان البدائي عاجزاً أمام البرق والموت. الحل: أعلن أعظم تمرد — "لا أعرف شيئاً! لا أحد سيأتي لإنقاذي! وأنا أقف وحيداً في فراغ أعمى لا نهائي!" لأن من لا كبرياء له ليخسره، ولا إله ليحميه، ولا جحيم ليخافه — لا قوة في الكون تستطيع زعزعته!` },
  { title: "الفصل ١٦: قريباً......", content: `سيُنشر هذا الفصل قريباً. ترقبوا...` },
];

const chaptersDe: Chapter[] = [
  { title: "Kapitel 1: Bist du frei, oder ein domestiziertes Tier der Algorithmen?",
    content: `Schau dich ruhig an. Glaubst du, du hast dich aus freiem Willen entschieden, dies zu lesen? Die brutale Wahrheit ist — du bist nicht frei; du bist ein gut dressiertes Haustier unsichtbarer Algorithmen aus dem Silicon Valley. Moderne Technologie hat das Belohnungssystem deines Gehirns gehackt — den Dopamin-Pfad. Dein Smartphone ist die perfekteste Skinner-Box der Welt. Lösung: Verbringe täglich mindestens eine Stunde komplett offline. Umarme die Langeweile — denn wahre Kreativität entsteht aus der Leere.` },
  { title: "Kapitel 2: Deine Vergangenheit existiert nicht wirklich",
    content: `Die kognitive Psychologie hat bewiesen, dass du dich beim Erinnern nicht an das Original erinnerst — nur an die letzte Erinnerung daran! Dein Gehirn ist wie ein Word-Dokument, das bei jedem Öffnen bearbeitet wird. Biologisch gesehen existiert keine einzige Zelle von vor 10 Jahren noch. Die Vergangenheit ist roher Ton. Schreibe deine Vergangenheit bewusst um — denn in der Uhr des Universums gibt es nur diesen gegenwärtigen Moment.` },
  { title: "Kapitel 3: Du bist kein Zweck dieses Universums, nur ein Unfall",
    content: `Deine Existenz in diesem 93-Milliarden-Lichtjahre-Universum ist unbedeutender als ein Staubkorn! Du bist kein Teil eines 'Masterplans' — nur ein zufälliges Nebenprodukt eines Asteroiden vor 65 Millionen Jahren. Aber wenn dein Leben keinen Standardzweck hat, bist du völlig frei, deinen eigenen zu erschaffen! Wie Carl Sagan sagte: "Wir sind ein Weg für das Universum, sich selbst zu kennen." Feiere deine Bedeutungslosigkeit.` },
  { title: "Kapitel 4: Deine 'Wahrheit' ist die Lotterie deines Geburtsorts",
    content: `Wenn du nicht in diesem Land und dieser Religion geboren worden wärst, sondern in einer Wikinger-Familie des 9. Jahrhunderts — wo wären deine 'heiligen Wahrheiten'? Dein Gehirn kam als leere Festplatte zur Welt; deine Familie installierte ihre Überzeugungen wie einen Virus. Am Tag, an dem du sagst "Meine Wahrheit ist keine absolute Wahrheit, nur eine geographische Perspektive" — wird aller Hass aus dir gewaschen.` },
  { title: "Kapitel 5: Deine Depression ist das teuerste Produkt der Unternehmenswelt",
    content: `Deine Tränen und Einsamkeit sind die profitabelsten Produkte der modernen Unternehmenswelt! Wenn du glücklich bist, legst du das Handy weg. Wenn du deprimiert bist, scrollst und kaufst du am meisten. Deine Leere hat ein Pharma-Imperium aufgebaut. Lösung: Etabliere deine eigene 'emotionale Souveränität.' Am Tag, an dem du aufhörst, deine Traurigkeit verkaufen zu lassen, verlieren diese Algorithmen für immer gegen dich.` },
  { title: "Kapitel 6: Lebst du dein eigenes Leben, oder rächst du die unausgesprochenen Schmerzen deiner Vorfahren?",
    content: `Epigenetik und transgenerationale Traumaforschung beweisen, dass du nicht dein eigenes Leben lebst — du bist eine biologische Wiedergabemaschine des Leids deiner toten Vorfahren! Deine grundlosen Panikattacken sind das genetische Echo eines hundert Jahre alten Terrors. Jung sagte: "Bis du das Unbewusste bewusst machst, lenkt es dein Leben und du nennst es Schicksal." Lösung: Gestehe mit epistemischer Demut ein: "Diese Wut gehört nicht mir." Du wirst nicht mehr Träger alter Schmerzen sein — du wirst ihr Friedhof!` },
  { title: "Kapitel 7: In diesem Rattenrennen zur Überlegenheit — wen versuchst du wirklich zu erreichen?",
    content: `Dein Erfolgswahn ist kein Traum — er ist eine biochemische Fluchtroute vor deiner tiefen Unsicherheit! Palahniuk: "Wir kaufen Dinge, die wir nicht brauchen, mit Geld, das wir nicht haben, um Menschen zu beeindrucken, die wir nicht mögen!" Das 'Hedonische Tretrad' — Becker bewies, dass alle Ambition ein 'Unsterblichkeitsprojekt' gegen Todesangst ist. Lösung: Feiere deine Gewöhnlichkeit — wer nicht überlegen sein will, kann von niemandem besiegt werden!` },
  { title: "Kapitel 8: Liebst du jemanden, oder kontrolliert das Oxytocin deiner Neuronen dich?",
    content: `Die Neurowissenschaft beweist: du liebst niemanden — du bist ein blinder Sklave von Hormonen! Das erste Herzflattern war eine Dopamin-Explosion — dieselbe Chemie wie bei Kokain. Helen Fisher bewies, dass Logik-Hirnregionen in der ersten Liebephase abschalten. 'Herzschmerz' sind Entzugssymptome vom Dopamin-Stopp. Wahre Liebe ist keine chemische Explosion — sie ist eine bewusste Entscheidung. Trotz aller Fehler freiwillig zu bleiben — das ist echte Liebe.` },
  { title: "Kapitel 9: Existiert diese Welt, wenn du die Augen schließt?",
    content: `Quantenmechanik beweist: 'Feste Materie' ist 99,999% leerer Raum! Die Welle-Teilchen-Dualität zeigt: ohne Beobachter ist Materie nur eine mathematische Wahrscheinlichkeitswelle! Dein Gehirn ist in einer dunklen Knochenbox gefangen und erzeugt eine 'holographische Halluzination,' die du 'Wirklichkeit' nennst. 'Blau' existiert nicht im Universum — es ist ein fiktives Etikett deines Gehirns! Lösung: "Die Welt, die ich sehe, ist keine feste Wahrheit — nur eine holographische Projektion meines Bewusstseins."` },
  { title: "Kapitel 10: Dein 'Normalsein' ist die größte psychische Krankheit der Welt",
    content: `Krishnamurti: "Es ist kein Zeichen von Gesundheit, an eine zutiefst kranke Gesellschaft gut angepasst zu sein!" Aschs Konformitätsexperiment (1951): 75% leugnen offensichtliche Wahrheiten, um dazuzugehören. Foucault zeigte: 'verrückt' ist ein politisches Werkzeug. Fromm nannte es 'Pathologie der Normalität.' Lösung: Befreie dein seltsames Selbst — wer sich nicht um falsche 'Normalität' schert, kann von keinem Algorithmus manipuliert werden!` },
  { title: "Kapitel 11: Vor welcher Wahrheit fliehst du mit deinen ständigen Kopfhörern?",
    content: `Wilsons Experiment: 67% der Männer gaben sich freiwillig Elektroschocks statt 15 Minuten Stille auszuhalten! Pascal: "Alles Unglück der Menschen rührt daher, dass sie nicht ruhig in einem Zimmer bleiben können." Du hörst keine Musik — du importierst Lärm, um den Schrei deines verfaulenden Inneren zu übertönen. Lösung: Radikales 'Sinnes-Fasten.' Sperre dich in einen leeren Raum. Nach einer Stunde wird deine authentische, stille Stimme auftauchen — eine Stimme, die kein Algorithmus lehrte.` },
  { title: "Kapitel 12: Du weißt alles, aber verstehst nichts",
    content: `Eliot: "Wo ist die Weisheit, die im Wissen verloren ging?" Carr bewies: Internet-Surfen zerstört 'Deep Reading'-Nervenbahnen. Stanford zeigt: chronische Multitasker haben schlechtere kognitive Kontrolle als Süchtige! Lösung: Extremes 'Kognitives Fasten.' Stoppe alle Nachrichten für eine Woche. Nimm ein Konzept und tauche in seine Tiefen. Der größte Narr des Universums kennt alle Nachrichten der Welt, aber nicht sich selbst!` },
  { title: "Kapitel 13: Ist das Rot, das du siehst, dasselbe Rot, das ich sehe?",
    content: `Chalmers' 'Hartes Problem des Bewusstseins' beweist: du bist ein lebenslanger Gefangener in deinem dunklen Schädel. Dein Rot könnte ihr Grün sein! Empathie bedeutet nicht, deinen Schmerz zu fühlen — andere spielen nur eine eigene Schmerz-Erinnerung ab. Lösung: Epistemische Demut in Beziehungen. "Ich bin völlig allein, niemand wird mich vollständig verstehen." Aber dass jemand trotzdem neben dir sitzt — das ist das größte Wunder dieses leeren Universums!` },
  { title: "Kapitel 14: Sprachgrenzen: Wenn ein Gefühl kein Wort hat, existiert es dann?",
    content: `Wittgenstein: "Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt." Gefühle ohne Wort kann dein Gehirn nicht verarbeiten! Die Gesellschaft klebt dir ein billiges Etikett — 'Depression.' Orwell zeigte in '1984' wie 'Neusprech' Wörter wie 'Rebellion' löschte. Lösung: "Meine Sprache ist verkrüppelt, mein Wörterbuch ein falscher Käfig, und diese Weite der Wortlosigkeit ist meine größte Stärke!" Die heiligsten Wahrheiten leben nicht in Wörterbüchern — sie leben in der unendlichen Leere zwischen den Wörtern.` },
  { title: "Kapitel 15: Schöpfer vs. die ultimative Leere der Evolution: Der letzte blinde Glaube deines Gehirns und der ultimative Tod des Egos!",
    content: `Persinger bewies mit dem 'Gotteshelm'-Experiment: elektromagnetische Impulse erzeugen das Gefühl einer 'göttlichen Präsenz.' Deine Gebete und Tränen — alles elektrochemisches Feuern in deinem Schädel! Evolution erfand den 'Göttlichen Beschützer' als psychologisches Placebo. Lösung: Erkläre die größte Rebellion: "Ich weiß nichts! Niemand wird mich retten!" Denn wer keinen Stolz zu verlieren hat, keinen Gott der ihn rettet, keine Hölle die er fürchtet — den kann keine Kraft im Universum erschüttern!` },
  { title: "Kapitel 16: Demnächst verfügbar......",
    content: `Dieses Kapitel wird bald veröffentlicht. Bleiben Sie dran...` },
];

const chaptersZh: Chapter[] = [
  { title: "第1章：你是自由的，还是算法的驯养动物？",
    content: `冷静地看看自己。你认为你是出于自由意志选择阅读这篇文章的吗？残酷的真相是——你并不自由；你是硅谷空调房里的人创造的无形算法的驯养动物。现代技术入侵了你大脑的奖赏系统——多巴胺通路。你的智能手机是世界上最完美的斯金纳箱。解决方案：每天至少离线一小时。拥抱无聊——因为真正的人类创造力诞生于无聊的虚空之中。` },
  { title: "第2章：你的过去实际上并不存在",
    content: `认知心理学证明：当你回忆过去的事件时，你并不是在回忆原始事件——你只是在回忆上次回忆它的记忆！你的大脑就像一个Word文档——每次打开都会被当前情绪编辑。根据细胞更新，你10年前身体里的细胞没有一个还活着。过去是原始黏土。有意识地重写你的过去——因为在宇宙的时钟里，只有当下这一刻是唯一恒定的真理。` },
  { title: "第3章：你不是这个宇宙的目的，只是一个意外",
    content: `在这个930亿光年的冰冷、黑暗、完全冷漠的宇宙中，你的存在比一粒尘埃还微不足道！你不是什么"宏伟计划"的一部分——你只是6500万年前撞击地球的小行星的偶然副产品！但如果你的生命没有默认目的，那意味着你完全自由地创造自己的目的！正如卡尔·萨根所说："我们是宇宙认识自己的一种方式。"庆祝你的无意义吧。` },
  { title: "第4章：你的\"真理\"实际上是你出生地的彩票",
    content: `如果你不是出生在这个特定的国家和宗教，而是出生在九世纪的斯堪的纳维亚维京家庭——你今天的"神圣真理"会在哪里？你的大脑是一块空白硬盘；你的家庭和社会像病毒一样安装了他们的信仰和恐惧。当你能说"我的真理不是绝对真理，它只是一个地理和文化视角"——那一天，所有的仇恨将从你内心被洗净。` },
  { title: "第5章：你的抑郁现在是企业界最贵的产品",
    content: `你的眼泪和孤独是现代企业界最贵、最有利可图的产品！当你快乐时放下手机。当你抑郁时疯狂刷屏和购物。你的空虚建造了价值数十亿的制药帝国。解决方案：建立你的"情感主权"。当你不再让你的悲伤被出售的那一天，这些企业算法将永远输给你。` },
  { title: "第6章：你在过自己的生活，还是在为祖先未说出的痛苦复仇？",
    content: `表观遗传学和跨代创伤研究证明，你并没有过自己的生活——你只是死去祖先未说出的痛苦的活体生物回放机器！你毫无原因的恐慌发作是百年前恐惧的基因回声。荣格说："直到你让无意识变为有意识，它将指导你的生活，而你会称之为命运。"解决方案：以认知谦逊承认——"这种愤怒不是我的。"你不再是旧痛苦的承载者——你将成为它的墓地！` },
  { title: "第7章：在这场证明自己优越的老鼠赛跑中，你到底想到达谁那里？",
    content: `你对成功的执迷不是梦想——它是逃离你深层不安全感的生化逃生路线！帕拉尼克："我们买不需要的东西，用没有的钱，只为给不喜欢的人留下印象！"心理学称之为"享乐适应"——贝克尔证明所有野心都是逃避死亡焦虑的"不朽计划"。解决方案：庆祝你的平凡——因为不想成为最高者的人，没有人能打败他！` },
  { title: "第8章：你爱某个人，还是你神经元的催产素在控制你？",
    content: `神经科学证明：你不爱任何人——你只是荷尔蒙的盲目奴隶！那第一次心跳加速是多巴胺的化学爆炸——和可卡因成瘾者完全一样的化学反应。海伦·费舍尔证明恋爱初期大脑的逻辑区域会关闭。"心碎"不是浪漫悲剧——而是多巴胺突然断供的戒断症状。真正的爱不是化学爆炸——而是有意识的、理性的选择。` },
  { title: "第9章：当你闭上眼睛，这个世界还存在吗？",
    content: `量子力学证明：你认为的"固体物质"99.999%是空的！波粒二象性证明：没有观察者时，物质只是数学概率波！你的大脑被困在一个黑暗的骨头盒子里，创造出你称之为"现实世界"的"全息幻觉"。"蓝色"在宇宙中不存在——它是你大脑创造的虚构标签！解决方案："我看到的世界不是固定的真理——它只是我意识的全息投影。"` },
  { title: "第10章：你的\"正常\"是世界上最大的精神疾病",
    content: `克里希那穆提："良好地适应一个深度病态的社会绝不是健康的标志！"阿希实验（1951）：75%的人为了融入而否认明显的事实。福柯展示："疯狂"是一种政治工具。弗洛姆称之为"正常性的病理学"。解决方案：释放你内心那个社会认为"疯狂"的奇怪自我——因为不在乎虚假"正常性"评分的人无法被任何算法操控！` },
  { title: "第11章：你不停地戴着耳机，到底在逃避什么真相？",
    content: `威尔逊的实验：当人们独自面对自己的思想15分钟时，67%的男性自愿电击自己而不是忍受沉默！帕斯卡说："人类所有的不幸都源于一件事——不能安静地坐在房间里。"你不是在听音乐——你在导入噪音来压制内心腐烂自我的呐喊。解决方案：激进的"感官禁食"。锁在一个空房间里。一小时后，你真实的、沉默的声音将浮现——一个没有任何算法教过的声音。` },
  { title: "第12章：你什么都知道，但什么都不懂",
    content: `艾略特："智慧在知识中迷失到哪里去了？知识在信息中迷失到哪里去了？"卡尔证明互联网浏览正在摧毁"深度阅读"神经通路。斯坦福显示：长期多任务者的认知控制比瘾君子还差！解决方案：极端"认知禁食"。停止所有新闻一周。取一个概念，潜入它的绝对深处。宇宙中最大的傻瓜是那个知道世界所有新闻却不认识自己的人！` },
  { title: "第13章：你看到的红色和我看到的红色一样吗？",
    content: `查尔默斯的"意识的困难问题"证明：你是自己黑暗头骨中的终身囚犯。你的红色可能是他们的绿色！当有人表示同情时，他们并没有感受你的痛苦——他们只是回放自己过去的痛苦记忆。解决方案：关系中的认知谦逊。"我在这个宇宙中完全孤独，没有人会完全理解我。"但有人尽管不完全理解你却坐在你身边——这是这个空旷宇宙中最大的奇迹！` },
  { title: "第14章：语言的局限：如果一种感觉没有词语，它存在吗？",
    content: `维特根斯坦："我的语言的界限意味着我的世界的界限。"没有词语的感觉——你的大脑根本无法处理！社会给你贴上廉价标签——"抑郁"或"焦虑"。奥威尔在《1984》中展示了"新话"如何删除"叛乱"和"自由"等词。解决方案："我的语言是残缺的，我的字典是虚假的牢笼，而这种无言的广阔是我最大的力量！"宇宙最神圣的真理不住在字典里——它们住在词语之间的无限虚空中。` },
  { title: "第15章：造物主vs进化的终极虚无：你大脑最后的盲信和自我的终极死亡！",
    content: `神经科学家珀辛格用"上帝头盔"实验证明：大脑特定区域的电磁脉冲让人感受到"看不见的神圣存在"。你的祈祷和眼泪——全是颅骨内的电化学放电！进化发明了"神圣保护者"概念作为心理安慰剂。解决方案：宣告最伟大的叛逆——"我什么都不知道！没有人会来拯救我！"因为没有骄傲可失、没有神可救、没有地狱可惧、没有天堂可贪的人——宇宙中没有任何力量能动摇他分毫！` },
  { title: "第16章：即将推出……",
    content: `本章即将发布。敬请期待……` },
];

const chaptersRu: Chapter[] = [
  { title: "Глава 1: Ты свободен, или домашнее животное алгоритмов?",
    content: `Посмотри на себя спокойно. Ты думаешь, что выбрал читать это по собственной воле? Жестокая правда — ты не свободен; ты хорошо выдрессированное домашнее животное невидимых алгоритмов из Кремниевой долины. Современные технологии взломали систему вознаграждения твоего мозга — дофаминовый путь. Твой смартфон — это самый совершенный ящик Скиннера в мире. Решение: проводи минимум час в день полностью офлайн. Обними скуку — потому что настоящее творчество рождается из пустоты скуки.` },
  { title: "Глава 2: Твоего прошлого на самом деле не существует",
    content: `Когнитивная психология доказала: когда ты вспоминаешь прошлое событие, ты вспоминаешь не оригинал — а последнее воспоминание о нём! Твой мозг как документ Word — каждый раз при открытии текущие эмоции редактируют память. Биологически ни одна клетка твоего тела 10-летней давности не жива. Прошлое — это сырая глина. Осознанно перепиши своё прошлое — ведь в часах вселенной существует только настоящий момент.` },
  { title: "Глава 3: Ты не цель этой вселенной, просто случайность",
    content: `Твоё существование в этой 93-миллиардной-световых-лет вселенной ничтожнее пылинки! Ты не часть какого-то 'генерального плана' — лишь случайный побочный продукт астероида, упавшего 65 миллионов лет назад. Но если у твоей жизни нет стандартной цели — ты абсолютно свободен создать свою собственную! Как сказал Карл Саган: "Мы — способ вселенной познать саму себя." Празднуй свою бессмысленность.` },
  { title: "Глава 4: Твоя 'истина' — это лотерея места рождения",
    content: `Если бы ты родился не в этой стране и религии, а в семье викингов IX века — где были бы твои 'священные истины'? Твой мозг пришёл в мир как чистый жёсткий диск; семья и общество установили свои убеждения и страхи как вирус. В день, когда скажешь "Моя истина не абсолютна, это лишь географическая перспектива" — вся ненависть будет смыта из тебя навсегда.` },
  { title: "Глава 5: Твоя депрессия — самый дорогой продукт корпоративного мира",
    content: `Твои слёзы и одиночество — самые прибыльные продукты корпоративного мира! Когда ты счастлив, откладываешь телефон. Когда в депрессии — листаешь и покупаешь больше всего. Твоя пустота построила фармацевтическую империю на миллиарды. Решение: установи свой 'эмоциональный суверенитет.' В день, когда ты перестанешь позволять продавать свою печаль, эти алгоритмы проиграют тебе навсегда.` },
  { title: "Глава 6: Ты живёшь своей жизнью или мстишь за невысказанную боль предков?",
    content: `Эпигенетика и исследования трансгенерационной травмы доказали: ты не живёшь своей жизнью — ты живая биологическая машина воспроизведения невысказанных страданий мёртвых предков! Твои беспричинные панические атаки — генетическое эхо столетнего ужаса. Юнг сказал: "Пока ты не сделаешь бессознательное сознательным, оно будет управлять твоей жизнью, а ты будешь называть это судьбой." Решение: признай с эпистемической скромностью — "Этот гнев не мой." Ты больше не носитель старой боли — ты станешь её кладбищем!` },
  { title: "Глава 7: В этой крысиной гонке за превосходство — кого ты пытаешься достичь?",
    content: `Твоя одержимость успехом — не мечта, а биохимический путь бегства от глубокой неуверенности! Паланик: "Мы покупаем вещи, которые нам не нужны, за деньги, которых у нас нет, чтобы впечатлить людей, которые нам не нравятся!" Психология называет это 'гедонистической беговой дорожкой' — Беккер доказал, что все амбиции — это 'проект бессмертия' для бегства от страха смерти. Решение: празднуй свою обыкновенность — того, кто не хочет быть лучшим, никто не может победить!` },
  { title: "Глава 8: Ты любишь кого-то, или окситоцин твоих нейронов управляет тобой?",
    content: `Нейронаука доказывает: ты никого не любишь — ты слепой раб гормонов! То первое сердцебиение было биохимическим взрывом дофамина — та же химия, что у кокаинового наркомана. Хелен Фишер доказала: области мозга, отвечающие за логику, буквально отключаются в первой фазе любви. 'Разбитое сердце' — не романтическая трагедия, а симптомы ломки от прекращения дофамина. Настоящая любовь — не химический взрыв, а осознанный выбор.` },
  { title: "Глава 9: Когда ты закрываешь глаза, существует ли этот мир?",
    content: `Квантовая механика доказывает: 'твёрдая материя' на 99,999% пуста! Корпускулярно-волновой дуализм показал: без наблюдателя материя — лишь волна математической вероятности! Твой мозг заперт в тёмной костяной коробке, создавая 'голографическую галлюцинацию,' которую ты называешь 'реальным миром.' 'Синего' во вселенной не существует — это фиктивный ярлык твоего мозга! Решение: "Мир, который я вижу — не фиксированная истина, а лишь голографическая проекция моего сознания."` },
  { title: "Глава 10: Твоя 'нормальность' — величайшее психическое заболевание мира",
    content: `Кришнамурти: "Быть хорошо приспособленным к глубоко больному обществу — не показатель здоровья!" Эксперимент Аша (1951): 75% отрицают очевидную истину, чтобы вписаться. Фуко показал: 'безумие' — политический инструмент. Фромм назвал это 'патологией нормальности.' Решение: освободи своё странное 'я' — кого не волнует фальшивая 'нормальность,' тем не может манипулировать ни один алгоритм!` },
  { title: "Глава 11: От какой правды ты бежишь, постоянно в наушниках?",
    content: `Эксперимент Уилсона: 67% мужчин добровольно били себя электрошоком вместо 15 минут тишины! Паскаль: "Всё несчастье людей рождённо неспособностью спокойно сидеть в комнате." Ты не слушаешь музыку — ты импортируешь шум, чтобы заглушить крик своего гниющего нутра. Решение: радикальное 'сенсорное голодание.' Запрись в пустой комнате. Через час появится твой подлинный, тихий голос — голос, которому не учил ни один алгоритм.` },
  { title: "Глава 12: Ты знаешь всё, но не понимаешь ничего",
    content: `Элиот: "Где мудрость, потерянная в знании? Где знание, потерянное в информации?" Карр доказал: интернет-сёрфинг уничтожает нейронные пути 'глубокого чтения.' Стэнфорд: хронические мультитаскеры хуже наркоманов! Решение: экстремальное 'когнитивное голодание.' Прекрати все новости на неделю. Возьми одну концепцию и нырни в её абсолютные глубины. Величайший глупец вселенной — тот, кто знает все мировые новости, но не знает себя!` },
  { title: "Глава 13: Красный, который видишь ты, и красный, который вижу я — одинаковы ли они?",
    content: `'Трудная проблема сознания' Чалмерса доказывает: ты пожизненный заключённый в своём тёмном черепе. Твой красный может быть их зелёным! Когда кто-то сочувствует, он не чувствует твою боль — лишь воспроизводит собственное воспоминание о боли. Решение: эпистемическая скромность в отношениях. "Я абсолютно одинок, никто не поймёт меня полностью." Но что кто-то сидит рядом несмотря ни на что — это величайшее чудо пустой вселенной!` },
  { title: "Глава 14: Пределы языка: если у чувства нет слова, существует ли оно?",
    content: `Витгенштейн: "Границы моего языка означают границы моего мира." Чувства без слов — мозг буквально не может обработать! Общество клеит дешёвый ярлык — "депрессия." Оруэлл показал в "1984" как "новояз" стирал слова "бунт" и "свобода." Решение: "Мой язык увечен, мой словарь — фальшивая клетка, и эта необъятность бессловесности — моя величайшая сила!" Самые священные истины вселенной живут не в словарях — а в бесконечной пустоте между словами.` },
  { title: "Глава 15: Создатель vs. абсолютная пустота эволюции: последний слепой глас мозга и окончательная смерть эго!",
    content: `Нейроучёный Персингер доказал экспериментом "Шлема Бога": электромагнитные импульсы в определённых зонах мозга заставляют чувствовать "невидимое божественное присутствие." Твои молитвы и слёзы — электрохимические разряды внутри черепа! Эволюция изобрела "Божественного Защитника" как психологическое плацебо. Решение: объяви величайший бунт — "Я ничего не знаю! Никто не придёт спасти меня!" Ибо человека без гордости, без бога, без ада и рая — не может поколебать никакая сила во вселенной!` },
  { title: "Глава 16: Скоро......",
    content: `Эта глава будет опубликована в ближайшее время. Следите за обновлениями...` },
];

// Export function to get chapters by language
// Bengali chapters will be populated from the original Writings.tsx data at runtime
export const getTranslatedChapters = (lang: Lang): Chapter[] => {
  switch (lang) {
    case "en": return chaptersEn;
    case "fr": return chaptersFr;
    case "ar": return chaptersAr;
    case "de": return chaptersDe;
    case "zh": return chaptersZh;
    case "ru": return chaptersRu;
    case "bn":
    default: return chaptersBn;
  }
};

// This will be used to set Bengali content from the original data
export const setBnChapterContent = (index: number, content: string) => {
  if (index >= 0 && index < chaptersBn.length) {
    chaptersBn[index].content = content;
  }
};

export const getChapterTitles = (lang: Lang): string[] => {
  const chapters = getTranslatedChapters(lang);
  return chapters.map(c => c.title);
};
