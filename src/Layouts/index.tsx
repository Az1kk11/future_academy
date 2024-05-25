import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Footer, Header } from '../components'
import Rauters from '../Routers'

import '../index.css'
import { LeftNavbar } from '../Admin'

export const Layout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/admin') {
      navigate('/admin/users')
    }
  }, [])

  return (
    <div className={location.pathname.startsWith('/admin') ? 'layout' : 'lay-box'} >
      {location.pathname.startsWith('/admin',) ? <LeftNavbar /> : ''}
      <>
        {location.pathname.startsWith('/admin',) ? '' : <Header />}
        <>
          <Rauters />
        </>
        {location.pathname.startsWith('/admin',) ? '' : <Footer />}
      </>
    </div>

  )
}
