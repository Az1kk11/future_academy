import { RootState } from "../store";
import axios from "./api";

const AuthUserServices = {
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
    }
}

export default AuthUserServices

export const selectAuth = (state: RootState) => state.AuthUser