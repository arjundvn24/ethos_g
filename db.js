var mongoUrl = "mongodb+srv://Hal:hCho1qKBfVlVvWIU@cluster0.aws60.mongodb.net/ethos_g";

const mongoose = require("mongoose");

const connectToDb = async () => {
  mongoose.connect(
    mongoUrl,
    function (err, db) {
      if (err) throw err;
      console.log("Database connected!");
    }
  );
};
module.exports={
  connectToDb,
}
