import { useState } from "react"
import ToDo from "../Todo/TODO"
import { useContext } from "react";
import ToDoContext from "../../Context/ToDoContext";
export default function ToDoList() {
    const {list, setList} = useContext(ToDoContext)
    
    return(

        <div>
            {list.length > 0 && list.map((t)=><ToDo 
                                                key ={t.id} 
                                                id={t.id}  
                                                ToDoData={t.todo}
                                                isFinished={t.finished}
                                                changeFinished = {(isFinished)=>{
                                                    console.log("isFInished:",isFinished );
                                                    
                                                    const updatedList = list.map((todo)=>{
                                                        if(t.id == todo.id){
                                                            t.finished = isFinished;
                                                        }
                                                        return todo;
                                                    })
                                                    setList(updatedList)

                                                }}
                                                onEdit={(toDoText)=>{
                                                    
                                                    
                                                    const updatedList = list.map((todo)=>{
                                                        if(t.id == todo.id){
                                                            todo.todo = toDoText;
                                                        }
                                                        return todo;
                                                    })
                                                    setList(updatedList)

                                                }}
                                                onDelete = {()=>{
                                                    const updatedList = list.filter((todo)=>t.id != todo.id)
                                                    setList(updatedList);
                                                }}
                                                >
                                                
                                    
                                                
                                              </ToDo>)
            }
        </div>

    )
}