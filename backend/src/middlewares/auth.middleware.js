import jwt from "jsonwebtoken";
import { Creds } from "../models/cred.model.js";

export const checkAuth = async (req, res, next) => {
  const SECRET_KEY = process.env.JWT_SECRET;
  try {
    const token = req?.cookies?.auth;
    if (!token) {
      return res.status(400).json({ message: "Access denied, please login " });
    }
    const verify = jwt.verify(token, SECRET_KEY);
    if (!verify) {
      return res.status(400).json({ message: "Access denied, invalid token" });
    }
    const user = await Creds.findOne({ _id: verify?._id });
    if (!user) {
      return res.status(400).json({ message: "Access denied, invalid user" });
    }
    req.user = verify;
    next();
  } catch (error) {
    console.log('Error in auth.middleware', error.message);
    return res.status(500).json({ message: "Server error" });
  }
};
