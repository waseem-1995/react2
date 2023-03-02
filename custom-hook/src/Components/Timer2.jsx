import React from 'react'
import { useTimer } from '../hooks/useTimer'


const Timer2 = () => {
    const show=useTimer(3000);
  return (
    <div>{show && <h1>this is timer </h1>}</div>
  )
}

export default Timer2