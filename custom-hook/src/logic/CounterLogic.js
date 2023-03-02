import {useState} from "react"

export const useCounterLogic=(initialValue,payload)=>{
    const [state,setState]=useState(initialValue);

    let fun=()=>{
        setState((prev)=>prev+payload)
    };

    return[state,fun]
}