const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  keyword:{
    type:String,
    required:true
  },
    title: {
      type: String,
      default: undefined,
    },
    link: {
      type: String,
      required: true,
    },
    pubDate: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    contentSnippet: {
      type: String,
      required: true,
    },
    guid: {
      type: String,
      required: true,
    },
    isoDate: {
      type: String,
      required: true,
    },
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports= Article;
