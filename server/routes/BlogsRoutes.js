import express from "express";
const router = express.Router();

import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  updateBlog,
  showStats,
} from "../controllers/BlogsController.js";

import testUser from "../middleware/testUser.js";

router.route("/").post(testUser, createBlog).get(getAllBlogs);
// remember about :id
router.route("/stats").get(showStats);
router.route("/:id").delete(testUser, deleteBlog).patch(testUser, updateBlog);

export default router;
