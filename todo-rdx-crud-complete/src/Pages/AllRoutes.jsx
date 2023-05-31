import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SingleTodo from "../Components/SingleTodo"
import Todo from '../Components/Todo'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Todo/>}/>
      <Route path="/todo/:id" element={<SingleTodo/>}/>
    </Routes>
    </div>
  )
}

export default AllRoutes