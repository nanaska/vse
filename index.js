const TelegramApi = require("node-telegram-bot-api");
const Compliment = require("./models/compliment");
const mongoose = require("mongoose");

const token = "2033280533:AAGYZuwZ1nR_wS7KrOJW62iglKjwWNjQufM";
mongoose
  .connect(
    "mongodb+srv://voose:X4n-Neb-3j5-GJA@cluster0.xhj1e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((a) => console.log("a"));
const bot = new TelegramApi(token, { polling: true });

const MARINA = "822153801";

function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(11);
  return (chislo = Math.floor(Math.random() * (max - min)) + min); //Максимум не включается, минимум включается
}

const start = async () => {
  bot.setMyCommands([
    { command: "/start", description: "Начальное приветствие" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
      const Posts = await Compliment.findOne({ id: getRandomInt() });
      await bot.sendMessage(chatId, `Привет Маришка 💞`);
      await bot.sendMessage(chatId, `${Posts.text}`);
      await bot.sendPhoto(chatId, `${Posts.sticker}`);
    }
    if (text === "Люблю тебя") {
      await bot.sendMessage(MARINA, "Маринка, я тебя люблю");
    }
    if (text === "Я сильнее") {
      await bot.sendMessage(MARINA, "Я сильнее");
    }
  });
};

start();