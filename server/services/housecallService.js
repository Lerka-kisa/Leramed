const model = require("../models/models");
const ApiError = require("../APIerror");
const Sequelize = require("sequelize");

class HousecallService {
    async addHouseCall(date,id_patient, remark){
        const res = await model.House_calls.create({
            date:date,
            id_patient:id_patient,
            remark:remark
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }
    async delHouseCall(id){
        const res = await model.House_calls.destroy({
            where:{id:id}
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }
    async updHouseCall(id,remark){
        const res = await model.House_calls.update(
            {remark:remark},
            {where:{id:id}}
        )
        if(!res) throw ApiError.BadRequest()
        return res
    }
    async getAllHouseCall(){
        const today = new Date(new Date().setDate(new Date().getDate()));
        const res = await model.House_calls.findAll({
            where:{date:today},
            include:{
                model: model.Patients, required: true
            }
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }
    async getHouseCallForDoctor(id_doctor){
        const today = new Date(new Date().setDate(new Date().getDate()));
        const res = await model.House_calls.findAll({
            where:{date:today},
            include:{
                model: model.Patients, required: true,
                include:[{
                    model: model.Sectors, required: true,
                    include:{
                        model: model.Doctors, required: true,
                        where:{id:id_doctor}
                    }
                },{
                    model: model.Authorization_info, required: true,
                }]
            }
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }
    async getHouseCallForPatient(id_patient){
        const today = new Date(new Date().setDate(new Date().getDate()));
        const res = await model.House_calls.findAll({
            where:{date:today},
            include:{
                model: model.Patients, required: true,
                where:{id:id_patient}
            }
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }

}

module.exports = new HousecallService()