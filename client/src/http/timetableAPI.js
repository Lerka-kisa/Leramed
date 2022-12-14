import {$authHost} from "./index";

export const fetchTypesOfShifts = async () => {
    const {data} = await $authHost.get("api/timetable/gettypeofshifts")
    return data;
}

export const fetchSectors = async () => {
    const {data} = await $authHost.get("api/timetable/getsectors")
    return data;
}

export const fetchShifts = async () => {
    const {data} = await $authHost.get("api/timetable/getshifts")
    return data;
}

export const addTimetable = async (date, id_type_of_shift, id_doctor) => {
    const {data} = await $authHost.post("api/timetable/addtimetable", {date, id_type_of_shift, id_doctor})
    return data;
}

export const fetchGetEmptyTickets = async (id) => {
    const {data} = await $authHost.get("api/timetable/getemptytickets", {params:{id}})
    return data;
}

export const fetchGetCountEmptyTickets = async (id) => {
    const {data} = await $authHost.get("api/timetable/getemptytickets/count", {params:{id}})
    console.log("empty"+data)
    return data;
}

export const fetchGetTickets = async (id) => {
    const {data} = await $authHost.get("api/timetable/gettickets", {params:{id}})
    return data;
}

export const fetchGetTicketsWithData = async (id) => {
    const {data} = await $authHost.get("api/timetable/getticketswithdata", {params:{id}})
    return data;
}

export const fetchGetCountTickets = async (id) => {
    const {data} = await $authHost.get("api/timetable/gettickets/count", {params:{id}})
    console.log("fff" + data)
    return data;
}

export const deleteApplication = async (id) => {
    const {data} = await $authHost.get("api/timetable/application/delete", {params:{id}})
    return data;
}