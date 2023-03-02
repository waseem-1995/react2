import { useThrottle } from "../hooks/useThrottle"

const ClickMe = () => {
   
    const handleClick=()=>{
        console.log("hello")
    }

    const throttle=useThrottle(handleClick,1500)
  return (
    <div>
        <button onClick={throttle}>click me</button>
    </div>
  )
}

export default ClickMe