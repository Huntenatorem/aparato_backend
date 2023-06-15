import postModel from '../../models/post/post.model'

class PostServices {
    public async createPost(body: any) {
        try {
            const { title, description } = body
            const post = new postModel({ title, description })
            return await post.save()
        } catch (error) {
            throw error
        }
    }

    public async getPostById(body: any) {
        try {
            const { postId } = body
            const post = await postModel.findById(postId)
            // if (!post) return res.status(404).json({ message: "Post not found" })
            return post
        } catch (error) {
            throw error
        }
    }

    public async getPosts() {
        try {
            const posts = await postModel.find()
            return posts
        } catch (error) {
            throw error
        }
    }

    public async updatePost(body: any) {
        try {
            const post = await postModel.findByIdAndUpdate(body.postId, body, { new: true })
            // if (!post) return res.status(404).json({ message: "Post not found" })
            return post
        } catch (error) {
            throw error
        }
    }

    public async deletePost(body: any) {
        try {
            const { postId } = body
            const post = await postModel.findByIdAndDelete(postId)
            // if (!post) return res.status(404).json({ message: "Post not found" })
            return post
        } catch (error) {
            throw error
        }
    }
}

export const postServices = new PostServices();