import {React,useState} from 'react'

const Array = () => {
    const [cities,setcities]=useState([])
    const [city,setcity]=useState([])
    const updatecity=(e)=>{
        setcity(e.target.value)
    }
    const addcity=()=>{
        setcities([...cities,
        {
            id:cities.length,
            value:city
    }])
    }
  return (
    <>
    <div>
        <select>
            {
                cities.map(c=>(
<option key={c.id}>{c.value}</option>
                ))
            }
            </select>
            </div>
            <div>
            <input type='text' onChange={updatecity}></input>
    <button onClick={addcity}>Add City</button>
    
    </div>
    </>
  )
}

export default Array