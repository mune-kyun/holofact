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

const generationData = [
  {
    idName: "0",
    name: "Gen 0",
    date: "7 September 2017",
  },
  { idName: "1", name: "Gen 1", date: "13 May 2018" },
  { idName: "2", name: "Gen 2", date: "8 August 2018" },
];

const vtuberData = [
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
    funFacts: ['She greets her viewers with "Nyahello."'],
    generation: ["0"],
  },
  {
    name: "Minato Aqua",
    nickname: ["Akutan", "Baqua"],
    birthday: "1 December",
    height: 148,
    greeting: "A-quality day to one and all! I'm Minato Aqua!",
    funFacts: [
      "Aqua is kind and responsible but extremely introverted while off-camera, only opening up while streaming.",
    ],
    generation: ["2"],
  },
  {
    name: "Murasaki Shion",
    nickname: ["Garlic", "Kusogaki"],
    birthday: "8 December",
    height: 145,
    greeting: "Hellshio! Murasaki Shion here!",
    funFacts: [
      "Shion is a smug, cheeky brat who speaks bluntly without the usual politeness/consideration associated with the Japanese language, and flirts shamelessly with other hololive members.",
    ],
    generation: ["2"],
  },
];
