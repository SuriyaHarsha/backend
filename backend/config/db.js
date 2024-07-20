const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
	mongoose.set('strictQuery', true);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo db connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`mongo DB connection Failed : ${error}`);
    process.exit(1);
  }
};
module.exports = connectDB;
