const express = require("express");
const medcardsController = require("../controllers/medcardsController");
const medcardsRouter = new express.Router();

medcardsRouter.get("/getonemedcard", medcardsController.getOneMedcard)
//medcardsRouter.get("/records", medcardsController.getMedicalRecords)
medcardsRouter.get("/onerecord", medcardsController.getOneRecord)

module.exports = medcardsRouter;