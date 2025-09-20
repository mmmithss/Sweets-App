import type { NextFunction, Request, Response } from "express";
import { body, validationResult} from "express-validator";

export const validate = async (req:Request, res:Response, next:NextFunction)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors:errors});
    }
    next();
};

export const signUpFormValidations =[
    body("name").notEmpty().isString().withMessage("Name must be a string and not empty"),
    body("email").notEmpty().isEmail().withMessage("Email must be a valid email address"),
    body("password").notEmpty().isString().isLength({min:6}).withMessage("Password must be a string and at least 6 characters long"),
    body("isAdmin").isBoolean().withMessage("isAdmin must be a boolean")
]

export const loginFormValidations =[
    body("email").notEmpty().isEmail().withMessage("Email must be a valid email and not empty"),
    body("password").notEmpty().isString().withMessage("Password must be a string and not empty")
]

export const searchBarFormValidations =[
    body("search").notEmpty().isString().withMessage("Search must not be empty and must be a string")
]