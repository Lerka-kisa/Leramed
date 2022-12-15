import {$host} from "./index";
import {LOGIN_ROUTE} from "../utils/consts";
import jwt_decode from "jwt-decode"

export const registration = async (login, mail, phone, password ) => {
    const {data} = await $host.post("api/auth/register", {login, mail, phone, password})
    return addItem(data);
}

export const login = async (login, password ) => {
    const {data} = await $host.post("api/auth/login", {login, password})
    return addItem(data);
}

export const refresh = async () => {
    const {data} = await $host.get('/api/auth/refresh', {headers: {Authorization: `Baerer ${localStorage.getItem('refresh_token')}`}})
    return addItem(data);
}
const addItem = (data) => {
    const dataDecode =  jwt_decode(data.tokenAccess);
    localStorage.setItem('access_token', data.tokenAccess)
    localStorage.setItem('refresh_token', data.tokenRefresh)
    localStorage.setItem('user_role', dataDecode.role)
    localStorage.setItem('user_id', dataDecode.id)
    localStorage.setItem('id_acc', dataDecode.id_acc)
    return dataDecode;
}