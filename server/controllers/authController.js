const {accessKey, refreshKey} = require("../security/jwtKeys");
const fs = require('fs')
const crypto = require('crypto')
const jwt = require("jsonwebtoken");
const AuthService = require("../services/authService")
const ApiError = require("../APIerror");

const generateAccessJWT = (auth) => {
    return jwt.sign({
        id: auth.id,
        login: auth.login,
        role: auth.role
    }, accessKey, {expiresIn: 3600});
}

const generateRefreshJWT = (auth) => {
    return jwt.sign({
        id: auth.id,
        login: auth.login,
        role: auth.role
    }, refreshKey, {expiresIn: 24 * 3600});
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
        return res.status(200).json({token: accessToken})
    },
    register: async (req, res, next) => {
        let password = req.body.password
        let hashPassword = crypto.createHash('md5').update(password).digest('hex')
        const result = await AuthService.registrationPatient(req.body.login, hashPassword, req.body.mail, req.body.phone)
        if(!result) {
            return next(ApiError.internal('Некая ошибка(((((('))
        }
        const data = await AuthService.login(req.body.login, hashPassword)
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
        return res.status(200).json({token: accessToken})
        //return res.json(data);
    },
    logout: async (req, res, next) => {
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        res.redirect('login');
    },
    ability: async (req, res, next) => {
        res.status(200).send(req.rules);
        // res.status(200);
        // res.redirect("/resource")
    }
};
