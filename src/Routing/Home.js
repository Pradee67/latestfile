import React from 'react'
import { useAuth } from './Auth'



const Home = () => {
    const auth=useAuth()
  return (
    <div>Home
        <button onClick={()=>{auth.logout()}}>Logout</button>
    </div>
  )
}

export default Home