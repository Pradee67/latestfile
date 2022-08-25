import React, { useState } from 'react'

export const Object = () => {
    const[name,setName]=useState({firstname:'',lastname:''})
    const updatefirstname=(e)=>{
        setName({firstname:e.target.value})
    }
    const updatelastname=(e)=>{
        setName({lastname:e.target.value})
    }
  return (
    <>
    <div>
        <label>FirstName</label>
        <input type='text' value={name.firstname} onChange={updatefirstname}></input>
        </div>
        <div>
        <label>LastName</label>
        <input type='text' value={name.lastname} onChange={updatelastname}></input>
        </div>
        <h1>FirstName:{name.firstname}</h1>
        <h1>LastName:{name.lastname}</h1>
        </>
  )
}
