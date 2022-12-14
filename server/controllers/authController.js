const {accessKey, refreshKey} = require("../security/jwtKeys");
const fs = require('fs')
const crypto = require('crypto')
const jwt = require("jsonwebtoken");
const AuthService = require("../services/authService")
const ApiError = require("../APIerror");
const tokenService = require("../services/tokenService");
const {Authorization_info} = require("../models/models");
const model = require("../models/models");

const generateAccessJWT = (auth) => {
    return jwt.sign({
        id: auth.id,
        login: auth.login,
        role: auth.role,
        id_acc: auth.id_acc
    }, accessKey, {expiresIn: "1h"});
}

const generateRefreshJWT = (auth) => {
    return jwt.sign({
        id: auth.id,
        login: auth.login,
        role: auth.role
    }, refreshKey, {expiresIn: "30d"});
}

module.exports = {
    // loginForm: async (req, res, next) => {
    //     res.sendFile("C:\\Users\\37525\\Desktop\\Course Work\\leramed\\server\\public\\login.html");
    // },
    // registerForm: async (req, res, next) => {
    //     res.sendFile("C:\\Users\\37525\\Desktop\\Course Work\\leramed\\server\\public\\registry.html");
    // },
    login: async (req, res, next) => {
        let password = req.body.password
        let hashPassword = crypto.createHash('md5').update(password).digest('hex')
        const auth = await AuthService.login(req.body.login, hashPassword)
        if(!auth) {
            return next(ApiError.internal('Данные говно'))
        }
        if(!auth.id_acc)
            auth.id_acc = 0
        const accessToken = generateAccessJWT(auth);
        const refreshToken = generateRefreshJWT(auth);

        // res.cookie('accessToken', accessToken, {
        //     httpOnly: true,
        //     sameSite: 'strict'
        // });
        // res.cookie('refreshToken', refreshToken, {
        //     httpOnly: true,
        //     sameSite: 'strict'
        // });
        return res.status(200).json({tokenAccess: accessToken, tokenRefresh: refreshToken})
    },
    register: async (req, res, next) => {
        let password = req.body.password
        let hashPassword = crypto.createHash('md5').update(password).digest('hex')
        const result = await AuthService.registrationPatient(req.body.login, hashPassword, req.body.mail, req.body.phone)
        if(!result) {
            return next(ApiError.internal('Некая ошибка(((((('))
        }
        const data = await AuthService.login(req.body.login, hashPassword)
        if(!data) {
            return next(ApiError.internal('Данные говно'))
        }
        const accessToken = generateAccessJWT(data);
        const refreshToken = generateRefreshJWT(data);

        // res.cookie('accessToken', accessToken, {
        //     httpOnly: true,
        //     sameSite: 'strict'
        // });
        // res.cookie('refreshToken', refreshToken, {
        //     httpOnly: true,
        //     sameSite: 'strict'
        // });
        return res.status(200).json({tokenAccess: accessToken, tokenRefresh: refreshToken})
        //return res.json(data);
    },
    logout: async (req, res, next) => {
        // res.clearCookie('accessToken');
        // res.clearCookie('refreshToken');
        res.redirect('login');
    },
    ability: async (req, res, next) => {
        res.status(200).send(req.rules);
        // res.status(200);
        // res.redirect("/resource")
    },
    refresh: async (req, res, next) => {
        try {
            const refreshToken= req.headers.authorization.split(' ')[1]
            const userData = tokenService.validateRefreshToken(refreshToken)

            const user = await Authorization_info.findByPk(userData.id)
            if(user.role === "PATIENT"){
                const pat = await model.Patients.findOne({
                    attributes:["id"],
                    where:{id_auth:user.id}
                })
                user.id_acc = pat.id
            }
            if(user.role === "DOCTOR"){
                const pat = await model.Doctors.findOne({
                    attributes:["id"],
                    where:{id_auth:user.id}
                })
                user.id_acc = pat.id
            }
            const accessToken = generateAccessJWT(user);
            const new_refreshToken = generateRefreshJWT(user);


            return res.status(200).json({tokenAccess: accessToken, tokenRefresh: new_refreshToken})
        } catch (e) {
            console.log(e)
            next(e)
        }
    },
};
