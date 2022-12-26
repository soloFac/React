import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import LoginPage from './LoginPage'
import Navbar from './Navbar'
import UserProvider from './context/UserProvider'

const MainApp = () => {
  return (
    // Cualquier elemento que se encuentre dentro del UserProvider va a tener acceso a la informacion que se le provee
    <UserProvider>
      <h1>MainApp</h1>

      <Navbar />

      <hr />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path='/*' element={<Navigate to='/login'/>} />

      </Routes>
    </UserProvider>
  )
}

export default MainApp
