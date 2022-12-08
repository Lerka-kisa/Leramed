const model = require("./models");
const {DataTypes} = require("../DB");

exports.createCardStatus = (status) => {
    model.Card_status.create({status: status})
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

exports.createAgeGroup = (age_group) => {
    model.Age_group.create({group_name: age_group})
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

exports.createTypeOfShifts = (type_of_shift, start, end) => {
    model.Types_of_shifts.create({period_name: type_of_shift, beginning_of_period: start, end_of_period: end})
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

exports.createAnalysisNorm = (type, gender, agegroup, min, max, si_unit) => {
    model.Analysis_norms.create({id_analysis_type: type, id_gender: gender, id_agegroup: agegroup, min: min, max: max, SI_unit: si_unit  })
        .then(() =>  console.log("ok"))
        .catch(err => {
            console.log("not ok")
        })
}