import Navbar from "./Navbar";
import Scroller from "./Scroller";
import panels from "./images/panels.png";
import main_stage from "./images/main_stage.png";
import smash from "./images/smash.png";
import ttrpg from "./images/TTRPG.png";
import open_play from "./images/open_play.png"

function Schedule(props) {

    return (
        <div>
            <Navbar scheduleDis={true} />
            <div className="sidebar" />
            <div className="mainSide">
                <p className="sub2">
                    CLICK TO EXPAND ANY CATEGORY
                </p>
                <Scroller title={"MAIN STAGE"} image={main_stage} class={"main_stage"} max_height={33} />
                <Scroller title={"PANELS"} link={"/panels"} image={panels} class={"panels"} max_height={38.4}/>
                <Scroller title={"SMASH"} image={smash} max_height={26.3} />
                <Scroller title={"TTRPGS"} image={ttrpg} max_height={30.7} />
                <Scroller title={"OPEN PLAY"} image={open_play} max_height={20.7} />
            </div>
        </div>
    )
}

export default Schedule;