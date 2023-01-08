const express = require("express");
const router = express.Router();
const controller = require('../controllers/controller')
router.use(express.json());
const {PythonShell} =require('python-shell');

router.post("/", controller.postKeyword);

router.get("/res", controller.resultShow);

module.exports = router;
