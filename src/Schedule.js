import Navbar from "./Navbar";
import Scroller from "./Scroller";
import panels from "./images/panels.png";
import main_stage from "./images/main_stage.png";
import smash from "./images/smash.png";
import ttrpg from "./images/TTRPG.png";
import open_play from "./images/open_play.png"
import useWindowDimensions from "./useWindowDimensions";

function Schedule(props) {

    let mobile = false;

    if (useWindowDimensions().width < 550) {
        mobile = true;
    }

    const height = (h) => {
        if (mobile) {
            return String(h * 2) + "vw";
        }
        return String(h) + "vw";
    }

    return (
        <div>
            <Navbar scheduleDis={true} />
            <div className="sidebar" />
            <div className="mainSide">
                <p className="sub2">
                    CLICK TO EXPAND ANY CATEGORY
                </p>
                <Scroller title={"MAIN STAGE"} max_height={height(33)}>
                    <img className="schedule" style={{height: height(33)}} src={main_stage} alt="Sorry, the schedule could not be loaded" />
                </Scroller>
                <Scroller title={"PANELS"} link={"/panels"} max_height={height(38.4)}>
                    <img className="schedule" style={{height: height(38.4)}} src={panels} alt="Sorry, the schedule could not be loaded" />
                </Scroller>
                <Scroller title={"SMASH"} max_height={height(26.3)} >
                    <img className="schedule" style={{height: height(26.3)}} src={smash} alt="Sorry, the schedule could not be loaded" />
                </Scroller>
                <Scroller title={"TTRPGS"} max_height={height(30.7)} >
                    <img className="schedule" style={{height: height(30.7)}} src={ttrpg} alt="Sorry, the schedule could not be loaded" />
                </Scroller>
                <Scroller title={"OPEN PLAY"} max_height={height(20.7)} >
                    <img className="schedule" style={{height: height(20.7)}} src={open_play} alt="Sorry, the schedule could not be loaded" />
                </Scroller>
            </div>
        </div>
    )
}


export default Schedule;