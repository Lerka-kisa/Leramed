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
            where:{id_doctor:id_doctor}
        })
        if(!res) return null;//throw ApiError.NotFound()
        return res
    }

}

module.exports = new TicketsService()