import React from 'react'
import CompC from './CompC'
import Title from '../Hooks/Title'

const CompA = () => {
  const[title,setTitle]=Title('My app')
  return (
    <div>
   <button onClick={()=>{setTitle('Pradeepa')}}>Change Title</button>
    </div>
  )
}

export default CompA