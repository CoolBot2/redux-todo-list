import {   ADD, COMPLETE, DELETE, EDIT } from "./ActionTypes"

export const Delete =(id)=>{
  return{
    type:DELETE,
    payload:id
  }
}

export const Complete =(x)=>{
  return{
    type:COMPLETE,
    payload:x
  }
}
export const Edit = (x)=>{
  return{
    type: EDIT,
payload:x
  }
}

export const Add = (x) => {
  return {
    type:ADD,
    payload:x
  }
}