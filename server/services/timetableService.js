const model = require("../models/models");
const ApiError = require("../APIerror");
const Sequelize = require("sequelize");

class TimetableService {
    async getShifts(){
        const today = new Date(new Date().setDate(new Date().getDate()));
        const res = await model.Timetable.findAll({
            order:[['date'],['id_type_of_shift'],['id_doctor']],
            where:{
                date:{
                    [Sequelize.Op.gte]:today
                }
            },
            include:[{
                model: model.Types_of_shifts,
                order:[],
                required: true,
            },{
                model: model.Doctors,
                required: true,
            }]
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }
    async getShiftsForDoctor(id_doctor){
        const today = new Date(new Date().setDate(new Date().getDate()));
        const res = await model.Timetable.findAll({
            order:[['date'],['id_type_of_shift'],['id_doctor']],
            where:{
                date:{
                    [Sequelize.Op.gte]:today
                }, id_doctor:id_doctor
            },
            include:[{
                model: model.Types_of_shifts,
                order:[],
                required: true,
            },{
                model: model.Doctors,
                required: true,
            }]
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }
    async getTickets(id){
        const res = await model.Appointments.findAll({
            where:{id_shift:id}
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }
    async getEmptyTickets(id_doctor){
        const today = new Date(new Date().setDate(new Date().getDate()));
        const res = await model.Appointments.findAll({
            where:{id_patient:null},
            include:{
                model:model.Timetable, required: true,
                where:{
                    date:{
                        [Sequelize.Op.gte]:today
                    }, id_doctor:id_doctor
                },
            }
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }
    async getPatientsTickets(id_patient){
        const today = new Date(new Date().setDate(new Date().getDate()));
        const res = await model.Appointments.findAll({
            where:{id_patient:id_patient},
            include:{
                model:model.Timetable, required: true,
                where:{
                    date:{
                        [Sequelize.Op.gte]:today
                    }
                },
                include: {
                    model: model.Doctors, required: true,
                }
            }
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }
    async getTicketsWithData(id){
        const res = await model.Appointments.findAll({
            where:{id_shift:id},
            include:[{
                model: model.Patients,
                required: true,
                include:[{
                    model: model.Medical_cards,
                    required: true,
                    include:[{
                        model: model.Card_status,
                        required: true,
                    }]
                }]
            }]
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }
    async getTypeOfShifts(){
        const res = await model.Types_of_shifts.findAll()
        if(!res) throw ApiError.BadRequest()
        return res
    }
    async getSectors(){
        const res = await model.Sectors.findAll()
        if(!res) throw ApiError.BadRequest()
        return res
    }
    async addTimetable(date, id_type_of_shift, id_doctor){
        const res = await model.Timetable.create({
            date:date,
            id_type_of_shift:id_type_of_shift,
            id_doctor:id_doctor
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }
    async addApp(id_shift, start, end){
        let res = {}
        for (let i = 0; start.toLocaleTimeString() !== end.toLocaleTimeString(); i++) {
            res = await model.Appointments.create({
                talon_number:i+1,
                time:start.toLocaleTimeString(),
                id_shift:id_shift
            })
            start.setTime(start.getTime() + 15 * 60 * 1000)
        }

        if(!res) throw ApiError.BadRequest()
        return res
    }
    async getTime(id){
        const res = await model.Types_of_shifts.findByPk(id)
        if(!res) throw ApiError.BadRequest()

        if(!res) throw ApiError.BadRequest()
        return res
    }
    async delApp(id){
        const res = await model.Appointments.update({
        id_patient:null,id_record:null
        },{
            where:{id:id}
        })
        if(!res) throw ApiError.BadRequest()

        return res
    }
    async setPatientInApp(id,id_pacient){
        const res = await model.Appointments.update({
        id_patient:id_pacient
        },{
            where:{id:id}
        })
        if(!res) throw ApiError.BadRequest()

        return res
    }

    async getCardStatus(){
        const statuses = await model.Card_status.findAll()
        if(!statuses) throw ApiError.BadRequest()
        return statuses
    }
    async updStatusCard(id_medcard,new_status){
        const res = await model.Medical_cards.update({
            card_status:new_status
        },{where:{id:id_medcard}}
        )
        if(!res) throw ApiError.BadRequest()

        return res
    }

}

module.exports = new TimetableService()