import productModel from '../../models/product/Product.model'

class ProductServices {
    public async createProduct(body: any) {
        try {
            const { title, description } = body
            const product = new productModel({ title, description })
            return await product.save()
        } catch (error) {
            throw error
        }
    }

    public async getProductById(body: any) {
        try {
            const { productId } = body
            const product = await productModel.findById(productId)
            return product
        } catch (error) {
            throw error
        }
    }

    public async getProducts() {
        try {
            const products = await productModel.find()
            return products
        } catch (error) {
            throw error
        }
    }

    public async updateProduct(body: any) {
        try {
            const product = await productModel.findByIdAndUpdate(body.productId, body, { new: true })
            return product
        } catch (error) {
            throw error
        }
    }

    public async deleteProduct(body: any) {
        try {
            const { productId } = body
            const product = await productModel.findByIdAndDelete(productId)
            return product
        } catch (error) {
            throw error
        }
    }
}

export const productServices = new ProductServices();