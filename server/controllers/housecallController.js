const fs = require('fs')
const crypto = require('crypto')
const HousecallService = require("../services/housecallService")
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
    getAllHouseCall: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        let info = {}
        switch(userData.role) {
            case 'ADMIN':
                info = await HousecallService.getAllHouseCall()
                break
            case 'DOCTOR':
                info = await HousecallService.getHouseCallForDoctor(userData.id_acc)
                break
            case 'PATIENT':
                info = await HousecallService.getHouseCallForPatient(userData.id_acc)
                break
            default:
                break
        }

        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }
        return res.status(200).json(info)
    },
    addHouseCall: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        const info = await HousecallService.addHouseCall(req.body.date, req.body.id_patient, req.body.remark)

        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }
        return res.status(200).json(info)
    },
    delHouseCall: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())
        let {id}  = req.query;
        const info = await HousecallService.delHouseCall(id)

        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }
        return res.status(200).json(info)
    },
    updHouseCall: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())
        const remark = req.body.remark
        const info = await HousecallService.updHouseCall(req.body.id, remark)

        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }
        return res.status(200).json(info)
    },


};