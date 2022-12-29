var keyword;
const express = require("express");
const app = express();
const google = require('googlethis');

const postKeyword = async (req, res) => {
    keyword = req.body.keyword;
    console.log(keyword);
    const SERPresults = await processSERP(keyword)
    console.log(SERPresults);
};

const processSERP = async (keyword) => {
    var res = await google.search(keyword, {
        page: 0,
        safe: false,
        additional_params: {
            hl: 'en'
        }
    });
    return res.results
}

module.exports = {
    postKeyword
}