import {$authHost, $host} from "./index";

export const fetchTypesOfShifts = async () => {
    const {data} = await $host.get("api/timetable/gettypeofshifts")
    return data;
}
export const fetchCardStatuses = async () => {
    const {data} = await $host.get("api/timetable/getcardstatus")
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

export const fetchGetTickets = async (id) => {
    const {data} = await $authHost.get("api/timetable/gettickets", {params:{id}})
    return data;
}
export const fetchMyTickets = async (id) => {
    const {data} = await $authHost.get("api/timetable/getmytickets")
    return data;
}

export const fetchEmptyTickets = async (id_doctor) => {
    const {data} = await $authHost.get("api/timetable/getempty", {params:{id_doctor}})
    return data;
}

export const fetchGetTicketsWithData = async (id) => {
    const {data} = await $authHost.get("api/timetable/getticketswithdata", {params:{id}})
    return data;
}

export const deleteApplication = async (id) => {
    const {data} = await $authHost.delete("api/timetable/application/delete", {params:{id}})
    return data;
}

export const setPatientInApp = async (id, id_patient) => {
    const {data} = await $authHost.post("api/timetable/application/add", {id,id_patient})
    return data;
}

export const updStatus = async (id_medcard,new_status) => {
    const {data} = await $authHost.post("api/timetable/updstatus", {id_medcard,new_status})
    return data;
}