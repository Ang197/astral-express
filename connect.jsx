const Database = require('better-sqlite3');

// Connect to or create a new SQLite database file
const db = new Database('./collection.db', { verbose: console.log });

// Create the items table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY,
    name TEXT,
    description TEXT,
    img TEXT
  )`,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
  }
);
console.log("Created items table.");

// Clear the existing data in the items table
db.exec('DELETE FROM items', 
  (err) => {
    if (err) {
      return console.error(err.message);
    }
  });
console.log("All rows deleted from items");

const insertStmt = db.prepare('INSERT INTO items(name, description, img) VALUES (?, ?, ?)');

const values = [
  ["acheron", "A drifter claiming to be a Galaxy Ranger. She walks the cosmos alone, carrying with her a long sword. Though aloof and taciturn, her blade flicks out like lashing lightning. And yet, she always strikes with her scabbard, never drawing the sword free.", "acheron.png"],
  ["argenti","A classic knight of the Knights of Beauty. Forthright and candid, this noble and admirable man wanders the cosmos alone, resolutely following the Path of Beauty.","argenti.png"],
  ["arlan", "He is the head of Herta Space Station's security department, often seen with a dog named Peppy.", "arlan.png"],
  ["asta", "She is the inquisitive lead astronomer responsible for handling the Herta Space Station's affairs, including managing the staff and responding to the Intelligentsia Guild.", "asta.png"],
  ["aventurine","A senior manager in the IPC Strategic Investment Department and one of the Ten Stonehearts. His Cornerstone is \"Aventurine of Stratagems\". He possesses an air of frivolity and doesn't shy away from taking risks. His constant smile makes it difficult for people to discern his true feelings. He won his current position by wagering against fate itself. He views life as a high-stakes, high-return investment, and he plays this particular gamble with masterful ease.","aventurine.png"],
  ["bailu","A vivacious young lady of the Vidyadhara race, she is known as the \"Healer Lady\" on The Xianzhou Luofu due to her expertise with medicine. She often dishes out unorthodox prescriptions such as \"Stay well hydrated\" and \"Get a good night's rest.\" Bailu cannot bear to see people suffer, which is why her eyes will be shut tightly as she cures ailments. \"As long as they're cured, that's all that matters, right?\"","bailu.png"],
  ["black-swan","A Memokeeper from the Garden of Recollection. A mysterious and elegant soothsayer. Bears a warm smile and is willing to patiently heed the words of another, and thus uses such means as a pretext to enter \"memories\" and gain a comprehension over the flow of all information. Feels strongly about collecting unique memories, yet the thoughts that guide her are hard to glean.","black-swan.png"],
  ["blade","A member of the Stellaron Hunters and a swordsman who abandoned his body to become a blade. He pledges loyalty to Destiny's Slave and possesses a terrifying self-healing ability. ","blade.png"],
  ["boothill","A cyborg cowboy drifting among the stars. Extremely optimistic and unrestrained. He is a member of the Galaxy Rangers who swore to punish the wretched by any and all means... His flamboyant and brash actions were all to draw the attention of the Interastral Peace Corporation — the target of his revenge.","boothill.png"],
  ["bronya","The current Supreme Guardian of Belobog,[4] she is the young and capable commander of the Silvermane Guards. Bronya received rigorous education from an early age, and possesses the grace and affinity as expected of an heir. Originally from Belobog's Underworld and the same orphanage as Seele, she was picked from a handful of children to become the next Supreme Guardian and adopted by Cocolia. \"Can all the training I've received really help me lead the people to the lives they want?\"","bronya.png"],
  ["caelus-destruction","Awakened during the opening events of the game by Kafka and Silver Wolf, they are found by March 7th and Dan Heng on Herta Space Station during the Antimatter Legion's invasion.","caelus-destruction.png"],
  ["clara", "She is a shy young girl orphaned at an early age, accompanied by an ancient mech named Svarog. Her greatest wish is \"to have a family.\"", "clara.png"],
  ["dan-heng","The cold and reserved train guard and archivist of the Astral Express. Wielding a spear named Cloud-Piercer, he joined the Express crew to escape his secluded past.","dan-heng.png"],
  ["dan-heng-Imbibitor-Lunae", "Dan Heng's true Vidyadhara form, revealed after accepting the residual powers from the previous reincarnation of \"Imbibitor Lunae\". Upon accepting the majestic horns atop his crown, he must accept all the merits and faults attributed to that person. ", "dan-heng-il.png"],
  ["dr.-ratio","A candid and self-centered Intelligentsia Guild member, who often conceals his appearance with a strange plaster sculpture. He demonstrated unparalleled intelligence and talent since his youth, but now refers to himself as a \"Mundanite.\" He firmly believes that intellect and creativity are not confined to geniuses. He seeks to distribute knowledge to the entire universe to cure the persistent disease named ignorance","dr-ratio.png"],
  ["fu-xuan","The confident yet blunt Master Diviner of the Xianzhou Luofu's Divination Commission and one of the Six Charioteers. She calculates the Xianzhou Luofu's route and foretells the outcome of future events, as she feels that what she does is the wisest course of action.","fu-xuan.png"],
  ["gallagher","A security officer of the Bloodhound Family at Penacony. He was also a slovenly and indolent mixologist. Though unorganized in apparel and casual in how he made his drinks, he was always courteous toward guests but kept his vigilance about him.","gallagher.png"],
  ["gepard","The honorable and upstanding captain of the Silvermane Guards who bears the noble Landau family name. In the frost-whipped city of Belobog, life can still go on in normality... This is in no small part thanks to Gepard and his Silvermane Guards who protect the peace of everyday life.","gepard.png"],
  ["guinaifen","An outworlder who ended up residing on the Xianzhou by accident. She is now a passionate and vivacious street performer, and has mastered many Xianzhou acrobatics such as \"fire-breathing, sword-swallowing, bowl-balancing, umbrella-dancing, neck-pulling, and boulder-smashing,\" among others.","guinaifen.png"],
  ["hanya","One of the judges of the Ten-Lords Commission. Of the four duties of a judge — detention, imprisonment, punishment, and interrogation — Hanya is charged with the last task. She specializes in reading the karma and sins of criminals, and records their crimes and punishments with the Oracle Brush. As she spends her days using dreams to predict karmic offenses and has to endure the torrential flood of information regarding the mara-strucks' actions, she has long become dull to all things in the world. Only when she operates with her sister and fellow judge, Xueyi, will Hanya momentarily reveal her true nature.","hanya.png"],
  ["herta","Member #83 of the Genius Society, she is the master of the eponymous Herta Space Station, where she appears in the form of a puppet she modeled after her younger self. She collaborated with Screwllum, Ruan Mei, and Stephen Lloyd to create the Simulated Universe, in order to research the mysterious nature of Aeons. She is also an Emanator of Nous the Erudition.","herta.png"],
  ["himeko","An adventurous scientist who encountered and repaired a stranded train as a child, she now ventures across the universe with the Astral Express as its navigator.","himeko.png"],
  ["hook","The self-proclaimed boss of The Moles adventure squad and Fersman's adopted daughter. She views life as an opportunity for freedom and countless adventures.","hook.png"],
  ["huo-huo", "A pitiable and helpless Foxian girl who is also a Ten-Lords Commission Judge-in-training, who fears ghosts but must catch them. Due to having a heliobus named Tail sealed in her tail by the judges of the Ten-Lords Commission, she became a \"cursed one\" who attracts inhuman beings. ", "huo-huo.png"],
  ["jade", "A senior manager in the IPC Strategic Investment Department and one of the Ten Stonehearts. Her Cornerstone is \"Jade of Credit.\" A cold and elegant moneylender, she is skilled at understanding the human heart, with a personal hobby called \"Bonajade Exchange.\" She's willing to wait patiently for high-value acquisitions and adept at extracting value from seemingly destitute clients.","jade.png"],
  ["jingliu", "Once the sword master of the Xianzhou Luofu, as well as Jing Yuan's mentor. After succumbing to mara and going insane, she managed to escape Starskiff Haven in the Year 7380 of the Star Calendar, and easily froze all the Cloud Knights sent after her before Jing Yuan finally confronted and defeated her in battle. However, she managed to survive the encounter and traveled the galaxies outside the Luofu for centuries. At some unknown point, Jingliu \"made a deal\" to regain her sanity, which Luocha has proposed to be the solution to mara.", "jingliu.png"],
  ["jing-yuan", "One of the seven Arbiter-Generals of the Xianzhou Alliance's Cloud Knights, and one of the Six Charioteers of the Xianzhou Luofu. Although he appears lazy, Jing Yuan has been a general on the Luofu for centuries, an amount of time exceeding most of his peers. This can be attributed to his wisdom and attention to routine measures, with Jing Yuan preferring to be preventive rather than corrective.", "jing-yuan.png"],
  ["kafka","A member of the Stellaron Hunters who is calm, collected, and beautiful. Her record on the wanted list of the Interastral Peace Corporation only lists her name and her hobby. People have always imagined her to be elegant, respectable, and in pursuit of things of beauty even in combat. ","kafka.png"],
  ["luka","An optimistic and carefree member of Wildfire. He is the renowned boxing champion of the Belobog Underworld with a mixed martial arts prowess. His enthusiasm inspires other people, especially children, to dream big.", "luka.png"],
  ["luocha","A foreign trader who came from beyond the seas, he appears on the Xianzhou Luofu with a huge coffin. With his consummate medical skills, he always rescues people in times of danger. As a merchant, he is registered at the Xianzhou Yuque within the Alliance, and at the Star Unity Mall branch at the North Valley Star within the Interastral Peace Corporation.","luocha.png"],
  ["lynx", "The youngest daughter of the Landau Family, and one of Belobog's best extreme environments explorers. She is highly capable of action despite her apparent lack of motivation. She only appears introverted and lazy to avoid unnecessary socialization.", "lynx.png"],
  ["march-7th", "An enthusiastic girl who was saved from eternal ice by the Astral Express Crew, and has the unique ability of being able to use \"Six-Phased Ice.\" When she awoke, she knew nothing of herself or her past, and decided to name herself after the date of her rebirth, \"March 7th.\" She takes many photos using her camera in hopes of discovering a memento from her past. ", "march-7th.png"],
  ["misha","A lovable and thoughtful bellboy of The Reverie Hotel. He wished to become an intergalactic adventurer like his grandfather. He was extremely hardworking and was skilled at fixing a variety of machines. He also had a fondness for sharing interstellar rumors with guests. He hoped he could grow up faster and looked forward to embarking on his own star-treading journey.","misha.png"],
  ["natasha","Fastidious and kind, she is one of the few doctors from the Underworld where medical resources are scarce. It is later revealed that Natasha is the true leader of Wildfire, with Oleg as her acting leader.","natasha.png"],
  ["pela", "The meticulous Intelligence Officer of the Silvermane Guards. While young, she is undeniably brilliant. Whether it relates to maneuvering troops, distributing supplies, or the terrain, Pela can answer any problems with calm certainty. As for her phone case...\"It has nothing to do with work, captain.\"", "pela.png"],
  ["qingque", "An average Diviner of the Divination Commission on the Xianzhou Luofu, and a librarian. She never slacks off when it comes to slacking off and is about to be demoted to a \"door guardian.\"", "qingque.png"],
  ["robin", "A Halovian singer born in Penacony and rose to cosmic fame. An elegant and demure young lady. This time, she has been invited home by The Family to grace everyone with a song at the Charmony Festival. She can use the power of Harmony to broadcast her music, manifesting \"resonance\" among not only her fans but all manner of lifeforms.", "robin.png"],
  ["ruan-mei", "An expert in the biological sciences. She earned Nous' attention with her talent and terrifying perseverance, and began her research on the origin of life in a secret corner of the universe. Because of that, she was invited by Herta to collaborate with Screwllum and Stephen to develop the Simulated Universe", "ruan-mei.png"],
  ["sampo", "A silver-tongued salesman. Where there is profit to be made, you can be sure Sampo is nearby. Sampo's unique knowledge makes it hard not to approach him for help, but becoming his \"customer\" is not necessarily a good thing. After all, \"customers\" can quickly turn into \"commodities\" for the right price.", "sampo.png"],
  ["seele", "A spirited and valiant key member of Wildfire who grew up in the perilous Underworld of Belobog. She is accustomed to being on her own. Like her nickname \"Babochka\" (Russian: Бабочка Babochka, \"Butterfly\"), she flits through the battlefield with grace as she causes a storm.", "seele.png"],
  ["serval", "The free and rebellious eldest daughter of the Landau family, once a close friend of Cocolia, her interests has now led her to become a mechanic. In the perpetually winter-stricken Belobog, she opened a workshop called \"Neverwinter\" that puts business on hold from time to time for rock 'n' roll performances. And should anyone ask her about the workshop's profitability...\"This is just a hobby, dear. I'm not short of money.\"", "serval.png"],
  ["silver-wolf", "A member of the Stellaron Hunters and a genius hacker. Silver Wolf has mastered the skill known as \"aether editing,\" which can be used to tamper with the data of reality. Hence, she always views the universe as a massive immersive simulation game and is eager to clear the stages awaiting ahead.", "silver-wolf.png"],
  ["sparkle", "A member of the Masked Fools. Inscrutable and unscrupulous. A dangerous master of theatrics engrossed in playing roles. A woman of countless masks and many faces. Wealth, status, power... None of this matters to Sparkle. The only thing that can lure her interest is \"amusement.\"", "sparkle.png"],
  ["stelle_destruction", "Awakened during the opening events of the game by Kafka and Silver Wolf, they are found by March 7th and Dan Heng on Herta Space Station during the Antimatter Legion's invasion.", "stelle_destruction.png"],
  ["sushang", "A naive and enthusiastic newcomer to the Cloud Knights who wields a greatsword. She years for the historic legends of the Cloud Knights, and is eager to become such a legendary figure herself. As such, Sushang firmly believes in the philosophies \"be eager to help those in need,\" \"do one good deed a day and reflect on oneself three times a day,\" leading her to busy days full of helping others.", "sushang.png"],
  ["tingyun", "A young foxian and amicassador of the Sky-Faring Commission of the Xianzhou Luofu. She was revealed to be the vessel of Lord Ravager Phantylia, and is presumed deceased as of Trailblaze Mission Obsequies Performed, A Long Road Ahead.", "tingyun.png"],
  ["topaz", "Topaz is a Senior Manager of the Strategic Investment Department in the Interastral Peace Corporation, one of the Ten Stonehearts, and leader of the Special Debts Picket Team. Topaz's partner, the Warp Trotter \"Numby,\" is also capable of acutely perceiving where \"riches\" are located. It can even perform jobs involving security, debt collection, and actuarial sciences.", "topaz.png"],
  ["welt", "An animator by trade, Welt is a seasoned member of the Astral Express Crew and the former sovereign of Anti-Entropy who has saved Earth from annihilation time and time again. He inherited the name of the world, \"Welt.\" ", "welt.png"],
  ["xueyi", "One of the judges of the Ten-Lords Commission. Of the four duties of a judge (detention, interrogation, incarceration, and punishment), she is charged with detention. Holding iron chains and a Marasunder Awl in her hands, she tirelessly tracks down wanted criminals and subdues them.", "xueyi.png"],
  ["yanqing", "he youngest lieutenant of the Xianzhou Alliance's Cloud Knights on board the Xianzhou Luofu, and General Jing Yuan's retainer. A swordsman gifted with the art of swordplay and war who has a prodigious interest in swords and always collects them from the Artisanship Commission. ", "yanqing.png"],
  ["yukong", "The seasoned and authoritative Helm Master of the Xianzhou Alliance's Sky-Faring Commission and one of the Xianzhou Luofu's Six Charioteers. Despite having feats in piloting starskiffs, she no longer flies due to a brutal battle.", "yukong.png"],
];

values.forEach((val) => {
  const info = insertStmt.run(...val);
  // console.log(`Rows inserted, ID ${info.lastInsertRowid}`);
});

// Close the database connection (not strictly necessary with better-sqlite3 but good practice)
db.close();
console.log("Closed the database connection.");
