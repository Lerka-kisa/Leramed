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

    async getOneRecord(id){
        const res = await model.Medcards_records.findByPk(id)
        if(!res) throw ApiError.BadRequest()
        return res
    }
}

module.exports = new MedcardsService()