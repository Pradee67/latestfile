
import { React, useEffect, useState } from 'react'

const CounterFC = () => {
    const [count, setCount] = useState(10)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    useEffect(() => {
        // document.title = 'My App'
        

    }, [])

    //[] -- useEffect will be called only once. 

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => { increment() }}>Increment</button>
        </div>
    )
}

export default CounterFC