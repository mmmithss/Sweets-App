import type { NextFunction, Request, Response } from "express";
import User from "../model/User.js";
export const checkAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = res.locals.userId;
    const user = await User.findById(userId);
    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: "Forbidden" });
    } else {
      next();
    }
  } catch (error) {
    console.log("Error in checkAdmin middleware", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
