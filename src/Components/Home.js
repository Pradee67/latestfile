import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
  return (
    <>
    <div>Welcome to Home Page</div>
    <div><button onClick={()=>navigate('employee')}>Employee</button></div>
    </>
  )
}

export default Home