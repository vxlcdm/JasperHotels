import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Temp from '../components/Temp.jsx'


const PublicLayout = () => {
  return (
    <>
    
    <Navbar/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default PublicLayout