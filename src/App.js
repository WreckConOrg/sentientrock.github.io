import './App.css';
import CountdownTimer from './CountdownTimer'

function App() {

  const CONDATE = new Date("February 25, 2023 12:00:00").getTime();

  return (
    <div className="App">
      <img className='wcclogo' 
      src={require("./images/wcclogo.png")} alt={"WccLogo"}/>
      <h1 className='title'>
        WRECKCON 2023
      </h1>
      <CountdownTimer targetDate={CONDATE} />
    </div>
  );
}

export default App;
