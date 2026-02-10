import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import router from "./routes/route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 6793;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);
app.use("/api", router);


const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });

  } catch (err) {
    console.error("Mongo connection failed", err);
    process.exit(1);
  }
};

startServer();
