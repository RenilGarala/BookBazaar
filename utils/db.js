import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

const connectDB = async function () {

  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("Database connected");
    })
    .catch(() => {
      console.log("Error in Connecting Database");
    });
};

export default connectDB;