import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDo from '../Components/AddToDo/AddToDo'
import ToDoList from '../Components/ToDoList/ToDoList'
import ToDoContext from '../Context/ToDoContext'

function App() {
  const [list, setList] = useState([
        {id:1, todo:"todo1", finished:false},
        {id:2, todo:"todo2", finished:true}
    ])
  
  return (
    <ToDoContext.Provider value = {{list, setList}}>
      
        <AddToDo updateList={(task)=>setList([...list,{id:list.length + 1, todo:task, finished:false}])}/>
        <ToDoList/> 
     
    </ToDoContext.Provider>
  )
}

export default App
