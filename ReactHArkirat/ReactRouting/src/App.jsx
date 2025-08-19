import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { LandingPage } from './components/Landing'
// import  Dashboard from './components/Dashboard'
import React from "react"
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
import { Suspense } from 'react'
const Dashboard = React.lazy(()=> import ("./components/Dashboard"))
const LandingPage = React.lazy(()=>import("./components/Landing"))

function App() {
  
  return(
    
    <div>
      
      <BrowserRouter>
          <Appbar/>
          <Routes>
            <Route path="/" element={<Suspense fallback={"loading.."}><LandingPage/></Suspense>}/>
            <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
          </Routes>
      </BrowserRouter>
      <div>
        this is below
      </div>

    </div>
  )
 
}

function Appbar(){
  const navigate = useNavigate();//navigate should always be inside browser router
  return(
    <div>
          <button onClick={()=>{
            navigate("/")
          }}>LandingPage</button>
          <button
          onClick={()=>{
            navigate("/dashboard")
          }}>
            Dashboard</button>
    </div>
  )

}

export default App;
