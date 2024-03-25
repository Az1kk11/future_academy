import React from 'react'
import './style.css'

import Phone from '../../image/activity/Phone.svg'
import arrow from '../../image/activity/arrow.svg'
import link from '../../image/activity/link.svg'
import shutterstock from '../../image/activity/shutterstock.png'
import shutterstock_1709750299 from '../../image/activity/shutterstock_1709750299.png'
import transparent from '../../image/activity/transparent.png'

export const Activity: React.FC = () => {
    return (
        <div className="activity">
            <div className="activity__heading">
                <img src={arrow} alt="" className="activity__arrow" />
                Мероприятия Главная
            </div>
            <div className="activity__title">Все мероприятия</div>
            <div className="activity__cards">
                <div className="activity__card1">
                    <div>
                        <div className="activity__card1-date">25</div>
                        <div className="activity__card1-month">ноября</div>
                    </div>
                    <div>
                        <span className="activity__card1-title">День открытых дверей </span>
                        <span className="activity__card1-desc">Приглашаем всех желающих на бесплатную экскурсию <br /> в мир востребованных профессий и полезных навыков</span>
                        <a href="#" className="activity__card1-link">Записаться<img src="./images/link.svg" alt="" /></a>
                    </div>
                </div>
                <div className="activity__card2">
                    <span className="activity__card2-caption">Встреча</span>
                    <img src={Phone} alt="" className="activity__card2-icon" />
                    <span className="activity__card2-title">Заголовок мероприятия</span>
                    <span className="activity__card2-desc">Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</span>
                    <span className="activity__card2-date">16 ноября 2021</span>
                </div>
                <div className="activity__card3">
                    <span className="activity__card3-caption">Встреча</span>
                    <img src={Phone} alt="" className="activity__card3-icon" />
                    <span className="activity__card3-title">Заголовок мероприятия</span>
                    <span className="activity__card3-desc">Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</span>
                    <span className="activity__card3-date">16 ноября 2021</span>
                </div>
                <div className="activity__card4">
                    <span className="activity__card4-caption">Встреча</span>
                    <img src={Phone} alt="" className="activity__card4-icon" />
                    <span className="activity__card4-title">Заголовок мероприятия</span>
                    <span className="activity__card4-desc">Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</span>
                    <span className="activity__card4-date">16 ноября 2021</span>
                </div>
                <div className="activity__card5">
                    <img src={shutterstock_1709750299} alt="" className="activity__card5-picture" />
                    <span className="activity__card5-caption">Вебинар</span>
                    <span className="activity__card5-title">Заголовок мероприятия</span>
                    <span className="activity__card5-desc">Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</span>
                    <span className="activity__card5-date">16 ноября 2021</span>
                </div>

                <div className="activity__card6">
                    <img src={transparent} alt="" className="activity__card6-img" />
                    <span className="activity__card6-title">Заголовок мероприятия</span>
                    <span className="activity__card6-desc">Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</span>
                </div>

                <div className="activity__card7">
                    <span className="activity__card7-caption">Встреча</span>
                    <img src={Phone} alt="" className="activity__card7-icon" />
                    <span className="activity__card7-title">Заголовок мероприятия</span>
                    <span className="activity__card7-desc">Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</span>
                    <span className="activity__card7-date">16 ноября 2021</span>
                </div>

                <div className="activity__card8">
                    <span className="activity__card8-caption">Встреча</span>
                    <img src={Phone} alt="" className="activity__card8-icon" />
                    <span className="activity__card8-title">Заголовок мероприятия</span>
                    <span className="activity__card8-desc">Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</span>
                    <span className="activity__card8-date">16 ноября 2021</span>
                </div>

                <div className="activity__card9">
                    <span className="activity__card9-caption">Встреча</span>
                    <img src={Phone} alt="" className="activity__card9-icon" />
                    <span className="activity__card9-title">Заголовок мероприятия</span>
                    <span className="activity__card9-desc">Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</span>
                    <span className="activity__card9-date">16 ноября 2021</span>
                </div>
            </div>
        </div>
    )
}