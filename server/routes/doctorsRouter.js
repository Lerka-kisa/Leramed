const express = require("express");
const doctorsController = require("../controllers/doctorsController");
const doctorsRouter = new express.Router();

doctorsRouter.get("/patients", doctorsController.getPatients)
doctorsRouter.get("/doctors/:id", doctorsController.getDoctorShifts)
doctorsRouter.get("/doctors", doctorsController.getDoctors)


module.exports = doctorsRouter;