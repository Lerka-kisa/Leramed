const fs = require('fs')
const crypto = require('crypto')
const TimetableService = require("../services/timetableService")
const ApiError = require("../APIerror");
const TokenService = require("../services/tokenService");
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
    getShifts: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        let timetable = {}
        if(userData.role === 'ADMIN'){
            timetable = await TimetableService.getShifts()
        }
        if(userData.role === 'DOCTOR'){
            timetable = await TimetableService.getShiftsForDoctor(userData.id_acc)
        }
        if(!timetable) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(timetable)
    },
    getTickets: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        let {id}  = req.query;
        const timetable = await TimetableService.getTickets(id)
        if(!timetable) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(timetable)
    },
    getPatientsTickets: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        const id = userData.id_acc;
        const timetable = await TimetableService.getPatientsTickets(id)
        if(!timetable) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(timetable)
    },
    getTicketsWithData: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        let {id}  = req.query;
        const timetable = await TimetableService.getTicketsWithData(id)
        if(!timetable) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(timetable)
    },
    getCountTickets: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        let {id}  = req.query;
        const timetable = await TimetableService.getCountTickets(id)
        if(!timetable) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(timetable)
    },
    getEmptyTickets: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        let {id_doctor}  = req.query;
        const timetable = await TimetableService.getEmptyTickets(id_doctor)
        if(!timetable) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(timetable)
    },
    getCountEmptyTickets: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        let {id}  = req.query;
        const timetable = await TimetableService.getCountEmptyTickets(id)
        if(!timetable) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(timetable)
    },
    getTypeOfShifts: async (req, res, next) => {
        const types = await TimetableService.getTypeOfShifts()
        if(!types) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(types)
    },
    getSectors: async (req, res, next) => {
        const types = await TimetableService.getSectors()
        if(!types) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(types)
    },
    addTimetable: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        const data = await TimetableService.addTimetable(req.body.date, req.body.id_type_of_shift, req.body.id_doctor)
        if(!data) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        const time = await TimetableService.getTime(req.body.id_type_of_shift)
        if(!data) {
            return next(ApiError.internal('Что-то пошло не так'))
        }
        const start = time.beginning_of_period
        const end = time.end_of_period
        const ss = await TimetableService.addApp(data.id, start, end)
        if(!ss){return next(ApiError.internal('Что-то пошло не так22222'))}

        return res.status(200).json(data)
    },
    delApp: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        let {id}  = req.query;
        const data = await TimetableService.delApp(id)
        if(!data) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(data)
    },
    setPatientInApp: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        const data = await TimetableService.setPatientInApp(req.body.id,req.body.id_patient)
        if(!data) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(data)
    },
    getCardStatus: async (req, res, next) => {
        const list = await TimetableService.getCardStatus()
        return res.json(list)
    },
    updStatusCard: async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return next(ApiError.UnauthorizedError())
        const userData = validateAccessToken(token)
        if (!userData)
            return next(ApiError.UnauthorizedError())

        const data = await TimetableService.updStatusCard(req.body.id_medcard,req.body.new_status)
        if(!data) {
            return next(ApiError.internal('Что-то пошло не так'))
        }

        return res.status(200).json(data)
    },

};
