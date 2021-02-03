const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

/**
 *@route POST /api/auth/login
 *@description Login with email and password
 *@access Public
 */
router.post("/login", authController.loginWithEmailPassword);
module.exports = router;
