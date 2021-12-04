import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Edit } from './redux/Actions'

const EditTask = ({handleOpen,open,todo,handleClose}) => {
  // const [open, setOpen] = useState(false)
  const [text, setText] = useState(todo.action)
  const handleChange = (e) => setText(e.target.value)
  const dispatch = useDispatch()

  const handleEdit = () => {
    const editedTask = {
      id:todo.id,
      action:text,
      isDone:todo.isDone
    }
    dispatch(Edit(editedTask))
    handleClose()
  }

  return (
    <div>
      {
        open? 
        <div>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleEdit} >Confirm</button>
        <button onClick={handleClose} >Cancel</button>
      </div>
        
      :
     
      <button onClick={handleOpen}  >Edit</button>
      }
    </div>
  )
}

export default EditTask
