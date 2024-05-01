const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://urlshort:HlbkCGbgi20rYgPG@cluster0.fe8iaxz.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MONGODB ...");
  } catch (err) {
    console.error("Error connecting to database : ", err);
  }
};

module.exports = connectDB;
