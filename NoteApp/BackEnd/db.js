require("dotenv").config();
const mongoose = require("mongoose");
// const mongoUser = "mongo";
// const mongoPassword = "EhADFBA3ADH4c5haD6De42Db3cgG445G";
// const mongoHost = "monorail.proxy.rlwy.net";
// const mongoPort = 38070;
// const mongoURI = "mongodb://mongo:EhADFBA3ADH4c5haD6De42Db3cgG445G@monorail.proxy.rlwy.net:38070";
// const mongoURI = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}`;

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Mongo successfully");
  } catch (error) {
    throw new Error("Error connecting to MongoDB: " + error);
  }
};

module.exports = connectToMongo;
