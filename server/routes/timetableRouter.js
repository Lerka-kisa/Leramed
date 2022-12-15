const express = require("express");
const timetableController = require("../controllers/timetableController");
const timetableRouter = new express.Router();

timetableRouter.get("/gettypeofshifts", timetableController.getTypeOfShifts)
timetableRouter.get("/getcardstatus", timetableController.getCardStatus)

timetableRouter.get("/getshifts", timetableController.getShifts)

timetableRouter.get("/gettickets", timetableController.getTickets)
timetableRouter.get("/getmytickets", timetableController.getPatientsTickets)
timetableRouter.get("/getempty", timetableController.getEmptyTickets)
timetableRouter.get("/getticketswithdata", timetableController.getTicketsWithData)

timetableRouter.post("/addtimetable", timetableController.addTimetable)
timetableRouter.post("/updstatus", timetableController.updStatusCard)

timetableRouter.delete("/application/delete", timetableController.delApp)
timetableRouter.post("/application/add", timetableController.setPatientInApp)

module.exports = timetableRouter;