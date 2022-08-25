import React from 'react'

const Comp3 = (props) => {
    console.log(`Comp 3 - ${props.value}  rendered`)
    return (
        <div>{props.value}</div>
    )
}

export default React.memo(Comp3)
