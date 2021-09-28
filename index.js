const TelegramApi = require("node-telegram-bot-api");
const Compliment = require("./models/compliment");
const mongoose = require("mongoose");

const token = "2046085637:AAGGYErAN6-nbWWp1fACLSXu8ACFlp51aGY";
mongoose
  .connect(
    "mongodb+srv://voose:X4n-Neb-3j5-GJA@cluster0.xhj1e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((a) => console.log("a"));
const bot = new TelegramApi(token, { polling: true });

const MARINA = "822153801";
async function create() {
  Compliment.create({
    id: 1,
    text: "У тебя великолепные и красивые волосы.",
    sticker:
      "CAACAgIAAxkBAAIE1GFTY2BFE2DR6eQciNBbYI5PCJ0uAAJyEgACRuWpSPJMG0U-1wNRIQQ",
  });
  Compliment.create({
    id: 2,
    text: "Ты очень крутая и клевая девушка. Ты даже не подозреваешь насколько.",
    sticker:
      "CAACAgEAAxkBAAIEzmFTYwgRTaYVMsjEtQ8xgLDcdRVBAAIJAAPHd2lPFd7EYU-0NSYhBA",
  });
  Compliment.create({
    id: 3,
    text: "В толпе людей подсознательно пытаюсь найти тебя.",
    sticker:
      "CAACAgIAAxkBAAIE1mFTY35HmdKv_Fg3k29Eo1-JLKoAAzcSAAKb9VlJbleGjG2bQPchBA",
  });
  Compliment.create({
    id: 4,
    text: "Никогда не думал, что встречу такую красотку и такую умную девчонку",
    sticker:
      "CAACAgIAAxkBAAIE2GFTY58LKQY-Mpbp_YT012SIEjdBAAILAwAC8-O-CwVcfQRNCcKwIQQ",
  });
  Compliment.create({
    id: 5,
    text: "Я очень горжусь и восхищаюсь тобой.",
    sticker:
      "CAACAgIAAxkBAAIE2mFTY7YrSC4Xwmf8_q_gKaWdkqg2AAJeAAPBnGAM2cOQTay6uFAhBA",
  });
  Compliment.create({
    id: 6,
    text: "У тебя отличный белоснежная кожа.",
    sticker:
      "CAACAgIAAxkBAAIE3GFTY9LVNZzLUb1VXY9Zl1QpPcgFAAJaBQACP5XMChsWuYW9IMOdIQQ",
  });
  Compliment.create({
    id: 7,
    text: "У тебя шаловливый и непосредственно детский характер.",
    sticker:
      "CAACAgIAAxkBAAIE3mFTY-Te8gkolW0hOuCqduV3SK_pAAI9AAMkcWIaam2lpfVTfrohBA",
  });
  Compliment.create({
    id: 8,
    text: "У тебя прекрасный и необычный цвет глаз.",
    sticker:
      "CAACAgIAAxkBAAIE4mFTY_bJGM7qhH39knMMi3uM_taPAAJRAAMkcWIa6UcbX8Y_pyMhBA",
  });
  Compliment.create({
    id: 9,
    text: "Ты самая, самая, самая…",
    sticker:
      "CAACAgIAAxkBAAIE4GFTY-yBHEBH2dt-EFPRDWVgpT0WAAIGDQACK7L5S-ZIRaJr6SUUIQQ",
  });
  Compliment.create({
    id: 10,
    text: "Ты Королева красоты!",
    sticker:
      "CAACAgIAAxkBAAIE6GFTZKhARJj0IugyKWeGysN_qoIBAAJYAQACIjeOBBAbfE-cIEUvIQQ",
  });
  Compliment.create({
    id: 11,
    text: "Когда бог раздавал красоту ты вставала дважды или трижды?",
    sticker:
      "CAACAgIAAxkBAAIE5mFTZIVdWHXaTU-KTJZGI2gpEH0VAAKdAQACVp29CsqO-dc8lrKrIQQ",
  });
  Compliment.create({
    id: 12,
    text: "Нужно следовать за мечтой, а значит я иду за тобой.",
    sticker:
      "CAACAgIAAxkBAAIE5GFTZGpmXNT-e_44DORHQa7m-fDTAALpAAMw1J0RyI_2YFs4vcQhBA",
  });
}
function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(11);
  return (chislo = Math.floor(Math.random() * (max - min)) + min); //Максимум не включается, минимум включается
}

const start = async () => {
  bot.setMyCommands([{ command: "/start", description: "" }]);
  bot.on("sticker", async (adsa) => {
    const fileid = adsa.sticker.file_id;
    const chatId = adsa.chat.id;
    bot.sendMessage(chatId, fileid);
  });
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
      const Posts = await Compliment.findOne({ id: getRandomInt() });
      await bot.sendMessage(chatId, `Привет Маришка 💞`);
      await bot.sendMessage(chatId, `${Posts.text}`);
      await bot.sendSticker(chatId, `${Posts.sticker}`);
      await bot.sendMessage(605598157, `${chatId}, посмотрено`);
    }
    if (text === "Люблю тебя") {
      await bot.sendMessage(MARINA, "Маринка, я тебя люблю");
    }
    if (text === "Я сильнее") {
      await bot.sendMessage(MARINA, "Я сильнее");
    }
    if (text === "Админ команда") {
      const Posts = await Compliment.findOne({ id: getRandomInt() });

      await bot.sendMessage(chatId, `Привет Маришка 💞`);
      await bot.sendMessage(chatId, `${Posts.text}`);
      await bot.sendSticker(MARINA, `${Posts.sticker}`);
    }
  });
};

start();
