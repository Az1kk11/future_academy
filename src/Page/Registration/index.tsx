import React, { useEffect, useState } from 'react'
import './style.css'
import { motion } from 'framer-motion'

import Union from '../../image/registration/Union.png'
import facebook from '../../image/registration/facebook.svg'
import grayline from '../../image/registration/grayline.svg'
import instagram from '../../image/registration/instagram.svg'
import telegram from '../../image/registration/telegram.svg'
import vk from '../../image/registration/vk.svg'
import youtube from '../../image/registration/youtube.svg'
import clova01 from '../../image/registration/Сова-01 1.png'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AuthUserServices from '../../Redux/services/userAuth'

import { toast } from 'react-toastify'
import { removeItem } from '../../Redux/helpers/persistance-storage'
import { siginSuccess } from '../../Redux/Slice/UserAuth'

export const Registration: React.FC = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [lore, setLore] = useState(false)
  const navigate = useNavigate()
  

  const rigisterHandler = async (e: React.FormEventHandler<HTMLFormElement> | any) => {
    e.preventDefault()

    const userRegister = new FormData()
    userRegister.set('email', email)
    userRegister.set('name', name)
    userRegister.set('password', password)

    try {
      const res = await AuthUserServices.userRegister(userRegister)
      toast.success(res.message)
      if (res?.message === 'Successful created') {
        setLore(lore)
      } else {
        setLore(!lore)
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  }

  const loginHandler = async (e: React.FormEventHandler<HTMLFormElement> | any) => {
    e.preventDefault()

    const userLoginForm = new FormData()
    userLoginForm.set('email', email)
    userLoginForm.set('password', password)
    try {
      const res = await AuthUserServices.userLogin(userLoginForm)
      dispatch(siginSuccess(res))
      toast.success(res.message)
      navigate('/')
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className="registration">
      <div>
        <img src={Union} alt="" className="registration__union-icon" />
        <span className="registration__message">Siz Future Academy'di saylap adaspadıńız! Biz sizge sapalı bilim beremiz</span>
      </div>
      <img src={clova01} alt="" className="registration__cova-image" />
      {lore ?
        <form onSubmit={loginHandler} className="registration__form">
          <span className="registration__title">Логин</span>
          <img src={grayline} alt="" className="registration__gray-line" />

          <input
            type="text"
            id="fname-input"
            className="registration__first-name"
            placeholder="Введите почта"
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
          />

          <input
            type="password"
            id="name-input"
            className="registration__name"
            placeholder="Введите пароль"
            required
            onChange={e => setPassword(e.target.value)}
            value={password}
          />

          <motion.button
            whileTap={{ scale: .9 }}
            className='add-acc'
            onClick={() => setLore(false)}
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
        :
        <form onSubmit={rigisterHandler} className="registration__form">
          <span className="registration__title">Kursqa registraciyadan ótiw</span>
          <img src={grayline} alt="" className="registration__gray-line" />

          <input
            type="text"
            id="fname-input"
            className="registration__first-name"
            placeholder="Введите почта"
            onChange={e => setEmail(e.target.value)}
            value={email}
            required
          />

          <input
            type='password'
            id="tel-input"
            className="registration__first-name"
            placeholder="Введите пароль"
            onChange={e => setPassword(e.target.value)}
            value={password}
            required
          />

          <input
            type="text"
            id="name-input"
            className="registration__first-name"
            placeholder="Введите имя"
            onChange={e => setName(e.target.value)}
            value={name}
            required
          />
          <motion.button
            whileTap={{ scale: .9 }}
            className='add-acc'
            onClick={() => setLore(true)}
          >
            У вас уже есть аккаунт?
          </motion.button>
          <label htmlFor="" className="registration__desc">Войти с помощью соцсетей:</label>
          <div className="registration__social-icons">
            <a href="#"><img src={vk} alt="" className="registration__vk" /></a>
            <a href="#"><img src={instagram} alt="" className="registration__instagram" /></a>
            <a href="#"><img src={facebook} alt="" className="registration__facebook" /></a>
            <a href="#"><img src={youtube} alt="" className="registration__youtube" /></a>
            <a href="#"><img src={telegram} alt="" className="registration__box__social-icons__telegram" /></a>
          </div>
          <motion.button whileTap={{ scale: .9 }} type="submit" className="registration__button">Регистрация</motion.button>
        </form>
      }
    </div>
  )
}