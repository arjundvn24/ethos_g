const express = require("express");
const router = express.Router();
const controller = require('../controllers/controller')

router.get("/", (_,res)=>res.render('index.ejs'));

router.post("/", controller.postKeyword);

// router.get("/info", (req, res) => {
//     let api_url = "https://codeforces.com/api/user.info?handles=" + keyword;
//     async function getUserData() {
//         const response = await fetch(api_url);
//         data = await response.json();
//         data = data.result;
//         res.render("info.ejs", {
//             data: data,
//         });
//     }
//     getUserData();
// });

module.exports = router;
