import {$authHost} from "./index";

export const fetchTypes = async () => {
    const {data} = await $authHost.get("api/analysis/getTypeOfAnalysis")
    return data;
}

export const fetchGenders = async () => {
    const {data} = await $authHost.get("api/analysis/getGenders")
    return data;
}

export const fetchAgegroups = async () => {
    const {data} = await $authHost.get("api/analysis/getAgeGroups")
    return data;
}

export const fetchAnalysisNorms = async (typeId) => {
    const {data} = await $authHost.get("api/analysis/getAnalysisNorms", {params: {typeId}})
    return data;
}