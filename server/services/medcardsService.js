const model = require("../models/models");
const ApiError = require("../APIerror");
const Sequelize = require("sequelize");

class MedcardsService {
    async getMedcard(id){
        const res = await model.Medcards_records.findAll({
            include:[{
                model: model.Medical_cards,
                required: true,
                include:[{
                    model: model.Patients,
                    required: true,
                    where:{id:id}
                }]
            }]
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }
    async getPatientByMedcard(id_medcard){
        const res = await model.Medical_cards.findByPk(id_medcard,{
            include:[{
                model: model.Patients,
                required: true
            }]
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }

    async getOneRecord(id){
        const res = await model.Medcards_records.findByPk(id)
        if(!res) throw ApiError.BadRequest()
        return res
    }

    async addRecord(id_medcard, date, record, recommendation){
        const res = await model.Medcards_records.create({
            id_medcard: id_medcard,
            date: date,
            record: record,
            recommendation: recommendation
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }
}

module.exports = new MedcardsService()