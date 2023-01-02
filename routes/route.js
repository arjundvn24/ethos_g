const express = require("express");
const router = express.Router();
const controller = require('../controllers/controller')

router.get("/", (_,res)=>res.render('index.ejs'));

router.post("/", controller.postKeyword);

router.get("/info", (req, res) => {
    res.send()
});

module.exports = router;
