import {$authHost} from "./index";

export const fetchGetinfo = async () => {
    const {data} = await $authHost.get("api/userinfo/getinfo")
    let user = {id:data.id};
    user.first_name = data.first_name;
    user.last_name = data.last_name;
    user.middle_name = data.middle_name;
    user.birthday = data.birthday;
    user.place_of_work = data.place_of_work;
    user.address = data.address;
    user.gender = data.Gender.gender;
    user.genderid = data.id_gender;
    user.flat = data.flat;
    user.login = data.Authorization_info.login;
    user.phone = data.Authorization_info.phone;
    user.mail = data.Authorization_info.mail;
    user.card_number = data.Medical_card.card_number;
    user.card_status = data.Medical_card.Card_status.status;

    return user;
}
export const AddUserinfo = async (last_name, first_name, middle_name, birthday, id_gender, address, place_of_work, age) => {
    console.log(last_name, first_name, middle_name, birthday, id_gender, address, place_of_work, age)
    const {data} = await $authHost.post("api/userinfo/addinfo", {last_name, first_name, middle_name, birthday, id_gender, address, place_of_work, age})
    return data;
}

export const updInfo = async (data) => {
    console.log(data)
}
export const updBirthday = async (date) => {
    const {data} = await $authHost.post("api/userinfo/updbirthday", {date})
    return data;
}
export const updGender = async (gender) => {
    const {data} = await $authHost.post("api/userinfo/updgender", {gender})
    return data;
}
export const updAddress = async (address) => {
    const {data} = await $authHost.post("api/userinfo/updaddress", {address})
    return data;
}
export const updPlaceOfWork = async (place) => {
    const {data} = await $authHost.post("api/userinfo/updplace", {place})
    return data;
}
export const updLogin = async (login) => {
    const {data} = await $authHost.post("api/userinfo/updlogin", {login})
    return data;
}
export const updPhone = async (phone) => {
    const {data} = await $authHost.post("api/userinfo/updphone", {phone})
    return data;
}
export const updMail = async (mail) => {
    const {data} = await $authHost.post("api/userinfo/updmail", {mail})
    return data;
}