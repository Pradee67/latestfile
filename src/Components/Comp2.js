import React from 'react'

const Comp2 = (props) => {
    console.log(`Comp 2 - ${props.label}  rendered`)
    const { label, value } = props
    return (
        <div>{label}: {value}</div>
    )
}

export default React.memo(Comp2)