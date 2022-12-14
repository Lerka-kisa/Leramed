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
    async getPatientsF(last_name){
        const res = await model.Patients.findAll({
            where: { last_name: { [Sequelize.Op.substring]: last_name } },
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
    async getPatientsI(first_name){
        const res = await model.Patients.findAll({
            where: { first_name: { [Sequelize.Op.substring]: first_name } },
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
    async getPatientsO(middle_name){
        const res = await model.Patients.findAll({
            where: { middle_name: { [Sequelize.Op.substring]: middle_name } },
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
    async getPatientsFI(last_name, first_name){
        const res = await model.Patients.findAll({
            where: {  first_name: { [Sequelize.Op.substring]: first_name }, last_name: { [Sequelize.Op.substring]: last_name }},
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
    async getPatientsFO(last_name, middle_name){
        const res = await model.Patients.findAll({
            where: { last_name: { [Sequelize.Op.substring]: last_name }, middle_name: { [Sequelize.Op.substring]: middle_name } },
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
    async getPatientsIO(first_name, middle_name){
        const res = await model.Patients.findAll({
            where: { first_name: { [Sequelize.Op.substring]: first_name }, middle_name: { [Sequelize.Op.substring]: middle_name } },
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
    async getPatientsFIO(last_name, first_name, middle_name){
        const res = await model.Patients.findAll({
            where: {last_name: { [Sequelize.Op.substring]: last_name }, first_name: { [Sequelize.Op.substring]: first_name }, middle_name: { [Sequelize.Op.substring]: middle_name } },
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

    async getPatientsA(address){
        const res = await model.Patients.findAll({
            where: { address: { [Sequelize.Op.substring]: address } },
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
    async getPatientsC(card_number){
        const res = await model.Patients.findAll({
            include:[

                { model: model.Authorization_info, required: true },
                { model: model.Medical_cards, required: true,
                    where: { card_number: { [Sequelize.Op.substring]: card_number } },
                    include:[{ model: model.Card_status, required: true }]
                },
                { model: model.Gender, required: true },
                { model: model.Age_group, required: true}
            ]
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }

    async getDoctors(){
        const res = await model.Doctors.findAll()
        if(!res) throw ApiError.BadRequest()
        return res
    }
    async getDoctorShifts(id_doctor){
        const res = await model.Appointments.findAll({
            required: true,
            include:[{
                model: model.Timetable,
                required: true,
                where:{id_doctor:id_doctor}
            },{
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
}

module.exports = new DoctorsService()