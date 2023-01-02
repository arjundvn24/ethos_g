const express = require("express");
const app = express();
const router=require('./routes/route')
const db=require('./db')
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use('/',router)
app.set("view engine", "ejs");

const port = 3000;

app.listen(port, () =>{ 
    db.connectToDb()
    console.log(`Example app listening at ${port}`)
});
