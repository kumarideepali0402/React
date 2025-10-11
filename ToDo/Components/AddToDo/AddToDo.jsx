import { useState } from "react"
import { useContext } from "react";
import ToDoDispatchContext from "../../Context/ToDoDispatchContext";

export default function AddToDo() {
    const [task, setTask] = useState('')
    const {dispatch} = useContext(ToDoDispatchContext)
    return(
        <div>
            <input
            type="text"
            placeholder="Add Task..."
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            />
            <button onClick={()=>{
                dispatch({type:'add_todo', payload : {toDoText : task}})
                 setTask('')}}>Add+</button>
        </div>
    )

}