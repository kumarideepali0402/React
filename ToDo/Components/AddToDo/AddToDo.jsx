import { useState } from "react"

export default function AddToDo({updateList}) {
    const [task, setTask] = useState('')
    return(
        <div>
            <input
            type="text"
            placeholder="Add Task..."
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            />
            <button onClick={()=>{
                updateList(task);
                 setTask('')}}>Add+</button>
        </div>
    )

}