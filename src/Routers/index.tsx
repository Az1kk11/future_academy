import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Protected from './protected'

import { About, Activity, Career, Courses, Home, Registration } from '../Page'
import { AdminLogin, UserPut, UsersPage } from '../Admin'

const Rauters: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/activity' element={<Activity />} />
      <Route path='/career' element={<Career />} />
      <Route path='/registration' element={<Registration />} />

      <Route path='admin-login' element={<AdminLogin />} />

      <Route element={<Protected />}>
        <Route path='/admin/users' element={<UsersPage />} />
        <Route path='/admin/users/:id' element={<UserPut />} />
      </Route>
    </Routes>
  )
}

export default Rauters