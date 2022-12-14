import {$host} from "./index";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import jwt_decode from "jwt-decode"

export const registration = async (login, mail, phone, password ) => {
    const {data} = await $host.post("api/auth/register", {login, mail, phone, password})
    const dataDecode =  jwt_decode(data.token);
    localStorage.setItem('access_token', data.token)
    localStorage.setItem('user_role', dataDecode.role)
    localStorage.setItem('user_id', dataDecode.id)
    return dataDecode;
}

export const login = async (login, password ) => {
    const {data} = await $host.post("api/auth" + LOGIN_ROUTE, {login, password})
    const dataDecode =  jwt_decode(data.tokenAccess);
    localStorage.setItem('access_token', data.tokenAccess)
    localStorage.setItem('refresh_token', data.tokenRefresh)
    localStorage.setItem('user_role', dataDecode.role)
    localStorage.setItem('user_id', dataDecode.id)
    return dataDecode;
}

export const refresh = async () => {
    const {data} = await $host.get('/api/auth/refresh', {headers: {Authorization: `Baerer ${localStorage.getItem('refresh_token')}`}})
    const dataDecode =  jwt_decode(data.tokenAccess);
    localStorage.setItem('access_token', data.tokenAccess)
    localStorage.setItem('refresh_token', data.tokenRefresh)
    localStorage.setItem('user_role', dataDecode.role)
    localStorage.setItem('user_id', dataDecode.id)
    return data
}

// export const check = async () => {
//     const response = await $host.post("auth/register", {})
//     return response;
// }