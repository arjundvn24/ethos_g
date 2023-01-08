const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  topImage: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
  author: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  links: {
    type: Array,
    default: [],
  },
});

const processedArticle = mongoose.model("processedArticle", Schema);

module.exports = processedArticle;
