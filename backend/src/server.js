import express from "express";
import dotenv from "dotenv";

// Load environment-specific config
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production' });
} else {
  dotenv.config({ path: '.env.development' });
}

import cors from "cors";
import cookieParser from "cookie-parser";
import { connectToDB } from "./lib/db.js";
import authRoutes from './routes/auth.route.js'

const PORT = process.env.PORT || 4001;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3001";

const app = express();
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

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [FRONTEND_URL],
    credentials: true  // This allows cookies to be sent/received
  })
);


app.use('/api/auth', authRoutes);