import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { CgMenu } from 'react-icons/cg';
import '../../src/index.css'
const NavBar = () => {
  const [mobileMenu,setMenu]=useState(true);
  return (
    <div className='Navcontainer'>
      <div className='NavBar'>
        <div className='Navlogo'>
          <img src='/logo.png' alt='text' className='Navlogo' />
        </div>
        <div className={mobileMenu ?'NavMenu':'moblieMenu'}>
          <ul className={mobileMenu ?'navbar-lists':'mobileList'}>
            <li>
              <NavLink to="/" className='navbar-link  ' onClick={()=>setMenu(!mobileMenu)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className='navbar-link' onClick={()=>setMenu(!mobileMenu)}>Information</NavLink>
            </li>
            <li>
              <NavLink to="/products" className='navbar-link' onClick={()=>setMenu(!mobileMenu)}>Acdemics</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className='navbar-link' onClick={()=>setMenu(!mobileMenu)}>Facilites</NavLink>
            </li>
            <li>
              <NavLink to="/cart" className='navbar-link ' onClick={()=>setMenu(!mobileMenu)}>
             Admission
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className='navbar-link' onClick={()=>setMenu(!mobileMenu)}>Media</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className='navbar-link' onClick={()=>setMenu(!mobileMenu)}>TC Issued</NavLink>
            </li>
          </ul>
        </div>
        <div className='NavMenuIcon'>
        <div className='menuIcon' >
        <CgMenu onClick={()=>setMenu(!mobileMenu)}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar