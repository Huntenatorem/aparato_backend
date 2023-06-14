import { Schema, model } from 'mongoose'

const postSchema = new Schema(
    {
        title: { type: String, required: true, trim: true, unique: true },
        description: { type: String, required: true, trim: true,  unique: true },
    },
    {
        versionKey: false
    }
)

export default model("Post", postSchema)