import './App.css';
import CountdownTimer from './CountdownTimer'
import InvolvedPage from './InvolvedPage';
import AboutPage from './AboutPage'
import Schedule from './Schedule';
import Redirect from './Redirect';
import Panels from './Panels';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

const CONDATE = new Date("February 25, 2023 8:00:00").getTime();

function App() {

  return (
    <div>
      <div className ="main">
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/get-involved" element={<InvolvedPage />} />
          <Route path="/tickets" element={<Redirect />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/panels" element={<Panels />} />
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
      <div className="footer" />
    </div>
  );
}

function Home() {

  return (
    <div className="Home">
      <img className='wcclogo' 
      src={require("./images/wcclogo.png")} alt={"WccLogo"}/>
      <CountdownTimer targetDate={CONDATE} />
      <div className='date'> 
        MARK YOUR CALENDARS - 02/25/2023
      </div>
      <div className='link-body'>
        <Link to={"/about"} className='link'> ABOUT</Link>
        <a href={'none'} className='link-disabled'> &bull; </a>
        <Link to={"/get-involved"} className='link'> GET INVOLVED</Link>
        <a href={'none'} className='link-disabled'> &bull; </a>
        <a href={'https://gatech.universitytickets.com/w/event.aspx?id=1942'} className='link' > TICKETS</a>
        <a href={'none'} className='link-disabled'> &bull; </a>
        <Link to={"/schedule"} className='link' > SCHEDULE</Link>
        <a href={'none'} className='link-disabled'> &bull; </a>
        <Link to={"/panels"} className='link' > PANELS</Link>
        <a href={'none'} className='link-disabled'> &bull; </a>
        <a href={'https://discord.gg/vDQBrk5EbB'} className='link'> DISCORD </a>
      </div>
    </div>
  );
} 

export default App;
