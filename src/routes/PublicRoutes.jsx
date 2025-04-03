import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import PublicLayout from './PublicLayout';
import Home from '../pages/Home';
import Accommodation  from '../pages/Accommodation';
import Templates from '../pages/Templates';
import Sections  from '../pages/Sections';


const PublicRoutes = () => {



  return (
    <>
      <Routes>
        <Route path='/' element={<PublicLayout/>}>
                <Route index element ={<Home/>}/>
                <Route path='/accommodation' element={<Accommodation/>}/>
                <Route path='/templates' element={<Templates/>}/>
                <Route path='/sections' element={<Sections/>}/>
        </Route>
      </Routes>  
    </>
  )
}

export default PublicRoutes;