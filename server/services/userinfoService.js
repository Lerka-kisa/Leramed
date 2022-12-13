const model = require("../models/models");
const ApiError = require("../APIerror");
const Sequelize = require("sequelize");

class UserinfoService {
    async getUserinfo(id){
        const res = await model.Patients.findByPk(id,{
            include:[
                //{ model: model.Addresses, required: true },
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

    async addUserinfo(id, last_name, first_name, middle_name, birthday, id_gender, address, place_of_work, age){
        const res = await model.Patients.update({
                last_name:last_name,
                first_name:first_name,
                middle_name:middle_name,
                id_gender:id_gender,
                birthday:birthday,
                id_agegroup:age,
                address:address,
                place_of_work:place_of_work
            }, {
                where:{id:id}
            }
        )
        if(!res) throw ApiError.BadRequest()
        return res
    }

    async getIdAgegroup(age){
        const age_group = await model.Age_group.findAll(
            {where:{
                    max:{[Sequelize.Op.gt]:age},
                    min:{[Sequelize.Op.lte]:age}}
            }
        )
        if(!age_group) throw ApiError.BadRequest()
        return age_group[0].id
    }

    async updBirthday(date, id){
        const res = await model.Patients.update({
            birthday:date},
            {where:{id:id}}
        )
        if(!res) throw ApiError.BadRequest()
        return res
    }

    async updAddress(address, id){
        const res = await model.Patients.update({
            address:address},
            {where:{id:id}}
        )
        if(!res) throw ApiError.BadRequest()
        return res
    }

    async updPlaceOfWork(place, id){
        const res = await model.Patients.update({
            place_of_work:place},
            {where:{id:id}}
        )
        if(!res) throw ApiError.BadRequest()
        return res
    }

    async updGender(id_gender, id){
        const res = await model.Patients.update({
            id_gender:id_gender},
            {where:{id:id}}
        )
        if(!res) throw ApiError.BadRequest()
        return res
    }

    async updLogin(login, id){
        const res = await model.Authorization_info.update({
            login:login},
            {where:{id:id}}
        )
        if(!res) throw ApiError.BadRequest()
        return res
    }

    async updPhone(phone, id){
        const res = await model.Authorization_info.update({
            phone:phone},
            {where:{id:id}}
        )
        if(!res) throw ApiError.BadRequest()
        return res
    }

    async updMail(mail, id){
        const res = await model.Authorization_info.update({
            mail:mail},
            {where:{id:id}}
        )
        if(!res) throw ApiError.BadRequest()
        return res
    }

}

module.exports = new UserinfoService()