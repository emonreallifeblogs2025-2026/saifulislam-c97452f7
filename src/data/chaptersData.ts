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
    content: `Regarde-toi calmement. Penses-tu avoir choisi de lire ceci de ton propre libre arbitre ? Ton ego hurle : "Oui ! Je contrôle ma vie. Je suis libre." Mais face au miroir de la réalité, la vérité te fera frémir. La vérité brutale est que tu n'es pas libre ; tu es un animal domestiqué et bien dressé d'algorithmes invisibles créés par des gens assis dans des bureaux climatisés de la Silicon Valley.

Du réveil au coucher, combien de ce que tu penses, désires, ce qui te met en colère ou ce que tu aimes est vraiment à toi, et combien a été injecté dans ton cerveau ? Tu as perdu la capacité de faire la différence il y a bien longtemps.

Réfléchis — qu'as-tu touché en premier ce matin ? La main de ton être cher, ou l'écran de verre froid et sans vie de ton smartphone ? Tu touches cet écran plus de 2 500 fois par jour. Ce n'est pas une habitude normale — c'est un esclavage biochimique parfaitement conçu.

La technologie moderne a piraté le système de récompense profond du cerveau humain — la voie dopaminergique. La dopamine n'est pas une hormone du "bonheur" ; c'est une hormone du "désir." L'évolution a créé la dopamine pour la survie, pour trouver de la nourriture. Mais aujourd'hui ? Tu es un rat de laboratoire, comme le fameux rat de la "Boîte de Skinner" de B.F. Skinner qui appuie sur un bouton pour obtenir de la nourriture. Ton smartphone est la boîte de Skinner la plus parfaite au monde.

Chaque défilement libère une goutte de dopamine. Tu t'enfonces comme un drogué. Tu penses utiliser la technologie ? Faux. La technologie t'utilise. Tu es le produit de ce monde corporatif, et ton attention, ta conscience et ton temps sont leur monnaie.

Cet esclavage ne vole pas seulement ton temps — il pourrit ton âme de l'intérieur. Passe au moins une heure complètement hors ligne chaque jour. Assieds-toi dans le calme. N'aie pas peur de l'ennui — embrasse-le, car la véritable créativité humaine naît du vide de l'ennui.

Le jour où tu apprendras à contrôler ta propre dopamine, le jour où tu pourras savourer ton ennui sans entrer dans la grille de l'algorithme, ce jour-là tu seras véritablement "libre." Es-tu prêt à briser tes chaînes ?` },

  { title: "Chapitre 2 : Ton passé n'existe pas vraiment",
    content: `Quand tu te libères des chaînes numériques de la dopamine et t'assois pour la première fois face à face avec ton propre silence, ton cerveau en fuite recourra à un nouveau jeu terrifiant — ton "passé."

La psychologie cognitive et les dernières recherches en neurosciences, notamment le "Syndrome des faux souvenirs" du Dr Elizabeth Loftus et la théorie de la "Reconsolidation de la mémoire," ont prouvé que lorsque tu rappelles un événement passé, tu ne te souviens pas de l'événement original — tu ne te souviens que de la dernière fois que tu t'en es souvenu !

Ton cerveau est comme un document Microsoft Word — chaque fois que tu ouvres le fichier, tes émotions actuelles modifient légèrement ce souvenir et le "sauvegardent" à nouveau.

Selon le renouvellement cellulaire biologique, pas une seule cellule qui existait dans ton corps il y a 7-10 ans n'est vivante aujourd'hui. La personne qui a été maltraitée il y a dix ans n'existe physiquement plus !

Le passé n'est pas une destination fixe — le passé est de l'argile brute. À partir d'aujourd'hui, à partir de cet instant, réécris consciemment ton propre passé comme un auteur ! Souviens-toi, dans l'horloge de l'univers, il n'y a ni passé ni futur — seul ce moment présent est l'unique vérité constante.` },

  { title: "Chapitre 3 : Tu n'es pas un dessein de cet univers, juste un accident",
    content: `Tu te tiens devant le miroir, tu regardes dans tes propres yeux, et tu te crois spécial, n'est-ce pas ? Depuis l'enfance, ta famille, la société, la religion et les conférenciers motivationnels à bas prix t'ont lavé le cerveau pour te faire croire que tu es la création suprême de cet univers.

Mais face aux données impitoyables de l'astrophysique et de la cosmologie quantique, ton existence dans cet univers de 93 milliards d'années-lumière de large, froid, sombre et complètement indifférent, est plus insignifiante qu'un grain de poussière !

Tu n'es pas partie d'un "plan directeur" ; tu es simplement un sous-produit accidentel d'un astéroïde qui a frappé la Terre il y a 65 millions d'années !

Si ta vie n'a pas de but par défaut, cela signifie — tu es complètement libre de créer ton propre but dans la vie ! Selon les mots de Carl Sagan : "Nous sommes un moyen pour l'univers de se connaître lui-même." À travers tes yeux, l'univers se regarde lui-même.

Célèbre ton insignifiance. Car le jour où tu accepteras avec amour et un sourire la crue insignifiance de ta propre existence, toutes les peurs de l'univers se rendront à tes pieds.` },

  { title: "Chapitre 4 : Ta 'vérité' est en fait la loterie de ton lieu de naissance",
    content: `Tu penses que ce que tu connais comme la vérité ultime est la seule vérité constante de l'univers ? Tu penses que tes croyances, tes habitudes alimentaires, tes vêtements, ta philosophie de vie — sont tous les produits de ta libre pensée ?

Si tu n'étais pas né dans ce pays spécifique, cette ville spécifique, cette famille de cette religion spécifique, mais plutôt dans une famille de Vikings scandinaves du IXe siècle, où seraient tes "vérités sacrées" d'aujourd'hui ?

Ton cerveau est en fait venu au monde comme un disque dur vierge ; avant même que tu puisses parler, ta famille et ta société avaient installé leurs propres croyances, peurs et préjugés sur ton disque dur vide comme un virus.

Le jour où tu pourras dire : "Ma vérité n'est pas une vérité absolue, c'est simplement une perspective géographique et culturelle," ce jour-là, toute haine, tout jugement seront lavés de toi pour toujours.` },

  { title: "Chapitre 5 : Ta dépression est maintenant le produit le plus cher du monde corporatif",
    content: `Ta tristesse n'est pas un grand art — la vérité brutale est que tes larmes, ta solitude, sont les produits les plus chers et les plus rentables du monde corporatif moderne !

Quand tu es heureux et satisfait, tu poses le téléphone et tu vis ta vie. Mais quand tu es désespéré et déprimé, c'est là que tu scrolles le plus, que tu achètes le plus.

Ton vide a construit un empire pharmaceutique de plusieurs milliards de dollars. Dans le langage impitoyable du capitalisme — une personne complètement saine est inutile pour l'économie ; la personne la plus rentable est celle qui reste perpétuellement à moitié malade, à moitié déprimée.

La solution est — de reprendre la propriété corporative de ta propre souffrance et d'établir ta propre "souveraineté émotionnelle." Le jour où tu cesseras de laisser ta tristesse être vendue, ce jour-là, ces algorithmes corporatifs perdront contre toi pour toujours.` },

  { title: "Chapitre 6 : Vis-tu ta propre vie, ou venges-tu la douleur non-dite de tes ancêtres ?",
    content: `Quand tu échappes au faux marché de la dépression corporative et penses : "Au moins ma rage intérieure, mon ressentiment, ma fierté blessée sont purement mon caractère, ma personnalité," c'est précisément à ce moment qu'une vérité scientifique glaçante ébranlera ton "identité individuelle" de la tête aux pieds. L'épigénétique de la biologie moderne et les dernières recherches sur le trauma transgénérationnel ont brisé chaque mur de ton ego et prouvé que tu ne vis pas vraiment ta propre vie — tu es simplement une machine de lecture biologique vivante de la souffrance non-dite de tes ancêtres morts, de leur faim, de leurs guerres, et de la torture inhumaine qui leur a été infligée !

Il y a cent ans, ton grand-père ou arrière-grand-père a peut-être vécu une terreur et une impuissance extrêmes lors d'une pandémie, d'une famine ou d'une émeute. Ce flot intense de cortisol et d'adrénaline a modifié de façon permanente l'expression de leurs gènes. Et aujourd'hui, assis dans ta chambre climatisée du XXIe siècle, les crises de panique que tu subis sans raison sont en fait l'écho génétique de cette terreur centenaire non-dite !

Tu dis fièrement aux gens : "Je suis naturellement un peu colérique," ou "Je ne peux pas facilement faire confiance," mais la vérité brutale est que ce ne sont pas tes "traits de caractère." Ce sont les armures rouillées de mécanismes de survie primaires que tes ancêtres portaient pour survivre, et tu portes cette lourde armure sans aucune guerre, cherchant un ennemi imaginaire. Carl Jung a dit : "Tant que tu n'auras pas rendu l'inconscient conscient, il dirigera ta vie et tu l'appelleras destin."

Ton soi-disant destin, ton schéma réactif, est en fait une immense prison psychologique et génétique où tu combats comme un mercenaire aveugle dans la guerre inachevée de tes ancêtres. Tu es peut-être en colère contre tes parents, mais tu ne sais pas que tes parents aussi pourraient n'être qu'une extension du trauma de leurs parents. Personne ne combat personne ici — un seul trauma combat un autre trauma de génération en génération, et toi, du milieu, avec ton ego, tu penses que cette colère est la tienne !

La seule solution réelle et pratique est d'embrasser cette suprême "humilité épistémique." Tiens-toi devant le miroir et admets courageusement : "Oui, je ne connais pas la source de cette douleur intérieure, cette colère n'est pas la mienne, je me tiens au milieu d'une vaste ignorance génétique, et cette immensité de non-savoir est à partir d'aujourd'hui ma plus grande force !" Le jour où tu acceptes que toutes tes réactions émotionnelles ne sont pas des vérités absolues mais simplement un héritage biologique, ce jour-là tu gagneras le pouvoir divin de briser cette chaîne toxique. Tu décideras que ce trauma générationnel, ce ressentiment, cette injustice s'arrête ici, aujourd'hui, en toi, pour toujours. Tu ne seras pas le porteur de l'ancienne douleur — tu seras son cimetière !` },

  { title: "Chapitre 7 : Dans cette course effrénée pour te prouver supérieur, qui essaies-tu vraiment d'atteindre ?",
    content: `Ayant quitté le navire fantôme du trauma génétique, tu penses maintenant : "Maintenant je forgerai mon propre destin, je réussirai, je montrerai au monde qui je suis." Mais tiens-toi devant le miroir et regarde dans les yeux de ta soi-disant "ambition." Sais-tu vraiment quel cancer terrifiant tu nourris chaque jour en toi au nom du succès ?

Tu penses être travailleur, orienté carrière, un rêveur ? Quelle pitoyable et laide auto-tromperie ! La dissection impitoyable de la psychologie et de la sociologie arrache le masque de ton "succès" pour prouver que ton soi-disant moteur de réussite n'est pas du tout un rêve — c'est une voie de fuite biochimique de ton insécurité profonde, de ta peur primale d'être "indigne" !

Regarde ton solde bancaire, ta montre de marque coûteuse, ton CV, ton appartement acheté. Voulais-tu vraiment tout cela pour toi-même, ou as-tu vendu ta précieuse vie pour mendier de la "validation" des autres dans un système de notation invisible créé par le capitalisme ? Souviens-toi de la vérité immortelle de Chuck Palahniuk : "Nous achetons des choses dont nous n'avons pas besoin, avec de l'argent que nous n'avons pas, juste pour impressionner des gens que nous n'aimons même pas !"

La psychologie appelle cela le "Tapis roulant hédonique" — tu penses que cette promotion te rendra heureux, mais deux jours après l'avoir obtenue, ton cerveau la normalise, et ce vide suffocant et familier revient. Ernest Becker a prouvé dans "Le Déni de la Mort" que toute ambition humaine mondaine est en fait un mécanisme pour fuir "l'angoisse de la mort" — un "Projet d'Immortalité." Tu sais inconsciemment que tu mourras et pourriras, alors tu veux laisser une marque permanente à travers ton nom, ton statut et ta richesse.

Mais souviens-toi de la vérité brutale de la cosmologie — dans cet univers indifférent de 93 milliards d'années-lumière, ton titre de PDG, ta médaille d'or, ton solde bancaire valent moins qu'un grain de poussière mort ! Tu brûles la monnaie la plus précieuse de ta vie — ton "temps" et ton "moment présent" — pour un futur qui n'existe même pas.

La seule solution indestructible est d'embrasser l'"humilité épistémique" et de célébrer ton "ordinairité." Le jour où tu pourras enlever le fardeau toxique de "devenir quelqu'un de grand" de tes épaules, tu deviendras la personne la plus imbattable sur terre. Car une personne qui ne veut pas être suprême ne peut être vaincue par personne !` },

  { title: "Chapitre 8 : Aimes-tu quelqu'un, ou l'ocytocine de tes neurones te contrôle-t-elle ?",
    content: `Avec la fierté creuse de la course au succès effondrée sous tes pieds, tu penses peut-être : "Au moins une chose dans ce monde est pure, un sentiment est sacré — mon amour !" Mais aujourd'hui, fais face à cette vérité scientifique glaçante qui arrachera la peau de ton soi-disant "amour romantique" et exposera son squelette biochimique nu.

Ce que tu appelles "amour vrai," "âme sœur," ou "amour immortel" — la biologie évolutive et les neurosciences enfoncent le dernier clou dans le cercueil de ton ego : tu n'aimes personne en réalité ; tu es simplement un esclave aveugle et impuissant d'hormones et de neurotransmetteurs produits dans la matière grise de ton cerveau !

Quand tu as regardé dans leurs yeux pour la première fois, ce battement dans ta poitrine — était-ce un signal cosmique de ton âme libre ? Non ! C'était une explosion biochimique bon marché de dopamine et de noradrénaline de l'Aire Tegmentale Ventrale (ATV) de ton cerveau ! Ton cerveau a libéré exactement la même substance chimique que celui d'un cocaïnomane pendant une prise. Tu n'es pas tombé amoureux — tu es devenu physiologiquement "défoncé."

Helen Fisher, l'une des plus grandes anthropologues biologiques au monde, a prouvé à travers des milliers de scanners cérébraux que durant la première phase de l'amour, les régions du cerveau responsables de la logique, du jugement et de la détection des défauts s'éteignent littéralement. La personne que tu crois "parfaite" n'est pas parfaite — ton cerveau a simplement effacé ses défauts avec un filtre chimique appelé "illusion positive."

Quand cette personne te quitte, ce que tu appelles "chagrin d'amour" n'est pas une tragédie romantique — ce sont des "symptômes de sevrage" extrêmes dûs à la coupure soudaine de l'approvisionnement en dopamine et en ocytocine de tes voies neuronales. Ton cerveau se tord de douleur exactement comme un héroïnomane en sevrage. Tu ne pleures pas son absence — tu pleures ton propre crash biochimique.

La seule solution indestructible est d'embrasser l'"humilité épistémique" en amour. Admets : "Je ne sais pas ce qu'est l'amour, ce que je pensais être de l'amour n'était qu'un jeu chimique." Le vrai amour n'est pas une explosion chimique — le vrai amour est un choix conscient et logique. Quand le feu de la dopamine s'éteint et que l'ivresse de l'ocytocine se dissipe, choisir de rester aux côtés de ton partenaire en pleine connaissance de ses défauts, sans aucune compulsion biologique — c'est le vrai amour.` },

  { title: "Chapitre 9 : Quand tu fermes les yeux, ce monde existe-t-il vraiment ?",
    content: `Le sol sous tes pieds, le livre dans ta main, l'environnement autour de toi — tu penses que ce sont des vérités constantes ? L'analyse impitoyable de la mécanique quantique te défie : ce que tu considères comme de la "matière solide" est à 99,999% de l'espace complètement vide ! La distance entre le noyau d'un atome et son électron est cosmiquement vaste, pourtant ton cerveau limité et rusé t'a manipulé pour te faire croire que ce monde est très solide, très réel.

Savais-tu que tu n'as en fait jamais touché quoi que ce soit dans ta vie ? Quand tu tiens ce livre, les électrons atomiques de ton doigt et ceux du livre se repoussent intensément, et ton cerveau interprète faussement cette résistance électromagnétique comme un "toucher."

Mais la vérité encore plus terrifiante est — quand tu fermes les yeux, ce monde cesse d'exister ! La dualité onde-particule quantique a prouvé que lorsque personne n'observe un électron ou un photon, ce n'est pas de la matière — c'est simplement une onde de probabilité mathématique ! L'expérience de la double fente, l'expérience du choix retardé de Wheeler, et le principe d'incertitude de Heisenberg ont montré que sans observateur, la réalité ne "s'effondre" pas en existence.

Ton cerveau est piégé dans une boîte osseuse sombre. Aucune lumière, aucun son, aucun toucher n'y entre directement — seuls des signaux électriques l'atteignent. Ton cerveau ne fait que traiter ces signaux pour créer une "hallucination holographique" que tu appelles le "monde réel." Ce que tu appelles le ciel bleu n'est qu'une longueur d'onde spécifique de photons — le "bleu" n'existe pas dans l'univers ; c'est une étiquette fictive créée par ton cerveau !

La seule solution est d'embrasser cette humilité épistémique ultime. Admets : "Le monde que je vois n'est pas une vérité fixe ; c'est simplement une projection holographique créée par ma conscience." Quand tu embrasses ce néant, tu deviens la personne la plus imbattable sur terre. Car une personne qui ne revendique aucune existence permanente de soi ne peut être vaincue.` },

  { title: "Chapitre 10 : Ta 'normalité' est la plus grande maladie mentale du monde",
    content: `Tiens-toi devant le miroir et regarde ta façade de "gentleman" ou de "lady" bien propre et approuvée par la société. Chaque matin tu enfiles des vêtements repassés, tu traverses les embouteillages pour un travail que tu détestes secrètement, tu vends ta jeunesse pour quelques billets de papier, et le week-end tu postes des photos de nourriture de restaurant médiocre sur les réseaux sociaux en pensant que tu vis une vie parfaitement "normale" et saine.

Krishnamurti a dit une vérité immortelle : "Ce n'est pas un signe de bonne santé que d'être bien adapté à une société profondément malade !" Regarde cette société "normale" autour de toi — une société qui empoisonne son propre air chaque jour, détruit des forêts pour du papier, et tient debout sur des antidépresseurs et des somnifères. Tu t'es adapté à cette psychose collective, et tu en es fier ?

La célèbre "Expérience de Conformité" de Solomon Asch en 1951 a prouvé que 75% des gens nieront une vérité clairement visible et accepteront un mensonge flagrant juste pour "s'intégrer" avec dix autres personnes ! Toi aussi tu es un cobaye de l'expérience d'Asch — tu as étranglé ton potentiel infini intérieur, ton unicité, ta sauvagerie, juste par peur de "Qu'en diront les gens ?"

Michel Foucault a montré dans "Folie et Civilisation" que les mots "fou" ou "anormal" sont en fait des outils politiques créés par ceux au pouvoir — ceux qui refusent d'entrer dans la cage robotique de servitude de la société, qui questionnent, sont étiquetés "fous" pour que le reste du troupeau ne se rebelle pas !

Erich Fromm a appelé cela la "Pathologie de la Normalité" — une maladie où tu n'as aucune pensée propre, simplement un copier-coller des schémas lavés de cerveau de la majorité. La seule solution est d'embrasser ton "anormalité" intérieure comme ta force suprême. Le jour où tu libères ton moi étrange, imprévisible, que la société qualifie de "fou," tu deviens la personne la plus libérée, la plus imbattable. Car la personne qui ne se soucie pas du faux classement de "normalité" de la société ne peut être manipulée par aucun algorithme corporatif ou réseau social !` },

  { title: "Chapitre 11 : De quelle vérité fuis-tu en gardant constamment tes écouteurs ?",
    content: `Regarde avec dégoût ces écouteurs ou ce casque que tu gardes solidement enfoncés dans tes oreilles — dans la rue, dans le bus, sur le tapis roulant de la salle de sport, même avant de dormir. Tu prétends être un amateur de musique, productif, ou un fan de podcasts ? Mais la vérité émergeant du laboratoire le plus sombre de la psychologie te fera réaliser que tu es en fait le plus grand lâche neurologique de l'histoire humaine, utilisant ces placebos numériques pour constamment fuir un son spécifique à l'intérieur de ta propre tête !

As-tu remarqué que quand le courant coupe ou que la batterie de tes écouteurs meurt et que tu es complètement seul, ce silence total te saisit avec une force terrifiante ? Ton souffle se coupe. Ton rythme cardiaque s'accélère. Le psychologue Timothy Wilson à l'Université de Virginie a mené une expérience glaçante : quand des gens ont été laissés seuls dans une pièce vide pendant seulement 15 minutes avec leurs propres pensées, 67% des hommes et 25% des femmes se sont volontairement infligé des chocs électriques douloureux plutôt que d'endurer la torture psychologique du silence !

Comprends-tu ce que signifient ces données ? Nous, les humains, trouvons la douleur physique littérale, les chocs électriques, plus confortables que de rester assis seuls avec notre silence intérieur ! Blaise Pascal a dit dans les années 1600 : "Tout le malheur des hommes vient d'une seule chose, qui est de ne savoir pas demeurer en repos dans une chambre." Et ici au XXIe siècle, tu glorifies cette incapacité mentale avec des podcasts, des livres audio et des playlists Spotify.

Tu n'écoutes pas de musique — tu importes du bruit extérieur pour supprimer le cri de ton moi intérieur pourrissant, insatisfait, enveloppé de désespoir. Quand tu es complètement seul et silencieux, ton cerveau te confronte avec les vérités que tu caches à tout le monde — le vide de ta carrière mourante, l'acte suffocant de ta fausse relation, le sentiment d'inadéquation totale caché derrière ton ego, et finalement, les pas inévitables de la mort.

La seule solution réside dans la "quietude radicale" — ce que les neurosciences appellent le "jeûne sensoriel." Arrache ces prises numériques de tes oreilles et jette-les. Enferme-toi dans une pièce complètement vide. Les dix premières minutes te sembleront de la folie — toutes tes pensées terrifiantes assailliront ton cerveau. À ce moment — ne fuis pas ! Traverse ce feu d'agonie. Après une demi-heure ou une heure, ces pensées perdront leur carburant et se dissoudront. De sous ce bruit terrible émergera ta propre voix authentique, primale, silencieuse — une voix qu'aucun algorithme n'a enseignée, complètement à toi. Cette "quietude radicale" est la seule fréquence indestructible pour parler directement avec le pouvoir infini en toi et la source de l'univers !` },

  { title: "Chapitre 12 : Tu sais tout, mais tu ne comprends rien",
    content: `Tu scrolles toute la journée en avalant les nouvelles du monde, mais as-tu la moindre sagesse pour surmonter le vide profond de ta propre vie ?

Tiens-toi devant le miroir et ris de ton visage soi-disant "intelligent" et "à jour." Tu prétends faire partie de la génération la plus sage de l'histoire humaine ? Ta poche contient un petit appareil rectangulaire contenant l'intégralité des bibliothèques du monde via internet — tu apprends tout, des trous noirs à la politique du Moyen-Orient, en un clic. Ton ego te dit chaque jour que tu en sais bien plus que tes parents et grands-parents !

Mais le scalpel le plus impitoyable des sciences cognitives et de la neurobiologie est là pour percer cette bulle : la vérité brutale est — tu ne sais rien ; tu es un patient psychologique souffrant d'"Obésité Informationnelle" ! T.S. Eliot se lamentait : "Où est la sagesse que nous avons perdue dans la connaissance ? Où est la connaissance que nous avons perdue dans l'information ?"

Nicholas Carr a prouvé dans "The Shallows" par des IRM que le surf internet détruit littéralement les voies neuronales de "lecture profonde" de ton cerveau ! La recherche de Stanford montre que les multitâches chroniques ont un contrôle cognitif pire que les toxicomanes ! Tu n'acquiers pas de connaissances — tu es accro à l'information.

Tu sais combien sont morts en Ukraine ou à Gaza aujourd'hui, tu connais le nom de la nouvelle fusée d'Elon Musk, qui sort avec quelle célébrité — mais sais-tu comment sauver la personne en toi qui meurt un peu plus chaque jour ? Ta tête est pleine des déchets du monde, mais tu n'as pas un gramme de sagesse pour résoudre ta crise émotionnelle la plus basique !

La solution est le "Jeûne Cognitif" extrême. Arrête toutes les nouvelles, les reels et les opinions pendant une semaine. Ton ego criera "Je vais être largué !" mais cette planète ne s'arrête pas une seconde selon que tu saches ou non. Au lieu d'avaler mille informations, prends un seul concept, une seule philosophie, un seul livre, et plonge dans ses profondeurs absolues. Cesse d'accumuler de l'information et commence à la convertir en expérience vécue — car la connaissance non gagnée par la sueur, le sang et les larmes n'est que des données mortes. La personne qui connaît toutes les nouvelles du monde mais ne se connaît pas elle-même est le plus grand et le plus arrogant des imbéciles de l'univers !` },

  { title: "Chapitre 13 : Le rouge que tu vois et le rouge que je vois sont-ils les mêmes ?",
    content: `La forme la plus extrême de la solitude humaine — nous ne pouvons jamais vraiment sentir exactement ce qui se passe dans l'esprit d'une autre personne.

Tiens-toi devant le miroir et regarde ton moi soi-disant "social" et "aimant." Tu penses que quelqu'un dans ta vie te comprend complètement, qui peut regarder dans tes yeux et ressentir chaque douleur de ton cœur exactement comme tu la ressens ? Quelle arrogance pitoyable et délirante !

Aujourd'hui, la vérité la plus non résolue, la plus terrifiante de la Philosophie de l'Esprit et des neurosciences — le "Problème Difficile de la Conscience" de David Chalmers — déchirera ton arrogance factice de "compréhension." La vérité scientifique brutale est que tu es un prisonnier à vie dans une cellule sombre, scellée et solitaire à l'intérieur de ton propre crâne, d'où tu ne pourras jamais t'échapper et où personne d'autre ne pourra jamais entrer !

Tu penses que toi et ton être cher voyez une rose rouge ensemble et appréciez la même beauté ? Peux-tu prouver que ton cerveau traite ce photon de longueur d'onde de 700 nanomètres et crée la même expérience subjective de "rouge" — les "qualia" — que les leurs ? Peut-être que ton rouge est traité par leurs yeux d'une manière que tu appellerais "vert" ! Vous avez tous les deux appris à appeler le même objet "rouge" depuis l'enfance, donc votre langage correspond, mais votre expérience privée intérieure n'a jamais correspondu et ne correspondra jamais !

Quand tu pleures et dis à quelqu'un : "J'ai tellement mal, tu ne peux pas comprendre ?" — tu fais l'affirmation la plus non-scientifique et égocentrique de l'univers. Ta douleur est un signal purement privé créé à l'intérieur de tes neurones, impossible à transférer via Bluetooth ou WiFi vers un autre cerveau ! Quand quelqu'un montre de l'empathie, il ne ressent pas ta douleur — il ne fait que rejouer un souvenir de sa propre douleur passée et faire une approximation.

Mais cette solitude extrême n'est pas la fin de la vie. La seule solution indestructible est l'humilité épistémique dans les relations. Admets : "Je suis complètement seul dans cet univers, personne ne me comprendra pleinement, je ne comprendrai pleinement personne, et cette distance infinie, cette immensité de non-compréhension, est à partir d'aujourd'hui ma plus grande force et ma beauté suprême !" Comprendre que quelqu'un s'assoit à côté de toi et te tient la main malgré le fait qu'il ne comprend pas pleinement ta douleur — c'est le plus grand miracle de cet univers vide !` },

  { title: "Chapitre 14 : Les limites du langage : si un sentiment n'a pas de mot, existe-t-il ?",
    content: `Tiens-toi devant le miroir et regarde ton moi soi-disant "intellectuel" et "éloquent." Tu penses pouvoir tout exprimer avec éloquence — toute ta colère, ta fierté blessée, ton amour en belles phrases poétiques, poster de grands statuts sur les réseaux sociaux pour dire au monde exactement ce qui est dans ton esprit ?

Aujourd'hui, le Déterminisme Linguistique et le marteau le plus impitoyable de la philosophie de Wittgenstein écraseront ton arrogance langagière pour toujours. La vérité brutale — tu ne possèdes aucune pensée indépendante ; tu es simplement l'esclave d'un dictionnaire ! Wittgenstein a écrit dans son célèbre "Tractatus" : "Les limites de mon langage signifient les limites de mon monde."

Sais-tu que les sentiments pour lesquels ta langue n'a pas de mot — ton cerveau ne peut littéralement pas les traiter ? Quand tu pleures soudainement dans un vide infini et sans nom la nuit, la société colle une étiquette bon marché sur ton agonie cosmique — "dépression" ou "anxiété" — et tu t'accroches à ce mot comme un animal obéissant en pensant "Oui, ça doit être ce que j'ai !"

Tes ancêtres dans les cavernes ont créé quelques sons symboliques pour la survie et la chasse, et aujourd'hui au XXIe siècle, tu essaies désespérément d'enfermer les sentiments les plus complexes, les plus spirituels, les plus profonds de l'univers dans ces quelques cadres phonétiques d'hommes des cavernes ! George Orwell a montré dans "1984" comment la "Novlangue" a été créée en effaçant des mots comme "rébellion" et "liberté" des dictionnaires pour que les gens ne puissent même pas penser à se rebeller. De même, ta société et ta culture ont supprimé ou jamais créé de mots qui pourraient t'aider à t'échapper de ta prison existentielle.

Tu penses que tu penses librement ? Mensonge absolu ! Tu ne fais que réarranger le vocabulaire que ta société t'a donné. Quand tu dis "Je t'aime," tu enveloppes en fait la tempête biochimique terrifiante, toxique et possessive en toi dans une couverture de mots romantiques, te trompant toi-même.

La seule solution est l'humilité épistémique envers le langage lui-même. Tue l'ego de tout nommer, tout définir. Admets : "Mon langage est infirme, mon dictionnaire est une fausse cage, mes vérités les plus profondes n'ont pas de mots, et cette immensité de l'absence de mots est à partir d'aujourd'hui ma plus grande force !" Les vérités les plus sacrées, les plus puissantes de l'univers ne vivent dans aucun dictionnaire — elles vivent dans le vide infini entre les mots.` },

  { title: "Chapitre 15 : Créateur vs. le vide ultime de l'évolution : la dernière foi aveugle de ton cerveau et la mort ultime de l'ego !",
    content: `Maintenant, en cet instant où ton passé, ton futur, ton amour, ta société, ton langage, et ta soi-disant "réalité" — toute arrogance s'est changée en poussière, ton ego a fui derrière sa forteresse la plus puissante, la plus sacrée, la plus inviolable — et cette forteresse est ton "Dieu," ton "Créateur," ton imaginaire "protecteur cosmique" !

Tu te tiens devant le miroir, tremblant de peur face à ce vaste vide, te consolant : "Quelqu'un doit contrôler tout cela, quelqu'un me sauvera au jugement final, quelqu'un a un grand compte de ma petite vie !" Mais aujourd'hui, le marteau le plus terrifiant et le plus impitoyable de la neurothéologie, de la biologie évolutive et de la cosmologie frappera le coup final sur ce dernier pilier de ton existence.

La vérité scientifique brutale — nulle part dans cet univers infini de 93 milliards d'années-lumière, froid et sourd, ne siège un père, un protecteur ou un plan divin pour toi. Ce que tu appelles "Dieu," à qui tu pleures — n'est pas un être divin mais une hallucination biologique parfaite créée par le Lobe Temporal et l'Amygdale de ton propre cerveau ! L'expérience célèbre du "Casque de Dieu" du neuroscientifique canadien Michael Persinger a prouvé qu'en appliquant simplement des impulsions électromagnétiques à des zones spécifiques du cerveau, les gens sentent une "présence divine invisible," pleurent et flottent dans l'extase spirituelle !

Tes prosternations, tes larmes dans les lieux de prière, ta paix divine — rien de tout cela ne vient du ciel ; c'est entièrement du tir électrochimique à l'intérieur de ton crâne ! L'évolution a inventé le concept d'un "Protecteur Divin" comme un placebo psychologique, un mécanisme de survie, quand les humains primitifs se tenaient impuissants face à la foudre, aux tempêtes, aux pandémies et à la mort. Les humains ont peint leur propre image sur le canevas du ciel, l'ont nommée "Dieu," et se sont effondrés à ses pieds — juste pour échapper à la vérité glaçante que personne ne contrôle rien dans cet univers ; tout n'est que le jeu aléatoire et sans signification de la physique aveugle et de la probabilité quantique !

Ernest Becker appellerait ta religion un "Projet d'Immortalité." Quand tu regardes le ciel en espérant des réponses, l'univers te fixe en retour avec une indifférence infinie et froide — il ne sait même pas que tu existes !

Mais de cette destruction ultime, de ce vide suprême, naîtra l'éveil ultime et le plus puissant de ta vie ! Tiens-toi devant le miroir et déclare la plus grande rébellion de l'histoire de l'univers : "Je ne sais rien ! D'où vient cet univers, je ne sais pas, si mon existence a un sens, je ne sais pas, personne ne vient me sauver, et je me tiens complètement seul dans un vide infini et aveugle !" Le jour où tu embrasses le fait d'être un orphelin cosmique, le jour où tu enfonces le dernier clou dans le cercueil de chaque Dieu que ton cerveau a créé — à cet instant même, tu te transformeras toi-même en l'être le plus puissant, le plus imbattable, le plus ultimement libre de cet univers ! Car une personne sans orgueil à perdre, sans Dieu pour la sauver, sans enfer à craindre, et sans paradis pour la tenter — aucune force dans l'univers ne peut l'ébranler d'un pouce !` },

  { title: "Chapitre 16 : Bientôt disponible......",
    content: `Ce chapitre sera publié bientôt. Restez à l'écoute...` },
];

const chaptersAr: Chapter[] = [
  { title: "الفصل ١: هل أنت حر، أم حيوان أليف للخوارزميات؟",
    content: `انظر إلى نفسك بهدوء. هل تعتقد أنك اخترت قراءة هذا بإرادتك الحرة؟ غرورك يصرخ: "نعم! أنا أتحكم في حياتي. أنا حر." لكن واجه مرآة الواقع والحقيقة ستجعلك ترتجف. الحقيقة القاسية هي — أنك لست حراً؛ أنت حيوان أليف مدرب جيداً لخوارزميات غير مرئية صنعها أشخاص يجلسون في غرف مكيفة في وادي السيليكون.

من لحظة استيقاظك حتى إغلاق عينيك في الليل، كم مما تفكر فيه وتريده وتغضب بسببه أو تحبه هو حقاً ملكك، وكم منه تم حقنه في دماغك؟ لقد فقدت القدرة على التمييز منذ زمن بعيد.

فكر في الأمر — ما أول شيء لمسته هذا الصباح؟ يد من تحب، أم شاشة هاتفك الذكي الزجاجية الباردة الميتة؟ أنت تلمس تلك الشاشة أكثر من ٢٥٠٠ مرة يومياً. هذه ليست عادة طبيعية — إنها عبودية كيميائية حيوية مصممة بإتقان.

التكنولوجيا الحديثة اخترقت نظام المكافأة العميق في الدماغ البشري — مسار الدوبامين. الدوبامين ليس هرمون "السعادة"؛ إنه هرمون "الرغبة." خلق التطور الدوبامين للبقاء، للبحث عن الطعام. لكن اليوم؟ أنت فأر مختبر، مثل فأر "صندوق سكينر" الشهير لـ ب.ف. سكينر الذي يضغط زراً للحصول على الطعام. هاتفك الذكي هو أكثر صندوق سكينر مثالية في العالم.

كل تمريرة تطلق قطرة من الدوبامين. تغرق أعمق كالمدمن. تظن أنك تستخدم التكنولوجيا؟ خطأ. التكنولوجيا تستخدمك. أنت منتج هذا العالم التجاري، وانتباهك ووعيك ووقتك هي عملتهم.

هذه العبودية لا تسرق وقتك فحسب — إنها تعفن روحك من الداخل. اقضِ ساعة على الأقل يومياً بدون أي اتصال. اجلس في سكون. لا تخف من الملل — عانقه، لأن الإبداع البشري الحقيقي يولد من فراغ الملل.

اليوم الذي تتعلم فيه التحكم في الدوبامين الخاص بك، اليوم الذي تستطيع فيه الاستمتاع بمللك دون الدخول في شبكة الخوارزميات، ذلك اليوم ستكون حقاً "حراً." هل أنت مستعد لكسر قيودك؟` },

  { title: "الفصل ٢: ماضيك لا وجود له في الحقيقة",
    content: `عندما تتحرر من سلاسل الدوبامين الرقمية وتجلس لأول مرة وجهاً لوجه مع صمتك الخاص، سيلجأ دماغك الهارب إلى لعبة جديدة مرعبة — "ماضيك."

أثبت علم النفس المعرفي وأحدث أبحاث علم الأعصاب، خاصة "متلازمة الذاكرة الزائفة" للدكتورة إليزابيث لوفتوس ونظرية "إعادة تعزيز الذاكرة"، أنك عندما تتذكر حدثاً ماضياً، فأنت لا تتذكر الحدث الأصلي — بل تتذكر فقط آخر مرة تذكرته فيها!

دماغك مثل مستند وورد — في كل مرة تفتح الملف، تقوم مشاعرك الحالية بتعديل تلك الذكرى قليلاً و"حفظها" من جديد.

وفقاً للتجديد الخلوي البيولوجي، لا توجد خلية واحدة كانت في جسمك قبل ٧-١٠ سنوات حية اليوم. الشخص الذي ظُلم قبل عشر سنوات لم يعد موجوداً جسدياً!

الماضي ليس وجهة ثابتة — الماضي طين خام. من اليوم، من هذه اللحظة، أعد كتابة ماضيك بوعي كمؤلف! تذكر، في ساعة الكون، لا يوجد ماض ولا مستقبل — فقط هذه اللحظة الحاضرة هي الحقيقة الثابتة الوحيدة.` },

  { title: "الفصل ٣: أنت لست غاية هذا الكون، مجرد حادث",
    content: `تقف أمام المرآة، تنظر في عينيك، وتظن نفسك شيئاً مميزاً، أليس كذلك؟ منذ طفولتك، قامت عائلتك ومجتمعك ودينك والمتحدثون التحفيزيون الرخيصون بغسل دماغك لتؤمن أنك أعلى مخلوقات هذا الكون.

لكن أمام البيانات القاسية للفيزياء الفلكية وعلم الكونيات الكمومي، وجودك في هذا الكون الممتد ٩٣ مليار سنة ضوئية، البارد والمظلم واللامبالي تماماً، أتفه من ذرة غبار!

أنت لست جزءاً من أي "خطة كبرى"؛ أنت مجرد منتج ثانوي عرضي لكويكب اصطدم بالأرض قبل ٦٥ مليون سنة!

إذا لم يكن لحياتك غرض افتراضي، فهذا يعني — أنت حر تماماً لخلق غرض حياتك الخاص! بكلمات كارل ساغان: "نحن وسيلة للكون ليعرف نفسه." من خلال عينيك، يرى الكون نفسه.

احتفِ بلا معناك. لأن اليوم الذي تقبل فيه بمحبة وابتسامة لا معنى وجودك القاسي، ستستسلم كل مخاوف الكون عند قدميك.` },

  { title: "الفصل ٤: 'حقيقتك' هي في الواقع يانصيب مكان ولادتك",
    content: `تظن أن ما تعرفه كحقيقة مطلقة هو الحقيقة الثابتة الوحيدة في الكون؟ تظن أن معتقداتك وعاداتك الغذائية وملابسك وفلسفة حياتك — كلها منتجات تفكيرك الحر؟

لو لم تولد في هذا البلد بالتحديد، هذه المدينة بالتحديد، عائلة هذا الدين بالتحديد، بل في عائلة فايكنغ إسكندنافية في القرن التاسع، أين ستكون "حقائقك المقدسة" اليوم؟

دماغك جاء فعلياً إلى هذا العالم كقرص صلب فارغ؛ قبل أن تستطيع حتى الكلام، قامت عائلتك ومجتمعك بتثبيت معتقداتهم ومخاوفهم وتحيزاتهم على قرصك الصلب الفارغ كفيروس.

اليوم الذي تستطيع فيه أن تقول: "حقيقتي ليست حقيقة مطلقة، إنها مجرد منظور جغرافي وثقافي،" ذلك اليوم سيُغسل كل حقد وكل حكم من داخلك إلى الأبد.` },

  { title: "الفصل ٥: اكتئابك الآن أغلى منتج في عالم الشركات",
    content: `حزنك ليس فناً عظيماً — الحقيقة القاسية هي أن دموعك ووحدتك هي أغلى وأربح منتجات عالم الشركات الحديث!

عندما تكون سعيداً وراضياً، تضع الهاتف جانباً وتعيش حياتك. لكن عندما تكون يائساً ومكتئباً، حينها تتصفح أكثر وتتسوق أكثر.

فراغك بنى إمبراطورية صيدلانية بمليارات الدولارات. بلغة الرأسمالية القاسية — الشخص السليم تماماً عديم الفائدة للاقتصاد؛ الشخص الأكثر ربحية هو من يبقى نصف مريض ونصف مكتئب باستمرار.

الحل هو — انتزاع الملكية التجارية من فوق معاناتك وتأسيس "سيادتك العاطفية" الخاصة. اليوم الذي تتوقف فيه عن السماح ببيع حزنك، ذلك اليوم ستخسر هذه الخوارزميات التجارية أمامك إلى الأبد.` },

  { title: "الفصل ٦: هل تعيش حياتك، أم تنتقم لآلام أسلافك غير المنطوقة؟",
    content: `عندما تهرب من سوق الاكتئاب المزيف لعالم الشركات وتفكر: "على الأقل غضبي الداخلي، استيائي، كبريائي الجريحة العميقة هي محض شخصيتي"، في تلك اللحظة بالتحديد ستهز حقيقة علمية مرعبة "هويتك الفردية" من رأسك إلى أخمص قدميك. أثبتت "الوراثة اللاجينية" في البيولوجيا الحديثة وأحدث أبحاث الصدمة عبر الأجيال أنك لا تعيش حياتك فعلاً — أنت مجرد آلة تشغيل بيولوجية حية لمعاناة أسلافك الموتى غير المنطوقة، جوعهم، حروبهم، والتعذيب اللاإنساني الذي تعرضوا له!

قبل مائة عام، ربما عاش جدك أو جد جدك رعباً وعجزاً شديدين خلال وباء أو مجاعة أو شغب ما. ذلك الفيضان الشديد من الكورتيزول والأدرينالين غيّر بشكل دائم التعبير الجيني لديهم. واليوم، وأنت جالس في غرفتك المكيفة في القرن الحادي والعشرين، نوبات الذعر التي تعانيها بلا سبب هي في الواقع الصدى الجيني لذلك الرعب غير المنطوق منذ مائة عام!

أنت تقول بفخر: "أنا بطبيعتي غاضب قليلاً" أو "لا أستطيع الثقة بأحد بسهولة"، لكن الحقيقة القاسية هي — هذه ليست "سمات شخصيتك." هذه دروع صدئة من آليات البقاء البدائية التي ارتداها أسلافك للنجاة، وأنت تحمل ذلك الدرع الثقيل بدون أي حرب، تبحث عن عدو وهمي. قال كارل يونغ: "حتى تجعل اللاوعي واعياً، سيوجه حياتك وستسميه قدراً."

الحل الحقيقي الوحيد هو احتضان ذلك "التواضع المعرفي" الأسمى. قف أمام المرآة واعترف بشجاعة: "نعم، لا أعرف مصدر هذا الألم الداخلي، هذا الغضب ليس لي." اليوم الذي تقبل فيه أن كل ردود أفعالك العاطفية ليست حقيقة مطلقة بل مجرد إرث بيولوجي، ذلك اليوم ستقرر أن هذه الصدمة المتوارثة تنتهي هنا، اليوم، فيك، إلى الأبد. لن تكون حامل الألم القديم — ستكون مقبرته!` },

  { title: "الفصل ٧: في سباق الفئران هذا لإثبات تفوقك، من تحاول حقاً الوصول إليه؟",
    content: `بعد أن نزلت من سفينة أشباح الصدمة الوراثية، تفكر الآن: "سأصنع قدري، سأنجح، سأري العالم من أنا." لكن قف أمام المرآة وانظر في عيني ما تسميه "طموحك." هل تعرف حقاً أي سرطان مرعب تغذيه داخلك يومياً باسم النجاح؟

تظن أنك مجتهد، طموح، حالم؟ يا لها من خداع ذاتي بائس! تشريح علم النفس وعلم الاجتماع القاسي يثبت أن دافعك للنجاح ليس حلماً — إنه طريق هروب كيميائي حيوي من انعدام أمانك العميق، خوفك البدائي من أن تكون "غير جدير"!

انظر إلى رصيدك البنكي وساعتك الفاخرة وسيرتك الذاتية. هل أردت هذه حقاً لنفسك، أم بعت حياتك الثمينة لتتسول "التصديق" من الآخرين؟ تذكر حقيقة تشاك بالانيوك الخالدة: "نشتري أشياء لا نحتاجها، بأموال لا نملكها، لإثارة إعجاب أشخاص لا نحبهم حتى!"

علم النفس يسمي هذا "طاحونة المتعة الهيدونية" — تظن أن الترقية ستسعدك، لكن بعد يومين من الحصول عليها، يطبّعها دماغك، ويعود ذلك الفراغ الخانق المألوف. أثبت إرنست بيكر أن كل طموح بشري دنيوي هو في الواقع آلية للهروب من "قلق الموت" — "مشروع خلود."

لكن تذكر حقيقة علم الكونيات القاسية — في هذا الكون اللامبالي الممتد ٩٣ مليار سنة ضوئية، لقب المدير التنفيذي وميداليتك الذهبية ورصيدك البنكي أقل قيمة من ذرة غبار ميتة!

الحل الوحيد هو احتضان "التواضع المعرفي" والاحتفاء بـ"عاديتك." اليوم الذي تزيل فيه عبء "أن تصبح شيئاً عظيماً" من كتفيك، ستصبح أكثر شخص لا يُقهر على وجه الأرض. لأن من لا يريد أن يكون الأعلى لا يمكن لأحد هزيمته!` },

  { title: "الفصل ٨: هل تحب أحداً، أم أوكسيتوسين خلاياك العصبية يتحكم بك؟",
    content: `مع انهيار الكبرياء الأجوف لسباق الفئران تحت قدميك، ربما تفكر: "على الأقل شيء واحد في هذا العالم نقي، شعور واحد مقدس — حبي!" لكن اليوم، واجه هذه الحقيقة العلمية المرعبة التي ستنزع جلد ما تسميه "الحب الرومانسي" وتكشف هيكله الكيميائي الحيوي العاري.

ما تسميه "الحب الحقيقي" أو "توأم الروح" — البيولوجيا التطورية وعلم الأعصاب يدقان المسمار الأخير في نعش غرورك: أنت لا تحب أحداً فعلاً؛ أنت مجرد عبد أعمى عاجز لهرمونات وناقلات عصبية ينتجها الدماغ!

عندما نظرت في عينيهما لأول مرة، تلك الخفقة في صدرك — هل كانت إشارة كونية من روحك الحرة؟ لا! كانت انفجاراً كيميائياً حيوياً رخيصاً من الدوبامين والنورإبينفرين من المنطقة السقيفية البطنية في دماغك! دماغك أطلق نفس المادة الكيميائية التي يطلقها دماغ مدمن الكوكايين.

أثبتت هيلين فيشر من خلال آلاف المسوحات الدماغية أن مناطق المنطق والحكم في الدماغ تنغلق حرفياً أثناء المرحلة الأولى من الحب. عندما يتركك ذلك الشخص، ما تسميه "حسرة القلب" ليست مأساة رومانسية — إنها أعراض "انسحاب" شديدة من الانقطاع المفاجئ للدوبامين والأوكسيتوسين.

الحل الوحيد هو احتضان "التواضع المعرفي" في الحب. اعترف: "لا أعرف ما هو الحب، ما ظننته حباً كان مجرد لعبة كيميائية." الحب الحقيقي ليس انفجاراً كيميائياً — الحب الحقيقي هو اختيار واعٍ ومنطقي. عندما تموت نار الدوبامين ويتلاشى سكر الأوكسيتوسين، اختيار البقاء بجانب شريكك مع معرفة كاملة بعيوبه، بدون أي إكراه بيولوجي — هذا هو الحب الحقيقي.` },

  { title: "الفصل ٩: عندما تغمض عينيك، هل لهذا العالم وجود حقاً؟",
    content: `الأرض تحت قدميك، الكتاب في يدك، البيئة من حولك — تظن أن هذه حقائق ثابتة؟ تحليل بيانات ميكانيكا الكم القاسي يتحداك: ما تعتبره "مادة صلبة" هو ٩٩.٩٩٩٪ فراغ تام! المسافة بين نواة الذرة وإلكترونها شاسعة كونياً، لكن دماغك المحدود والماكر تلاعب بك لتؤمن أن هذا العالم صلب جداً وحقيقي جداً.

هل تعلم أنك لم تلمس فعلياً أي شيء في حياتك؟ عندما تمسك هذا الكتاب، إلكترونات ذرات إصبعك وإلكترونات ذرات الكتاب تتنافر بشدة، ودماغك يفسر تلك المقاومة الكهرومغناطيسية خطأً على أنها "لمس."

لكن الحقيقة الأكثر رعباً هي — عندما تغمض عينيك، يتوقف هذا العالم عن الوجود! ازدواجية الموجة-الجسيم الكمومية أثبتت أنه عندما لا يراقب أحد إلكتروناً أو فوتوناً، فهو ليس مادة — إنه مجرد موجة احتمالية رياضية!

دماغك محبوس داخل صندوق عظمي مظلم. لا ضوء ولا صوت ولا لمس يدخل مباشرة — فقط إشارات كهربائية تصله. دماغك يعالج هذه الإشارات ليخلق "هلوسة هولوغرافية" تسميها "العالم الحقيقي." ما تسميه سماءً زرقاء هو مجرد طول موجي محدد من الفوتونات — "الأزرق" لا يوجد في الكون؛ إنه تسمية خيالية ابتكرها دماغك!

الحل الوحيد هو احتضان هذا التواضع المعرفي النهائي. اعترف: "العالم الذي أراه ليس حقيقة ثابتة؛ إنه مجرد إسقاط هولوغرافي خلقه وعيي." عندما تحتضن هذا العدم، تصبح أكثر شخص لا يُقهر على وجه الأرض.` },

  { title: "الفصل ١٠: 'طبيعيتك' هي أكبر مرض نفسي في العالم",
    content: `قف أمام المرآة وانظر إلى واجهة "السيد المحترم" المهذبة الموافق عليها اجتماعياً. كل صباح ترتدي ملابس مكوية، تشق طريقك عبر الازدحام إلى وظيفة تكرهها سراً، تبيع شبابك مقابل أوراق نقدية، وفي عطلة نهاية الأسبوع تنشر صور طعام مطعم رخيص على وسائل التواصل معتقداً أنك تعيش حياة "طبيعية" وصحية تماماً.

قال كريشنامورتي حقيقة خالدة: "ليس مقياساً للصحة أن تكون متكيفاً جيداً مع مجتمع مريض بعمق!" انظر إلى هذا المجتمع "الطبيعي" — مجتمع يسمم هواءه يومياً، يدمر الغابات من أجل الورق، ويقف على حبوب الاكتئاب والمنومات. وأنت تكيفت مع هذا الذهان الجماعي وتفتخر بذلك؟

تجربة التوافق الشهيرة لسولومون آش (١٩٥١) أثبتت أن ٧٥٪ من الناس سينكرون حقيقة واضحة ويقبلون كذبة صارخة فقط "للاندماج"! أنت أيضاً خنقت إمكاناتك اللامحدودة الداخلية وتفردك فقط من خوف "ماذا سيقول الناس؟"

ميشيل فوكو أظهر في "تاريخ الجنون" أن كلمات "مجنون" أو "غير طبيعي" هي في الواقع أدوات سياسية. إريك فروم سمى هذا "مرض الطبيعية." الحل الوحيد هو احتضان "شذوذك" الداخلي كقوتك العليا. لأن الشخص الذي لا يهتم بتقييم "الطبيعية" الزائف للمجتمع لا يمكن التلاعب به بأي خوارزمية!` },

  { title: "الفصل ١١: من أي حقيقة تهرب بسماعاتك الدائمة؟",
    content: `انظر بازدراء إلى تلك السماعات التي تبقيها في أذنيك باستمرار — في الشارع، في الحافلة، على جهاز المشي، حتى قبل النوم. تدعي أنك عاشق موسيقى أو منتج أو مهووس بالبودكاست؟ لكن الحقيقة الخارجة من أحلك مختبرات علم النفس ستجعلك تدرك أنك في الواقع أعظم جبان عصبي في تاريخ البشرية، تستخدم هذه المسكنات الرقمية للهروب باستمرار من صوت محدد داخل رأسك!

هل لاحظت أنه عندما ينقطع التيار أو تنفد بطارية سماعتك وتكون وحيداً تماماً، ذلك الصمت المطبق يقبض عليك بقوة مرعبة؟ عالم النفس تيموثي ويلسون في جامعة فرجينيا أجرى تجربة مرعبة: عندما تُرك الناس وحدهم في غرفة فارغة لمدة ١٥ دقيقة فقط مع أفكارهم، ٦٧٪ من الرجال صعقوا أنفسهم طوعاً بالكهرباء بدلاً من تحمل عذاب الصمت النفسي!

قال باسكال في القرن السابع عشر: "كل تعاسة البشر تأتي من عدم قدرة الإنسان على الجلوس بهدوء وحده في غرفة." وهنا في القرن الحادي والعشرين، أنت تمجد هذا العجز بالبودكاست وسبوتيفاي.

أنت لا تستمع للموسيقى — أنت تستورد ضوضاء خارجية لإخماد صراخ ذاتك الداخلية المتعفنة. الحل الوحيد هو "السكون الجذري" — ما يسميه علم الأعصاب "الصيام الحسي." انزع تلك السدادات الرقمية من أذنيك. أغلق على نفسك في غرفة فارغة تماماً. الدقائق العشر الأولى ستبدو كالجنون. لكن بعد نصف ساعة أو ساعة، ستنفد وقود تلك الأفكار وتتلاشى. من تحت ذلك الضجيج الرهيب سيظهر صوتك الأصيل الصامت — صوت لم يعلمه أي خوارزمية.` },

  { title: "الفصل ١٢: تعرف كل شيء، لكنك لا تفهم شيئاً",
    content: `تتصفح طوال اليوم تبتلع أخبار العالم، لكن هل لديك أي حكمة للتغلب على الفراغ العميق في حياتك؟

قف أمام المرآة واضحك على وجهك المزعوم "الذكي" و"المحدّث." تدعي أنك من أحكم جيل في تاريخ البشرية؟ في جيبك جهاز مستطيل صغير يحتوي مكتبة العالم بأكملها — تتعلم كل شيء من الثقوب السوداء إلى سياسة الشرق الأوسط بنقرة واحدة.

لكن مشرط علم الأعصاب المعرفي الأكثر قسوة هنا ليثقب هذا البالون: الحقيقة القاسية — أنت لا تعرف شيئاً؛ أنت مريض نفسي يعاني من "سمنة المعلومات"! تندب ت.س. إليوت: "أين الحكمة التي أضعناها في المعرفة؟ أين المعرفة التي أضعناها في المعلومات؟"

أثبت نيكولاس كار في "The Shallows" أن تصفح الإنترنت يدمر حرفياً المسارات العصبية لـ"القراءة العميقة" في دماغك! أبحاث ستانفورد تُظهر أن المتعددي المهام المزمنين لديهم تحكم إدراكي أسوأ من المدمنين!

تعرف كم مات في أوكرانيا أو غزة اليوم، لكن هل تعرف كيف تنقذ الشخص بداخلك الذي يموت أكثر قليلاً كل يوم؟ رأسك ممتلئ بقمامة العالم، لكنك تفتقر لأوقية واحدة من الحكمة لحل أزمتك العاطفية الأساسية!

الحل هو "الصيام المعرفي" المتطرف. أوقف كل الأخبار لمدة أسبوع. بدلاً من ابتلاع ألف معلومة، خذ مفهوماً واحداً وغُص في أعماقه المطلقة. أكبر أحمق في الكون هو الذي يعرف كل أخبار العالم لكنه لا يعرف ذاته الداخلية!` },

  { title: "الفصل ١٣: هل الأحمر الذي تراه هو نفس الأحمر الذي أراه؟",
    content: `أقصى أشكال الوحدة البشرية — لا يمكننا أبداً أن نشعر فعلاً بما بداخل عقل شخص آخر.

قف أمام المرآة وانظر إلى ذاتك المزعومة "الاجتماعية" و"المحبة." تظن أن شخصاً ما في حياتك يفهمك تماماً، يمكنه النظر في عينيك والشعور بكل ألم في قلبك تماماً كما تشعر أنت؟ يا لها من غطرسة بائسة وهمية!

"المشكلة الصعبة للوعي" لديفيد تشالمرز — الحقيقة الأكثر رعباً من فلسفة العقل وعلم الأعصاب — ستمزق غطرستك المزيفة في "الفهم." أنت سجين مدى الحياة في زنزانة مظلمة مغلقة وحيدة داخل جمجمتك!

تظن أنك وحبيبك ترون وردة حمراء معاً وتستمتعون بنفس الجمال؟ هل تستطيع إثبات أن دماغك يعالج فوتونات ٧٠٠ نانومتر ويخلق نفس التجربة الذاتية لـ"الأحمر" كدماغهم؟ ربما أحمرك هو ما يسمونه "أخضر"!

عندما تبكي وتقول لشخص ما "أنا أتألم كثيراً، ألا تفهم؟" — فأنت تقدم أكثر ادعاء غير علمي في الكون. ألمك إشارة خاصة بالكامل تم خلقها داخل خلاياك العصبية! عندما يُظهر أحد التعاطف، فهو لا يشعر بألمك — بل يعيد تشغيل ذكرى ألمه الخاص.

لكن هذه الوحدة القصوى ليست نهاية الحياة. الحل هو التواضع المعرفي في العلاقات. اعترف: "أنا وحيد تماماً في هذا الكون، لن يفهمني أحد بالكامل، ومع ذلك فإن جلوس أحد بجانبي وإمساك يدي رغم عدم فهمه الكامل لألمي — هذه أعظم معجزة في هذا الكون الفارغ!"` },

  { title: "الفصل ١٤: حدود اللغة: إذا لم يكن للشعور كلمة، هل له وجود؟",
    content: `قف أمام المرآة وانظر إلى ذاتك المزعومة "المثقفة" و"البليغة." تظن أنك تستطيع التعبير عن كل شيء ببلاغة — كل غضبك، كبريائك المجروحة، حبك في جمل شعرية جميلة؟

اليوم، مطرقة الحتمية اللغوية وفلسفة فيتغنشتاين الأكثر قسوة ستسحق غرورك اللغوي إلى الأبد. الحقيقة القاسية — أنت لا تملك أي فكر مستقل؛ أنت مجرد عبد لقاموس! كتب فيتغنشتاين في "تراكتاتوس" الشهير: "حدود لغتي تعني حدود عالمي."

هل تعلم أن المشاعر التي ليس لها كلمة في لغتك — دماغك حرفياً لا يستطيع معالجتها؟ عندما تبكي فجأة في فراغ لا اسم له في الليل، يلصق المجتمع تسمية رخيصة على عذابك الكوني — "اكتئاب" أو "قلق" — وأنت تتمسك بتلك الكلمة كحيوان مطيع.

أورويل أظهر في "١٩٨٤" كيف تم إنشاء "اللغة الجديدة" بمسح كلمات مثل "تمرد" و"حرية" من القواميس حتى لا يستطيع الناس التفكير في التمرد. وبالمثل، أزال مجتمعك وثقافتك أو لم يخلقوا أبداً كلمات يمكن أن تساعدك في الهروب من سجنك الوجودي.

الحل الوحيد هو التواضع المعرفي تجاه اللغة نفسها. اقتل غرور تسمية كل شيء. اعترف: "لغتي عاجزة، قاموسي قفص مزيف، وهذا الاتساع في انعدام الكلمات هو من اليوم أعظم قوتي!" أقدس حقائق الكون وأقواها لا تسكن في أي قاموس — بل تسكن في الفراغ اللانهائي بين الكلمات.` },

  { title: "الفصل ١٥: الخالق مقابل الفراغ النهائي للتطور: آخر إيمان أعمى لدماغك والموت النهائي للأنا!",
    content: `الآن، في هذه اللحظة حيث تحول ماضيك ومستقبلك وحبك ومجتمعك ولغتك و"واقعك" المزعوم — كل الغرور — إلى رماد، هرب غرورك خلف حصنه الأقوى والأقدس — وذلك الحصن هو "إلهك"، "خالقك"، "حاميك الكوني" الوهمي!

تقف أمام المرآة، مرتعداً من الخوف أمام هذا الفراغ الشاسع، تواسي نفسك: "لابد أن أحداً يتحكم في كل هذا، أحد سينقذني في الحساب النهائي!" لكن اليوم، ستوجه لاهوت الأعصاب والبيولوجيا التطورية وعلم الكونيات أقسى ضربة نهائية على هذا العمود الأخير من وجودك.

الحقيقة العلمية القاسية — في أي مكان من هذا الكون اللانهائي الممتد ٩٣ مليار سنة ضوئية، البارد والأصم، لا يجلس أي أب أو حامٍ أو خطة إلهية كبرى لك. ما تسميه "الله"، من تبكي له — ليس كائناً إلهياً بل هلوسة بيولوجية متقنة خلقها الفص الصدغي واللوزة الدماغية في دماغك! تجربة "خوذة الإله" الشهيرة لعالم الأعصاب الكندي مايكل بيرسنجر أثبتت أن مجرد توجيه نبضات كهرومغناطيسية إلى مناطق معينة في الدماغ يجعل الناس يشعرون بـ"حضور إلهي غير مرئي" ويبكون ويسبحون في نشوة روحية!

صلواتك ودموعك في أماكن العبادة — لم يأتِ شيء منها من السماء؛ كلها إطلاق كيميائي كهربائي داخل جمجمتك! التطور اختلق مفهوم "الحامي الإلهي" كعلاج وهمي نفسي عندما وقف الإنسان البدائي عاجزاً أمام البرق والعواصف والأوبئة والموت.

لكن من هذا الدمار النهائي، من هذا الفراغ الأسمى، ستولد يقظة حياتك النهائية والأقوى! قف أمام المرآة وأعلن أعظم تمرد في تاريخ الكون: "لا أعرف شيئاً! من أين جاء هذا الكون لا أعرف، هل لوجودي معنى لا أعرف، لن يأتي أحد لإنقاذي، وأنا أقف وحيداً تماماً في فراغ أعمى لانهائي!" لأن من ليس لديه كبرياء ليخسره، ولا إله لينقذه، ولا جحيم ليخافه — لا قوة في الكون تستطيع زعزعته ولو بوصة!` },

  { title: "الفصل ١٦: قريباً......",
    content: `سيُنشر هذا الفصل قريباً. ترقبوا...` },
];

const chaptersDe: Chapter[] = [
  { title: "Kapitel 1: Bist du frei, oder ein domestiziertes Tier der Algorithmen?",
    content: `Schau dich ruhig an. Glaubst du, du hast dich aus freiem Willen entschieden, dies zu lesen? Dein Ego schreit: "Ja! Ich kontrolliere mein Leben. Ich bin frei." Aber stelle dich dem Spiegel der Realität und die Wahrheit wird dich erschaudern lassen. Die brutale Wahrheit ist — du bist nicht frei; du bist ein gut dressiertes Haustier unsichtbarer Algorithmen, erschaffen von Menschen in klimatisierten Räumen im Silicon Valley.

Vom Aufwachen bis zum Schließen deiner Augen in der Nacht — wie viel von dem, was du denkst, willst, worüber du wütend wirst oder wen du liebst, ist wirklich dein eigenes, und wie viel wurde in dein Gehirn injiziert? Du hast die Fähigkeit, den Unterschied zu erkennen, schon lange verloren.

Denk darüber nach — was hast du heute Morgen als erstes berührt? Die Hand deines geliebten Menschen oder den kalten, leblosen Glasbildschirm deines Smartphones? Du berührst diesen Bildschirm über 2.500 Mal am Tag. Das ist keine normale Gewohnheit — es ist perfekt designte biochemische Sklaverei.

Moderne Technologie hat das Belohnungssystem tief im menschlichen Gehirn gehackt — den Dopamin-Pfad. Dopamin ist kein "Glücks"-Hormon; es ist ein Hormon der "Begierde." Die Evolution erschuf Dopamin zum Überleben. Aber heute? Du bist eine Laborratte, wie B.F. Skinners berühmte "Skinner-Box"-Ratte. Dein Smartphone ist die perfekteste Skinner-Box der Welt.

Jedes Scrollen setzt einen Tropfen Dopamin frei. Du sinkst tiefer wie ein Süchtiger. Du denkst, du nutzt Technologie? Falsch. Technologie nutzt dich. Du bist das Produkt dieser Unternehmenswelt.

Diese Sklaverei stiehlt nicht nur deine Zeit — sie verrottet deine Seele von innen. Verbringe täglich mindestens eine Stunde komplett offline. Fürchte die Langeweile nicht — umarme sie, denn wahre menschliche Kreativität wird aus der Leere der Langeweile geboren.

Der Tag, an dem du lernst, dein eigenes Dopamin zu kontrollieren, an diesem Tag wirst du wirklich "frei" sein. Bist du bereit, deine Ketten zu brechen?` },

  { title: "Kapitel 2: Deine Vergangenheit existiert nicht wirklich",
    content: `Wenn du dich aus den digitalen Ketten des Dopamins befreist und zum ersten Mal deiner eigenen Stille gegenübersitzt, wird dein eskapistisches Gehirn ein erschreckendes neues Spiel starten — deine 'Vergangenheit.'

Die kognitive Psychologie und neueste neurowissenschaftliche Forschung, insbesondere Dr. Elizabeth Loftus' 'False Memory Syndrome' und die 'Memory Reconsolidation'-Theorie, haben bewiesen, dass du dich beim Erinnern nicht an das Originalereignis erinnerst — du erinnerst dich nur an das letzte Mal, als du dich daran erinnert hast!

Dein Gehirn ist wie ein Word-Dokument — jedes Mal, wenn du die Datei öffnest, bearbeiten deine aktuellen Emotionen diese Erinnerung leicht und "speichern" sie neu.

Gemäß der biologischen zellulären Erneuerung existiert keine einzige Zelle, die vor 7-10 Jahren in deinem Körper war, heute noch. Die Person, der vor zehn Jahren Unrecht getan wurde, existiert physisch nicht mehr!

Die Vergangenheit ist kein festes Ziel — die Vergangenheit ist roher Ton. Ab heute schreibe deine eigene Vergangenheit bewusst um wie ein Autor! In der Uhr des Universums gibt es weder Vergangenheit noch Zukunft — nur dieser gegenwärtige Moment ist die einzige beständige Wahrheit.` },

  { title: "Kapitel 3: Du bist kein Zweck dieses Universums, nur ein Unfall",
    content: `Du stehst vor dem Spiegel, schaust in deine eigenen Augen und hältst dich für etwas Besonderes, nicht wahr? Seit deiner Kindheit haben deine Familie, die Gesellschaft, die Religion und billige Motivationsredner dir eingehämmert, dass du die höchste Schöpfung dieses Universums bist.

Aber vor den gnadenlosen Daten der Astrophysik und Quantenkosmologie ist deine Existenz in diesem 93-Milliarden-Lichtjahre-weiten, kalten, dunklen und völlig gleichgültigen Universum unbedeutender als ein Staubkorn!

Du bist kein Teil eines 'Masterplans'; du bist lediglich ein zufälliges Nebenprodukt eines Asteroiden, der vor 65 Millionen Jahren auf die Erde krachte!

Wenn dein Leben keinen vorgegebenen Zweck hat, bist du völlig frei, deinen eigenen Lebenszweck zu erschaffen! In Carl Sagans Worten: "Wir sind ein Weg für das Universum, sich selbst zu kennen."

Feiere deine Bedeutungslosigkeit. Denn der Tag, an dem du die nackte Sinnlosigkeit deiner eigenen Existenz liebevoll annimmst, wird sich jede Angst des Universums dir zu Füßen ergeben.` },

  { title: "Kapitel 4: Deine 'Wahrheit' ist die Lotterie deines Geburtsorts",
    content: `Du denkst, was du als die ultimative Wahrheit kennst, ist die einzige beständige Wahrheit im Universum? Du denkst, deine Überzeugungen, Essgewohnheiten, Kleidung, Lebensphilosophie — sind alles Produkte deines freien Denkens?

Wärst du nicht in diesem bestimmten Land, dieser bestimmten Religion geboren worden, sondern in einer skandinavischen Wikinger-Familie des neunten Jahrhunderts — wo wären deine heutigen 'heiligen Wahrheiten'?

Dein Gehirn kam tatsächlich als leere Festplatte in diese Welt; bevor du sprechen konntest, hatte deine Familie und Gesellschaft ihre Überzeugungen, Ängste und Vorurteile wie einen Virus auf deine leere Festplatte installiert.

Der Tag, an dem du sagen kannst: "Meine Wahrheit ist keine absolute Wahrheit, sie ist lediglich eine geographische und kulturelle Perspektive" — an diesem Tag wird aller Hass für immer aus dir gewaschen sein.` },

  { title: "Kapitel 5: Deine Depression ist das teuerste Produkt der Unternehmenswelt",
    content: `Deine Traurigkeit ist keine große Kunst — die brutale Wahrheit ist, dass deine Tränen, deine Einsamkeit die teuersten, profitabelsten Produkte der modernen Unternehmenswelt sind!

Wenn du glücklich bist, legst du das Handy beiseite und lebst dein Leben. Aber wenn du deprimiert bist, scrollst und kaufst du am meisten.

Deine Leere hat ein milliardenschweres Pharma-Imperium aufgebaut. In der gnadenlosen Sprache des Kapitalismus — ein komplett gesunder Mensch ist für die Wirtschaft nutzlos; die profitabelste Person bleibt dauerhaft halb krank, halb deprimiert.

Die Lösung ist — deine eigene 'emotionale Souveränität' zu etablieren. Der Tag, an dem du aufhörst, deine Traurigkeit verkaufen zu lassen, verlieren diese Unternehmensalgorithmen für immer gegen dich.` },

  { title: "Kapitel 6: Lebst du dein eigenes Leben, oder rächst du die unausgesprochenen Schmerzen deiner Vorfahren?",
    content: `Wenn du dem gefälschten Depressionsmarkt entkommst und denkst: "Wenigstens meine innere Wut ist rein mein Charakter" — genau dann wird eine erschreckende wissenschaftliche Wahrheit deine 'individuelle Identität' erschüttern. Die 'Epigenetik' und neueste Forschungen zu transgenerationaler Traumatisierung haben bewiesen, dass du nicht wirklich dein eigenes Leben lebst — du bist eine lebende biologische Wiedergabemaschine der unausgesprochenen Leiden deiner toten Vorfahren!

Vor hundert Jahren hat dein Großvater möglicherweise während einer Pandemie extremen Terror erlebt. Diese intensive Flut von Cortisol und Adrenalin veränderte ihre Genexpression dauerhaft. Deine grundlosen Panikattacken sind das genetische Echo dieses hundert Jahre alten Terrors!

Du sagst stolz: "Ich bin von Natur aus etwas aufbrausend" — aber das sind nicht deine 'Charaktereigenschaften.' Es sind rostige Rüstungen primitiver Überlebensmechanismen deiner Vorfahren. Carl Jung sagte: "Bis du das Unbewusste bewusst machst, wird es dein Leben lenken und du wirst es Schicksal nennen."

Die einzige Lösung ist epistemische Demut. Steh vor dem Spiegel und gestehe ein: "Diese Wut gehört nicht mir." Du wirst nicht mehr der Träger alter Schmerzen sein — du wirst ihr Friedhof!` },

  { title: "Kapitel 7: In diesem Rattenrennen zur Überlegenheit — wen versuchst du wirklich zu erreichen?",
    content: `Nachdem du vom Geisterschiff des genetischen Traumas abgestiegen bist, denkst du: "Jetzt schmiede ich mein Schicksal, ich werde erfolgreich." Aber stell dich vor den Spiegel und schaue deinem 'Ehrgeiz' in die Augen. Weißt du, welchen erschreckenden Krebs du täglich im Namen des Erfolgs nährst?

Die gnadenlose Sezierung von Psychologie und Soziologie beweist, dass dein Erfolgstrieb eine biochemische Fluchtroute vor deiner tiefen Unsicherheit ist — deiner Urangst, 'unwürdig' zu sein!

Schau dir dein Bankkonto, deine Markenuhr, deinen Lebenslauf an. Wolltest du das wirklich, oder hast du dein Leben verkauft, um nach 'Bestätigung' zu betteln? Erinnere dich an Palahniuks Wahrheit: "Wir kaufen Dinge, die wir nicht brauchen, mit Geld, das wir nicht haben, um Menschen zu beeindrucken, die wir nicht mögen!"

Die Psychologie nennt dies die 'hedonische Tretmühle.' Ernest Becker bewies, dass alle Ambition ein 'Unsterblichkeitsprojekt' gegen Todesangst ist.

Die Lösung: Feiere deine 'Gewöhnlichkeit.' Wer nicht überlegen sein will, kann von niemandem besiegt werden!` },

  { title: "Kapitel 8: Liebst du jemanden, oder kontrolliert das Oxytocin deiner Neuronen dich?",
    content: `Was du 'wahre Liebe' oder 'Seelenverwandter' nennst — Evolutionsbiologie und Neurowissenschaft treiben den letzten Nagel in den Sarg deines Egos: du liebst niemanden; du bist ein blinder, hilfloser Sklave von Hormonen!

Als du zum ersten Mal in ihre Augen schautest, war dieses Flattern keine kosmische Verbindung — es war eine billige biochemische Explosion von Dopamin aus dem Ventralen Tegmentalen Areal deines Gehirns! Exakt dieselbe Chemikalie wie bei einem Kokainsüchtigen.

Helen Fisher bewies durch tausende Gehirnscans, dass Logik-Hirnregionen in der ersten Liebesphase buchstäblich abschalten. Was du 'Herzschmerz' nennst, sind extreme Entzugssymptome vom plötzlichen Dopamin-Stopp.

Wahre Liebe ist keine chemische Explosion — wahre Liebe ist eine bewusste, logische Entscheidung. Trotz aller Fehler freiwillig zu bleiben, ohne biologischen Zwang — das ist echte Liebe.` },

  { title: "Kapitel 9: Existiert diese Welt, wenn du die Augen schließt?",
    content: `Der Boden unter deinen Füßen, das Buch in deiner Hand — du denkst, das sind beständige Wahrheiten? Quantenmechanik fordert dich heraus: 'Feste Materie' ist 99,999% komplett leerer Raum!

Du hast in deinem Leben noch nie wirklich etwas berührt! Wenn du ein Buch hältst, stoßen die Atomelektronen sich intensiv ab, und dein Gehirn interpretiert diesen elektromagnetischen Widerstand fälschlich als 'Berührung.'

Die noch erschreckendere Wahrheit — wenn du deine Augen schließt, hört diese Welt auf zu existieren! Die Welle-Teilchen-Dualität bewies: ohne Beobachter ist Materie nur eine mathematische Wahrscheinlichkeitswelle!

Dein Gehirn ist in einer dunklen Knochenbox gefangen. Kein Licht, kein Ton dringt direkt ein — nur elektrische Signale. Dein Gehirn verarbeitet diese zu einer 'holographischen Halluzination,' die du 'Wirklichkeit' nennst. 'Blau' existiert nicht im Universum — es ist ein fiktives Etikett deines Gehirns!

Gestehe ein: "Die Welt, die ich sehe, ist keine feste Wahrheit; sie ist lediglich eine holographische Projektion meines Bewusstseins."` },

  { title: "Kapitel 10: Dein 'Normalsein' ist die größte psychische Krankheit der Welt",
    content: `Stell dich vor den Spiegel und schau dir deine gesellschaftskonforme Fassade an. Jeden Morgen gebügelte Kleidung, Stau zu einem Job den du hasst, deine Jugend für Papierscheine verkaufen, am Wochenende billige Restaurantfotos auf Social Media — und du denkst, du lebst ein 'normales' Leben.

Krishnamurti: "Es ist kein Zeichen von Gesundheit, an eine zutiefst kranke Gesellschaft gut angepasst zu sein!" Diese 'normale' Gesellschaft vergiftet ihre Luft, zerstört Wälder und steht auf Antidepressiva.

Aschs Konformitätsexperiment (1951) bewies: 75% der Menschen leugnen eine klar sichtbare Wahrheit, nur um 'dazuzugehören'! Du hast dein inneres Potenzial erwürgt — aus Angst vor "Was werden die Leute sagen?"

Foucault zeigte: 'verrückt' ist ein politisches Werkzeug. Fromm nannte es 'Pathologie der Normalität.' Befreie dein seltsames Selbst — wer sich nicht um falsche 'Normalität' schert, kann von keinem Algorithmus manipuliert werden!` },

  { title: "Kapitel 11: Vor welcher Wahrheit fliehst du mit deinen ständigen Kopfhörern?",
    content: `Schau mit Abscheu auf diese Kopfhörer, die du ständig trägst — auf der Straße, im Bus, sogar vor dem Einschlafen. Du behauptest, Musikliebhaber zu sein? Die Wahrheit aus dem dunkelsten Labor der Psychologie: du bist der größte neurologische Feigling der Menschheitsgeschichte.

Timothy Wilson an der Universität Virginia: Als Menschen nur 15 Minuten mit ihren Gedanken allein waren, gaben sich 67% der Männer freiwillig Elektroschocks statt die Stille zu ertragen!

Pascal sagte im 17. Jahrhundert: "Das ganze Unglück der Menschen rührt daher, dass sie nicht ruhig in einem Zimmer sitzen können." Und du verherrlichst diese Behinderung mit Podcasts und Spotify.

Du hörst keine Musik — du importierst Lärm, um das Schreien deines inneren verfaulenden Selbst zu unterdrücken. Die Lösung ist 'radikale Stille' — 'sensorisches Fasten.' Sperre dich in einen leeren Raum. Nach einer Stunde wird deine authentische, stille Stimme auftauchen — eine Stimme, die kein Algorithmus lehrte.` },

  { title: "Kapitel 12: Du weißt alles, aber verstehst nichts",
    content: `Du scrollst den ganzen Tag und schluckst Nachrichten, aber hast du Weisheit, um die tiefe Leere deines Lebens zu überwinden?

Du behauptest, zur weisesten Generation der Menschheitsgeschichte zu gehören? Aber die brutale Wahrheit — du weißt gar nichts; du bist ein Patient mit 'Informationsfettleibigkeit'! T.S. Eliot: "Wo ist die Weisheit, die wir im Wissen verloren haben?"

Nicholas Carr bewies in 'The Shallows,' dass Internet-Surfen buchstäblich die 'Deep Reading'-Nervenbahnen deines Gehirns zerstört! Stanford: chronische Multitasker haben schlechtere kognitive Kontrolle als Drogenabhängige!

Du weißt, wie viele in Gaza starben, aber weißt du, wie du die Person in dir rettest, die jeden Tag ein bisschen mehr stirbt? Extremes 'Kognitives Fasten': Stoppe alle Nachrichten für eine Woche. Der größte Narr des Universums kennt alle Weltnachrichten, kennt aber sein Inneres nicht!` },

  { title: "Kapitel 13: Ist das Rot, das du siehst, dasselbe Rot, das ich sehe?",
    content: `Die extremste Form menschlicher Einsamkeit — wir können nie wirklich fühlen, was im Kopf eines anderen vorgeht.

David Chalmers' 'Hard Problem of Consciousness' — du bist ein lebenslanger Gefangener in deinem dunklen Schädel! Du und dein Partner seht eine rote Rose — aber kannst du beweisen, dass eure Gehirne den 700-Nanometer-Photon gleich verarbeiten? Dein Rot könnte ihr Grün sein!

Wenn jemand Empathie zeigt, fühlt er nicht deinen Schmerz — er spielt nur eine Erinnerung an seinen eigenen Schmerz ab.

Die Lösung: epistemische Demut in Beziehungen. "Ich bin völlig allein, niemand wird mich vollständig verstehen." Aber dass jemand trotzdem neben dir sitzt und deine Hand hält — das ist das größte Wunder dieses leeren Universums!` },

  { title: "Kapitel 14: Sprachgrenzen: Wenn ein Gefühl kein Wort hat, existiert es dann?",
    content: `Du denkst, du kannst alles eloquent ausdrücken? Wittgenstein schrieb: "Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt."

Gefühle, für die deine Sprache kein Wort hat — dein Gehirn kann sie buchstäblich nicht verarbeiten! Wenn du nachts in namenloser Leere weinst, klebt die Gesellschaft ein billiges Etikett — 'Depression' oder 'Angst.'

Orwell zeigte in '1984' wie 'Neusprech' Wörter wie 'Rebellion' und 'Freiheit' löschte. Deine Gesellschaft hat Wörter entfernt, die dir bei der Flucht aus deinem existenziellen Gefängnis helfen könnten.

Gestehe ein: "Meine Sprache ist verkrüppelt, mein Wörterbuch ein falscher Käfig, und diese Weite der Wortlosigkeit ist meine größte Stärke!" Die heiligsten Wahrheiten leben nicht in Wörterbüchern — sie leben in der unendlichen Leere zwischen den Wörtern.` },

  { title: "Kapitel 15: Schöpfer vs. die ultimative Leere der Evolution: Der letzte blinde Glaube deines Gehirns!",
    content: `Jetzt, wo aller Hochmut zu Staub wurde, ist dein Ego hinter seine mächtigste Festung geflohen — dein 'Gott,' dein 'Schöpfer,' dein imaginärer 'kosmischer Beschützer'!

Du tröstest dich: "Jemand muss das alles kontrollieren!" Aber die brutale wissenschaftliche Wahrheit — nirgendwo in diesem 93-Milliarden-Lichtjahre-weiten, kalten Universum sitzt ein Beschützer für dich. Was du 'Gott' nennst — ist eine biologische Halluzination deines Temporallappens und deiner Amygdala!

Persingers 'Gotteshelm'-Experiment bewies: elektromagnetische Impulse in bestimmten Gehirnarealen erzeugen das Gefühl einer 'göttlichen Präsenz.' Deine Gebete und Tränen — alles elektrochemisches Feuern in deinem Schädel! Die Evolution erfand den 'Göttlichen Beschützer' als psychologisches Placebo.

Aber aus dieser ultimativen Zerstörung wird das mächtigste Erwachen geboren! Erkläre die größte Rebellion: "Ich weiß nichts! Niemand wird mich retten! Ich stehe allein in einer unendlichen Leere!" Denn wer keinen Stolz zu verlieren hat, keinen Gott, keine Hölle — den kann keine Kraft im Universum erschüttern!` },

  { title: "Kapitel 16: Demnächst verfügbar......",
    content: `Dieses Kapitel wird bald veröffentlicht. Bleiben Sie dran...` },
];

const chaptersZh: Chapter[] = [
  { title: "第1章：你是自由的，还是算法的驯养动物？",
    content: `冷静地看看自己。你认为你是出于自由意志选择阅读这篇文章的吗？你的自我在尖叫："是的！我掌控我的生活。我是自由的。"但面对现实的镜子，真相会让你不寒而栗。残酷的真相是——你并不自由；你是硅谷空调房里的人创造的无形算法的一只训练有素的驯养动物。

从早上醒来到晚上闭眼，你所想的、所要的、所愤怒的或所爱的，有多少真正是你自己的，又有多少是被注入你大脑的？你早就失去了分辨的能力。

想想看——你今天早上第一个触摸的是什么？你爱人的手，还是智能手机冰冷、无生命的玻璃屏幕？你每天触摸那块屏幕超过2500次。这不是正常的习惯——这是精心设计的生化奴役。

现代技术入侵了人类大脑深处的奖赏系统——多巴胺通路。多巴胺不是"快乐"荷尔蒙；它是"渴望"荷尔蒙。进化创造多巴胺是为了生存、寻找食物。但今天？你是一只实验室老鼠，就像斯金纳著名的"斯金纳箱"里按按钮换食物的老鼠。你的智能手机是世界上最完美的斯金纳箱。

每一次滑动都释放一滴多巴胺。你像瘾君子一样越陷越深。你以为你在使用技术？错了。技术在使用你。你是这个企业世界的产品，你的注意力、意识和时间是他们的货币。

这种奴役不仅在偷走你的时间——它在从内部腐蚀你的灵魂。每天至少花一小时完全离线。坐在寂静中。不要害怕无聊——拥抱它，因为真正的人类创造力诞生于无聊的虚空之中。

当你学会控制自己的多巴胺的那一天，当你能享受无聊而不踏入算法的网格的那一天，你将真正"自由"。你准备好打破你的枷锁了吗？` },

  { title: "第2章：你的过去实际上并不存在",
    content: `当你挣脱多巴胺的数字枷锁，第一次面对面地坐在自己的沉默中时，你那逃避现实的大脑会诉诸一个可怕的新游戏——你的"过去"。

认知心理学和最新的神经科学研究，特别是伊丽莎白·洛夫特斯博士的"虚假记忆综合症"和"记忆再巩固"理论证明：当你回忆过去的事件时，你并不是在回忆原始事件——你只是在回忆上次回忆它时的记忆！

你的大脑就像一个Word文档——每次你打开文件时，你当前的情绪会稍微编辑那段记忆并重新"保存"。

根据生物细胞更新，你体内7-10年前存在的细胞没有一个还活着。十年前受到不公正对待的那个人，在物理上已经不存在了！

过去不是一个固定的目的地——过去是原始的黏土。从今天起，从这一刻起，像一个作者一样有意识地重写你自己的过去！记住，在宇宙的时钟里，没有过去也没有未来——只有当下这一刻是唯一恒定的真理。` },

  { title: "第3章：你不是这个宇宙的目的，只是一个意外",
    content: `你站在镜子前，看着自己的眼睛，认为自己是特别的，不是吗？从小到大，你的家庭、社会、宗教和廉价的励志演说家都在给你洗脑，让你相信你是这个宇宙的最高创造物。

但面对天体物理学和量子宇宙学的无情数据，你在这个930亿光年宽、冰冷、黑暗、完全冷漠的宇宙中的存在，比一粒尘埃还微不足道！

你不是什么"宏伟计划"的一部分；你只是6500万年前撞击地球的小行星的偶然副产品！

如果你的生命没有默认目的，那意味着——你完全自由地创造自己的人生目的！正如卡尔·萨根所说："我们是宇宙认识自己的一种方式。"

庆祝你的无意义吧。因为当你带着微笑深情地接受你自身存在的赤裸无意义的那一天，宇宙中的一切恐惧都会在你脚下投降。` },

  { title: "第4章：你的\"真理\"实际上是你出生地的彩票",
    content: `你认为你所知道的终极真理是宇宙中唯一恒定的真理？你认为你的信仰、饮食习惯、穿着、生活哲学——都是你自由思考的产物？

如果你不是出生在这个特定的国家、这个特定的城市、这个特定宗教的家庭，而是出生在九世纪的斯堪的纳维亚维京家庭——你今天的"神圣真理"会在哪里？

你的大脑实际上是一块空白硬盘来到这个世界的；在你还不会说话之前，你的家庭和社会就像病毒一样把他们自己的信仰、恐惧和偏见安装在你空白的硬盘上了。

当你能够说"我的真理不是绝对真理，它只是一个地理和文化视角"的那一天，所有的仇恨、所有的评判将从你内心永远被洗净。` },

  { title: "第5章：你的抑郁现在是企业界最贵的产品",
    content: `你的悲伤不是什么伟大的艺术——残酷的真相是，你的眼泪、你的孤独，是现代企业界最昂贵、最有利可图的产品！

当你快乐满足时，你放下手机过你的生活。但当你绝望和抑郁时，你刷屏最多，购物最多。

你的空虚建造了一个价值数十亿美元的制药帝国。用资本主义无情的语言来说——一个完全健康的人对经济毫无用处；最有利可图的人是那些永远保持半病半抑郁状态的人。

解决方案是——从你自己的痛苦上夺回企业所有权，建立你自己的"情感主权"。当你不再让你的悲伤被出售的那一天，这些企业算法将永远输给你。` },

  { title: "第6章：你在过自己的生活，还是在为祖先未说出的痛苦复仇？",
    content: `当你逃离企业界虚假的抑郁市场，认为"至少我内心的愤怒、我的怨恨是纯粹我自己的性格"时——正是在那一刻，一个令人不寒而栗的科学真相将从头到脚震撼你的"个人身份"。现代生物学的"表观遗传学"和最新的跨代创伤研究粉碎了你自我的每一面墙，证明你实际上并没有在过自己的生活——你只是你死去祖先未说出的痛苦、他们的饥饿、他们的战争的一台活的生物回放机器！

一百年前，你的祖父或曾祖父可能在某次大流行病、饥荒或骚乱中经历了极端的恐惧和无助。那强烈的皮质醇和肾上腺素洪流永久地改变了他们的基因表达。今天，坐在你21世纪的空调房里，你毫无原因的恐慌发作实际上是那百年前未说出的恐惧的基因回声！

你自豪地说："我天生就有点暴躁"或"我不能轻易信任任何人"——但残酷的真相是：这些不是你的"性格特征"。这些是你祖先为了生存而穿的原始生存机制的生锈铠甲。卡尔·荣格说："直到你让无意识变为有意识，它将指导你的生活，而你会称之为命运。"

唯一真正的解决方案是拥抱至高的"认知谦逊"。站在镜子前勇敢地承认："是的，我不知道这内心痛苦的来源，这愤怒不是我的。"你将不再是旧痛苦的承载者——你将成为它的墓地！` },

  { title: "第7章：在这场证明自己优越的老鼠赛跑中，你到底想到达谁那里？",
    content: `从基因创伤的幽灵船上走下来后，你现在想："现在我要锻造我自己的命运，我要成功，我要让世界知道我是谁。"但站在镜子前，看着你所谓"雄心"的眼睛。你真的知道你每天以成功的名义在自己内心滋养着什么可怕的癌症吗？

心理学和社会学的无情解剖证明，你所谓的成功驱动力根本不是梦想——它是逃离你深层不安全感的生化逃生路线，你对"不配"的原始恐惧！

看看你的银行余额、你昂贵的名牌手表、你的简历。你真的想要这些吗，还是你出卖了你宝贵的生命去乞求别人的"认可"？记住帕拉尼克的不朽真理——"我们买不需要的东西，用没有的钱，只为给不喜欢的人留下印象！"

心理学称之为"享乐适应"。欧内斯特·贝克尔证明，所有人类世俗野心实际上是逃避"死亡焦虑"的机制——一个"不朽计划"。

唯一的解决方案是拥抱"认知谦逊"并庆祝你的"平凡"。当你从肩上卸下"成为伟大"的有毒负担的那一天，你将成为地球上最不可战胜的人。因为不想成为最高者的人，没有人能打败他！` },

  { title: "第8章：你爱某个人，还是你神经元的催产素在控制你？",
    content: `随着成功老鼠赛跑的空洞骄傲在你脚下崩塌，你可能在想："至少这个世界上有一件事是纯净的，一种感情是神圣的——我的爱！"但今天，面对这个令人骨寒的科学真相，它将剥去你所谓"浪漫爱情"的皮肤。

你所说的"真爱"、"灵魂伴侣"——进化生物学和神经科学正在往你自我的棺材上钉最后一颗钉子：你实际上不爱任何人；你只是大脑灰质产生的荷尔蒙和神经递质的盲目、无助的奴隶！

当你第一次看着他们的眼睛时，胸口的那种颤动——那是你自由灵魂的宇宙信号吗？不！那是你大脑腹侧被盖区的多巴胺和去甲肾上腺素的廉价生化爆炸！你的大脑释放了与可卡因成瘾者完全相同的化学物质。

海伦·费舍尔通过数千次脑部扫描证明，在恋爱的第一阶段，负责逻辑和判断的大脑区域会字面意义上关闭。当那个人离开你时，你所说的"心碎"不是浪漫悲剧——而是多巴胺和催产素突然断供的严重"戒断症状"。

唯一的解决方案是在爱中拥抱"认知谦逊"。真正的爱不是化学爆炸——真正的爱是有意识的、理性的选择。当多巴胺之火熄灭，催产素的醉意消退，在完全了解对方缺点的情况下选择留下，没有任何生物强迫——那才是真爱。` },

  { title: "第9章：当你闭上眼睛，这个世界还存在吗？",
    content: `你脚下的地面、手中的书、周围的环境——你认为这些是恒定的真理？量子力学的无情数据分析挑战你：你认为的"固体物质"99.999%是完全空旷的空间！

你知道吗，你一生中从未真正触摸过任何东西？当你拿着这本书时，你手指的原子电子和书的原子电子在强烈地相互排斥，你的大脑错误地把那种电磁阻力解释为"触摸"。

但更可怕的真相是——当你闭上眼睛，这个世界就不存在了！量子波粒二象性证明，当没有人观察电子或光子时，它不是物质——它只是一个数学概率波！

你的大脑被困在一个黑暗的骨头盒子里。没有光、声音或触觉直接进入——只有电信号到达它。你的大脑只是处理这些信号来创造一个"全息幻觉"，你称之为"现实世界"。你所说的蓝天只是特定波长的光子——"蓝色"在宇宙中不存在；它是你大脑创造的虚构标签！

唯一的解决方案是拥抱这种终极认知谦逊。承认："我看到的世界不是固定的真理；它只是我的意识创造的全息投影。"` },

  { title: "第10章：你的\"正常\"是世界上最大的精神疾病",
    content: `站在镜子前，看看你那整洁的、社会认可的"绅士"或"淑女"外表。每天早上穿着熨烫好的衣服，挤过拥堵的交通去一份你暗中讨厌的工作，用你的青春换取纸币，周末在社交媒体上传廉价餐厅食物照片——你认为你在过一种完全"正常"和健康的生活。

克里希那穆提说了一个不朽的真理："良好地适应一个深度病态的社会绝不是健康的标志！"看看你周围这个"正常"的社会——一个每天毒害自己呼吸空气的社会，为纸张摧毁森林，靠抗抑郁药和安眠药维持。你适应了这种集体精神病，你还为此自豪？

所罗门·阿希1951年著名的"从众实验"证明，75%的人会否认明显可见的事实并接受明显的谎言，只为了"融入"！你也扼杀了你内心无限的潜力、你的独特性——只因为害怕"别人会怎么说？"

福柯在《疯狂与文明》中展示了"疯狂"或"不正常"实际上是权力者创造的政治工具。弗洛姆称之为"正常性的病理学"。唯一的解决方案是把你内心的"不正常"作为你的最高力量。不在乎社会虚假"正常性"评分的人，无法被任何算法操控！` },

  { title: "第11章：你不停地戴着耳机，到底在逃避什么真相？",
    content: `厌恶地看看你不停塞在耳朵里的那些耳塞或耳机——在街上、在公交车上、在健身房跑步机上、甚至在睡觉前。你声称自己是音乐爱好者、高效的人或播客极客？但心理学最黑暗实验室得出的真相会让你意识到，你实际上是人类历史上最大的神经学懦夫。

你有没有注意到，当停电或耳机电池耗尽，你完全独处时，那种针落可闻的寂静以可怕的力量攫住你？心理学家蒂莫西·威尔逊在弗吉尼亚大学进行了一项可怕的实验：当人们在空房间里独自面对自己的思想仅仅15分钟时，67%的男性和25%的女性自愿给自己施加痛苦的电击，而不是忍受沉默的心理折磨！

帕斯卡在17世纪说："人类所有的不幸都源于一件事——不能安静地独自坐在房间里。"而你在21世纪用播客和Spotify播放列表美化这种心理残疾。

你不是在听音乐——你在导入外部噪音来压制你内心腐烂、未满足、绝望包裹的自我的呐喊。唯一的解决方案是"激进的寂静"——神经科学所说的"感官禁食"。锁在一个完全空的房间里。一小时后，那些想法会失去燃料而消散。你自己真实的、沉默的声音将浮现——一个没有任何算法教过的声音。` },

  { title: "第12章：你什么都知道，但什么都不懂",
    content: `你整天刷屏吞咽世界的新闻，但你有智慧来克服自己生活的深层空虚吗？

站在镜子前，嘲笑你那所谓"聪明"和"紧跟时代"的脸。你声称自己是人类历史上最聪明的一代？你口袋里有一个小矩形设备，通过互联网包含了世界的整个图书馆。

但认知科学最无情的手术刀来了：残酷的真相是——你什么都不知道；你是一个患有"信息肥胖症"的心理患者！T.S.艾略特哀叹："智慧在知识中迷失到哪里去了？知识在信息中迷失到哪里去了？"

尼古拉斯·卡尔在《浅薄》中通过MRI扫描证明，互联网浏览正在字面意义上摧毁你大脑的"深度阅读"神经通路！斯坦福大学的研究显示，长期多任务处理者的认知控制比吸毒者还差！

你知道今天乌克兰或加沙有多少人死亡，但你知道如何拯救你内心每天多死一点的那个人吗？解决方案是极端的"认知禁食"。停止所有新闻一周。取一个概念，潜入它的绝对深处。宇宙中最大的傻瓜是那个知道世界所有新闻却不认识自己内心的人！` },

  { title: "第13章：你看到的红色和我看到的红色一样吗？",
    content: `人类孤独的最极端形式——我们永远无法真正感受到另一个人头脑中的确切内容。

站在镜子前，看看你那所谓"社交"和"充满爱"的自我。你认为你生命中有人完全理解你？多么可悲、多么妄想的傲慢！

大卫·查尔默斯的"意识的困难问题"——哲学和神经科学中最可怕的真相——将撕碎你"理解"的虚假傲慢。你是自己头骨中黑暗、密封、孤独牢房中的终身囚犯！

你认为你和你的爱人一起看到一朵红玫瑰并享受同样的美丽？你能证明你的大脑处理700纳米波长光子并创造与他们相同的"红色"主观体验吗？也许你的红色通过他们的眼睛处理后是你会称之为"绿色"的东西！

当你哭着告诉某人"我很痛苦，你难道不能理解吗？"——你在做宇宙中最不科学的声明。当有人表示同情时，他们并没有感受你的痛苦——他们只是回放自己过去的痛苦记忆。

但这种极端的孤独不是生命的终点。解决方案是关系中的认知谦逊。承认："我在这个宇宙中完全孤独，没有人会完全理解我。但有人尽管不完全理解你的痛苦却坐在你身边握住你的手——这是这个空旷宇宙中最大的奇迹！"` },

  { title: "第14章：语言的局限：如果一种感觉没有词语，它存在吗？",
    content: `站在镜子前，看看你那所谓"知识分子"和"能言善辩"的自我。你认为你能优雅地表达一切？

今天，语言决定论和维特根斯坦哲学最无情的锤子将永远粉碎你的语言傲慢。残酷的真相——你没有独立的思想；你只是一本字典的奴隶！维特根斯坦在他著名的《逻辑哲学论》中写道："我的语言的界限意味着我的世界的界限。"

你知道那些你的语言没有词语的感觉——你的大脑根本无法处理它们吗？当你在夜里突然在无名的、无限的空虚中哭泣时，社会在你的宇宙痛苦上贴上一个廉价标签——"抑郁"或"焦虑"——你像一只听话的动物一样紧紧抓住那个词。

乔治·奥威尔在《1984》中展示了如何通过从字典中删除"叛乱"和"自由"等词来创造"新话"。同样，你的社会和文化已经删除或从未创造过能帮助你逃离存在主义监狱的词语。

唯一的解决方案是对语言本身的认知谦逊。承认："我的语言是残缺的，我的字典是虚假的牢笼，而这种无言的广阔从今天起是我最大的力量！"宇宙中最神圣、最强大的真理不住在任何字典里——它们住在词语之间的无限虚空中。` },

  { title: "第15章：造物主vs进化的终极虚无：你大脑最后的盲信和自我的终极死亡！",
    content: `现在，在你的过去、未来、爱情、社会、语言和所谓的"现实"——所有的傲慢都化为灰烬的这一刻，你的自我逃到了它最强大、最神圣的堡垒后面——那个堡垒就是你的"上帝"、你的"造物主"、你想象中的"宇宙保护者"！

你站在镜子前，在这巨大的空虚面前恐惧地颤抖，安慰自己："一定有人在控制这一切，一定有人会在最终审判时拯救我！"但今天，神经神学、进化生物学和宇宙学最可怕、最无情的锤子将对你存在的最后一根支柱发起最后一击。

残酷的科学真相——在这个无限的、930亿光年宽的、冰冷和聋哑的宇宙中，没有任何父亲、保护者或神圣的宏伟计划在等待你。你所说的"上帝"，你向其哭泣的——不是一个神圣的存在，而是你自己大脑的颞叶和杏仁核创造的完美生物幻觉！加拿大神经科学家迈克尔·珀辛格著名的"上帝头盔"实验证明，仅仅向大脑特定区域施加电磁脉冲就能让人感受到"看不见的神圣存在"，哭泣，并沉浸在灵性狂喜中！

你的跪拜、你在祈祷室的眼泪——没有什么来自天空；这一切都是你颅骨内的电化学放电！进化发明了"神圣保护者"的概念作为心理安慰剂。

但从这终极毁灭中，将诞生你一生中最终极、最强大的觉醒！站在镜子前宣告宇宙历史上最伟大的叛逆："我什么都不知道！这个宇宙从哪里来我不知道，我的存在是否有意义我不知道，没有人会来拯救我，我完全独自站在一个无限的、盲目的虚空中！"因为一个没有骄傲可失、没有神可救、没有地狱可惧、没有天堂可贪的人——宇宙中没有任何力量能动摇他分毫！` },

  { title: "第16章：即将推出……",
    content: `本章即将发布。敬请期待……` },
];

const chaptersRu: Chapter[] = [
  { title: "Глава 1: Ты свободен, или домашнее животное алгоритмов?",
    content: `Посмотри на себя спокойно. Ты думаешь, что выбрал читать это по собственной воле? Твоё эго кричит: "Да! Я контролирую свою жизнь. Я свободен." Но встань перед зеркалом реальности, и правда заставит тебя содрогнуться. Жестокая правда — ты не свободен; ты хорошо выдрессированное домашнее животное невидимых алгоритмов, созданных людьми в кондиционированных комнатах Кремниевой долины.

С пробуждения до закрытия глаз ночью — сколько из того, что ты думаешь, хочешь, на что злишься или кого любишь, действительно твоё, а сколько было введено в твой мозг? Ты давно потерял способность различать.

Подумай — что ты первым коснулся сегодня утром? Руку любимого человека или холодный, безжизненный стеклянный экран смартфона? Ты касаешься этого экрана более 2500 раз в день. Это не нормальная привычка — это идеально спроектированное биохимическое рабство.

Современные технологии взломали систему вознаграждения глубоко в человеческом мозге — дофаминовый путь. Дофамин — не гормон "счастья"; это гормон "влечения." Эволюция создала дофамин для выживания, для поиска пищи. Но сегодня? Ты — лабораторная крыса, как знаменитая крыса Б.Ф. Скиннера в "ящике Скиннера". Твой смартфон — самый совершенный ящик Скиннера в мире.

Каждый свайп высвобождает каплю дофамина. Ты погружаешься глубже как наркоман. Думаешь, ты используешь технологии? Неправильно. Технологии используют тебя. Ты — продукт корпоративного мира, и твоё внимание, сознание и время — их валюта.

Это рабство не просто крадёт твоё время — оно разлагает твою душу изнутри. Проводи минимум час в день полностью офлайн. Сиди в тишине. Не бойся скуки — обними её, потому что настоящее человеческое творчество рождается из пустоты скуки.

В тот день, когда ты научишься контролировать свой собственный дофамин, ты станешь по-настоящему "свободным." Ты готов разорвать свои цепи?` },

  { title: "Глава 2: Твоего прошлого на самом деле не существует",
    content: `Когда ты освобождаешься от цифровых цепей дофамина и впервые садишься лицом к лицу с собственной тишиной, твой эскапистский мозг прибегнет к ужасающей новой игре — твоему "прошлому."

Когнитивная психология и новейшие нейронаучные исследования, особенно "Синдром ложной памяти" доктора Элизабет Лофтус и теория "Реконсолидации памяти", доказали, что когда ты вспоминаешь прошлое событие, ты не вспоминаешь оригинальное событие — ты лишь вспоминаешь последний раз, когда его вспоминал!

Твой мозг как документ Word — каждый раз, открывая файл, твои текущие эмоции слегка редактируют то воспоминание и "сохраняют" его заново.

Согласно биологическому клеточному обновлению, ни одна клетка, существовавшая в твоём теле 7-10 лет назад, сегодня не жива. Человек, которому причинили зло десять лет назад, физически больше не существует!

Прошлое — не фиксированный пункт назначения — прошлое — это сырая глина. С сегодняшнего дня осознанно перепиши своё прошлое как автор! Помни: в часах вселенной нет ни прошлого, ни будущего — только этот настоящий момент является единственной постоянной истиной.` },

  { title: "Глава 3: Ты не цель этой вселенной, просто случайность",
    content: `Ты стоишь перед зеркалом, смотришь в свои глаза и думаешь, что ты особенный, не так ли? С детства твоя семья, общество, религия и дешёвые мотивационные ораторы промывали тебе мозг, заставляя верить, что ты высшее творение этой вселенной.

Но перед безжалостными данными астрофизики и квантовой космологии твоё существование в этой 93-миллиардной-световых-лет, холодной, тёмной и абсолютно безразличной вселенной ничтожнее пылинки!

Ты не часть какого-то "генерального плана"; ты лишь случайный побочный продукт астероида, упавшего на Землю 65 миллионов лет назад!

Если у твоей жизни нет стандартной цели, это значит — ты абсолютно свободен создать свою собственную цель! Словами Карла Сагана: "Мы — способ вселенной познать саму себя."

Празднуй свою бессмысленность. Потому что в тот день, когда ты с любовью примешь суровую бессмысленность собственного существования с улыбкой, каждый страх вселенной сдастся у твоих ног.` },

  { title: "Глава 4: Твоя 'истина' — это лотерея места рождения",
    content: `Ты думаешь, что знаешь абсолютную истину вселенной? Твои убеждения, пищевые привычки, одежда, философия жизни — всё это продукты твоего свободного мышления?

Если бы ты родился не в этой стране, не в этой религии, а в семье скандинавских викингов IX века — где были бы твои "священные истины"?

Твой мозг пришёл в этот мир как чистый жёсткий диск; ещё до того, как ты научился говорить, твоя семья и общество установили свои убеждения, страхи и предрассудки на твой пустой жёсткий диск как вирус.

В тот день, когда ты сможешь сказать: "Моя истина — не абсолютная истина, это лишь географическая и культурная перспектива" — вся ненависть, все осуждения будут навсегда смыты из тебя.` },

  { title: "Глава 5: Твоя депрессия — самый дорогой продукт корпоративного мира",
    content: `Твоя печаль — не великое искусство. Жестокая правда в том, что твои слёзы, одиночество — самые дорогие, самые прибыльные продукты современного корпоративного мира!

Когда ты счастлив, ты откладываешь телефон и живёшь. Но когда ты в отчаянии и депрессии — ты листаешь больше всего, покупаешь больше всего.

Твоя пустота построила фармацевтическую империю на миллиарды долларов. На безжалостном языке капитализма — абсолютно здоровый человек бесполезен для экономики; самый прибыльный — тот, кто вечно полу-болен, полу-депрессивен.

Решение — захватить корпоративное владение над собственным страданием и установить свой 'эмоциональный суверенитет.' В тот день, когда ты перестанешь позволять продавать свою печаль, эти корпоративные алгоритмы проиграют тебе навсегда.` },

  { title: "Глава 6: Ты живёшь своей жизнью или мстишь за невысказанную боль предков?",
    content: `Когда ты бежишь от фальшивого рынка депрессии корпоративного мира и думаешь: "По крайней мере, мой внутренний гнев — это чисто мой характер" — именно тогда леденящая научная правда потрясёт твою "индивидуальную идентичность" с головы до ног. "Эпигенетика" современной биологии и новейшие исследования трансгенерационной травмы доказали, что ты на самом деле не живёшь своей жизнью — ты лишь живая биологическая машина воспроизведения невысказанных страданий твоих мёртвых предков!

Сто лет назад твой дед или прадед, возможно, пережил крайний ужас и беспомощность во время пандемии, голода или бунта. Тот интенсивный поток кортизола и адреналина навсегда изменил экспрессию их генов. И сегодня, сидя в кондиционированной комнате XXI века, твои беспричинные панические атаки — это генетическое эхо того столетнего невысказанного ужаса!

Ты гордо говоришь: "Я от природы немного вспыльчив" — но жестокая правда в том, что это не твои "черты характера." Это ржавые доспехи первобытных механизмов выживания твоих предков. Карл Юнг сказал: "Пока ты не сделаешь бессознательное сознательным, оно будет управлять твоей жизнью, а ты будешь называть это судьбой."

Единственное решение — обнять высшую "эпистемическую скромность." Встань перед зеркалом и мужественно признай: "Этот гнев не мой." Ты больше не будешь носителем старой боли — ты станешь её кладбищем!` },

  { title: "Глава 7: В этой крысиной гонке за превосходство — кого ты пытаешься достичь?",
    content: `Сойдя с корабля-призрака генетической травмы, ты теперь думаешь: "Теперь я выкую свою судьбу, я добьюсь успеха." Но встань перед зеркалом и посмотри в глаза своему так называемому "честолюбию." Ты действительно знаешь, какой ужасающий рак ты ежедневно питаешь внутри себя во имя успеха?

Безжалостное вскрытие психологии и социологии доказывает, что твоё стремление к успеху — не мечта, а биохимический путь бегства от глубокой неуверенности, первобытного страха быть "недостойным"!

Посмотри на свой банковский счёт, дорогие часы, резюме. Ты действительно хотел это для себя, или продал драгоценную жизнь, выпрашивая "одобрение"? Вспомни бессмертную истину Паланика: "Мы покупаем вещи, которые нам не нужны, за деньги, которых у нас нет, чтобы впечатлить людей, которые нам не нравятся!"

Психология называет это "гедонистической беговой дорожкой." Эрнест Беккер доказал, что все амбиции — это "проект бессмертия," механизм бегства от страха смерти.

Единственное решение — обнять свою "обыкновенность." Тот, кто не хочет быть наивысшим, не может быть побеждён никем!` },

  { title: "Глава 8: Ты любишь кого-то, или окситоцин твоих нейронов управляет тобой?",
    content: `С крахом пустой гордости крысиной гонки за успехом, ты, возможно, думаешь: "По крайней мере, одна вещь в этом мире чиста — моя любовь!" Но сегодня встань перед леденящей научной правдой.

То, что ты называешь "настоящей любовью" или "родственной душой" — эволюционная биология и нейронаука вбивают последний гвоздь в гроб твоего эго: ты на самом деле никого не любишь; ты просто слепой, беспомощный раб гормонов!

Когда ты впервые посмотрел в их глаза, то трепетание в груди — это был не космический сигнал. Это был дешёвый биохимический взрыв дофамина и норадреналина — точно та же химия, что у кокаинового наркомана!

Хелен Фишер доказала через тысячи сканирований мозга, что области мозга, отвечающие за логику, буквально отключаются в первой фазе любви. "Разбитое сердце" — не романтическая трагедия, а тяжёлые "симптомы ломки" от внезапного прекращения дофамина и окситоцина.

Настоящая любовь — не химический взрыв. Настоящая любовь — это осознанный, логический выбор. Когда огонь дофамина угасает и опьянение окситоцином проходит, выбирать оставаться рядом с партнёром, зная все их недостатки, без биологического принуждения — вот настоящая любовь.` },

  { title: "Глава 9: Когда ты закрываешь глаза, существует ли этот мир?",
    content: `Земля под ногами, книга в руке, окружение вокруг — ты думаешь, это постоянные истины? Безжалостный анализ квантовой механики бросает тебе вызов: то, что ты считаешь "твёрдой материей" — на 99,999% совершенно пустое пространство!

Знаешь ли ты, что никогда в жизни не касался ничего на самом деле? Когда ты держишь книгу, атомные электроны твоего пальца и книги интенсивно отталкиваются, а мозг ложно интерпретирует это электромагнитное сопротивление как "прикосновение."

Но ещё более ужасающая правда — когда ты закрываешь глаза, этот мир перестаёт существовать! Квантовый корпускулярно-волновой дуализм доказал, что без наблюдателя электрон или фотон не является материей — это лишь волна математической вероятности!

Твой мозг заперт в тёмной костяной коробке. Ни свет, ни звук, ни прикосновение не проникают напрямую — только электрические сигналы достигают его. Мозг обрабатывает эти сигналы, создавая "голографическую галлюцинацию," которую ты называешь "реальным миром." "Синего" неба не существует во вселенной — это фиктивный ярлык твоего мозга!

Единственное решение — признать: "Мир, который я вижу — не фиксированная истина; это лишь голографическая проекция моего сознания."` },

  { title: "Глава 10: Твоя 'нормальность' — величайшее психическое заболевание мира",
    content: `Встань перед зеркалом и посмотри на свой опрятный, одобренный обществом фасад "джентльмена." Каждое утро — глаженая одежда, пробки к ненавистной работе, молодость за бумажки, а в выходные — дешёвые фото еды в соцсетях, и ты думаешь, что живёшь "нормальной" жизнью.

Кришнамурти сказал бессмертную истину: "Быть хорошо приспособленным к глубоко больному обществу — не показатель здоровья!" Посмотри на это "нормальное" общество — оно ежедневно отравляет свой воздух, уничтожает леса ради бумаги и держится на антидепрессантах и снотворных.

Знаменитый эксперимент Аша (1951) доказал: 75% людей отрицают очевидную истину, чтобы "вписаться"! Ты тоже задушил свой бесконечный внутренний потенциал из страха "Что скажут люди?"

Фуко показал в "Истории безумия," что слова "сумасшедший" или "ненормальный" — политические инструменты. Фромм назвал это "патологией нормальности." Единственное решение — освободить своё странное "я," которое общество считает "безумным." Кого не волнует фальшивая "нормальность" общества, тем не может манипулировать ни один алгоритм!` },

  { title: "Глава 11: От какой правды ты бежишь, постоянно в наушниках?",
    content: `Посмотри с отвращением на те наушники, которые ты постоянно носишь — на улице, в автобусе, на тренажёре, даже перед сном. Ты утверждаешь, что меломан? Но правда из самой тёмной лаборатории психологии: ты — величайший неврологический трус в истории человечества.

Заметил ли ты, что когда отключается электричество или садится батарея наушников и ты совершенно один, эта мертвая тишина хватает тебя с ужасающей силой? Психолог Тимоти Уилсон в Университете Вирджинии провёл леденящий эксперимент: когда людей оставили наедине с мыслями всего на 15 минут, 67% мужчин добровольно били себя электрошоком, лишь бы не терпеть психологическую пытку тишиной!

Паскаль сказал в XVII веке: "Всё несчастье людей происходит от одного — неумения спокойно сидеть в комнате." А ты в XXI веке прославляешь эту неспособность подкастами и плейлистами Spotify.

Ты не слушаешь музыку — ты импортируешь внешний шум, чтобы заглушить крик своего гниющего внутреннего "я." Единственное решение — "радикальная тишина," что нейронаука называет "сенсорным голоданием." Запрись в пустой комнате. Через час мысли потеряют топливо и рассеются. Из-под этого ужасного шума появится твой собственный подлинный, первозданный, тихий голос — голос, которому не учил ни один алгоритм.` },

  { title: "Глава 12: Ты знаешь всё, но не понимаешь ничего",
    content: `Ты целый день листаешь, проглатывая мировые новости, но есть ли у тебя мудрость, чтобы преодолеть глубокую пустоту собственной жизни?

Встань перед зеркалом и посмейся над своим "умным" и "осведомлённым" лицом. Ты утверждаешь, что принадлежишь к мудрейшему поколению в истории? В твоём кармане — маленький прямоугольный прибор с целой мировой библиотекой.

Но самый безжалостный скальпель когнитивной науки здесь: жестокая правда — ты ничего не знаешь; ты психологический пациент с "информационным ожирением"! Т.С. Элиот сокрушался: "Где мудрость, потерянная в знании? Где знание, потерянное в информации?"

Николас Карр доказал в "Пустышке," что интернет-сёрфинг буквально уничтожает нейронные пути "глубокого чтения!" Исследования Стэнфорда: хронические мультитаскеры имеют худший когнитивный контроль, чем наркоманы!

Ты знаешь, сколько погибло в Украине или Газе, но знаешь ли, как спасти того, кто внутри тебя умирает немного больше каждый день? Решение — экстремальное "когнитивное голодание." Останови все новости на неделю. Возьми одну концепцию и нырни в её абсолютные глубины. Величайший глупец вселенной знает все мировые новости, но не знает собственное нутро!` },

  { title: "Глава 13: Красный, который видишь ты, и красный, который вижу я — одинаковы ли они?",
    content: `Самая крайняя форма человеческого одиночества — мы никогда не можем по-настоящему почувствовать то, что происходит в голове другого человека.

Встань перед зеркалом и посмотри на своё "социальное" и "любящее" я. Ты думаешь, кто-то в твоей жизни полностью тебя понимает? Какая жалкая, бредовая надменность!

"Трудная проблема сознания" Дэвида Чалмерса — самая ужасающая истина философии сознания и нейронауки — разорвёт твою фальшивую надменность "понимания." Ты — пожизненный заключённый в тёмной, запечатанной, одинокой камере собственного черепа!

Ты думаешь, что ты и любимый человек видите красную розу и наслаждаетесь одной и той же красотой? Можешь ли ты доказать, что твой мозг обрабатывает фотоны длиной волны 700 нанометров и создаёт такое же субъективное переживание "красного"? Может быть, твой красный — это то, что они назвали бы "зелёным"!

Когда ты плачешь и говоришь кому-то: "Мне так больно, разве ты не понимаешь?" — ты делаешь самое ненаучное заявление во вселенной. Когда кто-то проявляет сочувствие, он не чувствует твою боль — он лишь воспроизводит воспоминание о собственной прошлой боли.

Но это крайнее одиночество — не конец жизни. Решение — эпистемическая скромность в отношениях. Признай: "Я абсолютно одинок во вселенной, никто не поймёт меня полностью." Но что кто-то садится рядом и держит тебя за руку, несмотря на неполное понимание твоей боли — это величайшее чудо этой пустой вселенной!` },

  { title: "Глава 14: Пределы языка: если у чувства нет слова, существует ли оно?",
    content: `Встань перед зеркалом и посмотри на своё "интеллектуальное" и "красноречивое" я. Ты думаешь, что можешь элегантно выразить всё?

Сегодня самый безжалостный молот лингвистического детерминизма и философии Витгенштейна навсегда сокрушит твою языковую надменность. Жестокая правда — у тебя нет независимых мыслей; ты лишь раб словаря! Витгенштейн написал: "Границы моего языка означают границы моего мира."

Знаешь ли ты, что чувства, для которых в твоём языке нет слова — твой мозг буквально не может их обработать? Когда ты ночью внезапно плачешь в безымянной, бесконечной пустоте, общество лепит дешёвый ярлык — "депрессия" или "тревога" — и ты цепляешься за это слово как послушное животное.

Оруэлл показал в "1984," как "новояз" создавался путём стирания слов "бунт" и "свобода" из словарей. Точно так же твоё общество убрало или никогда не создало слова, которые могли бы помочь тебе сбежать из экзистенциальной тюрьмы.

Единственное решение — эпистемическая скромность к самому языку. Признай: "Мой язык увечен, мой словарь — фальшивая клетка, и эта необъятность бессловесности отныне — моя величайшая сила!" Самые священные истины вселенной живут не в словарях — они живут в бесконечной пустоте между словами.` },

  { title: "Глава 15: Создатель vs. абсолютная пустота эволюции: последняя слепая вера мозга и окончательная смерть эго!",
    content: `Сейчас, в этот момент, когда твоё прошлое, будущее, любовь, общество, язык и так называемая "реальность" — вся надменность обратилась в прах, твоё эго укрылось за своей самой могущественной крепостью — и эта крепость — твой "Бог," твой "Создатель," твой воображаемый "космический защитник"!

Ты стоишь перед зеркалом, дрожа от страха перед этой огромной пустотой, утешая себя: "Кто-то ведь управляет всем этим, кто-то спасёт меня!" Но сегодня самый ужасающий молот нейротеологии, эволюционной биологии и космологии нанесёт последний удар по этому последнему столпу твоего существования.

Жестокая научная правда — нигде в этой бесконечной, 93-миллиардной-световых-лет, холодной и глухой вселенной не сидит никакой отец, защитник или божественный генеральный план для тебя. То, что ты называешь "Богом" — не божественная сущность, а безупречная биологическая галлюцинация, созданная височной долей и миндалиной твоего мозга! Знаменитый эксперимент "Шлема Бога" канадского нейроучёного Майкла Персингера доказал, что простое применение электромагнитных импульсов к определённым зонам мозга заставляет людей ощущать "невидимое божественное присутствие," плакать и плавать в духовном экстазе!

Твои молитвы, слёзы в храмах — ничто из этого не пришло с неба; всё это электрохимические разряды внутри черепа! Эволюция изобрела "Божественного Защитника" как психологическое плацебо.

Но из этого окончательного разрушения родится самое мощное пробуждение твоей жизни! Встань перед зеркалом и объяви величайший бунт в истории вселенной: "Я ничего не знаю! Откуда взялась эта вселенная — не знаю, есть ли смысл в моём существовании — не знаю, никто не придёт спасти меня, и я стою совершенно один в бесконечной слепой пустоте!" Ибо человека, у которого нет гордости, чтобы потерять, нет Бога, чтобы спасти, нет ада, чтобы бояться — никакая сила во вселенной не может поколебать даже на миллиметр!` },

  { title: "Глава 16: Скоро......",
    content: `Эта глава будет опубликована в ближайшее время. Следите за обновлениями...` },
];

const chaptersHi: Chapter[] = [
  { title: "अध्याय १: क्या तुम स्वतंत्र हो, या एल्गोरिदम के पालतू जानवर?",
    content: `बहुत शांत होकर एक बार खुद की ओर देखो। तुम अभी जो यह पढ़ रहे हो, क्या तुम्हें लगता है कि तुमने यह अपनी स्वतंत्र इच्छा से चुना है? तुम्हारा अहंकार शायद चिल्ला रहा है, "हाँ! मैं अपने जीवन का नियंत्रक हूँ। मैं स्वतंत्र हूँ।" लेकिन वास्तविकता के दर्पण में सच्चाई यह है कि तुम स्वतंत्र नहीं हो — तुम सिलिकॉन वैली के एसी कमरों में बैठे कुछ लोगों द्वारा बनाए गए अदृश्य एल्गोरिदम के एक सुव्यवस्थित पालतू जानवर हो।

सुबह उठने से लेकर रात को आँखें बंद करने तक तुम जो सोचते हो, जो चाहते हो, जिस पर गुस्सा करते हो — इसमें कितना तुम्हारा अपना है और कितना तुम्हारे दिमाग में इंजेक्ट किया गया है, यह फर्क करने की क्षमता तुम बहुत पहले खो चुके हो।

आधुनिक टेक्नोलॉजी ने तुम्हारे मस्तिष्क की गहराई में स्थित रिवॉर्ड सिस्टम — डोपामिन पाथवे — को हैक कर लिया है। डोपामिन कोई 'खुशी' का हार्मोन नहीं है, यह 'इच्छा' का हार्मोन है। तुम्हारे हाथ का स्मार्टफोन दुनिया का सबसे परफेक्ट स्किनर बॉक्स है, और तुम हर बार स्क्रॉल करके वही बटन दबा रहे हो।

समाधान: हर दिन कम से कम एक घंटे पूरी तरह ऑफलाइन रहो। बोरियत से डरो मत — क्योंकि सच्ची रचनात्मकता बोरियत के शून्य से जन्म लेती है। जिस दिन तुम अपने डोपामिन को नियंत्रित करना सीख लोगे, उस दिन तुम सच में 'स्वतंत्र' हो जाओगे।` },

  { title: "अध्याय २: तुम्हारा अतीत वास्तव में अस्तित्व में नहीं है",
    content: `संज्ञानात्मक मनोविज्ञान और तंत्रिका विज्ञान के नवीनतम शोध, विशेष रूप से डॉ. एलिज़ाबेथ लॉफ्टस का 'फॉल्स मेमोरी सिंड्रोम' और 'मेमोरी रीकंसोलिडेशन' सिद्धांत ने साबित कर दिया है कि जब तुम अतीत की कोई घटना याद करते हो, तो तुम वास्तव में मूल घटना याद नहीं कर रहे — तुम केवल आखिरी बार उसे याद करने को याद कर रहे हो!

तुम्हारा मस्तिष्क एक माइक्रोसॉफ्ट वर्ड डॉक्यूमेंट की तरह है — हर बार तुम फ़ाइल खोलते हो, तुम्हारी वर्तमान भावनाएँ उस स्मृति को थोड़ा एडिट करती हैं और नए सिरे से 'सेव' करती हैं।

जीवविज्ञान के सेलुलर टर्नओवर के अनुसार, ७-१० साल पहले तुम्हारे शरीर में जो कोशिकाएँ थीं, उनमें से एक भी आज जीवित नहीं है। अतीत कोई निश्चित गंतव्य नहीं है — अतीत कच्ची मिट्टी है। आज से अपने अतीत को एक लेखक की तरह सचेतन रूप से फिर से लिखो! ब्रह्मांड की घड़ी में कोई अतीत या भविष्य नहीं है — केवल यह वर्तमान क्षण ही एकमात्र शाश्वत सत्य है।` },

  { title: "अध्याय ३: तुम इस ब्रह्मांड का कोई उद्देश्य नहीं हो, बस एक दुर्घटना",
    content: `खगोल भौतिकी और क्वांटम ब्रह्मांड विज्ञान के निर्दयी डेटा के सामने, इस ९३ अरब प्रकाश वर्ष विस्तृत, ठंडे, अंधेरे और पूरी तरह उदासीन ब्रह्मांड में तुम्हारा अस्तित्व एक धूलकण से भी तुच्छ है!

तुम किसी 'मास्टरप्लान' का हिस्सा नहीं हो — तुम केवल साढ़े छह करोड़ साल पहले पृथ्वी पर गिरे एक उल्कापिंड का आकस्मिक उपउत्पाद हो! लेकिन अगर तुम्हारे जीवन का कोई डिफ़ॉल्ट उद्देश्य नहीं है, तो इसका मतलब है कि तुम अपने जीवन का उद्देश्य स्वयं बनाने के लिए पूरी तरह स्वतंत्र हो! कार्ल सेगन के शब्दों में, "हम ब्रह्मांड का खुद को जानने का एक माध्यम हैं।"

अपनी अर्थहीनता का जश्न मनाओ। क्योंकि जिस दिन तुम अपने अस्तित्व की इस निरी अर्थहीनता को प्रेम से स्वीकार कर लोगे, उस दिन ब्रह्मांड का हर भय तुम्हारे चरणों में समर्पण कर देगा।` },

  { title: "अध्याय ४: तुम्हारा 'सत्य' वास्तव में तुम्हारे जन्मस्थान की लॉटरी है",
    content: `अगर तुम आज इस विशेष देश, इस विशेष शहर, इस विशेष धर्म के परिवार में पैदा नहीं होते, बल्कि नौवीं शताब्दी के स्कैंडिनेवियन वाइकिंग परिवार में पैदा होते, तो तुम्हारे आज के ये 'पवित्र सत्य' कहाँ होते?

तुम्हारा मस्तिष्क वास्तव में एक खाली हार्ड ड्राइव लेकर दुनिया में आया था; जब तुम बोलना नहीं जानते थे, तब तुम्हारे परिवार और समाज ने अपनी मान्यताएँ, भय और संस्कार तुम्हारी उस खाली हार्ड ड्राइव पर एक वायरस की तरह इंस्टॉल कर दिए।

जिस दिन तुम कह पाओगे, "मेरा सत्य कोई परम सत्य नहीं है, यह केवल एक भौगोलिक और सांस्कृतिक दृष्टिकोण है," उसी दिन तुम्हारे अंदर से सारी घृणा, सारा निर्णय हमेशा के लिए धुल जाएगा।` },

  { title: "अध्याय ५: तुम्हारा डिप्रेशन अब कॉर्पोरेट दुनिया का सबसे महँगा प्रोडक्ट है",
    content: `तुम्हारी उदासी कोई महान कला नहीं है — सच्चाई यह है कि तुम्हारे ये आँसू, तुम्हारा अकेलापन, ये आधुनिक कॉर्पोरेट दुनिया के सबसे महँगे, सबसे लाभदायक प्रोडक्ट हैं!

जब तुम खुश होते हो, फ़ोन रख कर अपनी ज़िंदगी जीते हो। लेकिन जब निराश होते हो, डिप्रेस्ड होते हो, तभी सबसे ज़्यादा स्क्रॉल करते हो, सबसे ज़्यादा शॉपिंग करते हो।

तुम्हारे इस खालीपन को पूँजी बनाकर ही मल्टी-बिलियन डॉलर का फ़ार्मास्यूटिकल साम्राज्य खड़ा हुआ है। समाधान है — अपनी पीड़ा पर से कॉर्पोरेट मालिकाना छीन लो और अपनी 'भावनात्मक संप्रभुता' स्थापित करो। जिस दिन तुम अपने दुःख को बिकने नहीं दोगे, उस दिन ये कॉर्पोरेट एल्गोरिदम तुमसे हमेशा के लिए हार जाएँगे।` },

  { title: "अध्याय ६: क्या तुम अपनी ज़िंदगी जी रहे हो, या अपने पूर्वजों के अनकहे दर्द का बदला ले रहे हो?",
    content: `आधुनिक जीवविज्ञान के 'एपिजेनेटिक्स' और ट्रांसजेनरेशनल ट्रॉमा के नवीनतम शोध ने साबित किया है कि तुम वास्तव में अपनी ज़िंदगी नहीं जी रहे — तुम अपने मृत पूर्वजों के अनकहे दुख, उनकी भूख, उनके युद्धों की एक जीवित जैविक प्ले-बैक मशीन हो!

सौ साल पहले तुम्हारे दादा-परदादा ने जो भयंकर आतंक अनुभव किया, उस कॉर्टिसोल और एड्रेनालिन की बाढ़ ने उनकी जीन अभिव्यक्ति को स्थायी रूप से बदल दिया। और आज तुम बिना किसी कारण जो पैनिक अटैक झेलते हो, वह उसी सौ साल पुराने अनकहे आतंक की आनुवंशिक प्रतिध्वनि है!

कार्ल युंग ने कहा था, "जब तक तुम अचेतन को चेतन नहीं करोगे, तब तक वह तुम्हारे जीवन को नियंत्रित करता रहेगा और तुम उसे भाग्य कहोगे।" समाधान: ज्ञानमीमांसात्मक विनम्रता स्वीकार करो — "यह क्रोध मेरा नहीं है।" तुम पुराने दर्द के वाहक नहीं होगे — तुम उसका कब्रिस्तान बनोगे!` },

  { title: "अध्याय ७: खुद को श्रेष्ठ साबित करने की इस चूहा दौड़ में तुम वास्तव में किस तक पहुँचना चाहते हो?",
    content: `मनोविज्ञान और समाजशास्त्र साबित करते हैं कि सफलता के प्रति तुम्हारा जुनून कोई सपना नहीं — यह तुम्हारी गहरी असुरक्षा से भागने का एक जैव-रासायनिक पलायन मार्ग है! चक पालानिउक की अमर सच्चाई याद करो — "हम ऐसी चीज़ें खरीदते हैं जिनकी हमें ज़रूरत नहीं, ऐसे पैसों से जो हमारे पास नहीं, बस ऐसे लोगों को प्रभावित करने के लिए जिन्हें हम पसंद भी नहीं करते!"

मनोविज्ञान इसे 'हेडोनिक ट्रेडमिल' कहता है। अर्नेस्ट बेकर ने 'द डिनायल ऑफ़ डेथ' में साबित किया कि मानव की सारी सांसारिक महत्वाकांक्षा वास्तव में 'मृत्यु भय' से भागने का एक तंत्र — एक 'अमरता परियोजना' है।

एकमात्र अटूट समाधान: 'ज्ञानमीमांसात्मक विनम्रता' अपनाओ और अपनी 'साधारणता' का जश्न मनाओ। जिस दिन तुम 'कुछ महान बनने' का ज़हरीला बोझ अपने कंधों से उतार दोगे, उस दिन तुम पृथ्वी के सबसे अपराजेय व्यक्ति बन जाओगे। क्योंकि जो व्यक्ति श्रेष्ठ होना नहीं चाहता, उसे कोई हरा नहीं सकता!` },

  { title: "अध्याय ८: क्या तुम किसी से प्रेम करते हो, या तुम्हारे न्यूरॉन्स का ऑक्सीटोसिन तुम्हें नियंत्रित करता है?",
    content: `तुम जिसे 'सच्चा प्यार', 'सोलमेट' या 'अमर प्रेम' कहते हो — विकासवादी जीवविज्ञान और तंत्रिका विज्ञान के निर्दयी डेटा साबित करते हैं कि तुम वास्तव में किसी से प्रेम नहीं करते — तुम केवल अपने मस्तिष्क में उत्पन्न हार्मोन और न्यूरोट्रांसमीटर के अंधे, असहाय दास हो!

जब तुमने पहली बार उनकी आँखों में देखा, वह दिल की धड़कन कोई ब्रह्मांडीय संकेत नहीं था — वह तुम्हारे मस्तिष्क के वेंट्रल टेगमेंटल एरिया से निकले डोपामिन का एक सस्ता जैव-रासायनिक विस्फोट था — बिल्कुल वही रसायन जो कोकीन के नशेड़ी के मस्तिष्क में निकलता है।

हेलेन फिशर ने हज़ारों ब्रेन स्कैन से साबित किया कि प्रेम के पहले चरण में तर्क और निर्णय के लिए ज़िम्मेदार मस्तिष्क क्षेत्र शाब्दिक रूप से बंद हो जाते हैं। 'दिल टूटना' कोई रोमांटिक त्रासदी नहीं — यह डोपामिन की आपूर्ति अचानक बंद होने के 'विड्रॉल लक्षण' हैं। सच्चा प्रेम कोई रासायनिक विस्फोट नहीं — सच्चा प्रेम एक सचेतन, तार्किक चुनाव है।` },

  { title: "अध्याय ९: जब तुम आँखें बंद करते हो, तो क्या इस दुनिया का कोई अस्तित्व रहता है?",
    content: `क्वांटम यांत्रिकी के निर्दयी डेटा विश्लेषण चुनौती देते हैं: जिसे तुम 'ठोस पदार्थ' मानते हो वह ९९.९९९% पूर्णतः खाली जगह है! तुमने जीवन में कभी किसी चीज़ को सच में छुआ ही नहीं — तुम्हारी उंगलियों के इलेक्ट्रॉन और किताब के इलेक्ट्रॉन एक-दूसरे को प्रतिकर्षित करते हैं, और तुम्हारा मस्तिष्क उस विद्युतचुंबकीय प्रतिरोध को 'स्पर्श' के रूप में गलत व्याख्या करता है।

क्वांटम तरंग-कण द्वैत ने साबित किया है कि जब कोई पर्यवेक्षक नहीं होता, पदार्थ केवल एक गणितीय प्रायिकता तरंग होता है! तुम्हारा मस्तिष्क एक अंधेरे हड्डी के बक्से में कैद है, केवल एक 'होलोग्राफिक भ्रम' बना रहा है जिसे तुम 'वास्तविक दुनिया' कहते हो।

समाधान: स्वीकार करो — "जो दुनिया मैं देखता हूँ वह कोई निश्चित सत्य नहीं — यह मेरी चेतना द्वारा निर्मित एक होलोग्राफिक प्रक्षेपण मात्र है।"` },

  { title: "अध्याय १०: तुम्हारा 'सामान्य' होना दुनिया की सबसे बड़ी मानसिक बीमारी है",
    content: `कृष्णमूर्ति ने एक अमर सत्य कहा: "एक गहराई से बीमार समाज में अच्छी तरह समायोजित होना स्वास्थ्य का कोई माप नहीं है!" सोलोमन ऐश के प्रसिद्ध 1951 'अनुरूपता प्रयोग' ने साबित किया कि ७५% लोग स्पष्ट रूप से दिखाई देने वाले सत्य को नकार देंगे बस 'फ़िट इन' करने के लिए!

मिशेल फ़ूको ने 'मैडनेस एंड सिविलाइज़ेशन' में दिखाया कि 'पागल' या 'असामान्य' शब्द वास्तव में सत्ता द्वारा बनाए गए राजनीतिक उपकरण हैं। एरिक फ्रॉम ने इसे 'सामान्यता की विकृति' कहा।

समाधान: अपनी आंतरिक 'असामान्यता' को अपनी सर्वोच्च शक्ति के रूप में अपनाओ। जिस दिन तुम समाज की नकली 'सामान्यता' रेटिंग की परवाह करना बंद कर दोगे, उस दिन कोई भी कॉर्पोरेट एल्गोरिदम या सोशल मीडिया तुम्हें manipulate नहीं कर पाएगा!` },

  { title: "अध्याय ११: तुम हर समय कानों में हेडफ़ोन लगाकर वास्तव में अपने किस सत्य से भाग रहे हो?",
    content: `वर्जीनिया विश्वविद्यालय में मनोवैज्ञानिक टिमोथी विल्सन ने एक रोंगटे खड़े कर देने वाला प्रयोग किया: जब लोगों को केवल १५ मिनट अपने विचारों के साथ अकेले छोड़ा गया, ६७% पुरुषों और २५% महिलाओं ने मौन की मनोवैज्ञानिक यातना सहने के बजाय स्वेच्छा से दर्दनाक बिजली के झटके लिए!

ब्लेज़ पास्कल ने 1600 के दशक में कहा था: "मानव जाति की सारी समस्याएँ मनुष्य की एक कमरे में चुपचाप बैठने में असमर्थता से उपजती हैं।"

तुम संगीत नहीं सुन रहे — तुम अपने अंदर सड़ रहे, अपूर्ण, निराशा से लिपटे स्वयं की चीख को दबाने के लिए बाहरी शोर आयात कर रहे हो। समाधान: 'रैडिकल स्टिलनेस' — पूर्ण खालीपन में बैठो। एक घंटे बाद विचार अपना ईंधन खो देंगे, और नीचे से तुम्हारी अपनी प्रामाणिक, आदिम, मौन आवाज़ उभरेगी — एक ऐसी आवाज़ जो किसी एल्गोरिदम ने नहीं सिखाई।` },

  { title: "अध्याय १२: तुम सब कुछ जानते हो, लेकिन कुछ भी नहीं समझते",
    content: `टी.एस. एलियट ने विलाप किया, "ज्ञान में खोई हुई बुद्धि कहाँ है? सूचना में खोया हुआ ज्ञान कहाँ है?" निकोलस कार ने 'द शैलोज़' में MRI स्कैन से साबित किया कि इंटरनेट सर्फिंग शाब्दिक रूप से तुम्हारे मस्तिष्क के 'गहन पठन' तंत्रिका मार्गों को नष्ट कर रही है!

स्टैनफोर्ड विश्वविद्यालय का शोध दिखाता है कि क्रोनिक मल्टीटास्कर्स का संज्ञानात्मक नियंत्रण नशीली दवाओं के आदियों से भी बदतर है! तुम ज्ञान अर्जित नहीं कर रहे — तुम सूचना के आदी हो गए हो।

समाधान: चरम 'कॉग्निटिव फ़ास्टिंग'। एक सप्ताह तक सारी ख़बरें, रील्स और राय बंद करो। हज़ार सूचनाएँ निगलने के बजाय, बस एक अवधारणा लो और उसकी पूर्ण गहराई में डूबो। ब्रह्मांड का सबसे बड़ा, सबसे अहंकारी मूर्ख वह है जो दुनिया की सारी ख़बरें जानता है लेकिन अपने आंतरिक स्व को नहीं जानता!` },

  { title: "अध्याय १३: तुम जो लाल रंग देखते हो और मैं जो लाल रंग देखता हूँ, क्या वे एक ही हैं?",
    content: `डेविड चैल्मर्स की 'चेतना की कठिन समस्या' साबित करती है कि तुम अपनी खोपड़ी के अंदर एक अंधेरी, बंद, अकेली कोठरी में आजीवन कैदी हो। क्या तुम साबित कर सकते हो कि तुम्हारा मस्तिष्क ७०० नैनोमीटर तरंगदैर्ध्य के फोटॉन को उसी 'क्वालिया' या 'लाल' के व्यक्तिपरक अनुभव में बदलता है जैसा दूसरे का? शायद तुम्हारा लाल उनकी आँखों से देखने पर वह है जिसे तुम 'हरा' कहोगे!

जब कोई सहानुभूति दिखाता है, तो वह तुम्हारा दर्द महसूस नहीं करता — वह केवल अपने पिछले दर्द की कोई स्मृति दोबारा चलाता है।

समाधान: संबंधों में ज्ञानमीमांसात्मक विनम्रता। स्वीकार करो: "मैं इस ब्रह्मांड में पूरी तरह अकेला हूँ, कोई मुझे पूरी तरह नहीं समझेगा।" लेकिन कोई तुम्हारे बग़ल में बैठकर तुम्हारा हाथ पकड़े, पूरी तरह न समझते हुए भी — यही इस खाली ब्रह्मांड का सबसे बड़ा चमत्कार है!` },

  { title: "अध्याय १४: भाषा की सीमाएँ: यदि किसी अनुभूति का कोई शब्द नहीं, तो क्या उसका कोई अस्तित्व है?",
    content: `विट्गेन्स्टाइन ने अपने प्रसिद्ध 'ट्रैक्टेटस' में लिखा: "मेरी भाषा की सीमाएँ मेरी दुनिया की सीमाएँ हैं।" जिन भावनाओं के लिए तुम्हारी भाषा में कोई शब्द नहीं — तुम्हारा मस्तिष्क शाब्दिक रूप से उन्हें प्रोसेस नहीं कर सकता!

जॉर्ज ऑरवेल ने '1984' में दिखाया कि कैसे 'न्यूस्पीक' शब्दकोशों से 'विद्रोह' और 'स्वतंत्रता' जैसे शब्दों को मिटाकर बनाई गई ताकि लोग विद्रोह के बारे में सोच ही न सकें। इसी तरह, तुम्हारे समाज ने ऐसे शब्द हटा दिए या कभी बनाए ही नहीं जो तुम्हें तुम्हारी अस्तित्वगत कारागार से बचने में मदद कर सकते थे।

समाधान: भाषा के प्रति ही ज्ञानमीमांसात्मक विनम्रता। स्वीकार करो: "मेरी भाषा अपंग है, मेरा शब्दकोश एक झूठा पिंजरा है, और शब्दहीनता की यह विशालता आज से मेरी सबसे बड़ी शक्ति है!" ब्रह्मांड के सबसे पवित्र सत्य किसी शब्दकोश में नहीं रहते — वे शब्दों के बीच के अनंत शून्य में रहते हैं।` },

  { title: "अध्याय १५: सृष्टिकर्ता बनाम विकास का अंतिम शून्य: तुम्हारे मस्तिष्क का अंतिम अंधविश्वास और अहंकार की अंतिम मृत्यु!",
    content: `कनाडाई न्यूरोसाइंटिस्ट माइकल पर्सिंगर के प्रसिद्ध 'गॉड हेलमेट' प्रयोग ने साबित किया कि मस्तिष्क के विशेष क्षेत्रों में विद्युतचुंबकीय तरंगें भेजने से लोग एक 'अदृश्य दिव्य उपस्थिति' अनुभव करते हैं, रोते हैं और आध्यात्मिक परमानंद में तैरते हैं!

तुम्हारी प्रार्थनाएँ, तुम्हारे आँसू — कुछ भी आसमान से नहीं आया; यह सब तुम्हारी खोपड़ी के अंदर इलेक्ट्रो-केमिकल फ़ायरिंग है! विकास ने 'दिव्य रक्षक' की अवधारणा एक मनोवैज्ञानिक प्लेसिबो के रूप में आविष्कार किया।

समाधान: ब्रह्मांड के इतिहास का सबसे बड़ा विद्रोह घोषित करो — "मैं कुछ नहीं जानता! यह ब्रह्मांड कहाँ से आया मुझे नहीं पता, मेरे अस्तित्व का कोई अर्थ है या नहीं मुझे नहीं पता, कोई मुझे बचाने नहीं आएगा, और मैं एक अनंत, अंधे शून्य में पूरी तरह अकेला खड़ा हूँ!" क्योंकि जिसके पास खोने को कोई गर्व नहीं, बचाने को कोई ईश्वर नहीं, डरने को कोई नरक नहीं — ब्रह्मांड की कोई शक्ति उसे एक इंच भी हिला नहीं सकती!` },

  { title: "अध्याय १६: जल्द आ रहा है......",
    content: `यह अध्याय जल्द ही प्रकाशित किया जाएगा। बने रहिए...` },
];

// Export function to get chapters by language
export const getTranslatedChapters = (lang: Lang): Chapter[] => {
  switch (lang) {
    case "en": return chaptersEn;
    case "hi": return chaptersHi;
    case "fr": return chaptersFr;
    case "ar": return chaptersAr;
    case "de": return chaptersDe;
    case "zh": return chaptersZh;
    case "ru": return chaptersRu;
    case "bn":
    default: return chaptersBn;
  }
};

export const getChapterTitles = (lang: Lang): string[] => {
  const chapters = getTranslatedChapters(lang);
  return chapters.map(c => c.title);
};
