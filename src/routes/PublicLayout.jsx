import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Temp from '../components/Temp.jsx'
import Temp2 from '../components/Temp2.jsx'

const PublicLayout = () => {
  return (
    <>
    
    <Navbar/>
    <Outlet/>
    {/* <Temp/> */}
    
    <Footer/>

    </>
  )
}

export default PublicLayout