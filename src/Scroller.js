import {useState} from 'react';

function Scroller(props) {

    const [clicked, click] = useState(false);
    const [height, setHeight] = useState("0");

    return (
        <div>
            <div>
                <h1 className='open' onClick={() => {
                    console.log(props.max_height)
                    click(!clicked);
                    setHeight(clicked ? "0" : props.max_height)
                }}> {props.title + "\xa0".repeat(5) + (clicked ? "-" : "+")}</h1>
                <div className={"scheduleOpener"} style={{height: height}}>
                    {props.children}
                </div>
            </div>
        </div>
    )

}

export default Scroller;