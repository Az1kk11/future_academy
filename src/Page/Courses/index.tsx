import React, { useEffect, useMemo, useState } from 'react'
import './style.css'

import children from '../../image/courses/children.png'
import family from '../../image/courses/family.png'
import phone from '../../image/courses/phone.png'
import teenager from '../../image/courses/teenager.png'

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

export const Courses: React.FC = () => {
    const [list, setList] = useState<any>([])
    const [selectedCategory, setSelectedCategory] = useState('dety');

    useEffect(() => {
        setList(detyArr);
    }, []);

    const filteredHandle = () => {
        if(!selectedCategory){
            return list
        }
        return list.filter((item: category) => item.category === selectedCategory)
    }

    let filteredList = useMemo(filteredHandle, [selectedCategory, list])

    return (
        <main className="courses">
            <h1 className="courses__heading">Все программы обучения</h1>
            <div className="courses__category">
                <div className={selectedCategory === 'dety' ? 'courses__child active' : 'courses__child'} onClick={() => setSelectedCategory('dety')}>
                    <img src={children} alt="" className="courses__child-icon" />
                    <div className="courses__child-text">
                        <span className="courses__child-title">Дети</span>
                        <span className="courses__child-desc">8 — 14 лет</span>
                    </div>
                </div>
                <div className={selectedCategory === 'podrostki' ? 'courses__child active' : 'courses__child'} onClick={() => setSelectedCategory('podrostki')}>
                    <img src={teenager} alt="" className="courses__child-icon" />
                    <div className="courses__child-text">
                        <span className="courses__child-title">Подростки</span>
                        <span className="courses__child-desc">14 — 18 лет</span>
                    </div>
                </div>
                <div className={selectedCategory === 'vzrosle' ? 'courses__child active' : 'courses__child'} onClick={() => setSelectedCategory('vzrosle')}>
                    <img src={family} alt="" className="courses__child-icon" />
                    <div className="courses__child-text">
                        <span className="courses__child-title">Взрослые</span>
                        <span className="courses__child-desc">18 — ∞ </span>
                    </div>
                </div>
            </div>

            <span className="courses__title">Направление</span>

            <div className="courses__direction">
                {filteredList.map((item:any, idx:number) => (
                    <span className="courses__link" key={idx}>{item.title}</span>
                ))}
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