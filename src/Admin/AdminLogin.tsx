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

const AdminLogin = () => {
    const { logedIn } = useSelector(selectAuthAdmin)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ phone, setPhone ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    
    const loginHandler = async (e: React.FormEventHandler<HTMLFormElement> | any) => {
        e.preventDefault()
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
            <div>
                <img src={Union} alt="" className="registration__union-icon" />
                <span className="registration__message">Войдите в систему или зарегистрируйтесь, если у вас ещё нет аккаунта</span>
            </div>
            <img src={clova01} alt="" className="registration__cova-image" />
            <form onSubmit={loginHandler} className="registration__form">
                <span className="registration__title">Логин</span>
                <img src={grayline} alt="" className="registration__gray-line" />

                <input
                    type="text"
                    id="fname-input"
                    className="registration__first-name"
                    placeholder="phone"
                    required
                    onChange={e => setPhone(e.target.value)}
                    value={phone}
                />

                <input
                    type="password"
                    id="name-input"
                    className="registration__name"
                    placeholder="password"
                    required
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />

                <motion.button
                    whileTap={{ scale: .9 }}
                    className='add-acc'
                    onClick={() => navigate('/registration')}
                >
                    Создать новый аккаунт
                </motion.button>
                <label htmlFor="" className="registration__desc">Войти с помощью соцсетей:</label>
                <div className="registration__social-icons">
                    <a href="#"><img src={vk} alt="" className="registration__vk" /></a>
                    <a href="#"><img src={instagram} alt="" className="registration__instagram" /></a>
                    <a href="#"><img src={facebook} alt="" className="registration__facebook" /></a>
                    <a href="#"><img src={youtube} alt="" className="registration__youtube" /></a>
                    <a href="#"><img src={telegram} alt="" className="registration__box__social-icons__telegram" /></a>
                </div>
                <motion.button whileTap={{ scale: .9 }} type="submit" className="registration__button">Логин</motion.button>
            </form>
        </div>
    )
}

export default AdminLogin