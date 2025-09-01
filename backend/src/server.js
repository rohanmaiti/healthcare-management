import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import cookieParser from "cookie-parser";
import { connectToDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

const PORT = process.env.PORT || 4001;
const FRONTEND_URL =
  process.env.FRONTEND_URL ||
  "https://healthcare-management-git-main-rohanmaitis-projects.vercel.app/";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3001"],
    credentials: true,
  })
);

// health check endpoint for Render
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Hospital Manager Backend is running",
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});


app.use("/api/auth", authRoutes);

app.listen(PORT, (err) => {
  if (!err) {
    connectToDB();
    console.log(`Server started at ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.log(`Frontend URL: ${FRONTEND_URL}`);
  } else {
    console.log("Error in starting server", err.message);
  }
});
