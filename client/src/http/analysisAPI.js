import {$authHost, $host} from "./index";

export const fetchTypes = async () => {
    const {data} = await $authHost.get("api/analysis/getTypeOfAnalysis")
    return data;
}

export const fetchGenders = async () => {
    const {data} = await $host.get("api/analysis/getGenders")
    return data;
}

export const fetchAgegroups = async () => {
    const {data} = await $authHost.get("api/analysis/getAgeGroups")
    return data;
}

export const fetchAnalysisNorms = async (typeId, genderId, agegroupId) => {
    const {data} = await $authHost.get("api/analysis/getAnalysisNorms", {
        params: {typeId, genderId, agegroupId}
    })
    return data;
}

export const fetchGetAnalysis = async () => {
    const {data} = await $authHost.get("api/analysis/getanalysis")
    return convertAnalysis(data)
}
export const fetchGetAnalysisId = async (id) => {
    const {data} = await $authHost.get("api/analysis/getanalysisid", {params:{id}})
    return convertAnalysis(data)
}

export const addResult = async (id_medcard, date, id_analysis_type, result, recommendation) => {
    const {data} = await $authHost.post("api/analysis/addresult", {id_medcard, date, id_analysis_type, result, recommendation})
    return data;
}

const convertAnalysis = (data) => {
    let analysis = [];
    for (let i = 0; i < data.length; i++) {
        analysis[i] = {FIO: data[i].Medical_card.Patient.last_name + " " + data[i].Medical_card.Patient.first_name + " " +data[i].Medical_card.Patient.middle_name + " "}
        analysis[i].card_number = data[i].Medical_card.card_number
        analysis[i].name_analysis = data[i].Types_of_analysis.name_analysis
        analysis[i].id = data[i].id
        analysis[i].result = data[i].result
        analysis[i].norm = data[i].Norms_score.norm_score
        analysis[i].recommendation = data[i].recommendation
        analysis[i].date = data[i].date
    }

    return analysis;
}