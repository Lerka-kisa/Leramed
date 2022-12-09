const express = require("express");
const ticketsController = require("../controllers/ticketsController");
const ticketsRouter = new express.Router();

ticketsRouter.get("/doctors/:id", ticketsController.getDoctorsShifts)
ticketsRouter.get("/doctors", ticketsController.getDoctors)

module.exports = ticketsRouter;