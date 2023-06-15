import { Request, Response } from "express";
import { postServices } from "../../services/post/Post.service";
import { responses } from "../../helpers/Responses";

class PostController {
    public async createPost(req: Request, res: Response) {
        try {
            const body = req.body;
            let response = await postServices.createPost(body);
            responses.success(req, res, response);
        } catch (error) {
            console.log(error);
            responses.error(req, res, error);
        }
    }

    public async getPostById(req: Request, res: Response) {
        try {
            const body = req.body;
            let response = await postServices.getPostById(body);
            responses.success(req, res, response);
        } catch (error) {
            console.log(error);
            responses.error(req, res, error);
        }
    }

    public async getPosts(req: Request, res: Response) {
        try {
            let response = await postServices.getPosts();
            responses.success(req, res, response);
        } catch (error) {
            console.log(error);
            responses.error(req, res, error);
        }
    }

    public async updatePost(req: Request, res: Response) {
        try {
            const body = req.body;
            let response = await postServices.updatePost(body);
            responses.success(req, res, response);
        } catch (error) {
            console.log(error);
            responses.error(req, res, error);
        }
    }

    public async deletePost(req: Request, res: Response) {
        try {
            const body = req.body;
            let response = await postServices.deletePost(body);
            responses.success(req, res, response);
        } catch (error) {
            console.log(error);
            responses.error(req, res, error);
        }
    }
}

export const postController = new PostController();