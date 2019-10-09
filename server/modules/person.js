const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
  img: String,
  name: String,
  twitterId: String
});

module.exports = mongoose.model("Person", personSchema);
