import React from 'react'

const Heading = (props) => {
    console.log('Heading rendered')
    return (
        <h4>{props.title}</h4>
    )
}

export default React.memo(Heading)