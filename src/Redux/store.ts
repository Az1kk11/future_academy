import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import AuthAdmin from './Slice/adminSlice'

export const store = configureStore({
    reducer: {
        AuthAdmin
    }
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()