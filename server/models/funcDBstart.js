const model = require("./models");
const {DataTypes} = require("../DB");
const ApiError = require("../APIerror");
const crypto = require("crypto");

exports.createCardStatus = (status) => {
    model.Card_status.create({status: status})
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}

exports.createMedicalCard = (card_number, card_status) => {
    model.Medical_cards.create({card_number:card_number, card_status:card_status})
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}

exports.createTypeOfAnalysis = (type_of_analyze) => {
    model.Types_of_analysis.create({name_analysis: type_of_analyze})
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}

exports.createAgeGroup = (age_group, min, max) => {
    model.Age_group.create({
        group_name: age_group,
        min: min,
        max: max
    })
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}

exports.createGender = (gender) => {
    model.Gender.create({gender: gender})
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}

exports.createNormScore = (score) => {
    model.Norms_scores.create({norm_score: score})
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}

exports.createAnalysisNorm = (type, gender, agegroup, min, max, si_unit) => {
    model.Analysis_norms.create({id_analysis_type: type, id_gender: gender, id_agegroup: agegroup, min: min, max: max, SI_unit: si_unit  })
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}

exports.createAnalysisResult = (id_medcard, id_analysis_type, id_norm, result, norm_score, recommendation, date) => {
    model.Analysis_results.create(
        {
            id_medcard:id_medcard,
            id_analysis_type:id_analysis_type,
            id_norm:id_norm,
            result:result,
            id_norm_score:norm_score,
            date: date,
            recommendation:recommendation})
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}

exports.createMedicalRecord = (id_medcard, date, record, recommendation) => {
    model.Medcards_records.create(
        {
            id_medcard:id_medcard,
            date:date,
            record:record,
            recommendation:recommendation
        })
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}

exports.createAutorizationInfo = (login, password, mail, phone, role) => {
    let hashPassword = crypto.createHash('md5').update(password).digest('hex')
    model.Authorization_info.create(
        {
            login: login,
            password: hashPassword,
            mail: mail,
            phone: phone,
            role: role
        }
    )
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}

exports.createDoctors = (id_auth, first_name, last_name, middle_name, specialization, photo) => {
    model.Doctors.create(
        {
            id_auth:id_auth,
            first_name:first_name,
            last_name:last_name,
            middle_name:middle_name,
            specialization:specialization,
            photo:photo})
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}

exports.createSectors = (id_doctor) => {
    model.Sectors.create({id_doctor:id_doctor})
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}

// exports.createAddress = (id_sector, city, street, house) => {
//     model.Addresses.create({id_sector:id_sector, city:city, street:street, house:house})
//         .then(() =>  console.log("ok"))
//         .catch(err => {
//             console.log("not ok")
//         })
// }

exports.createTypeOfShifts = (type_of_shift, start, end) => {
    model.Types_of_shifts.create({period_name: type_of_shift, beginning_of_period: start, end_of_period: end})
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}

//TODO 9) add id_doctor
exports.createTimetable = (id_type_of_shift,id_doctor, date) => {
    model.Timetable.create({id_type_of_shift:id_type_of_shift, id_doctor:id_doctor, date:date})
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}

exports.createPatient = (id_auth, id_medcard, id_agegroup, first_name, last_name, middle_name, birthday, id_gender, id_sector, address, place_of_work) => {
    model.Patients.create(
        {
            id_auth:id_auth,
            id_medcard:id_medcard,
            id_agegroup:id_agegroup,
            first_name:first_name,
            last_name:last_name,
            middle_name:middle_name,
            birthday:birthday,
            id_gender:id_gender,
            //id_address:id_address,
            id_sector:id_sector,
            //flat:flat,
            address:address,
            place_of_work:place_of_work
        })
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}

exports.createHouseCalls = (id_patient, id_record) => {
    model.House_calls.create({id_patient:id_patient, id_record:id_record})
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}

exports.createTypeOfAppointment = (type_of_appointment) => {
    model.Types_of_appointments.create({name: type_of_appointment})
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}

exports.createAppointments = (id_shift, id_patient, id_type_of_appointment, id_record, talon_number, time) => {
    model.Appointments.create({id_shift:id_shift, id_patient:id_patient, id_type_of_appointment:id_type_of_appointment, id_record:id_record, talon_number:talon_number, time:time})
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}
