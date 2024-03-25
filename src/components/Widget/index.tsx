import React from 'react'
import './style.css'
import { convertTypeAcquisitionFromJson } from 'typescript'

// images
import Group837 from '../../image/widget/Group 837.svg'
import Union from '../../image/widget/Union.svg'
import Vector137 from '../../image/widget/Vector 137.svg'
import Vector183 from '../../image/widget/Vector 183.svg'
import Vector184 from '../../image/widget/Vector 184.svg'
import Vector from '../../image/widget/Vector.svg'
import centerImage from '../../image/widget/center-image.jpg'
import children from '../../image/widget/children.png'
import cova from '../../image/widget/cova.svg'
import cross from '../../image/widget/cross.svg'
import diagram from '../../image/widget/diagram.png'
import familye from '../../image/widget/family.png'
import gradientline from '../../image/widget/gradientline.svg'
import grayline from '../../image/widget/grayline.svg'
import monitor from '../../image/widget/monitor.png'
import newspaper from '../../image/widget/newspaper.png'
import play from '../../image/widget/play.svg'
import transparent from '../../image/widget/transparent.svg'
import young from '../../image/widget/young.png'

const widgetArr = [
    { title: "Робототехника", link: '#' },
    { title: "Создание игр", link: '#' },
    { title: "Web-разработка", link: '#' },
    { title: "Мультимедиа", link: '#' },
    { title: "Шахматы", link: '#' },
    { title: "3D-моделирование и дизайн", link: '#' },
    { title: "Английский язык", link: '#' },
    { title: "Блогинг", link: '#' },
    { title: "Soft skills", link: '#' },
]


export const Widget: React.FC = () => {
    return (
        <div className="widget">
            <div className="widget-messege">
                <img src={Union} alt="" className="widget-message__union" />
                <div className="widget-messege__text">
                    <span className="widget-messege__title">Кем вы хотите стать?</span>
                    <span className="widget-messege__desc">Пора найти себя <br />и выбрать подходящий курс :)</span>
                    <span className="widget-messege__desc">Удачи!</span>
                </div>
            </div>
            <img src={cova} alt="" className="widget-messege__cova-img" />

            <div>
                <div className="widget-category">
                    <div className="widget-category child-category">
                        <img src={children} alt="" className="child-category__img" />
                        <div className="child-category__text">
                            <span className="child-category__text1">Дети</span>
                            <span className="child-category__text2">8 — 14 лет</span>
                        </div>
                    </div>
                    <div className="widget-category young-category">
                        <img src={young} alt="" className="young-category__img" />
                        <div className="young-category__text">
                            <span className="young-category__text1">Подростки</span>
                            <span className="young-category__text2">14 — 18 лет</span>
                        </div>
                    </div>
                    <div className="widget-category adults-category">
                        <img src={familye} alt="" className="adults-category__img" />
                        <div className="adults-category__text">
                            <span className="adults-category__text1">Взрослые</span>
                            <span className="adults-category__text2">18 — ∞ </span>
                        </div>
                    </div>
                </div>

                <div className="widget__lines">
                    <div className="widget__gradient-line">
                        <img src={gradientline} alt="" className="widget__gradient-icon" />
                    </div>
                    <div className="widget__gray-line">
                        <img src={grayline} alt="" className="widget__gray-icon" />
                    </div>
                </div>

                <ul className="widget-category__course">
                    {widgetArr.map((itm, idx) => (
                        <li key={idx} className="widget-category__item">
                            <a href={itm.link} className="widget-category__link">{itm.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="widget__gadgets">
                <img src={cross} alt="" className="widget__vector1" />
                <img src={Vector184} alt="" className="widget__vector2" />
                <img src={Vector183} alt="" className="widget__vector3" />
                <img src={Vector} alt="" className="widget__vector4" />

                <div className="widget__center-image">
                    <img src={centerImage} alt="" className="widget__picture" />
                    <img src={transparent} alt="" className="widget__transparent" />
                    <img src={play} alt="" className="widget__play-icon" />
                </div>
                <p className="widget__gadgets-desc">Актуальные знания от признанных экспертов рынка <br /> для новичков и практикующих специалистов.</p>

                <div className="widget-result__courses">
                    <span className="widget-courses__number">600</span>
                    <span className="widget-courses__text">Курсов</span>
                </div>
                <div className="widget-result__teachers">
                    <span className="widget-teachers__number">82</span>
                    <span className="widget-teachers__text">Ведущих преподавателей</span>
                </div>
                <div className="widget-result__graduates">
                    <span className="widget-graduates__number">14795</span>
                    <span className="widget-graduates__text">Выпускников</span>
                </div>
            </div>

            <div className="widget-cards">
                <div className="widget__openDay-card">
                    <div>
                        <span className="widget__openDay-number">25</span>
                        <span className="widget__openDay-month">ноября</span>
                    </div>
                    <div>
                        <span className="widget__openDay-title">День открытых дверей </span>
                        <span className="widget__openDay-desc">Приглашаем всех желающих на бесплатную экскурсию <br /> в мир востребованных профессий и полезных навыков</span>
                    </div>
                    <a href="#" className="widget__openDay-link">
                        Записаться
                        <img src={Vector137} alt="" />
                    </a>
                </div>
                <div className="widget__study-card">
                    <img src={monitor} alt="" className="widget__study-icon" />
                    <span className="widget__study-title">Программы обучения</span>
                    <span className="widget__study-desc">В списке наших курсов вы сможете найти профессию и занятие по душе, изучить новое и получить практические знания, которые помогут получить работу мечты.</span>
                    <a href="#" className="widget__study-link">
                        Подробнее
                        <img src={Vector137} alt="" />
                    </a>
                </div>
                <div className="widget__news-card">
                    <img src={newspaper} alt="" className="widget__news-icon" />
                    <span className="widget__news-title">Новости Академии</span>
                </div>
                <div className="widget__itWorld-card">
                    <img src={diagram} alt="" className="widget__itWorld-icon" />
                    <span className="widget__itWorld-title">Мир IT</span>
                </div>
                <div className="widget__try-card">
                    <img src={Group837} alt="" className="widget__try-icon" />
                    <div>
                        <span className="widget__try-title">Попробуй!</span>
                        <span className="widget__try-desc">
                            Пройдите тест и узнайте свои способности
                            в сфере информационных технологий
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}