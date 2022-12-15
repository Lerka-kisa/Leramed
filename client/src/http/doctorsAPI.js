import {$authHost} from "./index";

export const fetchDoctors = async () => {
    const {data} = await $authHost.get("api/doctors/doctors")
    return data;
}

export const fetchGetPatients = async (type, search, searchName, searchSurname, searchMiddle) => {
    console.log(type)
    const {data} = await $authHost.get("api/doctors/patients", {params:{type, search, searchName, searchSurname, searchMiddle}})
    let patients = [];
    for (let i = 0; i < data.length; i++) {
        patients[i] = {FIO: data[i].last_name + " " + data[i].first_name + " " +data[i].middle_name + " "}
        patients[i].birthday = data[i].birthday
        patients[i].address = data[i].address
        patients[i].card_number = data[i].Medical_card.card_number
        patients[i].card_status = data[i].Medical_card.Card_status.status
        patients[i].id = data[i].id
        patients[i].id_medcard = data[i].id_medcard
    }
    return patients;
}
