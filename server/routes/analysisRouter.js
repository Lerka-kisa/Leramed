const express = require("express");
const analysisController = require("../controllers/analysisController");
const analysisRouter = new express.Router();

analysisRouter.get("/getTypeOfAnalysis", analysisController.getTypesOfAnalysis)
analysisRouter.get("/getGenders", analysisController.getGenders)
analysisRouter.get("/getAgeGroups", analysisController.getAgeGroups)
analysisRouter.get("/getAnalysisNorms", analysisController.getAnalysisNorms)

module.exports = analysisRouter;