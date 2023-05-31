import React, { useRef, useState } from 'react'
import PropTypes from "prop-types"
import Pin from './Pin';

const PinTab = ({length,maxChar,setOtp}) => {
    const [pinTabLength]=useState(new Array(length).fill("0"));
    const [pinTabValue]=useState(new Array(length).fill("0"))

    const inputRef=useRef([]);

    const changeHandler=(e,index)=>{
        pinTabValue[index]=e.target.value;
        
        if(index<length-1 && e.target.value.length===maxChar){
            inputRef.current[index+1].focus()
        }

        setOtp(pinTabValue.join(""))
    }

  return (
    <div>
       {
        pinTabLength.map((item,index)=>{
            return <Pin
                     key={index} 
                     maxChar={maxChar}
                     ref={(elem)=>{inputRef.current[index]=elem;
                        }}
                     forOnChange={(e)=>changeHandler(e,index)}
                   />
            })
       }
    </div>
  )
}

PinTab.propTypes={
    length:PropTypes.number.isRequired,
    maxChar:PropTypes.number,
}

export default PinTab