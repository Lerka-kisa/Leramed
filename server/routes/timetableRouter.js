const express = require("express");
const timetableController = require("../controllers/timetableController");
const timetableRouter = new express.Router();

timetableRouter.get("/gettypeofshifts", timetableController.getTypeOfShifts)
timetableRouter.get("/gettickets/count", timetableController.getCountTickets)
timetableRouter.get("/gettickets", timetableController.getTickets)
timetableRouter.get("/getticketswithdata", timetableController.getTicketsWithData)
timetableRouter.get("/getemptytickets/count", timetableController.getCountEmptyTickets)
timetableRouter.get("/getemptytickets", timetableController.getEmptyTickets)
timetableRouter.get("/getsectors", timetableController.getSectors)
timetableRouter.get("/getemptytickets", timetableController.getEmptyTickets)
timetableRouter.get("/getshifts", timetableController.getShifts)
timetableRouter.post("/addtimetable", timetableController.addTimetable)
timetableRouter.get("/application/delete", timetableController.delApp)

module.exports = timetableRouter;