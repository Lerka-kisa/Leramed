const express = require("express");
const medcardsController = require("../controllers/medcardsController");
const medcardsRouter = new express.Router();

medcardsRouter.get("/getmedcard", medcardsController.getMedcard)
medcardsRouter.get("/getmedcardid", medcardsController.getMedcardById)
medcardsRouter.get("/onerecord", medcardsController.getOneRecord)
medcardsRouter.post("/addRecord", medcardsController.addRecord)

module.exports = medcardsRouter;