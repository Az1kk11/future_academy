import React from 'react'
import './style.css'

import children from '../../image/courses/children.png'
import family from '../../image/courses/family.png'
import gradientline from '../../image/courses/gradientline.png'
import grayline from '../../image/courses/grayline.png'
import phone from '../../image/courses/phone.png'
import teenager from '../../image/courses/teenager.png'

export const Courses: React.FC = () => {
    return (
        <main className="courses">
            <h1 className="courses__heading">Все программы обучения</h1>
            <div className="courses__category">
                <div className="courses__child">
                    <img src={children} alt="" className="courses__child-icon"/>
                        <div className="courses__child-text">
                            <span className="courses__child-title">Дети</span>
                            <span className="courses__child-desc">8 — 14 лет</span>
                        </div>
                </div>
                <div className="courses__teenager">
                    <img src={teenager} alt="" className="courses__teenager-icon"/>
                        <div className="courses__teenager-text">
                            <span className="courses__teenager-title">Подростки</span>
                            <span className="courses__teenager-desc">14 — 18 лет</span>
                        </div>
                </div>
                <div className="courses__adults">
                    <img src={family} alt="" className="courses__adults-icon"/>
                        <div className="courses__adults-text">
                            <span className="courses__adults-title">Взрослые</span>
                            <span className="courses__adults-desc">18 — ∞ </span>
                        </div>
                </div>
            </div>

            <div className="courses__lines">
                <img src={gradientline} alt="" className="courses__line-gradient" />
                <img src={grayline} alt="" className="courses__line-gray" />
            </div>

            <span className="courses__title">Направление</span>

            <div className="courses__direction">
                <a className="courses__link" href="#">Робототехника</a>
                <a className="courses__link" href="#">Создание игр</a>
                <a className="courses__link" href="#">Web-разработка</a>
                <a className="courses__link" href="#">Мультимедиа</a>
                <a className="courses__link" href="#">Шахматы</a>
                <a className="courses__link" href="#">3D-моделирование и дизайн</a>
                <a className="courses__link" href="#">Английский язык</a>
                <a className="courses__link" href="#">Блогинг</a>
                <a className="courses__link" href="#">Soft skills</a>
            </div>

            <div className="courses__promo-cards">
                <div className="courses__promo-card courses__card1">
                    <span className="courses__promo-caption">Программа</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Разработка мобильных приложений»</span>
                    <span className="courses__promo-desc">Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                        на смартфонах, умных часах и планшетах. </span>
                    <span className="courses__promo-date">24 месяца</span>
                </div>

                <div className="courses__promo-card courses__card2">
                    <span className="courses__promo-caption">Программа</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Разработка мобильных приложений»</span>
                    <span className="courses__promo-desc">Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                        на смартфонах, умных часах и планшетах. </span>
                    <span className="courses__promo-date">24 месяца</span>
                </div>

                <div className="courses__promo-card courses__card3">
                    <span className="courses__promo-caption">Программа</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Разработка мобильных приложений»</span>
                    <span className="courses__promo-desc">Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                        на смартфонах, умных часах и планшетах. </span>
                    <span className="courses__promo-date">24 месяца</span>
                </div>

                <div className="courses__promo-card courses__card4">
                    <span className="courses__promo-caption">Программа</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Разработка мобильных приложений»</span>
                    <span className="courses__promo-desc">Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                        на смартфонах, умных часах и планшетах. </span>
                    <span className="courses__promo-date">24 месяца</span>
                </div>

                <div className="courses__promo-card courses__card5">
                    <span className="courses__promo-caption">Программа</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Разработка мобильных приложений»</span>
                    <span className="courses__promo-desc">Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                        на смартфонах, умных часах и планшетах. </span>
                    <span className="courses__promo-date">24 месяца</span>
                </div>

                <div className="courses__promo-card courses__card6">
                    <span className="courses__promo-caption">Программа</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Разработка мобильных приложений»</span>
                    <span className="courses__promo-desc">Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                        на смартфонах, умных часах и планшетах. </span>
                    <span className="courses__promo-date">24 месяца</span>
                </div>

                <div className="courses__promo-card courses__card7">
                    <span className="courses__promo-caption">Программа</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Разработка мобильных приложений»</span>
                    <span className="courses__promo-desc">Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                        на смартфонах, умных часах и планшетах. </span>
                    <span className="courses__promo-date">24 месяца</span>
                </div>

                <div className="courses__promo-card courses__card8">
                    <span className="courses__promo-caption">Программа</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Разработка мобильных приложений»</span>
                    <span className="courses__promo-desc">Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                        на смартфонах, умных часах и планшетах. </span>
                    <span className="courses__promo-date">24 месяца</span>
                </div>

                <div className="courses__promo-card courses__card9">
                    <span className="courses__promo-caption">Программа</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Разработка мобильных приложений»</span>
                    <span className="courses__promo-desc">Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                        на смартфонах, умных часах и планшетах. </span>
                    <span className="courses__promo-date">24 месяца</span>
                </div>
                <div className="courses__promo-card courses__card10">
                    <span className="courses__promo-caption">Программа</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Разработка мобильных приложений»</span>
                    <span className="courses__promo-desc">Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                        на смартфонах, умных часах и планшетах. </span>
                    <span className="courses__promo-date">24 месяца</span>
                </div>
            </div>
        </main>
    )
}