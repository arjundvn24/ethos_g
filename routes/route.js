const express = require("express");
const router = express.Router();
const controller = require('../controllers/controller')
router.use(express.json());

router.post("/", controller.postKeyword);

router.get('/testApi',function(req, res, next) {
    res.send("API is working properly");
});


router.get('/chayan',()=>console.log("chaayn"))


router.get("/res", controller.resultShow);

module.exports = router;
