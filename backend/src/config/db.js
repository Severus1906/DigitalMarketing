import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        const DB = await mongoose.connect(MONGO_URI);
        console.log("MONGO DB CONNECTED SUCCESSFULLY");
    } catch (err) {
        console.log("FAILED TO CONNECT MONGO DB",err);
        process.exit(1);
    }
}

export default connectDB;