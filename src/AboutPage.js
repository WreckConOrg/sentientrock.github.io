import { useEffect, useRef, useState } from "react"
import Navbar from "./Navbar"
import Scroller from "./Scroller"
import foodtrucks from "./images/foodtrucks.PNG"

function AboutPage() {

    const aboutRef = useRef(null)
    const eventsRef = useRef(null)
    const faqRef = useRef(null)

    const [aboutHeight, setAboutHeight] = useState(0)
    const [eventsHeight, setEventsHeight] = useState(0)
    const [faqHeight, setFaqHeight] = useState(0)

    useEffect(() => {
        setAboutHeight(aboutRef.current.clientHeight + 30)
        setEventsHeight(eventsRef.current.clientHeight + 30)
        setFaqHeight(faqRef.current.clientHeight + 30)
    }, [])

    return (
        <div>
            <Navbar aboutDis={true} />
            <div className='sidebar'/>
            <div className="mainSide">
                <p className="sub2">
                    CLICK TO EXPAND ANY CATEGORY
                </p>
                <Scroller title="ABOUT US" max_height={aboutHeight}>
                    <div ref={aboutRef}>
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
                    </div>
                </Scroller>
                <Scroller title={"EVENTS"} max_height={eventsHeight}>
                    <div ref={eventsRef}>
                        <p className="sub1">BOARD GAMES</p>
                        <p className="info">Board Games is glad to present a number of events this year at WreckCon!</p>
                        <p className="info">Open Play - Check out games from our massive collection of board games to play during the convention</p>
                        <p className="info">7 Wonders Tournament - Compete in our 7 Wonders Tournament to win a copy of the game (We will teach you how to play)</p>
                        <p className="info">Play-to-win Games - Play any of the play to win games to be entered into a raffle to bring home the game</p>
                        <p className="sub1">COSPLAY COMPETITION</p>
                        <p className="info">Anime O’Tekku (GT Anime Club) will be hosting a Cosplay Competition on Saturday, February 25th from 2:30-3:30pm on the Main Stage at the Exhibition Hall for WRECKCON! Admission is free for the Cosplay Competition, and Anime O’Tekku will be handing out snack baskets, plushies, trophies, and tickets to momocon as prizes!! If you’re interested in participating, please fill out this registration form: <a className="link2" href="https://tinyurl.com/wreckcosplay">https://tinyurl.com/wreckcosplay</a>. Hope to see you there!!</p>
                        <p className="sub1">OPEN TTRPG GAME NIGHT</p>
                        <p className="info">DMs from Tech's own D&D Club, UGA D&D, ATL Pathfinder Society, GSU Tabletop and others are all coming together to host an open game night at WreckCon 2023! There are a number of different systems, free for anyone to walk up and play - you don't even need to bring a character sheet! We would love to teach you how to play TTRPGs, all you need to do is show up. We'll be in the Kirkwood room on the 2nd floor.</p>
                        <p className="sub1">GOURD ART SPACE</p>
                        <p className="info">Gourd Visual Arts Club at GT will be hosting an open art space. We will have acrylic paints and paper for attendees to add onto a giant collaborative mural. There will also be limited canvases which will be provided on a first-come-first-serve basis.</p>
                        <p className="sub1">MAGIC: THE GATHERING</p>
                        <p className="info">GTMTG is proud to have senior game designer Gavin Verhey join us this year for fun and festivities! In addition to his open Q&A panel, we will be hosting an open play space for all players. Join us for Commander, on demand drafts, or just to learn the game!</p>
                        <p className="sub1">SMASH TOURNAMENT</p>
                        <p className="info">SmashJackets presents: We Tech Those @ WreckCon, a Super Smash Brothers: Ultimate tournament. There's a $1000 prize pool, and registration is capped for us to be able to accommodate everyone, but walk up registration is allowed. Look at all event details and registration at <a className="link2" href="https://tinyurl.com/wewreckthose">https://tinyurl.com/wewreckthose</a> !</p>
                        <p className="sub1">THE WRECKCONCERT</p>
                        <p className="info">GTMN presents some of the best student bands Georgia Tech has to offer: Fishing, The Bird Party, and Two Factor Authentication! Come on down on Saturday for an afternoon of good tunes!</p>
                        <p className="sub1">VGDEV ARCADE</p>
                        <p className="info">Come to our arcade to play student made games and earn prizes! We're hosting:</p>
                        <p className="info"> <b>Barkane:</b> Take control of Marmalade, a magical Shiba Inu, on her journey to traverse a paper world and collect the gems of ultimate power! Navigate a series of paper-folding puzzles by manipulating the level itself to progress. </p>
                        <p className="info"> <b>Dry:</b> Play this horror game where you are stranded in an abandoned oil rig looking for gasoline to refill your car and escape. However, you might not be alone in this place.</p>
                        <p className="info"> <b>Gunsnake:</b> You've played snake before. You've played roguelikes. Now, we mix them together as humanity's finest piece of engineering -- the Gunsnake. Master the unconventional movement and aiming systems as you try and conquer the Temple.</p>
                        <p className="info"> <b>Paper Planes:</b> Create lines of wind to guide a paper plane past obstacles and deliver a lost message that drifted down on the steps of the goddess's temple.</p>
                        <p className="info"> <b>Starfall:</b> Play this third person action shooter wherein you  must survive waves of increasingly difficult interdimensional adversaries using their machine pistol, daggers, clone, and dash.</p>
                        <p className="sub1">RAGE ROOM</p>
                        <p className="info">Let our your rage at the Wreck Room! We've got a variety of smashable goods just waiting for you to break them. Admission is completely free, and included with the waiver in your ticket, but we advise wearing closed toe footwear, full sleeves and long pants if interested. Available while stocks last each day!</p>
                        <p className="sub1">SCPC PRESENTS: MARIO KART</p>
                        <p className="info">Are you ready for Mario Kart--with a twist?! Then join us at the inaugural Wreck Con this Saturday, February 25 from 10-1PM in the Highlands Room of the Exhibition Hall! Come with friends or just yourself and play some Mario Kart, with the added twist of wearing beer goggles. Watch and experience as you and your friends hilariously swing and swerve around the courses!</p>
                        <p className="info">Please email movies@scpc.gatech.edu if you have any questions. </p>
                    </div>
                </Scroller>
                <Scroller title={"FAQ"} max_height={faqHeight}>
                    <div ref={faqRef}>
                        <p className="sub2">Q: What time is the convention?</p>
                        <p className="info">A: Doors open on Feb 25 at 10am and close at 7pm. On Feb 26, they open at 12pm and close at 6pm.</p>
                        <p className="sub2">Q: Where is it?</p>
                        <p className="info">A: <a href="https://goo.gl/maps/hrbWL3A9rcuycUiT8" className="link2"> The Georgia Tech Exhibition Hall! </a></p>
                        <p className="sub2">Q: Is parking free? Where can I park?</p>
                        <p className="info">A: Parking is not free, you can view our visitor parking spaces here, starting at $5/day: <a href="https://www.pts.gatech.edu/parking/visitor-parking/" className="link2"> https://www.pts.gatech.edu/parking/visitor-parking/</a></p>
                        <p className="sub2">Q: Do I need separate tickets for Saturday and Sunday?</p>
                        <p className="info">A: Yes. This is for the sake of us to maintain counts. They are completely free.</p>
                        <p className="sub2">Q: Are tickets really free?</p>
                        <p className="info">A: 100%, I promise!</p>
                        <p className="sub2">Q: Will there be food?</p>
                        <p className="info">A: While we're trying to limit the amount of food and trash to deal with inside the venue, food trucks will be present behind the venue. Here's a map showing how to get to them! </p>
                        <img src={foodtrucks} alt="Sorry, asset could not be loaded" style={{height: "80vh"}}/>
                        <p className="sub2">Q: I have food allergies!</p>
                        <p className="info">A: We have 2 food trucks, Bento Bus and Gyro Chef, menus here: <a href="https://techdining.nutrislice.com/" className="link2">https://techdining.nutrislice.com/</a>. Other than that, there are plenty of restaurants within a 5-10 walk from the venue. </p>
                    </div>
                </Scroller>
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