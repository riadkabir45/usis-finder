import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  var token = "Empty";

  
  function handleClick() {
    console.log('You submitted',token,'.');
  }
  
  function handleChange(event){
  	token = event.target.value;
  }
  
  return (
    <>
      <div className="entry rounded bg-primary row p-4">
      	<p className="fs-1">Usis Finder 1.0</p>
        <input type="email" className="form-control align-self-center text-center" onChange={handleChange} id="exampleFormControlInput1" placeholder="Access Token"/>
        <button type="submit" className="btn btn-dark bg-primary mb-3" onClick={handleClick}>Confirm Token</button>
      </div>
    </>
  )
}

export default App
