const fs = require('fs')
const crypto = require('crypto')
const TicketsService = require("../services/ticketsService")
const ApiError = require("../APIerror");

module.exports = {
    getDoctors: async (req, res, next) => {
        const doctors = await TicketsService.getDoctors()
        if(!doctors) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(doctors)
    },
    getDoctorShifts: async (req, res, next) => {
        let id = parseInt(req.params.id)


        const result = await TicketsService.getDoctorShifts(id)
        if(!result) {
            return next(ApiError.internal('Некая ошибка(((((('))
        }
        //const data = await AuthService.login(req.body.login, hashPassword)
        // const accessToken = generateAccessJWT(data);
        // const refreshToken = generateRefreshJWT(data);
        //
        // return res.status(200).json({token: accessToken})
        // //return res.json(data);
    }
};
