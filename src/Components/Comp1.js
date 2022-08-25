import React from 'react'

const Comp1 = (props) => {
    console.log(`Comp 1 ${props.value} rendered`)
    const { value, changeHandler } = props
    return (
        <div>
            <input type='text' onChange={changeHandler} ></input>
            <button >Update {value}</button>
        </div>
    )
}

export default React.memo(Comp1)