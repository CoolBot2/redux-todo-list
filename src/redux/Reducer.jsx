import { ADD, COMPLETE, DELETE, EDIT, todos } from "./ActionTypes";

const init = {
  todos:todos,
  
}

export const reducer = (state=init,{type,payload})=>{
  switch (type) {
    case DELETE:
      return{
          ...state, todos:state.todos.filter(el=>el.id!==payload)
      }
   case COMPLETE:
     return{
       ...state,todos:state.todos.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el )
     }
     case EDIT:
       return{
          ...state,todos: state.todos.map(el=>el.id===payload.id?payload:el)
       }
     case ADD:
       return {
         ...state,todos:[...state.todos,payload]
       }
    default:
      return state
  }
}
