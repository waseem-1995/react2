import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios"
import { getTodoFailure, getTodoRequest, getTodoSuccess } from '../redux/action';
import AddTodo from './AddTodo';
import Todolist from './Todolist';
const Todo = () => {
  const dispatch=useDispatch()
  const todos=useSelector((state)=>(state.todos))

 const getTodo=()=>{
  dispatch(getTodoRequest());
  axios.get("http://localhost:3004/todos")
  .then((r)=>dispatch(getTodoSuccess(r.data)))
  .catch((err)=>dispatch(getTodoFailure(err)))
 };
 
 useEffect(()=>{
  getTodo()
 },[])

 
 


 
  return (
    <div>
      <AddTodo/>
      <Todolist Todos={todos}/>
    </div>
  )
}

export default Todo