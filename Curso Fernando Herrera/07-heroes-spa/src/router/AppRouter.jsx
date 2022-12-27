import React from 'react'
import MarvelPage from '../heroes/pages/MarvelPage'
import DcPage from '../heroes/pages/DcPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../auth/pages/LoginPage'
import { Navbar } from '../ui'

const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/marvel' element={<MarvelPage />}/>
        <Route path='/dc' element={<DcPage />}/>

        <Route path='/login' element={<LoginPage />}/>

        <Route path='/' element={<Navigate to='marvel' />}/>
      </Routes>
    </>
  )
}

export default AppRouter
