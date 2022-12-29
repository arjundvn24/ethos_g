var mongoUrl =
    "mongodb+srv://Hal:hCho1qKBfVlVvWIU@cluster0.aws60.mongodb.net/";

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(mongoUrl, function(err, db) {
  if (err) throw err;
  console.log("Database connected!");
//   db.db('ethos_g').insert
  db.close();
});
