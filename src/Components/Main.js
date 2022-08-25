import React, { useCallback, useState } from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'
import Heading from './Heading'

const Main = () => {

    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    const changeName = useCallback((e) => {
        setName(e.target.value)
    }, [name])


    const changeCity = useCallback((e) => {
        setCity(e.target.value)
    }, [city])


    const changeState = useCallback((e) => {
        setState(e.target.value)
    }, [state])
    return (
        <div>

            {/* Heading Component */}
            {/* Comp1     ... Updating name */}
            {/* Comp2     ... Displaying name* /}
            {/* Comp1     ... updating city*/}
            {/* Comp2     ... display city*/}

            <Heading title="Main Component"></Heading>
            <Comp1 value='name' changeHandler={changeName} ></Comp1>
            <Comp2 label='name' value={name}></Comp2>

            <Comp1 value='city' changeHandler={changeCity} ></Comp1>
            <Comp2 label='city' value={city}></Comp2>

            <input type='text' onChange={changeState}></input>
            <Comp3 value={state}></Comp3>

        </div>
    )
}

export default Main