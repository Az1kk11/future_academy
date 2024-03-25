import React from 'react'
import './style.css'


// images footer
import logo from '../../image/footer/logo.png'
import facebook from '../../image/footer/facebook.png';
import instagram from '../../image/footer/instagram.png';
import telegram from '../../image/footer/telegram.png';
import vk from '../../image/footer/vk.png';
import youtube from '../../image/footer/youtube.png';

const dety = [
    { title: "Робототехника", link: '#' },
    { title: "Создание игр", link: '#' },
    { title: "Программирование", link: '#' },
    { title: "Мультимедиа", link: '#' },
    { title: "Soft skills", link: '#' },
    { title: "Шахматы", link: '#' },
    { title: "Блогинг", link: '#' },
    { title: "Создание игр", link: '#' },
    { title: "Программирование", link: '#' },
    { title: "Блогинг", link: '#' },
    { title: "Soft skills", link: '#' },
]

const podrast = [
    { title: "Web - разработка", link: '#' },
    { title: "Прикладное программирование", link: '#' },
    { title: "Графическое моделирование", link: '#' },
    { title: "Game Development", link: '#' },
    { title: "Soft skills", link: '#' },
    { title: "Разработчик мобильных приложений", link: '#' },
    { title: "Блогинг", link: '#' },
    { title: "Создание игр", link: '#' },
    { title: "Программирование", link: '#' },
    { title: "Мультимедиа", link: '#' },
    { title: "Soft skills", link: '#' },
]

const vzroslm = [
    { title: "Разработчик игр на Unity", link: '#' },
    { title: "Разработка", link: '#' },
    { title: "Графический Дизайн", link: '#' },
    { title: "Тестировщик ПО", link: '#' },
    { title: "Интернет Маркетинг", link: '#' },
    { title: "Java-разработчик", link: '#' },
    { title: "Python–разработчик", link: '#' },
    { title: "IOS-разработчик", link: '#' },
    { title: "Программирование", link: '#' },
]

const info = [
    { title: "Об академии", link: '#' },
    { title: "Мероприятия", link: '#' },
    { title: "Новости", link: '#' },
    { title: "База знаний", link: '#' },
    { title: "Карьера", link: '#' },
    { title: "Контакты", link: '#' },
]

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <>
                <div className="footer__logo">
                    <img src={logo} alt="" />
                </div>
                <div className="footer__desc">
                    <a href="#" className="footer__telnumber">8 800 950-33-98</a>
                    <a href="#" className="footer__address">г. Москва, ул. Ленина, д. 50</a>
                    <a href="#" className="footer__email">info@hodfutureacademy.ru</a>
                </div>
                <div className="footer__social">
                    <a href="#" className="footer__link-Vk">
                        <img src={vk} alt="" />
                    </a>
                    <a href="#" className="footer__link-instagram">
                        <img src={instagram} alt="" />
                    </a>
                    <a href="#" className="footer__link-facebook">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="#" className="footer__link-youtube">
                        <img src={youtube} alt="" />
                    </a>
                    <a href="#" className="footer__link-telegram">
                        <img src={telegram} alt="" />
                    </a>
                </div>
                <div className="footer__copyright">© ХОД, Future Academy</div>
            </>

            <div className="footer__child">
                <span className="footer__heading">Детям</span>
                <ul className="footer__list">
                    {dety.map((itm, inx) => (
                        <li key={inx}>
                            <a href={itm.link} className="footer__link">{itm.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="footer__teenagers">
                <span className="footer__heading">Подросткам</span>
                <ul className="footer__list">
                    {podrast.map((itm, idx) => (
                        <li key={idx}>
                            <a href={itm.link} className="footer__link">{itm.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="footer__adults">
                <span className="footer__heading">Взрослым</span>
                <ul className="footer__list">
                    {vzroslm.map((itm, idx) => (
                        <li key={idx}>
                            <a href={itm.link} className="footer__link">{itm.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="footer__information">
                <span className="footer__heading">Информация</span>
                <ul className="footer__list">
                    {info.map((itm, idx) => (
                        <li key={idx}>
                            <a href={itm.link} className="footer__link">{itm.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}