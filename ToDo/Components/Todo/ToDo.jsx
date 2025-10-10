import { useState } from "react"

export default function ToDo({ToDoData, isFinished, changeFinished, onDelete, onEdit}) {
    const [finished, setFinished] = useState(isFinished);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText]=useState(ToDoData)
    return(
        <div>
            <input type="checkbox" checked={finished} onChange={(e) => {
                setFinished(e.target.checked)
                changeFinished(e.target.checked)
                }}/>
            {!isEditing?<span>{ToDoData}</span>:<input type={"text"}value = {editText} onChange={(e)=>setEditText(e.target.value)}/> }
            <button onClick={()=>{
                setIsEditing(!isEditing);
                onEdit(editText)

            }}>
                {!isEditing?"Edit":"Save"}</button>
            <button onClick={()=>onDelete()}>Delete</button>
        </div>
    )
}