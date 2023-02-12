import Navbar from "./Navbar"

function AboutPage() {
    return (
        <div>
            <Navbar aboutDis={true} />
            <div className='sidebar'/>
            <div className="mainSide">
                <h1 className="leftTitle">
                    ABOUT WRECKCON
                </h1>
                <p className="info">
                    WreckCon is a convention held at Georgia Tech (Main Atlanta Campus), fully organized and run by Georgia Tech students. Starting in 2022, the Dungeons & Dragons and Magic: the Gathering clubs ran a small convention with events such as open play and tournaments. Realizing that the major potential for a convention at Tech, we began reaching out to other clubs to make the event a celebration of student culture here at Tech, following in the footsteps of previous events such as Techwood Con. We're envisioning an event that showcases the best of what people at Georgia Tech have to offer, built by Tech, for Tech. Go jackets!
                </p>
                <p className="info">
                    As of right now, the Wrecking Construction Committee includes: <br/>
                    &emsp;- Dungeons & Dragons Club <br></br>
                    &emsp;- Magic: the Gathering at Georgia Tech <br></br>
                    &emsp;- Anime O-Tekku <br></br>
                    &emsp;- VGDev<br></br>
                    &emsp;- Board Game Club<br></br>
                    &emsp;- Gourd Visual Arts Club<br></br>
                    &emsp;- WREK Radio<br></br>
                    &emsp;- Georgia Tech Musicians Network<br></br>
                    &emsp;- Student Government Association<br></br>
                    ...and many more!
                </p>
                <p className="info">
                    We would also like to thank the Georgia Tech Parents Fund! This event could not happen without their support. 
                </p>
                <p className="info">
                    To stay informed of any updates about Wreckcon as they come out, join the mailing list or discord server below:
                </p>
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

export default AboutPage