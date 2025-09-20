import Router from "express";
import { getAllAccounts, login, logout, signup } from "../controllers/auth.controller.js";
import { loginFormValidations, signUpFormValidations, validate } from "../middleware/formValidators.js";
 

const authRoutes = Router();

//todo priority
authRoutes.post("/register",signUpFormValidations,validate, signup)
authRoutes.post("/login",loginFormValidations,validate,login)
authRoutes.get("/me")


//TODO : Later
authRoutes.post("/logout",logout)

authRoutes.get("allAccounts",getAllAccounts)


export default authRoutes;
