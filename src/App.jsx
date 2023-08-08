import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import sha256 from 'crypto-js/sha256';
import { AES, enc } from 'crypto-js';

function App() {
  //const [count, setCount] = useState(0)
  var token = "";
  

  
  function handleClick() {
  	var data = sha256(token).toString();
  	if("a05028d37f839797ca0c2d510b3f1993326dc0c269364811f92adfdbd7d00385" == data)
	    console.log("Owner!!");
	else
	    console.log("Not owner!!");
	//console.log(sha256("Pass").toString());
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
