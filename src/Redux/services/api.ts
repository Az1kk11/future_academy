import axios from "axios";
import { getItem } from "../helpers/persistance-storage";

axios.defaults.baseURL = 'https://backend.futureskillshub.uz/api'

axios.interceptors.request.use(config => {

    const authorization = getItem('tokenAdmin') ? `Bearer ${getItem('tokenAdmin')}` : ''
    config.headers.Authorization = authorization

    return config
})

export default axios