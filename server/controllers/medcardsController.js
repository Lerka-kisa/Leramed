const fs = require('fs')
const crypto = require('crypto')
const MedcardsService = require("../services/medcardsService")
const TokenService = require("../services/tokenService")
const ApiError = require("../APIerror");
const jwt = require("jsonwebtoken");
const {accessKey} = require("../security/jwtKeys");

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
    getMedcard: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        let id = userData.id_acc
        const info = await MedcardsService.getMedcard(id)

        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }
        return res.status(200).json(info)
    },
    getMedcardById: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        const {id} =req.query;
        const info = await MedcardsService.getMedcard(id)

        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }
        return res.status(200).json(info)
    },
    getPatientByMedcard: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        const {id} =req.query;
        const info = await MedcardsService.getPatientByMedcard(id)

        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }
        return res.status(200).json(info)
    },
    getOneRecord: async (req, res, next) => {
        const info = await MedcardsService.getOneRecord(req.body.id)
        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(info)
    },
    addRecord: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        const info = await MedcardsService.addRecord(req.body.id_medcard, req.body.date, req.body.record, req.body.recommendation)

        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }
        return res.status(200).json(info)
    },
};