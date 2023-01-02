var keyword;

const express = require("express");
const app = express();
const news = require('gnews');
const Article=require('../models/Article')
const gs=require('../gs')

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
    renderSearchResults(SERPresults)

};

const renderSearchResults=async (SERPresults)=>{
    SERPresults.forEach(async rawData=>{
        let articleData=await gs.processArticles(rawData.link,keyword)
    })
    
}

module.exports = {
    postKeyword
}