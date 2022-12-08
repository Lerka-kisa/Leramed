import jsonRoute from '../routes.json';
import axios from "axios";

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

export {
    $host,
    $authHost
}