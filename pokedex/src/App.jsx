import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokedex from './Components/Pokedex/Pokedex'
import CustomRoutes from '../routes/customRoutes'

function App() {
  

  return (
    <div className='container'>
      <h1 className="heading">Pokedex</h1>
      <CustomRoutes/>
    
    </div>
  )
}

export default App
