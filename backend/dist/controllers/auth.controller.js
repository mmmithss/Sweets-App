import User from "../model/User.js";
import bycript from "bcryptjs";
import { generateToken } from "../middleware/token.js";
import { COOKIE_NAME, JWT_VALIDITY } from "../constants/constants.js";
import cookieParser from "cookie-parser";
export const signup = async (req, res, next) => {
    try {
        const { name, email, password, isAdmin } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                message: "User already exists",
            });
        }
        const salt = await bycript.genSalt(10);
        const hashedPassword = await bycript.hash(password, salt);
        const user = new User({
            name,
            email,
            password: hashedPassword,
            isAdmin,
        });
        await user.save();
        console.log(user);
        //generate token
        const token = generateToken(user._id.toString());
        //generate cookie
        res.cookie(COOKIE_NAME, token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000,
            signed: true,
        });
        return res.status(201).json(user);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const isPasswordCorrect = await bycript.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid password" });
        }
        //clear old cookie
        res.clearCookie(COOKIE_NAME, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            signed: true,
        });
        //generate token
        const token = generateToken(user._id.toString());
        //generate cookie
        res.cookie(COOKIE_NAME, token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000,
            signed: true,
        });
        return res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
export const logout = async (req, res, next) => {
    try {
        res.clearCookie(COOKIE_NAME, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            signed: true,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
export const getAllAccounts = async (req, res, next) => { };
//# sourceMappingURL=auth.controller.js.map