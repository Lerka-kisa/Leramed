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
        let {type, search, searchName, searchSurname, searchMiddle}  = req.query;

        let info;
        if(!search && (!searchName && !searchSurname && !searchMiddle))
            info = await DoctorsService.getPatients()

        if(search){
            switch(type) {
                case '2':
                    info = await DoctorsService.getPatientsA(search)
                    break
                case '3':
                    info = await DoctorsService.getPatientsC(search)
                    break
                default:
                    break
            }
        }

        if(searchName && !searchSurname && !searchMiddle){
            info = await DoctorsService.getPatientsI(searchName)
        }

        if(!searchName && searchSurname && !searchMiddle){
            info = await DoctorsService.getPatientsF(searchSurname)
        }

        if(!searchName && !searchSurname && searchMiddle){
            info = await DoctorsService.getPatientsO(searchMiddle)
        }

        if(searchName && searchSurname && !searchMiddle){
            info = await DoctorsService.getPatientsFI(searchSurname, searchName)
        }

        if(!searchName && searchSurname && searchMiddle){
            info = await DoctorsService.getPatientsFO(searchSurname, searchMiddle)
        }

        if(searchName && !searchSurname && searchMiddle){
            info = await DoctorsService.getPatientsIO(searchName, searchMiddle)
        }

        if(searchName && searchSurname && searchMiddle){
            info = await DoctorsService.getPatientsFIO(searchSurname, searchName, searchMiddle)
        }


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