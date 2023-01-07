const express = require("express");
const app = express();
const router=require('./routes/route')
const db=require('./db')
const cors=require('cors')
app.use(express.json());
app.use(cors())
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use('/',router)
app.set("view engine", "ejs");

const port = 8080;
app.listen(port, () =>{ 
    // db.connectToDb()
    console.log(`Example app listening at ${port}`)
});
