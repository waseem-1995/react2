import { useEffect, useState } from "react"

export const useDebounce=(value,delay)=>{

    const [debounceValue,setDebounceValue]=useState(value)

    useEffect(()=>{
        let id=setTimeout(()=>{
            setDebounceValue(value)
        },delay)
        return ()=>{
            clearTimeout(id)
        }
    },[value,delay])

    return{debounceValue}
}