import React from 'react'
import { useCounterLogic } from '../logic/CounterLogic'

const Counter = () => {
    const[state,setterFn]=useCounterLogic(0,2)
  return (
    <div>
        <h1>counter:{state}</h1>
        <button onClick={setterFn}> Add</button>
    </div>
  )
}

export default Counter