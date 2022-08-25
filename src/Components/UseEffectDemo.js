/*import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {

    const [name, setName] = useState('My App')
    const [city, setCity] = useState('')

    useEffect(() => {
        document.title = name
    }, [name])

    return (
        <>
            <div>
                <label>Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <label>city:</label>
                <input type="text" onChange={(e) => setCity(e.target.value)}></input>
            </div>
        </>
    )
}

export default UseEffectDemo*/