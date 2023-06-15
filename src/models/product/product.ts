import { Schema, model } from 'mongoose'

const productSchema = new Schema(
    {
        title: { type: String, required: true, trim: true, unique: true },
        thumbnailUrl: { type: String, required: true, trim: true},
    },
    {
        versionKey: false
    }
)

export default model("Product", productSchema)