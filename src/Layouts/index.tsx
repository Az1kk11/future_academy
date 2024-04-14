import React from 'react'
import { useLocation } from 'react-router-dom'
import { Footer, Header } from '../components'
import { Login, Registration } from '../Page'
import Rauters from '../Routers'

import '../index.css'

const Layout:React.FC = () => {
  const location = useLocation()

  if (location.pathname.startsWith('/registration',)) {
    return <Registration />
  }
  if (location.pathname.startsWith('/login',)) {
    return <Login />
  }

  return (
    <div className="lay-box">
      <Header />
      <Rauters />
      <Footer />
    </div>

  )
}

export default Layout