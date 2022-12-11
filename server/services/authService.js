const model = require("../models/models");
const ApiError = require("../APIerror");
const Sequelize = require("sequelize");

class AuthService {
    async registrationPatient(login, hashPassword, mail, phone){
        const res = await model.Authorization_info.create(
            {
                login: login,
                password: hashPassword,
                mail: mail,
                phone: phone,
                role: 'PATIENT'
            }
        )
        if(!res) throw ApiError.BadRequest()
        return res
    }
    async login(login, hashPassword){
        const res = await model.Authorization_info.findOne({
            where:{
                [Sequelize.Op.and]:[{ [Sequelize.Op.or]:[{login: login}, {mail: login}, {phone: login}], password: hashPassword }]
            }
        })
        if(!res) return null;//throw ApiError.NotFound()
        if(res.role === "PATIENT"){
            const pat = await model.Patients.findOne({
                attributes:["id"],
                where:{id_auth:res.id}
            })
            res.id_acc = pat.id
        }
        if(res.role === "DOCTOR"){
            const pat = await model.Doctors.findOne({
                attributes:["id"],
                where:{id_auth:res.id}
            })
            res.id_acc = pat.id
        }
        return res
    }

}

module.exports = new AuthService()