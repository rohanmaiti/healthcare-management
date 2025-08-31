import mongoose from "mongoose";

const UserDtailSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  userType: {
    type: String,
    enum:["user"]
  },
});

export const Userdetails = mongoose.model('UserDetails', UserDtailSchema);


