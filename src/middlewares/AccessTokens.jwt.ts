import { Request, Response, NextFunction } from "express";

class AccessTokensMiddleware {

    public async authMiddleware(req: Request, res: Response, next: NextFunction) {
        try {
            next();
        } catch (error) {
            console.log(error)
        }
    }
}

export const accessTokensMiddleware = new AccessTokensMiddleware();
