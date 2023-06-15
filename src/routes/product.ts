import { Router } from 'express'
import { productController } from '../controllers/product/Product.controller';

const productRoutes: Router = Router()

productRoutes.post("/create-product", productController.createProduct)
productRoutes.post("/get-product-by-id", productController.getProductById)
productRoutes.get("/get-products", productController.getProducts)
productRoutes.delete("/delete-product", productController.deleteProduct)
productRoutes.put("/update-product", productController.updateProduct)

export default productController