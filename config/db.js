const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://${process.env.USER}:${process.env.PASWD}@namai.8wmbz5p.mongodb.net/`
    );
    console.log("Connect to MongoDB...", connection.connection.host);
  } catch (error) {
    console.log("Could not connect to MongoDB", err);
  }
};

module.exports = connectDB;
