const express = require("express");
const analysisController = require("../controllers/analysisController");
const analysisRouter = new express.Router();

analysisRouter.get("/getType", analysisController.getTypesOfAnalysis)
analysisRouter.get("/getGenders", analysisController.getGenders)
analysisRouter.get("/getAgeGroups", analysisController.getAgeGroups)
analysisRouter.get("/getAnalysisNorms", analysisController.getAnalysisNorms)
analysisRouter.get("/all", analysisController.getAnalysis)
analysisRouter.get("/byId", analysisController.getAnalysisById)
analysisRouter.post("/addresult", analysisController.addResult)

module.exports = analysisRouter;