import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SubApp from './SubApp.jsx';
import SideApp from './SideApp.jsx';
import sha256 from 'crypto-js/sha256';

function App() {

  const [lst,setLst] = useState([]);
  
  //console.log(lst);

  return (
    <div className="row">
      <div className="entry rounded bg-primary row p-4 me-2">
      	<p className="fs-1">Usis Finder 1.0</p>
      	<p className="fs-5">Please login to usis right before working here</p>
	<SubApp>{setLst}</SubApp>
      </div>
	<SideApp>{lst}</SideApp>
    </div>
  )
}

export default App
