import React from 'react'
import './style.css'

import Union from '../../image/registration/Union.png'
import facebook from '../../image/registration/facebook.svg'
import gradientline from '../../image/registration/gradientline.svg'
import grayline from '../../image/registration/grayline.svg'
import instagram from '../../image/registration/instagram.svg'
import telegram from '../../image/registration/telegram.svg'
import vk from '../../image/registration/vk.svg'
import youtube from '../../image/registration/youtube.svg'
import clova01 from '../../image/registration/Сова-01 1.png'

export const Registration: React.FC = () => {

  return (
    <div className="registration">
      <div>
        <img src={Union} alt="" className="registration__union-icon" />
        <span className="registration__message">Войдите в систему или зарегистрируйтесь, если у вас ещё нет аккаунта</span>
      </div>
      <img src={clova01} alt="" className="registration__cova-image" />
      <form action="" className="registration__form">
        <span className="registration__title">Регистрация</span>
        <img src={grayline} alt="" className="registration__gray-line" />
        <input type="text" id="fname-input" className="registration__first-name" placeholder="Введите фамилия" required />
        <input type="text" id="name-input" className="registration__name" placeholder="Введите имя" required />
        <input type="tel" name="" id="tel-input" className="registration__phone" placeholder="Введите телефон номер" required />
        <label htmlFor="" className="registration__desc">Войти с помощью соцсетей:</label>
        <div className="registration__social-icons">
          <a href="#"><img src={vk} alt="" className="registration__vk" /></a>
          <a href="#"><img src={instagram} alt="" className="registration__instagram" /></a>
          <a href="#"><img src={facebook} alt="" className="registration__facebook" /></a>
          <a href="#"><img src={youtube} alt="" className="registration__youtube" /></a>
          <a href="#"><img src={telegram} alt="" className="registration__box__social-icons__telegram" /></a>
        </div>
        <button type="submit" className="registration__button">Войти</button>
      </form>
    </div>
  )
}