import Router from "express";
import { getAllAccounts, login, logout, signup } from "../controllers/auth.controller.js";
const authRoutes = Router();
//todo priority
authRoutes.post("/register", signup);
authRoutes.post("/login", login);
authRoutes.get("/me");
//TODO : Later
authRoutes.post("/logout", logout);
authRoutes.get("allAccounts", getAllAccounts);
export default authRoutes;
//# sourceMappingURL=auth.routes.js.map