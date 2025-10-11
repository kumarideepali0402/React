import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDo from '../Components/AddToDo/AddToDo'
import ToDoList from '../Components/ToDoList/ToDoList'
import ToDoContext from '../Context/ToDoContext'
import { useReducer } from 'react'
import todoReducer from '../reducers/todoreducer'
import ToDoDispatchContext from '../Context/ToDoDispatchContext'

function App() {
  // const [list, setList] = useState([
  //       {id:1, todo:"todo1", finished:false},
  //       {id:2, todo:"todo2", finished:true}
  //   ])
  const [list, dispatch] = useReducer(todoReducer,[]);
  
  return (
    <ToDoContext.Provider value = {{list}}>
      <ToDoDispatchContext.Provider value ={{dispatch}}>
        <AddToDo/>
        <ToDoList/> 
      </ToDoDispatchContext.Provider>
      
     
    </ToDoContext.Provider>
  )
}

export default App
