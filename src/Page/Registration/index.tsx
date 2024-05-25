import React, { ChangeEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import AuthUserServices from '../../Redux/services/userAuth'
import { toast } from 'react-toastify'

import Union from '../../image/registration/Union.png'
import facebook from '../../image/registration/facebook.svg'
import grayline from '../../image/registration/grayline.svg'
import instagram from '../../image/registration/instagram.svg'
import telegram from '../../image/registration/telegram.svg'
import vk from '../../image/registration/vk.svg'
import youtube from '../../image/registration/youtube.svg'
import clova01 from '../../image/registration/Сова-01 1.png'

import './style.css'

export const coursesArr = [
  "Robototexnika",
  "Oyın jaratıw",
  "Scratch",
  "Arduino",
  "Lego Wedo",
  "Python Tynker",
  "Unity",
  "Shaxmat",
  "Programmalastırıw",
  "IT English",
  "Front-end",
  "Back-end",
  "Grafik Dizayn",
  "Game Development",
  "Python",
  "Android",
  "С++ programmalastırıw",
  "С# programmalastırıw",
  "Kiber qáwipsizlik",
  "Soft skills",
  "Full-stack",
  "Social Media Marketing",
  "Internet Marketing",
  "Java",
]

export const Registration: React.FC = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [courses, setCourses] = useState('')
  const navigate = useNavigate()

  const rigisterHandler = async (e: React.FormEventHandler<HTMLFormElement> | any) => {
    e.preventDefault()

    const userRegister = new FormData()
    userRegister.set('email', email)
    userRegister.set('name', name)
    userRegister.set('course', courses)

    try {
      const res = await AuthUserServices.userRegister(userRegister)
      toast.success(res.message)
      if (res.message === 'Sucessfully registered') {
        navigate('/')
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <div className="registration">
      <div>
        <img src={Union} alt="" className="registration__union-icon" />
        <span className="registration__message">Siz Future Academy'di saylap adaspadıńız! Biz sizge sapalı bilim beremiz</span>
      </div>
      <img src={clova01} alt="" className="registration__cova-image" />

      <form onSubmit={rigisterHandler} className="registration__form">
        <span className="registration__title">Kursqa registraciyadan ótiw</span>
        <img src={grayline} alt="" className="registration__gray-line" />

        <input
          type="text"
          id="fname-input"
          className="registration__first-name"
          placeholder="Elektron poshtan'ız"
          onChange={e => setEmail(e.target.value)}
          value={email}
          required
        />

        <input
          type="text"
          id="name-input"
          className="registration__first-name"
          placeholder="F. A. Á"
          onChange={e => setName(e.target.value)}
          value={name}
          required
        />

        <select
          onChange={(e: ChangeEvent | any) => setCourses(e.target.value)}
          className='selectArr'
          required
        >
          {coursesArr.map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>

        <label htmlFor="" className="registration__desc"> Bizdin' social tarmaqlarımızdı guzetip barin</label>
        <div className="registration__social-icons">
          <a href="#"><img src={vk} alt="" className="registration__vk" /></a>
          <a href="#"><img src={instagram} alt="" className="registration__instagram" /></a>
          <a href="#"><img src={facebook} alt="" className="registration__facebook" /></a>
          <a href="#"><img src={youtube} alt="" className="registration__youtube" /></a>
          <a href="#"><img src={telegram} alt="" className="registration__box__social-icons__telegram" /></a>
        </div>
        <motion.button whileTap={{ scale: .9 }} type="submit" className="registration__button">Dizimge alıw</motion.button>
      </form>

    </div>
  )
}