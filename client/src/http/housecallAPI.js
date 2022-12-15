import {$authHost} from "./index";

export const fetchAll = async () => {
    const {data} = await $authHost.get("api/housecall/all")
    return data;
}

export const addHousecall = async (date, id_patient, remark) => {
    const {data} = await $authHost.post("api/housecall/add", {date, id_patient, remark})
    return data;
}

export const updHousecall = async (id, remark) => {
    const {data} = await $authHost.post("api/housecall/upd", {id, remark})
    return data;
}

export const delHousecall = async (id) => {
    const {data} = await $authHost.delete("api/housecall/del", {params:{id}})
    return data;
}