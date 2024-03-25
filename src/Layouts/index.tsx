import React from 'react'

import '../index.css'
import { Footer, Header } from '../components'
import { Home } from '../Page/Home'
import Rauters from '../Routers'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Registration } from '../Page'

const Layout = () => {
  const location = useLocation()

  return (
    <>
      {location.pathname.startsWith('/registration') ?
        <Registration />
        :
        <div className="lay-box">
          <Header />
          <Rauters />
          <Footer />
        </div>
      }
    </>
  )
}

export default Layout