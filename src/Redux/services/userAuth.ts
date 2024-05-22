import { RootState } from "../store";
import axios from "./api";

const services = {
    
    async adminLogin(phone: string, password: string) {
        const { data } = await axios.get(`/employee/login?password=${password}&phone=${phone}`)
        return data
    },
    async userRegister(user: object) {
        const { data } = await axios.post('/user/register', user)
        return data
    },

    async userLogin(user: object) {
        const { data } = await axios.post('/user/login', user)
        return data
    },

    async getme() {
        const { data } = await axios.get('/getme')
        return data
    },
    async users() {
        const { data } = await axios.get('/users')
        return data
    },
    async userDel(id: number) {
        const { data } = await axios.delete(`/user/delete/${id}`)
        return data
    }
}

export default services

export const selectAuth = (state: RootState) => state.AuthUser