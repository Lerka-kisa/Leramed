const model = require("../models/models");
const ApiError = require("../APIerror");
const Sequelize = require("sequelize");
const {where} = require("sequelize");

class AnalysisService {
    //
    async getAnalysis(id){
        const res = await model.Analysis_results.findAll({
            include:[{
                model: model.Medical_cards,
                required: true,
                include:[{
                    model: model.Patients,
                    required: true,
                    where: {id:id}
                }]},{
                    model: model.Types_of_analysis, required: true
                },{
                    model: model.Analysis_norms, required: true,
                },{
                    model: model.Norms_scores, required: true
            }]
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }

    async addResult(id_medcard, date, id_analysis_type, result, recommendation){
        const res = await model.Analysis_results.create({
            id_medcard: id_medcard,
            date: date,
            id_analysis_type: id_analysis_type,
            result: result,
            recommendation: recommendation,
            id_norm:1,
            id_norm_score:1
        })
        if(!res) throw ApiError.BadRequest()
        return res
    }
    //page with analysis_norms
    async getTypesOfAnalysis(){
        const data = await model.Types_of_analysis.findAll()

        if(!data) throw ApiError.BadRequest()
        return data
    }
    async getGenders(){
        const data = await model.Gender.findAll()

        if(!data) throw ApiError.BadRequest()
        return data
    }
    async getAgeGroups(){
        const data = await model.Age_group.findAll()

        if(!data) throw ApiError.BadRequest()
        return data
    }
    async getAllAnalysisNorms(){
        const data = await model.Analysis_norms.findAll({
            include:[
                { model: model.Types_of_analysis, required: true },
                { model: model.Gender, required: true },
                { model: model.Age_group, required: true}
            ]
        })

        if(!data) throw ApiError.BadRequest()
        return data
    }
    async getAnalysisNormsT(typeId){
        const data = await model.Analysis_norms.findAll({
            where: {id_analysis_type: typeId},
            include:[
                { model: model.Types_of_analysis, required: true },
                { model: model.Gender, required: true },
                { model: model.Age_group, required: true}
            ]
        })

        if(!data) throw ApiError.BadRequest()
        return data
    }
    async getAnalysisNormsG(genderId){
        const data = await model.Analysis_norms.findAll({
            where: {id_gender: genderId},
            include:[
                { model: model.Types_of_analysis, required: true },
                { model: model.Gender, required: true },
                { model: model.Age_group, required: true}
            ]
        })

        if(!data) throw ApiError.BadRequest()
        return data
    }
    async getAnalysisNormsA(agegroupId){
        const data = await model.Analysis_norms.findAll({
            where: {id_agegroup: agegroupId},
            include:[
                { model: model.Types_of_analysis, required: true },
                { model: model.Gender, required: true },
                { model: model.Age_group, required: true}
            ]
        })

        if(!data) throw ApiError.BadRequest()
        return data
    }
    async getAnalysisNormsTG(typeId, genderId){
        const data = await model.Analysis_norms.findAll({
            where: {id_analysis_type: typeId, id_gender: genderId},
            include:[
                { model: model.Types_of_analysis, required: true },
                { model: model.Gender, required: true },
                { model: model.Age_group, required: true}
            ]
        })

        if(!data) throw ApiError.BadRequest()
        return data
    }
    async getAnalysisNormsTA(typeId, agegroupId){
        const data = await model.Analysis_norms.findAll({
            where: {id_analysis_type: typeId, id_agegroup: agegroupId},
            include:[
                { model: model.Types_of_analysis, required: true },
                { model: model.Gender, required: true },
                { model: model.Age_group, required: true}
            ]
        })

        if(!data) throw ApiError.BadRequest()
        return data
    }
    async getAnalysisNormsGA(genderId, agegroupId){
        const data = await model.Analysis_norms.findAll({
            where: {id_gender: genderId, id_agegroup: agegroupId},
            include:[
                { model: model.Types_of_analysis, required: true },
                { model: model.Gender, required: true },
                { model: model.Age_group, required: true}
            ]
        })

        if(!data) throw ApiError.BadRequest()
        return data
    }
    async getAnalysisNormsTGA(typeId, genderId, agegroupId){
        const data = await model.Analysis_norms.findAll({
            where: {id_analysis_type: typeId, id_gender: genderId, id_agegroup: agegroupId},
            include:[
                { model: model.Types_of_analysis, required: true },
                { model: model.Gender, required: true },
                { model: model.Age_group, required: true}
            ]
        })

        if(!data) throw ApiError.BadRequest()
        return data
    }

}

module.exports = new AnalysisService()
