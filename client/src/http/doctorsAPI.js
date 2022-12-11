import {$authHost} from "./index";

export const fetchGetPatients = async () => {
    const {data} = await $authHost.get("api/doctors/patients")
    let patients = [];
    for (let i = 0; i < data.length; i++) {
        patients[i] = {FIO: data[i].last_name + " " + data[i].first_name + " " +data[i].middle_name + " "}
        patients[i].birthday = data[i].birthday
        patients[i].address = data[i].address
        patients[i].card_number = data[i].Medical_card.card_number
        patients[i].card_status = data[i].Medical_card.Card_status.status
        // patients[i].phone = data[i].Authorization_info.phone

    }
    return patients;
}
