import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import EditTask from './EditTask'
import { Complete, Delete } from './redux/Actions'

const TodoCard = ({todo}) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const dispatch = useDispatch()
  return (
    <div>
      {!open &&
      <div>
        <h3  className={todo.isDone? 'struckOut':''} > {todo.action}  </h3>
        <button  onClick={()=>dispatch(Complete(todo.id))} >Complete</button>
        <button  onClick={()=>dispatch(Delete(todo.id))}  >Delete</button>
      </div>
      }
      <EditTask  todo={todo} open={open}  handleOpen={handleOpen} handleClose={handleClose} />
    </div>
  )
}

export default TodoCard
