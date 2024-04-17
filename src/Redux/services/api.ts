import axios from "axios";
import { getItem } from "../helpers/persistance-storage";

axios.defaults.baseURL = 'https://futureskillshub.uz/api'

axios.interceptors.request.use(config => {

    if(!axios.AxiosError.ERR_BAD_REQUEST){
        const authorization = getItem('token') ? `Bearer ${getItem('token')}` : ''
        config.headers.Authorization = authorization
    }else{
        const authorization = getItem('tokenUser') ? `Bearer ${getItem('tokenUser')}` : ''
        config.headers.Authorization = authorization
    }
    return config
})

export default axios