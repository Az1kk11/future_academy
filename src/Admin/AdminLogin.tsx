import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import grayline from '../image/registration/grayline.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AuthUserServices from '../Redux/services/userAuth'
import { selectAuthAdmin, siginAdminStart, siginAdminSuccess } from '../Redux/Slice/adminSlice'
import { toast } from 'react-toastify'
import { removeItem } from '../Redux/helpers/persistance-storage'


export const AdminLogin = () => {
    const { logedIn } = useSelector(selectAuthAdmin)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    
    const loginHandler = async (e: React.FormEventHandler<HTMLFormElement> | any) => {
        e.preventDefault()

        removeItem('token')

        dispatch(siginAdminStart())
        const adminLoginArr = new FormData();
        adminLoginArr.set('email', email)
        adminLoginArr.set('password', password)
        try {
            const res = await AuthUserServices.adminLogin(adminLoginArr)
            dispatch(siginAdminSuccess(res.token))
            toast.success(res.message)
        } catch (error: any) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        if (logedIn) {
            navigate('/admin/users')
        }
    }, [logedIn])

    return (
        <div className="registration admin-login">
            <form onSubmit={loginHandler} className="registration__form">
                <span className="registration__title">Admin</span>
                <img src={grayline} alt="" className="registration__gray-line" />

                <input
                    type="text"
                    id="fname-input"
                    className="registration__first-name"
                    placeholder="Login"
                    required
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />

                <input
                    type="password"
                    id="name-input"
                    className="registration__name"
                    placeholder="Parol"
                    required
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />

                <motion.button whileTap={{ scale: .9 }} type="submit" className="registration__button">Kiriw</motion.button>
            </form>
        </div>
    )
}
