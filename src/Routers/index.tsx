import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Page/Home'
import { About, Activity, Career, Courses, Registration } from '../Page'

const Rauters = () => {
    return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/activity' element={<Activity/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/login' element={<Registration/>}/>
    </Routes>
  )
}

export default Rauters