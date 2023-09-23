// routes/auth.routes.js

const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller.login");

// Define the POST route for user login
router.post("/login", usersController.login);

module.exports = router;
