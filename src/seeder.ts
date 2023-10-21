import mongoose from "mongoose";
import { GenerationModel, VtuberModel } from "./models";

const db = "mongodb://127.0.0.1:27017/holofact";

mongoose.connect(db).catch((err) => console.log(err));

const seedDB = async () => {
  await GenerationModel.deleteMany({});
  await GenerationModel.insertMany(generationData);
  await VtuberModel.deleteMany({});
  await VtuberModel.insertMany(vtuberData);
};

seedDB().then(() => {
  mongoose.connection.close();
});

// https://virtualyoutuber.fandom.com/wiki/Sakura_Miko
// https://hololive.hololivepro.com/en/talents?gp=1stgen
// https://hololive.wiki/wiki/Hololive_1st_Generation
// virtualyoutuber.fandom.com/wiki/Hololive#hololive_Generation_0

https: const generationData = [
  {
    idName: "0",
    name: "Gen 0",
    date: "7 September 2017",
  },
  { idName: "1", name: "Gen 1", date: "13 May 2018" },
  { idName: "2", name: "Gen 2", date: "8 August 2018" },
  { idName: "GAMERS", name: "GAMERS", date: "6 December 2018" },
];

const vtuberData = [
  // Gen 0
  {
    name: "Tokino Sora",
    imgUrl:
      "https://hololive.hololivepro.com/wp-content/uploads/2021/04/unnamed-file-6-855x1536.png",
    nickname: ["Sora-chan", "Tokino Soda"],
    birthday: "15 May",
    height: 160,
    greeting: "Hey, Sora-tomo! How are you all doing? It's me, Tokino Sora!",
    funFacts: [
      "She loves horror games and singing, and has always dreamed of performing in Yokohama Arena.",
      "She held her first solo concert, Dream!, on October 6, 2019, taking one step closer to her ultimate goal.",
      "She is the member in hololive who most closely fits the image of a proper idol, since most of the other members have become infamous for causing mayhem and goofing off.",
    ],
    generation: ["0"],
  },
  {
    name: "Roboco",
    imgUrl:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/06/roboco-san_pr-img_06.png",
    nickname: ["Roboco-san", "Roborobo"],
    birthday: "23 May",
    height: 154,
    greeting: "Hellobo! Roboco here!",
    funFacts: [
      "She is great at shooting except in video games, but likes to run over people in them.",
      "She hates when games try to surprise her.",
      "Her lower body consists of a pair of inverted chaps that only cover her crotch.",
    ],
    generation: ["0"],
  },
  {
    name: "Sakura Miko",
    imgUrl:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/02/Sakura-Miko_pr-img_01.png",
    nickname: ["Miko-chi", "Elite Miko"],
    birthday: "5 March",
    height: 152,
    greeting:
      "Nya-hello! I'm the elite shrine maiden of hololive, Sakura Miko!",
    funFacts: [
      'She greets her viewers with "Nyahello."',
      'Fans tend to use the term "elite" ironically to highlight Miko\'s questionable decision-making skills as well as her tendency to speak garbled nonsense punctuated by the occasional F-bomb.',
      "Her love for erotic games often finds its way into other games that she plays, especially those featuring freely adjustable camera angles and skirt-wearing female characters.",
    ],
    generation: ["0"],
  },
  {
    name: "Hoshimachi Suisei",
    imgUrl:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/bg_Hoshimachi-Suisei_01-1.png",
    nickname: ["Sui-chan", "Suicopath"],
    birthday: "22 March",
    height: 160,
    greeting:
      "It's your shooting star, your diamond in the rough, idol VTuber Hoshimachi Suisei!",
    funFacts: [
      "Suisei is a modest, multi-talented singer and aspiring idol who is among the more level-headed members of hololive, though she also has a childish streak.",
      "After her unexpectedly compelling performance as a traitor in a game of Project Winter, she gained a reputation for remorseless sociopathy behind a facade of polite sweetness.",
      "On 12 May 2022, Suisei reached 1 million Twitter followers.",
    ],
    generation: ["0"],
  },
  {
    name: "AZKi",
    imgUrl:
      "https://hololive.hololivepro.com/wp-content/uploads/2022/12/AZKi_pr-img_04-1029x2048.png",
    nickname: ["AZKichi"],
    birthday: "1 July",
    height: 158,
    greeting: "-",
    funFacts: [
      "Apart from singing, she likes to do ego-searching and browsing the internet.",
      "She is very kind and is always there to comfort her fellow members when they're upset.",
      "Despite of the diva image and vibe she gives AZKi actually has a playful and mischievous personality, which made her doing things that surprise others.",
    ],
    generation: ["0"],
  },
  // Gen 1
  {
    name: "Yozora Mel",
    imgUrl:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Yozora-Mel_pr-img_01.png",
    nickname: ["Merumeru", "BANpire"],
    birthday: "31 October",
    height: 154,
    greeting: "Sweet bites! It's Yozora Mel, the Underworld's vampire prodigy!",
    funFacts: [
      "Yozora Mel is known for her sweet, calm and caring personality, giving a contrast to what people might expect from her design.",
      "She can be questionable at times though, in major part seen when she's with Yuzuki Choco.",
      "On 6 September, Mel reached 600,000 subscribers on YouTube.",
    ],
    generation: ["1"],
  },
  {
    name: "Shirakami Fubuki",
    imgUrl:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/06/Shirakami-Fubuki_pr-img_01.png",
    nickname: ["FBK", "Friend"],
    birthday: "5 October",
    height: 155,
    greeting: "Good foxy day! I'm Shirakami Fubuki!",
    funFacts: [
      "She aims to become a top otaku idol while enjoying each and every day.",
      "Fubuki is usually always cheerful and excited, singing little songs and making many in-jokes.",
      "She becomes enthralled in games and has cute conversations with scripted game characters, or voice acts as characters while making effects.",
    ],
    generation: ["1", "GAMERS"],
  },
  {
    name: "Natsuiro Matsuri",
    imgUrl:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/06/matsuri_pr-img_2.png",
    nickname: ["GOD", "Matsurin"],
    birthday: "22 July",
    height: 152,
    greeting:
      "Wasshoi! hololive's symbol of purity and everyone's idol, Natsuiro Matsuri here!",
    funFacts: [
      "Matsuri is an energetic, expressive, and sometimes chaotic cheerleader girl who is bubbly as a festival.",
      "She is known for certain viral moments like wearing band-aids to school instead of bras.",
      "She has high girl-power, making her a good wife material noted by other hololive members.",
    ],
    generation: ["1"],
  },
  {
    name: "Akai Haato",
    imgUrl:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Akai-Haato_pr-img_01.png",
    nickname: ["Haachama"],
    birthday: "10 August",
    height: 154,
    greeting: "Welcome to your rouge awakening! This is Akai Haato!",
    funFacts: [
      "Haato appears to be a classic tsundere who teases her fans by calling them kimo ota (creepy otaku),among other things and sometimes flusters easily.",
      "When playing video games, Haato has considerably more confidence than actual skill, which usually ends up biting her in the back.",
      "She is infamous for her ear-splitting scream, and often releases these screams even when not playing horror games.",
    ],
    generation: ["1"],
  },
  {
    name: "Aki Rosenthal",
    imgUrl:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Aki-Rosenthall_pr-img_01.png",
    nickname: ["AkiRose", "MukiRose"],
    birthday: "17 February",
    height: 162,
    greeting: "Alona, everyone! This is Aki Rosenthal a.k.a. AkiRose!",
    funFacts: [
      "Aki's streams are considered chill and wholesome, this can be seen in her gaming streams as it is rare for her to lose her temper, usually remaining cheerful.",
      "Aki also has a mischievous and even lewd side, as she is not above playfully teasing other hololive members or her viewers, however she deeply cares for them.",
      "She also enjoys drinking as she has done streams talking to the chat while drinking and eating.",
    ],
    generation: ["1"],
  },
  // Gen 2
  {
    name: "Minato Aqua",
    imgUrl:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Minato-Aqua_pr-img_01b.png",
    nickname: ["Akutan", "Baqua"],
    birthday: "1 December",
    height: 148,
    greeting: "A-quality day to one and all! I'm Minato Aqua!",
    funFacts: [
      "Aqua is kind and responsible but extremely introverted while off-camera, only opening up while streaming.",
      "She enjoys playing pranks and causing mischief, but it almost always backfires because of a combination of poor planning and bad luck.",
      "However, while Aqua appears to be an incompetent crybaby, she is deceptively skilled at highly technical video games like Sekiro, Dark Souls, Apex Legends (Master rank),and League of Legends (Diamond rank).",
    ],
    generation: ["2"],
  },
  {
    name: "Murasaki Shion",
    imgUrl:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/03/Murasaki-Shion_pr-img_01.png",
    nickname: ["Garlic", "Kusogaki"],
    birthday: "8 December",
    height: 145,
    greeting: "Hellshio! Murasaki Shion here!",
    funFacts: [
      "Shion is a smug, cheeky brat who speaks bluntly without the usual politeness/consideration associated with the Japanese language, and flirts shamelessly with other hololive members.",
      "She has a friendly rivalry with [[Minato Aqua]], and the two can often be seen playing petty and mostly harmless pranks on each other.",
      "One of her most iconic cries is her guttural scream of \"NEEEEEEE.\" This was most famously uttered by Shion after Natsuiro Matsuri revealed that Shion's wet sneezing sounds were heard by Matsuri's listeners in one of her livestreams.",
    ],
    generation: ["2"],
  },
  {
    name: "Nakiri Ayame",
    imgUrl:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/06/Nakiri-Ayame_pr-img_01.png",
    nickname: ["Ojou", "Kijin Hyakki"],
    birthday: "13 December",
    height: 152,
    greeting: "Greetings, Humans! Yoohoo!",
    funFacts: [
      "Ayame is an oni who seems to talk to humans as if they are below her.",
      "Ayame is infamous for her approachability and her rather sensitive funny bone, as it's very easy to make her let loose a cute little giggle from the slightest amusement.",
      'She greets her fans with "Konnakiri!"',
    ],
    generation: ["2"],
  },
  {
    name: "Yuzuki Choco",
    imgUrl:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Yuzuki-Choco_pr-img_01-1.png",
    nickname: ["Choco-sensei", "Sexy Dynamite Body (SDB)"],
    birthday: "14 February",
    height: 165,
    greeting: "Good evening, my cute students! Choc-on!",
    funFacts: [
      "As a former school nurse, she is cautious about her audience's well being and health.",
      "She is most well known for her ASMR streams that soothe and relax listeners, though some do feel heat from the erotic undertones.",
      'She greets her viewers with "Good evening, my cute students. Cho-kon!~♪"',
    ],
    generation: ["2"],
  },
  {
    name: "Oozora Subaru",
    imgUrl:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/06/Oozora-Subaru_pr-img_01.png",
    nickname: ["Subacchi", "Duck"],
    birthday: "2 July",
    height: 154,
    greeting: "Sup! I'm Oozora Subaru from hololive 2nd Generation!",
    funFacts: [
      "Subaru is extroverted and tomboyish in nature.",
      "She is confident, hardworking, and always optimistic, even in situations that would discourage most people.",
      "Because of her overwhelming life experience, she usually acts like a tsukkomi (straight man), pointing out the ridiculousness of whatever other members are saying or doing, and in doing so makes her the butt of many jokes.",
    ],
    generation: ["2"],
  },
];
