import React, { useContext } from 'react'
import Sessioncontext from './Sessioncontext'
import { UserContext } from './UserContext'

const CompE = () => {
    const user=useContext(UserContext)
    
  return (
    <div>CompE-{user}</div>
  )
}

export default CompE