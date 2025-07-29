import express from "express";
import { addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComments, togglePublish } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";
import commentRoutes from "./commentRoutes.js";

const blogRouter = express.Router();

blogRouter.post("/add",upload.single('image'),auth, addBlog)
blogRouter.get('/all', getAllBlogs);
blogRouter.post('/delete', auth, deleteBlogById);
blogRouter.post('/toggle-publish', auth, togglePublish);
blogRouter.get('/:id/comments' ,auth, getBlogComments);
blogRouter.get('/:blogId', getBlogById);
blogRouter.use('/:id/add-comment', auth, addComment);
blogRouter.use('/:id', commentRoutes);
blogRouter.post('/generate' , auth, generateContent);




export default blogRouter;