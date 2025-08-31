import jwt from "jsonwebtoken";

function generateToken(payload, res) {
  const JWT_SECRET = process.env.JWT_SECRET;
  
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is not set');
  }
  
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
  res.cookie("auth", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
}

export default generateToken;
