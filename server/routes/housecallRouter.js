const express = require("express");
const housecallController = require("../controllers/housecallController");
const housecallRouter = new express.Router();

housecallRouter.get("/all", housecallController.getAllHouseCall)
housecallRouter.post("/add", housecallController.addHouseCall)
housecallRouter.post("/upd", housecallController.updHouseCall)
housecallRouter.delete("/del", housecallController.delHouseCall)

module.exports = housecallRouter;