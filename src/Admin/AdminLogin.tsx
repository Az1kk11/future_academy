import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import Union from '../image/registration/Union.png'
import facebook from '../image/registration/facebook.svg'
import grayline from '../image/registration/grayline.svg'
import instagram from '../image/registration/instagram.svg'
import telegram from '../image/registration/telegram.svg'
import vk from '../image/registration/vk.svg'
import youtube from '../image/registration/youtube.svg'
import clova01 from '../image/registration/Сова-01 1.png'

import '../Page/Registration/style.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AuthUserServices from '../Redux/services/userAuth'
import { selectAuthAdmin, siginAdminStart, siginAdminSuccess } from '../Redux/Slice/adminSlice'
import { toast } from 'react-toastify'
import { removeItem } from '../Redux/helpers/persistance-storage'

const AdminLogin = () => {
    const { logedIn } = useSelector(selectAuthAdmin)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ phone, setPhone ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    
    const loginHandler = async (e: React.FormEventHandler<HTMLFormElement> | any) => {
        e.preventDefault()

        removeItem('token')

        dispatch(siginAdminStart())
        try {
            const res = await AuthUserServices.adminLogin(password, phone)
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
                    onChange={e => setPhone(e.target.value)}
                    value={phone}
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

export default AdminLogin