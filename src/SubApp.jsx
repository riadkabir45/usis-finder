import { useState } from 'react'
import sha256 from 'crypto-js/sha256';
import data from './data.json';

function App({children}) {
  //const [count, setCount] = useState(0)
  //var token = "";
  const [token,setToken] = useState("");
  const [owner,setOwner] = useState(false);
  const [time,setTime] = useState("627117");
  
  function handleClick() {
  	var data = sha256(token).toString();
  	if("a05028d37f839797ca0c2d510b3f1993326dc0c269364811f92adfdbd7d00385" == data)
	    setOwner(true);
	else if("61b550674963631aa369feabd999bee2cfbebafde2a9b1c06e7ffc960156471a" == data)
	    setOwner(true);
	else
		console.log(data);
	setToken("");
  }
  
  function handleClickD() {
  	var matchList = [];
	children(matchList);
 	for (let i = 0; i < data.length; i++) {
 		let comData = data[i]["ID"]+" "+data[i]["PROG"]+" "+data[i]["NAME"];
 		comData = comData.toLowerCase();
 		let all = true;
 		let compToken = token.split(" ");
 		for (let j = 0; j < compToken.length; j++){
 			all = comData.includes(compToken[j].toLowerCase());
 			if (!all)
 				break
 		}
 		if(all){
 			data[i]["TIME"] = time;
 			matchList.push(data[i]);
 		}
	}
	children(matchList);
  }
  
  if(owner == false)
	  return (
	    <>
		<input type="password" className="form-control align-self-center text-center" value={token} onChange={(event) => {setToken(event.target.value);}} id="exampleFormControlInput1" placeholder="Access Token"/>
		<button type="submit" className="btn btn-dark bg-primary mb-3" onClick={handleClick}>Confirm Token</button>
	    </>
	  )
  else
	  return (
	    <>
		<input type="text" className="form-control h-f align-self-center text-center" value={token} onChange={(event) => {setToken(event.target.value);}}  id="exampleFormControlInput1" placeholder="Name or Dept or ID"/>
		<input type="text" className="form-control h-f align-self-center text-center" value={time} onChange={(event) => {setTime(event.target.value);}}  id="exampleFormControlInput1" placeholder="Time Eg: 627117"/>
		<button type="submit" className="btn btn-dark bg-primary mb-3" onClick={handleClickD}>Confirm Data</button>
	    </>
	  )
}

export default App
