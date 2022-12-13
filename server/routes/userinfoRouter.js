const express = require("express");
const userinfoController= require("../controllers/userinfoController");
const userinfoRouter = new express.Router();

userinfoRouter.get("/getinfo", userinfoController.getInfo)
userinfoRouter.post("/addinfo", userinfoController.addInfo)
userinfoRouter.post("/updbirthday", userinfoController.updBirthday)
userinfoRouter.post("/updgender", userinfoController.updGender)
userinfoRouter.post("/updaddress", userinfoController.updAddress)
userinfoRouter.post("/updplace", userinfoController.updPlaceOfWork)
userinfoRouter.post("/updlogin", userinfoController.updLogin)
userinfoRouter.post("/updphone", userinfoController.updPhone)
userinfoRouter.post("/updmail", userinfoController.updMain)

module.exports = userinfoRouter;