import type { NextFunction, Request, Response } from "express";
export declare const validate: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const signUpFormValidations: import("express-validator").ValidationChain[];
export declare const loginFormValidations: import("express-validator").ValidationChain[];
export declare const searchBarFormValidations: import("express-validator").ValidationChain[];
export declare const addSweetFormValidations: import("express-validator").ValidationChain[];
export declare const updateSweetFormValidations: import("express-validator").ValidationChain[];
export declare const inventoryFormValidations: import("express-validator").ValidationChain[];
//# sourceMappingURL=formValidators.d.ts.map