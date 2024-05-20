import React from 'react'
import './style.css'

import logo from '../../image/header/Logo.svg'
import burger from '../../image/header/burger.svg'
import person from '../../image/header/person.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { selectAuth } from '../../Redux/services/userAuth'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../Redux/Slice/UserAuth'
import { removeItem } from '../../Redux/helpers/persistance-storage'


export const Header: React.FC = () => {
    const { logedIn, user } = useSelector(selectAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const logoutHandler = () => {
        removeItem('token')
        removeItem('tokenAdmin')
        dispatch(logoutUser())
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
                        Kurslar
                    </Link>
                </li>
                <li className="header__item">
                    <Link to="/activity" className="header__link">Biz haqqımızda</Link>
                </li>
                <li className="header__item">
                    <Link to="/about" className="header__link">Is-ilajlar</Link>
                </li>
                <li className="header__item">
                    <Link to="/career" className="header__link">Karera</Link>
                </li>
                {/* <li className="header__item">
                    <span className="header__link">8 800 950-33-98</span>
                </li> */}
                {logedIn ?
                    <li className='header__item'>
                        <div className="profile-user">
                            <span className='header__link person-link'>{user}</span>
                            <button className='log-out' onClick={logoutHandler}>Log out</button>
                        </div>
                    </li>
                    :
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
                }
            </ul>
        </div>
    )
}