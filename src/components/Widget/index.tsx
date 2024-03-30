import React, { useEffect, useMemo, useState } from 'react'
import CountUp from 'react-countup'
import './style.css'

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
import monitor from '../../image/widget/monitor.png'
import newspaper from '../../image/widget/newspaper.png'
import play from '../../image/widget/play.svg'
import transparent from '../../image/widget/transparent.svg'
import young from '../../image/widget/young.png'

const detyArr = [
    { category: 'dety', title: "Робототехника", link: '#' },
    { category: 'dety', title: "Создание игр", link: '#' },
    { category: 'dety', title: "Программирование", link: '#' },
    { category: 'dety', title: "Мультимедиа", link: '#' },
    { category: 'dety', title: "Soft skills", link: '#' },
    { category: 'dety', title: "Шахматы", link: '#' },
    { category: 'dety', title: "Блогинг", link: '#' },
    { category: 'dety', title: "Создание игр", link: '#' },
    { category: 'dety', title: "Программирование", link: '#' },
    { category: 'dety', title: "Блогинг", link: '#' },
    { category: 'dety', title: "Soft skills", link: '#' },

    { category: 'podrostki', title: "Web - разработка", link: '#' },
    { category: 'podrostki', title: "Прикладное программирование", link: '#' },
    { category: 'podrostki', title: "Графическое моделирование", link: '#' },
    { category: 'podrostki', title: "Game Development", link: '#' },
    { category: 'podrostki', title: "Soft skills", link: '#' },
    { category: 'podrostki', title: "Разработчик мобильных приложений", link: '#' },
    { category: 'podrostki', title: "Блогинг", link: '#' },
    { category: 'podrostki', title: "Создание игр", link: '#' },
    { category: 'podrostki', title: "Программирование", link: '#' },
    { category: 'podrostki', title: "Мультимедиа", link: '#' },
    { category: 'podrostki', title: "Soft skills", link: '#' },

    { category: 'vzrosle', title: "Разработчик игр на Unity", link: '#' },
    { category: 'vzrosle', title: "Разработка", link: '#' },
    { category: 'vzrosle', title: "Графический Дизайн", link: '#' },
    { category: 'vzrosle', title: "Тестировщик ПО", link: '#' },
    { category: 'vzrosle', title: "Интернет Маркетинг", link: '#' },
    { category: 'vzrosle', title: "Java-разработчик", link: '#' },
    { category: 'vzrosle', title: "Python–разработчик", link: '#' },
    { category: 'vzrosle', title: "IOS-разработчик", link: '#' },
    { category: 'vzrosle', title: "Программирование", link: '#' },
]

type category = {
    category: string,
    title: string,
    link: string,
}

export const Widget: React.FC = () => {
    const [list, setList] = useState<any>([])
    const [selectedCategory, setSelectedCategory] = useState('dety');

    useEffect(() => {
        setList(detyArr);
    }, []);

    const filteredHandle = () => {
        if (!selectedCategory) {
            return list
        }
        return list.filter((item: category) => item.category === selectedCategory)
    }

    let filteredList = useMemo(filteredHandle, [selectedCategory, list])


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

            <>
                <div className="widget-category">
                    <div className={selectedCategory === 'dety' ? 'child-category active' : 'child-category'} onClick={() => setSelectedCategory('dety')}>
                        <img src={children} alt="" className="child-category__img" />
                        <div className="child-category__text">
                            <span className="child-category__text1">Дети</span>
                            <span className="child-category__text2">8 — 14 лет</span>
                        </div>
                    </div>
                    <div className={selectedCategory === 'podrostki' ? 'child-category active' : 'child-category'} onClick={() => setSelectedCategory('podrostki')}>
                        <img src={young} alt="" className="child-category__img" />
                        <div className="child-category__text">
                            <span className="child-category__text1">Подростки</span>
                            <span className="child-category__text2">14 — 18 лет</span>
                        </div>
                    </div>
                    <div className={selectedCategory === 'vzrosle' ? 'child-category active' : 'child-category'} onClick={() => setSelectedCategory('vzrosle')}>
                        <img src={familye} alt="" className="child-category__img" />
                        <div className="child-category__text">
                            <span className="child-category__text1">Взрослые</span>
                            <span className="child-category__text2">18 — ∞ </span>
                        </div>
                    </div>
                </div>

                <ul className="widget-category__course">
                    {filteredList.map((item: any, idx: number) => (
                        <li className="widget-category__link" key={idx}>{item.title}</li>
                    ))}
                </ul>

            </>

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

                <div className="widget-result1">
                    <span className="number"><CountUp end={600}/></span>
                    <span className="text">Курсов</span>
                </div>
                <div className="widget-result2">
                    <span className="number"><CountUp end={82}/></span>
                    <span className="text">Ведущих преподавателей</span>
                </div>
                <div className="widget-result3">
                    <span className="number"><CountUp end={14795}/></span>
                    <span className="text">Выпускников</span>
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