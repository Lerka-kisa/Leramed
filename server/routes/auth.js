const express = require("express");
const authController = require("../controllers/auth");
const authRouter = express.Router();

authRouter.use("/login", authController.login);
authRouter.use("/register", authController.register);
//authRouter.use("/logout", authController.logout);
//authRouter.use("/ability", authController.ability);

module.exports = authRouter;