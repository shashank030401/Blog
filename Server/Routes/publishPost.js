import express, { application } from "express";
import { publishNewBlog, profile, getEditPost, editPost, deletePost } from "../Controllers/publish.js";
const router = express.Router();

router.post("/publishNewBlog",publishNewBlog);
router.get("/Profile", profile);
router.get("/getEditPost/:id",getEditPost);
router.post("/editPost/:id",editPost);
router.delete("/deletePost/:id",deletePost);

export default router;