import './App.css';
import CountdownTimer from './CountdownTimer'
import InvolvedPage from './InvolvedPage';
import AboutPage from './AboutPage'
import Schedule from './Schedule';
import Redirect from './Redirect';
import Panels from './Panels';
import confetti from 'canvas-confetti';
import {
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import frogfr from "./images/frogfr.png"

const CONDATE = new Date("February 25, 2023 10:00:00").getTime();

function App() {

  const location = useLocation();

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
        {location.pathname === "/" ? null : <img className='rotate' src={frogfr} alt="ERROR" />}
      </div>
      <div className="footer" />
    </div>
  );
}

function Home() {

  if (CONDATE <= Date.now()) {
    var duration = 1000;
    var end = Date.now() + duration;

    (async function frame() {
      // launch a few confetti from the left edge
      confetti({
        particleCount: 4,
        angle: 50,
        spread: 55,
        origin: { x: 0 },
        colors: ["#383C40", "#F2F5F8", "#FFCE56"],
        scalar: 1.5,
        decay: 0.91
      });
      // and launch a few from the right edge
      confetti({
        particleCount: 4,
        angle: 130,
        spread: 55,
        origin: { x: 1 },
        colors: ["#383C40", "#F2F5F8", "#FFCE56"],
        scalar: 1.5,
        decay: 0.91
      });

      // keep going until we are out of time
      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }());
  }

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
