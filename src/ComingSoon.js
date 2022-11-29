import Navbar from "./Navbar";

function ComingSoon(props) {
    return (
        <div>
            <Navbar ticketsDis={props.tickets} scheduleDis={props.schedule} />
            <div className="sidebar" />
            <div className="mainSide">
                <h1 className="leftTitle">
                    STAY TUNED
                </h1>
                <p className="info">
                    As we get closer to the event, we will release signups for tickets as well as a schedule of all the 
                    incredible events we plan to offer. For now, feel free to join the mailing list below for updates and info.
                </p>
            </div>
        </div>
    )
}

export default ComingSoon;