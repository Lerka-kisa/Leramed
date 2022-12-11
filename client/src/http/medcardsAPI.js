import {$authHost} from "./index";

export const fetchGetMedcard = async () => {
    const {data} = await $authHost.get("api/medcards/getonemedcard")
    return data;
}
export const fetchGetOneRecord = async (id) => {
    const {data} = await $authHost.get("api/medcards/onerecord", {id})
    return data;
}