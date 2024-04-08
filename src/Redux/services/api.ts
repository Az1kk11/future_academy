import axios from "axios";
import { getItem } from "../Helpers/persistance-storage";

axios.defaults.baseURL = 'https://futureskillshub.uz'

axios.interceptors.request.use(config => {
    const token = getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    config.headers.Authorization = authorization
    return config
})

export default axios