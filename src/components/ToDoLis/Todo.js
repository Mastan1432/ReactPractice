import React, { useState } from 'react'

const Todo = () => {
    const[todo,setTodo]=useState([]);
    const[task,setTask]=useState("");


    const add=(e)=>{
        setTodo(prev=>[...prev,task]);
        console.log(todo);
    }

  return (
    <div>
        <h1>Todo</h1>

        <input 
        type='text'
        placeholder='Enter task'
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        />
        <button onClick={add}>Add</button>

{/* js array functions
spred operator
html forms */}
        <div>
            {todo.map((t)=>(
                <ul>
                    <li>{t}</li>
                </ul>
            ))}
        </div>
        
    </div>
  )
}

export default Todo