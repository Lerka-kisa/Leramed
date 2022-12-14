import jsonRoute from '../routes.json';
import axios from "axios";
import {refresh} from "./authAPI";

const $host = axios.create({
    baseURL: jsonRoute.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: jsonRoute.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`
    config.headers.accept = `application/json`

    return config
}

$authHost.interceptors.request.use(authInterceptor)
// $authHost.interceptors.response.use((config) => {return config}, async (error) => {
//     const originalRequest = error.config
//     if (error.response.status === 401){
//         try {
//             if (localStorage.getItem('refresh_token')) {
//                 await refresh()
//                 return $authHost.request(originalRequest)
//             }
//             else {
//                 localStorage.clear()
//                 window.location.href = '/login';
//             }
//         } catch (e){
//             localStorage.clear()
//             window.location.href = '/login';
//         }
//     }
//     else {
//         return error.response
//     }
// })

//$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}