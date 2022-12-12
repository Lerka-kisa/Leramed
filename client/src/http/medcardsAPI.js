import {$authHost} from "./index";

export const fetchGetMedcard = async () => {
    const {data} = await $authHost.get("api/medcards/getmedcard")
    return data;
}
export const fetchGetMedcardId = async (id) => {
    const {data} = await $authHost.get("api/medcards/getmedcardid", {params:{id}})
    return data;
}
export const addRecord = async (id_medcard, date, record, recommendation) => {
    const {data} = await $authHost.post("api/medcards/addRecord", {id_medcard, date, record, recommendation})
    return data;
}