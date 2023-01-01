import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HeroesRoutes } from '../heroes'

import { LoginPage } from '../auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login/*' element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }/>
        {/* Una persona que ya esta logeada no deberia poder entrar al login  */}

        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />

        {/* <Route path='login' element={<LoginPage />}/> */}
        {/* <Route path='/*' element={<HeroesRoutes />}/> */}

        {/* <Route path='login/*' element={
          <PublicRoute>
            <Routes>
              <Route path='login' element={<LoginPage />}/>
            </Routes>
          </PublicRoute>
        }/> */}
      </Routes>
    </>
  )
}

export default AppRouter
