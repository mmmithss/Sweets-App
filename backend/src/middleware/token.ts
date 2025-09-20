import jwt from "jsonwebtoken";
import { COOKIE_NAME, JWT_VALIDITY } from "../constants/constants.js";
import type { NextFunction, Request, Response } from "express";
import {} from "../constants/constants.js";

const JWT_SECRET = process.env.JWT_SECRET || "";
export const generateToken = (userId: string) => {
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_VALIDITY });
  return token;
};

export const protectRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.signedCookies[COOKIE_NAME];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - Token not found" });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    console.log(decoded);
    res.locals.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("Error in verifying token", error);
    res
      .status(401)
      .json({ message: "Unauthorized - Invalid token or expired" });
  }
};
