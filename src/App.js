import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { Delete,  Complete, Edit } from './redux/Actions';
import { useState } from "react";
import TodoCard from './TodoCard';
import AddTask from './AddTask';

function App() {
  const {todos} = useSelector(state => state)
  
  const dispatch = useDispatch()
  console.log(todos);
  
   const [isinput, setisinput] = useState(false)
   const [ text , setText] = useState('')
   const handleChange = (e) => setText(e.target.value)
   const handleInput = () => {
     setisinput(true)
   }
   const notInput = () => setisinput(false)



  return (
    <div className="App">
      

<AddTask />
{
  todos.map(el=>
  <TodoCard   todo={el}  />
  )
}

    {/* {
      
      todos.map(el=>
        <div>
           
      
       {
         isinput?
          <div>
           <input type="text" name="" id="" value={el.action}  onChange={()=>} />
           <button onClick={()=>dispatch(Edit({id:el.id,action:el.action,isDone:el.isDone))}  >confirm</button>
           <button onClick={()=>notInput()} >cancel</button>
         </div>
       :
          
            <div>
              <h2  className={el.isDone ?"struckOut":"" }> {el.action } </h2>
              <button  onClick={()=>dispatch(Delete(el.id))} >Delete</button>
              <button onClick ={()=> dispatch (Complete(el.id))} > {(el.isDone) ? "Undo":"Complete"}</button>
              <button onClick={()=>handleInput()}  >Edit</button>
            </div>
       }
       */}
      
          
          
          {/* <input type="text" onChange={handleChange} className='input' onSubmit={()=>dispatch(Edit(el.id))} /> */}
          
          
        </div>
        )
  
}
//add
//edit
//complete
//filter
export default App;
