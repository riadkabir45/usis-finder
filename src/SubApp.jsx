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
        console.log(document.title)
        if (!document.title.includes('Updated'))
            document.title = document.title+" (Updated)"
      }else if(newData.length != 0) 
        console.log("Already Updated")
      else 
        console.log("Failed")
  };
  xhr.send();

  
  const [token,setToken] = useState("");
  const [owner,setOwner] = useState(false);
  const [time,setTime] = useState(new Date().getFullYear());
  const [sem,setSem] = useState("spr");
  
  function handleClick() {
	event.preventDefault();
  	var data = sha256(token).toString();
  	if("a05028d37f839797ca0c2d510b3f1993326dc0c269364811f92adfdbd7d00385" == data)
	    setOwner(true);
	else
		console.log(data);
	setToken("");
  }
  
  function handleClickD() {
	event.preventDefault();
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
		    var offset = 0;
		    if(sem == 'smr')
			offset = 1;
		    else if(sem == 'fall')
			offset = 2;
		    var codeTime = (627123-2024*3+parseInt(time)*3 + offset).toString();
		    console.log(codeTime);
 		    cData[i]["TIME"] = codeTime;
			matchList.push(cData[i]);
 		}
	}
	children(matchList);
  }
  
  if(owner == false)
	  return (
	    <form>
		<input type="password" id="tokenField" className="form-control align-self-center text-center" value={token} onChange={(event) => {setToken(event.target.value);}} placeholder="Access Token"/><br/>
		<button type="submit" className="btn btn-dark bg-primary mb-3" onClick={handleClick}>Confirm Token</button>
	    </form>
	  )
  else
	  return (
	    <form>
		<input type="text" className="form-control h-f align-self-center text-center" value={token} onChange={(event) => {setToken(event.target.value);}}  id="exampleFormControlInput1" placeholder="Name or Dept or ID"/><br/>
		<input type="text" className="form-control h-f align-self-center text-center" value={time} onChange={(event) => {setTime(event.target.value);}}  id="exampleFormControlInput1" placeholder="Time Eg: 627117"/><br/>
		<input  className="form-check-input" type="radio" name="semester" onChange={(event) => {setSem('spr');}} checked={sem === 'spr'}/> Spring &nbsp;
		<input  className="form-check-input" type="radio" name="semester" onChange={(event) => {setSem('smr');}} checked={sem === 'smr'}/> Summer &nbsp;
		<input  className="form-check-input" type="radio" name="semester" onChange={(event) => {setSem('fal');}} checked={sem === 'fal'}/> Fall &nbsp;
		<br/><br/>
		<button type="submit" className="btn btn-dark bg-primary mb-3" onClick={handleClickD}>Confirm Data</button>
	    </form>
	  )
}

export default App
