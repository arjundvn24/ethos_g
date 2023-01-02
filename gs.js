const Article = require("newspaperjs").Article;
const processedArticle=require('./models/processedArticle')

const processArticles = async (url,keyword) => {
  await Article(
    url
  )
    .then((result) => {
      console.log(result);
      result=new processedArticle({
        keyword:keyword,
        title:result.title,
        text:result.text,
        topImage:result.topImage,
        date:result.date,
        author:result.author,
        description:result.description,
        keywords:result.keywords
      })
      result.save(function(err,result){
        if (err){
            console.log(err);
        }
        else{
            console.log("Processed Article Inserted with ID",result._id)
        }
    })
    })
    .catch((reason) => {
      console.log(reason);
    });
};

module.exports = {
  processArticles,
};
