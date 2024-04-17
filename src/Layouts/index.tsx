import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Footer, Header } from '../components'
import Rauters from '../Routers'

import '../index.css'
import { LeftNavbar } from '../Admin'
import { Login, Registration } from '../Page'

const Layout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/admin') {
      navigate('/admin/users')
    }
  }, [])
  
  if (location.pathname.startsWith('/registration',)) {
    return <Registration />
  }
  if (location.pathname.startsWith('/login',)) {
    return <Login />
  }


  return (
    <div className={location.pathname.startsWith('/admin') ? 'layout' : 'lay-box'} >
      {location.pathname.startsWith('/admin',) ? <LeftNavbar /> : ''}
      <>
        {location.pathname.startsWith('/admin',) ? '' :  <Header /> }
        <>
        <Rauters />
        </>
        {location.pathname.startsWith('/admin',) ? '' : <Footer />}
      </>
    </div>

  )
}

export default Layout