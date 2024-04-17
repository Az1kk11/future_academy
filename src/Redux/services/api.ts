import axios from "axios";
import { getItem } from "../helpers/persistance-storage";

axios.defaults.baseURL = 'https://futureskillshub.uz/api'

axios.interceptors.request.use(config => {

        const authorization = getItem('token') ? `Bearer ${getItem('token')}` : ''
        config.headers.Authorization = authorization
    
    return config
})

export default axios