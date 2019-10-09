const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const twitterSchema = new Schema({
  urlText: String,
  countTweets: String,
  countFollowers: String,
  date: String,
  link: String,
  authorId: String
});

module.exports = mongoose.model("Twitter", twitterSchema);
