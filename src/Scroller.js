import {useState} from 'react';
import useWindowDimensions from './useWindowDimensions';
import { Link } from 'react-router-dom';

function Scroller(props) {

    const [clicked, click] = useState(false);
    const [height, setHeight] = useState("0");
    let scaledHeight = props.max_height;
    if (useWindowDimensions().width < 550) {
        scaledHeight = props.max_height * 2;
    }

    const realHeight = String(scaledHeight) + "vw"

    return (
        <div>
            <div>
                <h1 className='open' onClick={() => {
                    click(!clicked);
                    setHeight(clicked ? "0" : realHeight)
                }}> {props.title + "\xa0".repeat(5) + (clicked ? "-" : "+")}</h1>
                <div className={"scheduleOpener"} style={{height: height}}>
                    <Link to={props.link}>
                    <img className="schedule" style={{height: realHeight}}src={props.image} alt="Sorry, the schedule could not be loaded" />
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default Scroller;