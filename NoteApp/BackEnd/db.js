//  JavaScript ES6 Not Using in This NoteApp Backend
const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Mongo successfully");
  } catch (error) {
    throw new Error("Error connecting to MongoDB: " + error);
  }
};

module.exports = connectToMongo;
