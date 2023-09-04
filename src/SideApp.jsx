import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SubApp from './SubApp.jsx';
import sha256 from 'crypto-js/sha256';

function App({children}) {

  function handleClick(data){
  	let gurl = 'https://usis.bracu.ac.bd/academia/studentCourse/createSchedulePDF?content=pdf&studentId='+data["SID"]+'&sessionId='+data["TIME"];
  	window.open(gurl, '_blank');
  }

  if(children.length != 0){
        console.log(children)
 	 	const arrayDataItems = children.map((data) => <li key={data["SID"]}><a onClick={() => {handleClick(data);}} className="text-dark">{data["ID"]+"-"+data["PROG"]+"-"+data["NAME"]}</a></li>);
		return (
		<>
		<div className="entry rounded bg-secondary sidePanel row p-4">
		<ul className="fs-6 overflow-auto w-100 h-100">{arrayDataItems}</ul>
		</div>
		</>
		)
  }
}

export default App
