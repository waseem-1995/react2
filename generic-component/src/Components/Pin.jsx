import React, { forwardRef } from 'react'


const Pin = forwardRef(({maxChar,forOnchange},ref) => {
  return (
    <input  maxLength={maxChar} ref={ref}  onChange={forOnchange} />                 
  )
})

export default Pin