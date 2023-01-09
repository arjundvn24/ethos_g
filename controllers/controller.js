var keyword,n;
const stripHtml = require("string-strip-html");
const { extract,addTransformations } =require('@extractus/article-extractor')
const express = require("express");
const processedArticle=require('../models/processedArticle')
const fsPromises = require('fs').promises
const news = require('gnews');
const Article=require('../models/Article');
const { log } = require("console");
const { raw } = require("body-parser");

const transformationObj={
  patterns: [],
  pre: (document) => {
    // remove all .advertise-area and its siblings from raw HTML content
    document.getElementById('article-trial-barrier').forEach((element) => {
      if (element.nodeName === 'div') {
        while (element.nextSibling) {
          element.parentNode.removeChild(element.nextSibling)
        }
        element.parentNode.removeChild(element)
      }
    })
    return document
  },
  post: (document) => {
    return document
  }
  
}
addTransformations(transformationObj)
const postKeyword = async (req, res) => {
    keyword = req.body.keyword;
    n = req.body.n;
    console.log(keyword);
    console.log(n);
    res.redirect('/res')
};

const renderSearchResults=async (SERPresults)=>{
    var cachedRes=[]
    for (const rawData of SERPresults) {
        await extract(
            rawData.link
          )
            .then((result) => {
                console.log('Done');
                // let str=result.content
                
              result=new processedArticle({
                keyword:keyword,
                title:result.title,
                text:stripHtml(result.content),
                topImage:result.image,
                date:result.published,
                author:result.author,
                description:result.description,
                links:result.links
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
  var SERPresults = await news.search(keyword, {n : n});
  
  SERPresults.forEach(rawData=>{
    console.log(rawData)
    // rawData=new Article({
      //     keyword:keyword,
      //     title:rawData.title,
      //     link:rawData.link,
      //     pubDate:rawData.pubDate,
      //     content:rawData.content,
      //     contentSnippet:rawData.contentSnippet,
      //     guid:rawData.guid,
      //     isoDate:rawData.isoDate
      })
      // rawData.save(function(err,result){
        //     if (err){
          //         console.log(err);
          //     }
          //     else{
            //         console.log("Inserted with ID",result._id)
      //     }
      // })
    // })    
    timeTaken = performance.now() - start;
    console.log("Total time taken for Gnews Link Load : " + timeTaken/1000 + " seconds");
    let result=await renderSearchResults(SERPresults)
    fsPromises.writeFile('temp.json', JSON.stringify(result)).then(()=>{
      console.log("JSON done")
      res.redirect('/readPython')
    })
    timeTaken = performance.now() - start;
    console.log("Total time taken for Gnews Link Load : " + timeTaken/1000 + " seconds");
}
module.exports = {
    postKeyword,
    resultShow,
}