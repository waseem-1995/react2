
import { ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS,  DELETE_TODO_SUCCESS,  EDIT_TODO_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, TOGGLE_TODO_SUCCESS } from "./actionTypes"

export  const reducer=(state,{type,payload})=>{
switch(type){
    case GET_TODO_REQUEST:
        return {...state,isLoading:true,isError:false}
    
    case GET_TODO_SUCCESS:
        return{...state,todos:payload,isLoading:false, isError:false}
    
    case GET_TODO_FAILURE:
        return{ ...state,isLoading:false,isError:true}
    

    case ADD_TODO_REQUEST:
        return {...state,isLoading:true,isError:false}

    case ADD_TODO_SUCCESS:{
        return {...state, todos: [...state.todos, payload], isLoading: false}
    }
    case ADD_TODO_FAILURE:
        return{ ...state,isLoading:false,isError:true}

 
    case TOGGLE_TODO_SUCCESS:{
        return { ...state, todos: [...state.todos, payload], isLoading: false };
    }

    case EDIT_TODO_SUCCESS:
        return { ...state, todos: [...state.todos, payload], isLoading: false };  
    
    case DELETE_TODO_SUCCESS:
        return { ...state, todos: [...state.todos, payload], isLoading: false };         
    default:{
        return state
    }
}
}