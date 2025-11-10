import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import xss from "xss-clean";
import connectDB from "./config/db";

dotenv.config();
const app = express();

// Security Middlewares
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(rateLimit({ windowMs: 10 * 60 * 1000, max: 100 }));

// ✅ Connect Database
connectDB();
// Example route
app.get("/", (req, res) => {
  res.json({ message: "Secure API working ✅" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
