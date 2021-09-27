const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComplimentSchema = new Schema({
  id: Number,
  text: String,
  sticker: String,
});
const Compliment = mongoose.model("Compliment", ComplimentSchema);
module.exports = Compliment;
