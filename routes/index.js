var express = require("express");
var router = express.Router();

const userApi = require("./user.api");
router.use("/users", userApi);

const authApi = require("./auth.api");
router.use("/auth", authApi);

const blogApi = require("./blog.api");
router.use("/blogs", blogApi);

module.exports = router;
