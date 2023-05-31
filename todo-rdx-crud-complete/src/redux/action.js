import * as types from "./actionTypes"


//getTodos
export const getTodoRequest=()=>{
    return {type:types.GET_TODO_REQUEST}
}

export const getTodoFailure=()=>{
    return {type:types.GET_TODO_FAILURE}
}

export const getTodoSuccess=(payload)=>{
    return {type:types.GET_TODO_SUCCESS,payload}
}

//addTodos
export const addTodoRequest=()=>{
    return {type:types.ADD_TODO_REQUEST}
}
export const addTodoSuccess=(payload)=>{
    return {type:types.ADD_TODO_SUCCESS,payload}
}
export const addTodoFailure=()=>{
    return {type:types.ADD_TODO_FAILURE}
}

//Toggle

export const ToggleTodoSuccess=(payload)=>{
    return {type:types.ADD_TODO_SUCCESS,payload}
}


//update

export const EditTodoSuccess=(payload)=>{
    return {type:types.ADD_TODO_SUCCESS,payload}
}


//delete

export const DeleteTodoSuccess=(payload)=>{
    return {type:types.ADD_TODO_SUCCESS,payload}
}

