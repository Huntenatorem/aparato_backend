import { Router, Request, Response } from "express";
import { accessTokensMiddleware } from '../middlewares/AccessTokens.jwt';
import fs from "fs";

const router: Router = Router();
const pathRouter = `${__dirname}`;

const removeExtension = (fileName: string) => {
    return fileName.split(".").shift();
};

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithoutExt: any = removeExtension(file);

    const skip = ["index"].includes(fileWithoutExt);
    if (!skip) {
        const middleware = require(`./${fileWithoutExt}`).default;
        router.use(`/${fileWithoutExt}`, accessTokensMiddleware.authMiddleware, middleware);
    }
});

router.get("*", accessTokensMiddleware.authMiddleware, (req: Request, res: Response) => {
    res.status(404);
    res.send({ error: "Not Found" });
});

export default router;