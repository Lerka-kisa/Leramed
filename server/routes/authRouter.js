const express = require("express");
const authController = require("../controllers/authController");
const authRouter = new express.Router();

//authRouter.get("/login", authController.loginForm);
authRouter.post("/login", authController.login);
//authRouter.get("/register", authController.registerForm);
authRouter.post("/register", authController.register);
authRouter.get("/logout", authController.logout);
authRouter.get("/ability", authController.ability);

module.exports = authRouter;