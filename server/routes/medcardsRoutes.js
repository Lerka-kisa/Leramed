const express = require("express");
const medcardsController = require("../controllers/medcardsController");
const medcardsRouter = new express.Router();

medcardsRouter.get("/getmedcard", medcardsController.getMedcard)
medcardsRouter.get("/getmedcardid", medcardsController.getMedcardById)
//medcardsRouter.get("/onerecord", medcardsController.getOneRecord)
medcardsRouter.get("/getpatient", medcardsController.getPatientByMedcard)
medcardsRouter.post("/addRecord", medcardsController.addRecord)

module.exports = medcardsRouter;