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
const FRONTEND_URL = process.env.FRONTEND_URL || "https://healthcare-management-git-main-rohanmaitis-projects.vercel.app/";

const app = express();

app.use(express.json());
app.use(cookieParser());

// CORS configuration with multiple origins support
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      FRONTEND_URL,
      'http://localhost:3001',
      'http://localhost:3000',
      'https://healthcare-management-git-main-rohanmaitis-projects.vercel.app'
      // Add your Vercel domain here when you get it
    ];
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));

// Health check endpoint for Render
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Hospital Manager Backend is running',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// API routes
app.use('/api/auth', authRoutes);

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