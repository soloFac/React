import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import LoginPage from './LoginPage'

const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <hr />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path='/*' element={<Navigate to='/login'/>} />

      </Routes>
    </>
  )
}

export default MainApp
