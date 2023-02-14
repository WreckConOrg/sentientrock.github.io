import Navbar from "./Navbar";
import {useState } from 'react';

function Schedule(props) {

    const [panelsClicked, clickPanels] = useState(false);

    return (
        <div>
            <Navbar scheduleDis={true} />
            <div className="sidebar" />
            <div className="mainSide">
                <p className="info">
                    CLICK TO EXPAND ANY CATEGORY
                </p>
                <div className="scheduleOpener">
                    <label for="touch">
                        <h1 className="open" onClick={() => {
                            clickPanels(!panelsClicked)
                        }}>{"PANELS" + "\xa0".repeat(5) + (panelsClicked ? "-" : "+")}</h1>
                    </label>
                    <input type="checkbox" id="touch"/>
                    <div className="container">
                        <img className="schedule" src={require("./images/full_panel_announcement_dark_mode.png")} alt="Sorry, schedule could not be loaded"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule;