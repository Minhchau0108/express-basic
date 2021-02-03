const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
/**
 *@route POST /api/users
 *@description Register new account
 *@access Public
 */
router.post("/", userController.register);
module.exports = router;
