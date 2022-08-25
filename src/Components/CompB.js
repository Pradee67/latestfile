import React from 'react'
import CompD from './CompD'
import Title from '../Hooks/Title'
import Usecounter from '../Hooks/Usecounter'

const CompB = () => {
  const[title,setTitle]=Title('Component B')
  const[increment,decrement,reset,num]=Usecounter(10)
  return (
   <>
   <div>Count-{num}
    </div>
    <div>
      Increment-<button onClick={increment}>Increment</button>
    </div>
    <div>
      Decrement-<button onClick={decrement}>Decrement</button>
    </div>
    <div>
      Reset-<button onClick={reset}>Reset</button>
    </div>
    </>
  )
}

export default CompB