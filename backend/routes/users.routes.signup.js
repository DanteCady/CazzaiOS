const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller.signup");

router.post("/signup", usersController.signUp);

module.exports = router;
