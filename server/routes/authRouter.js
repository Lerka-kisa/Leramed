const express = require("express");
const authController = require("../controllers/authController");
const authRouter = new express.Router();

authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);
authRouter.get("/logout", authController.logout);
authRouter.get("/ability", authController.ability);

module.exports = authRouter;