import React from 'react'
import './style.css'

import logo from '../../image/header/Logo.svg'
import burger from '../../image/header/burger.svg'
import person from '../../image/header/person.svg'
import { Link, useNavigate } from 'react-router-dom'
import { selectAuth } from '../../Redux/services/userAuth'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../Redux/Slice/UserAuth'
import { removeItem } from '../../Redux/helpers/persistance-storage'


export const Header: React.FC = () => {
    const { logedIn, user } = useSelector(selectAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logoutUser())
        removeItem('tokenUser')
        navigate('/')
    }

    return (
        <div className="header">
            <Link to={'/'}>
                <img className="header__logo" src={logo} alt="logo" />
            </Link>
            <ul className="header__list">
                <li className="header__item">
                    <Link to="/courses" className="header__link burger-link">
                        <img className="burger__icon" src={burger} alt="" />
                        Все курсы
                    </Link>
                </li>
                <li className="header__item">
                    <Link to="/activity" className="header__link">Мероприятия</Link>
                </li>
                <li className="header__item">
                    <Link to="/about" className="header__link">Базы знаний</Link>
                </li>
                <li className="header__item">
                    <Link to="/career" className="header__link">Карьера</Link>
                </li>
                <li className="header__item">
                    <span className="header__link">8 800 950-33-98</span>
                </li>
                {logedIn ?
                    <li className='header__item'>
                        <div className="profile-user">
                            <span className='header__link person-link'>{user.name}</span>
                            <button className='log-out' onClick={logoutHandler}>Log out</button>
                        </div>
                    </li>
                    :
                    <>
                        <li className="header__item">
                            <Link to="/registration" className="header__link person-link">
                                <img className="person__icon" src={person} alt="" />
                                Регистрация
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to="/login" className="header__link person-link">
                                <i className="ri-login-box-line"></i>
                                Логин
                            </Link>
                        </li>
                    </>}
            </ul>
        </div>
    )
}