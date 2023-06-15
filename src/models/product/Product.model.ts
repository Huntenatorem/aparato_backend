import { Schema, model } from 'mongoose'

const productSchema = new Schema(
    {
        title: { type: String, required: true, trim: true, unique: true },
        thumbnailUrl: { type: String, required: true, trim: true},
        price: { type: Number, required: true, default: 0},
    },
    {
        versionKey: false
    }
)

export default model("Product", productSchema)