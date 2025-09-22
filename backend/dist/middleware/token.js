import jwt from "jsonwebtoken";
import { COOKIE_NAME, JWT_VALIDITY } from "../constants/constants.js";
const JWT_SECRET = process.env.JWT_SECRET || "";
const COOKIE_SECRET = process.env.COOKIE_SECRET || "";
export const generateToken = (userId) => {
    const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_VALIDITY });
    return token;
};
export const protectRoute = async (req, res, next) => {
    try {
        console.log("Entering into verify token middleware");
        console.log(req.signedCookies);
        console.log(req.signedCookies[COOKIE_NAME]);
        //decoding the signed cookie
        console.log("Decoding the signedCookie");
        const token = req.signedCookies[COOKIE_NAME];
        if (!token) {
            return res
                .status(401)
                .json({ message: "Unauthorized - Token not found" });
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log(decoded);
        res.locals.userId = decoded.userId;
        next();
    }
    catch (error) {
        console.log("Error in verifying token", error);
        res
            .status(401)
            .json({ message: "Unauthorized - Invalid token or expired" });
    }
};
//# sourceMappingURL=token.js.map