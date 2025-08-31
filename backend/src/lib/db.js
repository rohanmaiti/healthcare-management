import mongoose from "mongoose";


export function connectToDB() {
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
.then(() => {
    console.log('connted to DB');
})
.catch((err) => {
    console.log('Error conntection to DB', err.message);
})
}