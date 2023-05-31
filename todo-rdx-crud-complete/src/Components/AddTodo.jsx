import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addTodoRequest,addTodoFailure,addTodoSuccess} from "../redux/action"
const AddTodo = () => {
  const [Text,setText]=useState('');
  const dispatch =useDispatch();

  const addToDo = (payload) => {
    dispatch(addTodoRequest());
    const newTodo = {
      title: payload,
      status: false,
    };
    axios
      .post(`http://localhost:3004/todos`, newTodo)
      .then((res) => dispatch( addTodoSuccess(res.data)))
      .catch((err) => dispatch(addTodoFailure(err)));
  };

  const handelAdd=()=>{
    const payload={title:Text,status:false};
        addToDo(payload);
        setText("")
  }


  return (
    <div>
       <h3>Add Todo</h3>
        <input type="text" value={Text} placeholder='Add toodo Here....' 
        onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handelAdd}>Add</button>
    </div>
  )
}

export default AddTodo