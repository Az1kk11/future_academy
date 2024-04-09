import { RootState } from "../Store";
import axios from "./api";

const AuthUserServices = {
    async userRegister(user: object) {
        const { data } = await axios.post('/user/register', user)
        return data
    },

    async userLogin(user: string) {
        const { data } = await axios.post('/user/login', user)
        return data
    }
}

export default AuthUserServices

export const selectAuth = (state: RootState) => state.AuthUser