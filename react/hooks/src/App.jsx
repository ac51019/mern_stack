
import { useState } from 'react';
import './App.css';
// very imp useState

function App() {

  // let counter=10;
  const [counter,setCounter]=useState(0)
  // const counter =10;

  const addValue=()=>{
    // console.log("Value Incremennt", Math.random());
    // counter ++ 
    // counter +=1
    // counter = counter + 1
    setCounter(counter+1)
    console.log("counter: ",counter); 
  }

  const subValue=()=>{
    // counter = counter - 1
      setCounter(counter-1)
    console.log("counter : ",counter);
    
 
  }
  return (
    <>
     <h1>Hooks React Topic</h1>
     <h4>Counter: {counter}</h4>
     <h5>Counter: {counter}</h5>
     <h6>Counter: {counter}</h6>
     <p>Counter: {counter}</p>
     <button onClick={addValue}>Increment By 1</button>
     <button onClick={subValue}>Decrement By 1</button>
    </>
  )
}

export default App
