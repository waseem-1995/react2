import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'
// http://www.omdbapi.com/?i=tt3896198&apikey=34845c29

const Movies = (e) => {
    const [query,setQuery]=useState("avengers");
    const [data,setdata]=useState([])
   
    const handleChange=(e)=>{
        setQuery(e.target.value)
    };
    const debounce=useDebounce(query,1000)
    console.log(debounce)

    useEffect(()=>{
        const getMovieSearch=async()=>{
            const shows=await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=34845c29`);
            console.log("h",shows)
        }
        getMovieSearch()
    },[query])
  return (
    <div>
        <input type="text" onChange={(e)=>handleChange(e)}/>
    </div>
  )
}

export default Movies