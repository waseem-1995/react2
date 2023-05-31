import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"

const SearchMovies = () => {
    const [userSearch, setUserSearch] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {

      const timer = setTimeout(() => {
      
        if(inputRef.current.value === userSearch) {
          const query = `https://www.omdbapi.com/?s=${userSearch}&apikey=34845c29`;
      
            axios.get(query)
              .then(res => {
                
              })
        }
      }, 500)
      
      return () => {
        clearTimeout(timer)
      }  
      
    }, [userSearch, inputRef]);

  return (
    <div>
        <input
        type="text"
        value={userSearch}
        onChange={event => setUserSearch(event.target.value)}
        ref={inputRef} 
        />
    </div>
  )
}

export default SearchMovies






