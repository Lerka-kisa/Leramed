const express = require("express");
const doctorsController = require("../controllers/doctorsController");
const doctorsRouter = new express.Router();

doctorsRouter.get("/patients", doctorsController.getPatients)
//medcardsRouter.get("/records", medcardsController.getMedicalRecords)
//medcardsRouter.get("/onerecord", medcardsController.getOneRecord)

module.exports = doctorsRouter;