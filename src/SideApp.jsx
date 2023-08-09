import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SubApp from './SubApp.jsx';
import sha256 from 'crypto-js/sha256';

function App({children}) {

  function handleClick(data){
  	window.location = 'https://usis.bracu.ac.bd/academia/studentCourse/createSchedulePDF?content=pdf&studentId='+data["SID"]+'&sessionId='+data["TIME"];
  }

  if(children.length != 0){
 	 	const arrayDataItems = children.map((data) => <li key={data["ID"]}><a onClick={() => {handleClick(data);}} className="text-dark">{data["ID"]+"-"+data["PROG"]+"-"+data["NAME"]}</a></li>);
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
