import express from "express";
import {getRecentPosts, getParticularBlog, getParticularBlogUsingTitle} from "../Controllers/AllBlogPosts.js";
const router = express.Router();

router.get("/RecentPosts",getRecentPosts);
router.get("/:blogId",getParticularBlog);
router.get("/search/:blogTitle",getParticularBlogUsingTitle)
export default router;