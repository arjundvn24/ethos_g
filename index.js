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
const {spawn} = require('child_process');

const port = 8080;
app.get("/readPython", (request, response) => {
    // Reading Python files
    var dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python3', ['public/f.py']);

   // collect data from script
   python.stdout.on('data', function (data) {
    dataToSend = data.toString();
   });

   python.stderr.on('data', data => {
    console.error(`stderr: ${data}`);
   });

   // in close event we are sure that stream from child process is closed
   python.on('exit', (code) => {
   console.log(`child process exited with code ${code}, ${dataToSend}`);
  });
});
app.listen(port, () =>{ 
    // db.connectToDb()
    console.log(`Example app listening at ${port}`)
});
