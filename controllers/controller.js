var keyword;
const Article_Newspaper = require("newspaperjs").Article;
const express = require("express");
const processedArticle=require('../models/processedArticle')
const app = express();
const news = require('gnews');
const Article=require('../models/Article')
// const gs=require('../gs')

const postKeyword = async (req, res) => {
    keyword = req.body.keyword;
    console.log(keyword);
    var SERPresults = await news.search(keyword, {n : 5});
    SERPresults.forEach(rawData=>{
        // console.log(rawData);
        rawData=new Article({
            keyword:keyword,
            title:rawData.title,
            link:rawData.link,
            pubDate:rawData.pubDate,
            content:rawData.content,
            contentSnippet:rawData.contentSnippet,
            guid:rawData.guid,
            isoDate:rawData.isoDate
        })
        rawData.save(function(err,result){
            if (err){
                console.log(err);
            }
            else{
                console.log("Inserted with ID",result._id)
            }
        })
    })    
    let result=await renderSearchResults(SERPresults)
    res.send(result)
};

const renderSearchResults=async (SERPresults)=>{
    var cachedRes=[]
    for (const rawData of SERPresults) {
        await Article_Newspaper(
            rawData.link
          )
            .then((result) => {
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
              result.save(function(err,result){
                if (err){
                    console.log(err);
                }
                else{
                    console.log("Title:",result.title)
                }
            })
            })
            .catch((reason) => {
              console.log(reason);
            });
        
    }
    
    return cachedRes
}

module.exports = {
    postKeyword
}