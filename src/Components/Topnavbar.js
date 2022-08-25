import React from 'react'
import { NavLink } from 'react-router-dom'

const Topnavbar = () => {
  return (
    <nav>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/aboutus' >AboutUs</NavLink>
        <NavLink to='/employee' >Employee</NavLink>
    </nav>
  )
}

export default Topnavbar