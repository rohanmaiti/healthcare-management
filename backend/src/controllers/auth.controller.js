import bcrypt from "bcrypt";
import generateToken from "../lib/common/generateToken.js";
import { Creds } from "../models/cred.model.js";
import { generateHash } from "../lib/common/generateHash.js";
import { loadUserInDB } from "../lib/common/loadUserInDB.js";

export const handle_login = async (req, res) => {
  const { email, password, userType } = req.body;
  try {
    const user = await Creds.findOne({ email, userType });
    if (!user) {
      return res.status(401).json({ message: "User not exits " });
    }
    const doesPasswordMatched = await bcrypt.compare(password, user.password);

    if (!doesPasswordMatched) {
      return res.status(402).json({ message: "Password not matched " });
    }

    const userObj = user.toObject();
    delete userObj.password;

    generateToken(userObj, res);
    res.status(200).json(userObj);
  } catch (error) {
    console.log("Error logging in", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const handle_signup = async (req, res) => {
  const { email, userType, password } = req.body;
  try {
    const user = await Creds.findOne({ email, userType });
    if (user) {
      return res.status(400).json({ message: "Email id already exists" });
    }
    const hashedPassword = await generateHash(password);
    const authUser = await loadUserInDB(req.body, hashedPassword);
    generateToken(authUser, res);
    return res.status(200).json(authUser);
  } catch (error) {
    console.log("Error while signup", error?.message);
    return res.status(500).json({ message: "Server error" });
  }
};

export const handle_forgot_password = async (req, res) => {
    const { email } = req.body;
    
}

export const logout = (req, res) => {
  res.clearCookie('auth');
  res.status(200).json({ message: 'Logged out' });
}

export const check = async (req, res) => {
  return res.status(200).json(req.user);
};
