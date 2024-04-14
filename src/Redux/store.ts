import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import AuthUser from './Slice/UserAuth'

export const store = configureStore({
    reducer: {
        AuthUser
    }
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()