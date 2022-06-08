import React from 'react'
import { Routes, Route } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';


export const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <div className='container'>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path=':id' element={<HomeScreen />} /> {/* Este path :id quiere decir que es el path por Default cuando se escribe una ruta que no existe */}
      </Routes>
      </div>
    </div>
  )
}
