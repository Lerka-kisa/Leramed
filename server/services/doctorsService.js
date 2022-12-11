const model = require("../models/models");
const ApiError = require("../APIerror");
const Sequelize = require("sequelize");

class DoctorsService {
    async getPatients(){
        const res = await model.Patients.findAll({
            include:[
                { model: model.Authorization_info, required: true },
                { model: model.Medical_cards, required: true,
                    include:[{ model: model.Card_status, required: true }]
                },
                { model: model.Gender, required: true },
                { model: model.Age_group, required: true}
            ]
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

module.exports = new DoctorsService()