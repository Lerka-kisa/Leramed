const express = require("express");
const analysisController = require("../controllers/analysisController");
const medcardsController = require("../controllers/medcardsController");
const analysisRouter = new express.Router();

analysisRouter.get("/getTypeOfAnalysis", analysisController.getTypesOfAnalysis)
analysisRouter.get("/getGenders", analysisController.getGenders)
analysisRouter.get("/getAgeGroups", analysisController.getAgeGroups)
analysisRouter.get("/getAnalysisNorms", analysisController.getAnalysisNorms)
analysisRouter.get("/getanalysis", analysisController.getAnalysis)
analysisRouter.get("/getanalysisid", analysisController.getAnalysisById)
analysisRouter.post("/addresult", analysisController.addResult)

module.exports = analysisRouter;