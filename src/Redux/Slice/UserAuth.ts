import { setItem } from './../Helpers/persistance-storage';
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLoading: false,
    logedIn: false,
    error: null,
    user: null,
    profile: {}
}

export const authUserSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        siginUserStart: state => {
            state.isLoading = true
        },
        siginUserSuccess: (state, action) => {
            console.log(action);
            
            state.logedIn = true
            state.isLoading = false
            state.user = action.payload
            state.profile = action.payload            
            setItem('token', action.payload.token)
        },
        signUserFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        logoutUser: state => {
            state.user = null
            state.logedIn = false
        }
    }
})

export const {
    siginUserStart,
    siginUserSuccess,
    signUserFailure,
    logoutUser
} = authUserSlice.actions

export default authUserSlice.reducer