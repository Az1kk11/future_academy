import { RootState } from "../store";
import axios from "./api";

const services = {

    async adminLogin(adminLoginArr: object) {
        const { data } = await axios.post(`/employee/login`, adminLoginArr)
        return data
    },

    async userRegister(user: object) {
        const { data } = await axios.post('/user/register', user)
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

    async user(id: string) {
        const { data } = await axios.get(`/user/${id}`)
        return data
    },

    async userDel(id: number) {
        const { data } = await axios.delete(`/user/delete/${id}`)
        return data
    },

    async userPut(id: number, userArr: object) {
        const { data } = await axios.put(`/user/update/${id}`, userArr)
        return data
    },
}

export default services