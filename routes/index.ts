import { Router } from 'express'
import postModel from '../models/post'

const router = Router()

router.get("/posts", async (req, res) => {
    const posts = await postModel.find()
    res.send(posts)
})

router.post("/posts", async (req, res) => {
    const { title, description } = req.body
    const post = new postModel({ title, description })
    await post.save()
    res.send(post)
})

router.get("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params
        const post = await postModel.findById(id)
        if (!post) return res.status(404).json({ message: "Post not found" })
        res.send(post)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.delete("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params
        const post = await postModel.findByIdAndDelete(id)
        if (!post) return res.status(404).json({ message: "Post not found" })
        res.json(post)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.put("/posts/:id", async (req, res) => {
    try {
        const body = req.body
        const post = await postModel.findByIdAndUpdate(req.params.id, body, { new: true })
        if (!post) return res.status(404).json({ message: "Post not found" })
        res.json(post)
    } catch (error) {
        return res.status(500).send(error)
    }
})

export default router