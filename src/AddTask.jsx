import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Add } from './redux/Actions'

const AddTask = () => {
  const [text, setText] = useState("")
  const handleChange = (e) => setText(e.target.value)
  const dispatch = useDispatch()

 const handleAdd = (task) => {
    const newTask = {
id:Math.random(),
action:task,
isDone:false
    }
    dispatch(Add(newTask))
  }
  return (
    <div>
      <h1> Our app </h1>
      <input type="text" value={text} onChange={handleChange} />
      <button  onClick={()=>handleAdd(text)} >Add</button>
    </div>
  )
}

export default AddTask
