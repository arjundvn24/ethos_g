var keyword;
const Article_Newspaper = require("newspaperjs").Article;
const express = require("express");
const processedArticle=require('../models/processedArticle')
const fsPromises = require('fs').promises
const news = require('gnews');
const Article=require('../models/Article')
const postKeyword = async (req, res) => {
    keyword = req.body.keyword;
    console.log(keyword);
    res.redirect('/res')
};

const renderSearchResults=async (SERPresults)=>{
    var cachedRes=[]
    for (const rawData of SERPresults) {
        await Article_Newspaper(
            rawData.link
          )
            .then((result) => {
                console.log('Done');
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
              cachedRes.push(result)
            //   result.save(function(err,result){
            //     if (err){
            //         console.log(err);
            //     }
            //     else{
            //         console.log("Title:",result.title)
            //     }
            // })
            })
            .catch((reason) => {
              console.log(reason);
            });
        
    }
    return cachedRes
}

const resultShow=async (req,res)=>{
  let start = performance.now();
  var SERPresults = await news.search(keyword, {n : 10});
  SERPresults.forEach(rawData=>{
    console.log(rawData);
    // rawData=new Article({
      //     keyword:keyword,
      //     title:rawData.title,
      //     link:rawData.link,
      //     pubDate:rawData.pubDate,
      //     content:rawData.content,
      //     contentSnippet:rawData.contentSnippet,
      //     guid:rawData.guid,
      //     isoDate:rawData.isoDate
      // })
      // rawData.save(function(err,result){
        //     if (err){
          //         console.log(err);
          //     }
          //     else{
            //         console.log("Inserted with ID",result._id)
      //     }
      // })
    })    
    timeTaken = performance.now() - start;
    console.log("Total time taken for Gnews Link Load : " + timeTaken/1000 + " milliseconds");
    let result=await renderSearchResults(SERPresults)
    fsPromises.writeFile('temp.json', JSON.stringify(result)).then(()=>{
      console.log("JSON done")
      res.redirect('/readPython')
    })
    timeTaken = performance.now() - start;
    console.log("Total time taken for Gnews Link Load : " + timeTaken/1000 + " milliseconds");
}
module.exports = {
    postKeyword,
    resultShow,
}