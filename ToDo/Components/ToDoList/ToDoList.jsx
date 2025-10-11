import { useState } from "react"
import ToDo from "../Todo/TODO"
import { useContext } from "react";
import ToDoContext from "../../Context/ToDoContext";
import ToDoDispatchContext from "../../Context/ToDoDispatchContext";
export default function ToDoList() {
    const {list} = useContext(ToDoContext)
    const {dispatch} =useContext(ToDoDispatchContext);
    
    return(

        <div>
            {list.length > 0 && list.map((t)=><ToDo 
                                                key ={t.id} 
                                                id={t.id}
                                                  
                                                ToDoData={t.todo}
                                                isFinished={t.finished}
                                                changeFinished = {(todo,isFinished)=>{
                                                    dispatch({type: 'finish_todo', payload : {todo, isFinished : isFinished}})
                                                    

                                                }}
                                                onEdit={(todo,toDoText)=>{
                                                    
                                                    
                                                        dispatch({type: 'edit_todo', payload : {todo, toDoText}})

                                                }}
                                                onDelete = {(todo)=>{
                                                    dispatch({type: 'delete_todo', payload : {todo}})
                                                    
                                                }}
                                                >
                                                
                                    
                                                
                                              </ToDo>)
            }
        </div>

    )
}