import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const connectDB = async () => {
  try {
    let connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/${DB_NAME}`
    );
    console.log(
      `Connected to database at ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`failed to connect DB`);
    process.exit(1);
  }
};

export { connectDB };
