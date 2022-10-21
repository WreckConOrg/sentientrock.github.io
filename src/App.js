import './App.css';
import CountdownTimer from './CountdownTimer'
import InvolvedPage from './InvolvedPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const CONDATE = new Date("February 25, 2023 8:00:00").getTime();

function App() {

  return (
    <div>
      <Routes>
        <Route path="/get-involved" element={<InvolvedPage />} />
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

function Home() {

  return (
    <div className="Home">
      <img className='wcclogo' 
      src={require("./images/wcclogo.png")} alt={"WccLogo"}/>
      <CountdownTimer targetDate={CONDATE} />
      <div className='link-body'>
        <Link to={"/get-involved"} className='link'> GET INVOLVED &bull; </Link>
        <Link to={"/nothing"} className='link-disabled' > TICKETS &bull; </Link>
        <Link to={"/nothing"} className='link-disabled' > SCHEDULE  </Link>
      </div>
    </div>
  );
} 

export default App;
