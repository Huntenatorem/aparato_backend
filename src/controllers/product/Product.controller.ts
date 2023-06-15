import { Request, Response } from "express";
import { productServices } from "../../services/product/Product.service";
import { responses } from "../../helpers/Responses";

class ProductController {
    public async createProduct(req: Request, res: Response) {
        try {
            const body = req.body;
            let response = await productServices.createProduct(body);
            responses.success(req, res, response);
        } catch (error) {
            console.log(error);
            responses.error(req, res, error);
        }
    }

    public async getProductById(req: Request, res: Response) {
        try {
            const body = req.body;
            let response = await productServices.getProductById(body);
            responses.success(req, res, response);
        } catch (error) {
            console.log(error);
            responses.error(req, res, error);
        }
    }

    public async getProducts(req: Request, res: Response) {
        try {
            let response = await productServices.getProducts();
            responses.success(req, res, response);
        } catch (error) {
            console.log(error);
            responses.error(req, res, error);
        }
    }

    public async updateProduct(req: Request, res: Response) {
        try {
            const body = req.body;
            let response = await productServices.updateProduct(body);
            responses.success(req, res, response);
        } catch (error) {
            console.log(error);
            responses.error(req, res, error);
        }
    }

    public async deleteProduct(req: Request, res: Response) {
        try {
            const body = req.body;
            let response = await productServices.deleteProduct(body);
            responses.success(req, res, response);
        } catch (error) {
            console.log(error);
            responses.error(req, res, error);
        }
    }
}

export const productController = new ProductController();