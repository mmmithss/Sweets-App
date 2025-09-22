import Router, {} from "express";
import { getAllAccounts, getMyAccount, login, logout, signup, } from "../controllers/auth.controller.js";
import { loginFormValidations, signUpFormValidations, validate, } from "../middleware/formValidators.js";
import { protectRoute } from "../middleware/token.js";
import { get } from "http";
const authRoutes = Router();
authRoutes.post("/register", signUpFormValidations, validate, signup);
authRoutes.post("/login", loginFormValidations, validate, login);
//Checks if user is logged in or
authRoutes.get("/me", protectRoute, getMyAccount);
authRoutes.post("/logout", logout);
authRoutes.get("allAccounts", getAllAccounts);
export default authRoutes;
//# sourceMappingURL=auth.routes.js.map