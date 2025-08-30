import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT || 4001 ;
const app = express();
app.listen(PORT, (err) => {
    if (err) {
        console.log("Error in starting server", err.message);
    }
    else {
        console.log(`Server started at ${PORT}`);
    }
})

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3001']
}))