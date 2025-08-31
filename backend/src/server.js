import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectToDB } from "./lib/db.js";
import authRoutes from './routes/auth.route.js'

const PORT = process.env.PORT || 4001;

const app = express();
app.listen(PORT, (err) => {
  if (!err) {
    connectToDB();
    console.log(`Server started at ${PORT}`);
  } else {
    console.log("Error in starting server", err.message);
  }
});

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3001"],
    credentials: true  // This allows cookies to be sent/received
  })
);


app.use('/api/auth', authRoutes);