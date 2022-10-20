import './App.css';
import CountdownTimer from './CountdownTimer'
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const CONDATE = new Date("February 25, 2023 12:00:00").getTime();

function App() {

  return (
    <div>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

function Home() {

  const [timerLoaded, setTimerLoaded] = useState(false);
  useEffect(() => {
    setTimerLoaded(true);
  }, [])

  return (
    <div className="Home">
      <img className='wcclogo' 
      src={require("./images/wcclogo.png")} alt={"WccLogo"}/>
      <h1 className='title'>
        WRECKCON 2023
      </h1>
      <CountdownTimer targetDate={CONDATE} />
    </div>
  );
}

function Test() {
  return <div> Hello World !</div>
}

export default App;
