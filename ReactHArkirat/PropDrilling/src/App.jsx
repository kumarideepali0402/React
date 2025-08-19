import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  return(
    <>
        <Count/>
        <Buttons/>
    </>
  );
  
       
}

function Buttons(){
  return(
    <div>
      <button onClick={()=>{
        setCount(count + 1)
      }}>Increase</button>
      <button onClick={()=>{
        setCount(count+1)
      }}>Decrease</button>
    </div>
  )

}
function Count(){

}
export default App;
