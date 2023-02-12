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
                    As we get closer to the event, we will release a full schedule of all the 
                    incredible events we plan to offer. For now, feel free to join the mailing list discord server below for updates and info.
                </p>
                <p/>
                <a href="https://forms.gle/NHsDQPAxGrqLWdqX7" className="bigLink">
                    MAILING LIST
                </a>
                <p/>
                <a href="https://discord.gg/vDQBrk5EbB" className="bigLink">
                    DISCORD SERVER
                </a>
            </div>
        </div>
    )
}

export default ComingSoon;