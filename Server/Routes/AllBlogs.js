import express from "express";
import {getRecentPosts} from "../Controllers/AllBlogPosts.js";
const router = express.Router();

router.get("/RecentPosts",getRecentPosts);

export default router;