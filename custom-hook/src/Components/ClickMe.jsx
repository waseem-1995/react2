import React from 'react'
import { useDebounce } from '../hooks/useDebounce';

// const ClickMe = () => {
//     let id;
//     const debounce=(func,delay)=>{
//         id && clearTimeout(id);
//         id=setTimeout(()=>{
//             func()
//         },delay)
//     }

//     const handleClick=()=>{
//         console.log("hello")
//     }
//   return (
//     <div>
//         <button onClick={()=>debounce(handleClick,1500)}>click me</button>
//     </div>
//   )
// }

const ClickMe = () => {
   
    const handleClick=()=>{
        console.log("hello")
    }

    const debounce=useDebounce(handleClick,1500)
  return (
    <div>
        <button onClick={debounce}>click me</button>
    </div>
  )
}

export default ClickMe