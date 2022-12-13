
const AnalysisService = require("../services/analysisService")
const ApiError = require("../APIerror");
const MedcardsService = require("../services/medcardsService");
const {accessKey} = require("../security/jwtKeys");
const jwt = require("jsonwebtoken");

const validateAccessToken = (token) => {
    try {
        const userData = jwt.verify(token, accessKey)
        console.log(userData)
        return userData
    } catch (e) {
        return null
    }
};

module.exports = {
    getAnalysis: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        let id = userData.id_acc
        const info = await AnalysisService.getAnalysis(id)

        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }
        return res.status(200).json(info)
    },
    getAnalysisById: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        const {id} =req.query;
        const info = await AnalysisService.getAnalysis(id)

        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }
        return res.status(200).json(info)
    },
    addResult: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        const info = await AnalysisService.addResult(req.body.id_medcard, req.body.date, req.body.id_analysis_type, req.body.result, req.body.recommendation)

        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }
        return res.status(200).json(info)
    },
    //page with AnalysisNorms
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