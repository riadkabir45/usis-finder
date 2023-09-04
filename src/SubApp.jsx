import { useState } from 'react'
import sha256 from 'crypto-js/sha256';
import data from './data.json';

function App({children}) {
  const [newData, setData] = useState([])
  //var token = "";
  //var newData = []
  
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://raw.githubusercontent.com/riadkabir45/usis-miners/main/data.csv');
  xhr.onload = function() {
      if (xhr.status === 200 && newData.length == 0) {
        var text = xhr.responseText.split('\n');
        var preData = []
        for (let x = 0; x < text.length; x++) {
            var person = text[x].split(',')
            var perInfo = {}
            perInfo['SID'] = person[0]
            perInfo['ID'] = person[1]
            perInfo['PROG'] = person[2]
            perInfo['NAME'] = person[3]
            preData.push(perInfo)
        }
        setData(preData)
        //alert("Data Updated");
      }else if(newData.length != 0) 
        console.log("Already Updated")
      else 
        console.log("Failed")
  };
  xhr.send();

  
  const [token,setToken] = useState("");
  const [owner,setOwner] = useState(false);
  const [time,setTime] = useState("627117");
  
  function handleClick() {
  	var data = sha256(token).toString();
  	if("a05028d37f839797ca0c2d510b3f1993326dc0c269364811f92adfdbd7d00385" == data)
	    setOwner(true);
	else
		console.log(data);
	setToken("");
  }
  
  function handleClickD() {
  	var matchList = [];
	children(matchList);
	if(newData.length != 0)
	    var cData = newData
	else
	    var cData = data
 	for (let i = 0; i < cData.length; i++) {
 		let comData = cData[i]["ID"]+" "+cData[i]["PROG"]+" "+cData[i]["NAME"];
 		comData = comData.toLowerCase();
 		let all = true;
 		let compToken = token.split(" ");
 		for (let j = 0; j < compToken.length; j++){
 			all = comData.includes(compToken[j].toLowerCase());
 			if (!all)
 				break
 		}
 		if(all){
 		    cData[i]["TIME"] = time;
 			matchList.push(cData[i]);
 		}
	}
	children(matchList);
  }
  
  if(owner == false)
	  return (
	    <>
		<input type="password" id="tokenField" className="form-control align-self-center text-center" value={token} onChange={(event) => {setToken(event.target.value);}} placeholder="Access Token"/>
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
