const Sequelize = require('sequelize');
const Authorization_info = require("../models/models").Authorization_info
const path = __dirname.split('\\');



// const jwt = require("jsonwebtoken");
// const {accessKey, refreshKey} = require("../security/jwtKeys");
const fs = require('fs')
const crypto = require('crypto')





exports.login = async (req, res, next) => {
    switch (req.method) {
        case "GET":
            res.sendFile("C:\\Users\\37525\\Desktop\\Course Work\\leramed\\server\\public\\login.html");
            break;
        case "POST":
            if(req.body.login && req.body.password) {
                try {
                    let login = req.body.login
                    let password = req.body.password
                    let hashPassword = crypto.createHash('md5').update(password).digest('hex')
                    const auth = await Authorization_info.findOne({
                        where:{
                            [Sequelize.Op.and]:[{ login: login, password: hashPassword }]
                        }
                    })
                    // const accessToken = jwt.sign({
                    //     id: auth.id,
                    //     login: auth.login,
                    //     role: auth.role
                    // }, accessKey, {expiresIn: 3600});
                    //
                    // const refreshToken = jwt.sign({
                    //     id: auth.id,
                    //     login: auth.login,
                    //     role: auth.role
                    // }, refreshKey, {expiresIn: 24 * 3600});
                    //
                    // res.cookie('accessToken', accessToken, {
                    //     httpOnly: true,
                    //     sameSite: 'strict'
                    // });
                    // res.cookie('refreshToken', refreshToken, {
                    //     httpOnly: true,
                    //     sameSite: 'strict'
                    // });
                    res.status(200).json({status: "ok"})
                }
                catch (e) {
                    res.status(200).json({status: "not ok"})
                }
            }
            break;
        default:
            res.statusCode = 405;
            res.messageerror = "Method not allowed";
            res.end();
    }
}

exports.register = (req, res, next) => {
    switch (req.method) {
        case "GET":
            res.sendFile("C:\\Users\\37525\\Desktop\\Course Work\\leramed\\server\\public\\registry.html");
            break;
        case "POST":
            console.log(req.body)
            let login = req.body.login
            let password = req.body.password
            let hashPassword = crypto.createHash('md5').update(password).digest('hex')
            let mail = req.body.email
            let phone = req.body.phone
            Authorization_info.create({login: login,  password: hashPassword, mail: mail, phone: phone, role: 'PATIENT'})
                .then(() =>  res.status(200).json({status: "ok"})/*res.redirect('/auth/login')*/)
                .catch(err => {
                    res.status(200).json({status: "not ok"})
                })
            break;
        default:
            res.statusCode = 405;
            res.messageerror = "Method not allowed";
            res.end();
    }
}