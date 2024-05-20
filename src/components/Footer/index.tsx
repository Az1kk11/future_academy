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
    { title: "Robototexnika", link: '#' },
    { title: "Oyın jaratıw", link: '#' },
    { title: "Scratch", link: '#' },
    { title: "Arduino", link: '#' },
    { title: "Lego Wedo", link: '#' },
    { title: "Python Tynker", link: '#' },
    { title: "Programmalastırıw", link: '#' },
    { title: "IT English", link: '#' },
    { title: "Shaxmat", link: '#' },
    { title: "Unity", link: '#' },
    { title: "Soft skills", link: '#' },   
]

const podrast = [
    { title: "Front-end", link: '#' },
    { title: "Back-end", link: '#' },
    { title: "Unity", link: '#' },
    { title: "Grafik Dizayn", link: '#' },
    { title: "Game Development", link: '#' },
    { title: "Python", link: '#' },
    { title: "Android", link: '#' },
    { title: "С++ programmalastırıw", link: '#' },
    { title: "С# programmalastırıw", link: '#' },
    { title: "Kiber qáwipsizlik", link: '#' },
    { title: "Soft skills", link: '#' },    
]

const vzroslm = [
    { title: "Unity", link: '#' },
    { title: "Full-stack", link: '#' },
    { title: "Grafik dizayn", link: '#' },
    { title: "Social Media Marketing", link: '#' },
    { title: "Internet Marketing", link: '#' },
    { title: "Java", link: '#' },
    { title: "Python", link: '#' },
    { title: "С# programmalastırıw", link: '#' },
    { title: "C++ programmalastırıw", link: '#' },
    { title: "Kiber qáwipsizlik", link: '#' },
    { title: "Soft skills", link: '#' },
]

const info = [
    { title: "Biz haqqımızda", link: '#' },
    { title: "Is-ilajlar", link: '#' },
    { title: "Karera", link: '#' },
    { title: "Registraciya", link: '#' },
]
export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <>
                <div className="footer__logo">
                    <img src={logo} alt="" />
                </div>
                <div className="footer__desc">
                    <a href="#" className="footer__telnumber">+998972411707</a>
                    <a href="#" className="footer__address">Qaraqalpaqstan kóshesi, 23-jay</a>
                    <a href="#" className="footer__email">info@futureacademy.ru</a>
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
                <div className="footer__copyright">© Future Academy</div>
            </>

            <div className="footer__child">
                <span className="footer__heading">Balalar ushın</span>
                <ul className="footer__list">
                    {dety.map((itm, inx) => (
                        <li key={inx}>
                            <a href={itm.link} className="footer__link">{itm.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="footer__teenagers">
                <span className="footer__heading">Óspirimler ushın</span>
                <ul className="footer__list">
                    {podrast.map((itm, idx) => (
                        <li key={idx}>
                            <a href={itm.link} className="footer__link">{itm.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="footer__adults">
                <span className="footer__heading">Úlkenler ushın</span>
                <ul className="footer__list">
                    {vzroslm.map((itm, idx) => (
                        <li key={idx}>
                            <a href={itm.link} className="footer__link">{itm.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="footer__information">
                <span className="footer__heading">Maǵlıwmat</span>
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