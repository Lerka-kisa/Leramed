
const AnalysisService = require("../services/analysisService")

module.exports = {
    getTypesOfAnalysis: async (req, res, next) => {
        const list = await AnalysisService.getTypesOfAnalysis()
        return res.json(list)
    },
    getGenders: async (req, res, next) => {
        const list = await AnalysisService.getGenders()
        return res.json(list)
    },
    getAgeGroups: async (req, res, next) => {
        const list = await AnalysisService.getAgeGroups()
        return res.json(list)
    },
    getAnalysisNorms: async (req, res, next) => {
        let {typeId, genderId, agegroupId}  = req.query;

        let analysis_norm;
        // if (typeId){
        //     analysis_norm = await AnalysisService.getAnalysisNormsT(typeId)
        // }
        // if (!typeId) {
        //     analysis_norm = await AnalysisService.getAllAnalysisNorms()
        // }
        if (!typeId && !genderId && !agegroupId) {
            analysis_norm = await AnalysisService.getAllAnalysisNorms()
        }
        if (typeId && !genderId && !agegroupId) {
            analysis_norm = await AnalysisService.getAnalysisNormsT(typeId)
        }
        if (!typeId && genderId && !agegroupId) {
            analysis_norm = await AnalysisService.getAnalysisNormsG(genderId)
        }
        if (!typeId && !genderId && agegroupId) {
            analysis_norm = await AnalysisService.getAnalysisNormsA(agegroupId)
        }
        if (typeId && genderId && !agegroupId) {
            analysis_norm = await AnalysisService.getAnalysisNormsTG(typeId, genderId)
        }
        if (typeId && !genderId && agegroupId) {
            analysis_norm = await AnalysisService.getAnalysisNormsTA(typeId, agegroupId)
        }
        if (!typeId && genderId && agegroupId) {
            analysis_norm = await AnalysisService.getAnalysisNormsGA(genderId, agegroupId)
        }
        if (typeId && genderId && agegroupId) {
            analysis_norm = await AnalysisService.getAnalysisNormsTGA(typeId, genderId, agegroupId)
        }

        return res.json(analysis_norm)
    },
}