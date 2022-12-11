const model = require("../models/models");
const ApiError = require("../APIerror");
const Sequelize = require("sequelize");

class TicketsService {
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

}

module.exports = new TicketsService()