import { Router } from 'express'
import { postController } from '../controllers/post/Post.controller';

const postRoutes: Router = Router()

postRoutes.post("/create-post", postController.createPost)
postRoutes.post("/get-post-by-id", postController.getPostById)
postRoutes.get("/get-posts", postController.getPosts)
postRoutes.delete("/delete-post", postController.deletePost)
postRoutes.put("/update-post", postController.updatePost)

export default postRoutes