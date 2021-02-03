const express = require("express");
const router = express.Router();

/**
 *@route POST /api/blogs
 *@description Create a new blog
 *@access Public
 */
router.post("/", (req, res) => {
  res.send("Create a new blog");
});
/**
 *@route PUT /api/blogs/:blogId
 *@description update a new blog
 *@access Public
 */
router.put("/:blogId", (req, res) => {
  res.send("Update a blog");
});

/**
 *@route DELETE /api/blogs/:blogId
 *@description delete a blog
 *@access Public
 */
router.delete("/:blogId", (req, res) => {
  res.send("Remove a blog");
});

/**
 *@route GET /api/blogs
 *@description Get the lists of blog
 *@access Public
 */
router.get("/", (req, res) => {
  res.send("Get a list of blog");
});

module.exports = router;
