const fs = require('fs')
const crypto = require('crypto')
const UserinfoService = require("../services/userinfoService")
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
    getInfo: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        let id = userData.id_acc
        const info = await UserinfoService.getUserinfo(id)
        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(info)
    },
    addInfo: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        let id = userData.id_acc

        const age = await UserinfoService.getIdAgegroup(req.body.age)
        const info = await UserinfoService.addUserinfo(id, req.body.last_name, req.body.first_name, req.body.middle_name, req.body.birthday, req.body.id_gender, req.body.address, req.body.place_of_work, age)
        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(info)
    },
    updBirthday: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())
        let id = userData.id_acc

        const info = await UserinfoService.updBirthday(req.body.date, id)
        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(info)
    },
    updGender: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())
        let id = userData.id_acc

        const info = await UserinfoService.updGender(req.body.gender, id)
        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(info)
    },
    updAddress: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())
        let id = userData.id_acc

        const info = await UserinfoService.updAddress(req.body.address, id)
        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(info)
    },
    updPlaceOfWork: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())
        let id = userData.id_acc

        const info = await UserinfoService.updPlaceOfWork(req.body.place, id)
        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(info)
    },
    updLogin: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())
        let id = userData.id

        const info = await UserinfoService.updLogin(req.body.login, id)
        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(info)
    },
    updPhone: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())
        let id = userData.id

        const info = await UserinfoService.updPhone(req.body.phone, id)
        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(info)
    },
    updMain: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())
        let id = userData.id

        const info = await UserinfoService.updMail(req.body.mail, id)
        if(!info) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(info)
    }
};