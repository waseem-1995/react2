import React from 'react'
import { Link } from 'react-router-dom'
const Todolist = ({Todos}) => {
  return (
   
    <>
       {Todos.map((todo)=>(
            
            <div key={todo.id}>
                  <Link to={`/todo/${todo.id}`}>{todo.title}</Link>   
                 
              
                
            </div>
       ))}
    </>
  )
}

export default Todolist