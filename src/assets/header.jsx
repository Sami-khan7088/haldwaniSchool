import React from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Latest from '../Latest'
const Header = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Latest/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<Home/>}/>
            <Route path='/products' element={<Home/>}/>
            <Route path='/contact' element={<Home/>}/>
            <Route path='/cart' element={<Home/>}/>
        </Routes>
     </BrowserRouter>
  )
}

export default Header