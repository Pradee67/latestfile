import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
        <h1>Component Life Cycle</h1>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/mounting' >Mounting</NavLink>
        <NavLink to='/updating' >Updating</NavLink>
        <NavLink to='/unmounting' >Unmounting</NavLink>
    </nav>
  )
}

export default Navbar