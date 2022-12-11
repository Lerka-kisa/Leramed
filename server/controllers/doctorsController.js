const fs = require('fs')
const crypto = require('crypto')
const DoctorsService = require("../services/doctorsService")
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
    getPatients: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        const info = await DoctorsService.getPatients()

        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }
        return res.status(200).json(info)
    }
    // getOneRecord: async (req, res, next) => {
    //     const info = await MedcardsService.getOneRecord(req.body.id)
    //     if(!info) {
    //         return next(ApiError.internal('Что-то пошло не так'))
    //     }
    //
    //     return res.status(200).json(info)
    // }
};