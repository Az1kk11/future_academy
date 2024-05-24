import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutAdmin } from '../Redux/Slice/adminSlice'
import { removeItem } from '../Redux/helpers/persistance-storage'

import './LeftNavbar.css'

export const LeftNavbar: React.FC = () => {
    const [isOpen, setOpen] = useState(false)
    const toggle = () => setOpen(!isOpen)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const logoutHandler = () => {
        removeItem('token')
        removeItem('tokenAdmin')
        dispatch(logoutAdmin())
        navigate('/admin-login')
    }

    return (
        <section
            className={isOpen ? ' sidebar-left navactive' : 'sidebar-left'}
            style={location.pathname.startsWith('/admin-login') ? { display: 'none' } : { display: 'block', width: isOpen ? '250px' : '70px' }}
        >

            <i className="ri-menu-line" style={{ display: isOpen ? 'none' : 'block' }} onClick={toggle}></i>

            <div className="logo">
                {isOpen ? (
                    <i className="ri-arrow-left-line"
                        style={{ paddingRight: isOpen ? '10px' : '0px' }}
                        onClick={toggle}></i>
                ) : (
                    <i className="ri-menu-line" onClick={toggle}></i>
                )}
                <div style={{ display: isOpen ? 'block' : 'none' }}>
                </div>
            </div>
            <ul className='sidebar-menu'>
                {navbarItems.map((item, index) => (
                    <NavLink to={item.navigate}
                        key={index}
                        className={(navclassName) => navclassName.isActive ? 'nav-active' : ''}>
                        <li className="sidebar">
                            <span>{item.icon}</span>
                            <span style={{ display: isOpen ? 'block' : 'none' }}>{item.title}</span>
                        </li>
                    </NavLink>
                ))}
                <li className='sidebar text-light'
                    onClick={logoutHandler}
                >
                    <i className="ri-logout-box-line"></i>
                    <span style={{ display: isOpen ? 'block' : 'none' }}>Shıǵıw</span>
                </li>
            </ul>
        </section>
    )
}

const navbarItems = [
    { title: 'Oqıwshılar', navigate: 'admin/users', icon: <i className="ri-user-fill"></i> },
]