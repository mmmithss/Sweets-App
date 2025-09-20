import type { NextFunction, Request, Response } from "express";
export declare const generateToken: (userId: string) => string;
export declare const protectRoute: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=token.d.ts.map