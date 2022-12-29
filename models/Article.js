const mongoose = require("mongoose");

const ArticleSchema = new Schema({
    keyword: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required:true,
    },
    paragraph:{
        type: String,
        required:true,  
    }
  });

const Article = mongoose.model("Article", ArticleSchema);

export default Article