// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0);
//   return(
//     <>
//         <Count count ={count}/>
//         <Buttons count={count} setCount={setCount}/>
//     </>
//   );
  
       
// }

// function Buttons({count, setCount}){
//   return(
//     <div>
//       <button onClick={()=>{
//         setCount(count + 1)
//       }}>Increase</button>
//       <button onClick={()=>{
//         setCount(count-1)
//       }}>Decrease</button>
//     </div>
//   )

// }
// function Count({count}){
//   return(
//     <div>{count}</div>
//   )

// }
// export default App;


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext } from 'react';
import { CountContext } from '../Component/context';

function App() {
  const [count, setCount] = useState(0);
  // wrap anyone that wantsa to use the teleported value inside a provider
  // context Api lets you to transfer the prop only on those components where you actually want to use it for example if you want 
  // to transfer a prop from one component to innerchild component you dont have to transfer the same prop in the intermediary component
  // give s good visual apperance
  return(
    <div>
      <CountContext.Provider value={{count, setCount}}>
        <Count  />
      </CountContext.Provider>

        
    </div>
  );
  
       
}
function CountRenderer(){
  const {count} = useContext(CountContext)
  return(
    <div>
      {count}
    </div>
  )
}

function Buttons(){
  const {count, setCount} = useContext(CountContext);
  return(
    <div>
      <button onClick={()=>{
        setCount(count + 1)
      }}>Increase</button>
      <button onClick={()=>{
        setCount(count-1)
      }}>Decrease</button>
    </div>
  )

}
function Count(){
  console.log('renderrrrrr');
  
  return(
    <div>
      <CountRenderer/>
      <Buttons />
    </div>
    
  )

}
export default App;

