import React from 'react'
import './style.css'

import logo from '../../image/header/Logo.svg'
import burger from '../../image/header/burger.svg'
import person from '../../image/header/person.svg'
import { Link, useLocation } from 'react-router-dom'

export const Header: React.FC = () => {
    const location = useLocation()

    return (
        <div className="header">
            <Link to={'/'}>
                <img className="header__logo" src={logo} alt="logo" />
            </Link>
            <ul className="header__list">
                <li className="header__item">
                    <Link to="/courses" className="header__link burger-link">
                        <img className="burger__icon" src={burger} alt="" />
                        Kurslar
                    </Link>
                </li>
                <li className="header__item">
                    <Link to="/about" className="header__link">Biz haqqımızda</Link>
                </li>
                <li className="header__item">
                    <Link to="/activity" className="header__link">Is-ilajlar</Link>
                </li>
                <li className="header__item">
                    <Link to="/career" className="header__link">Karera</Link>
                </li>
                {/* <li className="header__item">
                    <span className="header__link">8 800 950-33-98</span>
                </li> */}
                <li className="header__item">
                    {location.pathname.startsWith('/registration') ?
                        ''
                        :
                        <Link to="/registration" className="header__link person-link">
                            <img className="person__icon" src={person} alt="" />
                            Registraciya
                        </Link>
                    }
                </li>

            </ul>
        </div>
    )
}