const express = require("express");
const ticketsController = require("../controllers/ticketsController");
const ticketsRouter = new express.Router();

ticketsRouter.get("/doctors/:id", ticketsController.getDoctorShifts)
ticketsRouter.get("/doctors", ticketsController.getDoctors)

module.exports = ticketsRouter;