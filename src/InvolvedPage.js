import './App.css'
import Navbar from './Navbar'

function InvolvedPage() {
    return (
        <div>
            <Navbar involveDis={true}/>
            <div className='sidebar'/>
            <div className='mainSide'>
                <h1 className='leftTitle'>
                    GET INVOLVED
                </h1>
                <p className='info'>
                    WreckCon 2023 is no longer looking for volunteers, vendors or panelists for this year's event. However, if you'd like to stay in touch and get involved next year, or if you just have feedback on how we could make the event even better, feel free to join the mailing list or discord server below, and reach out to us by email at info@wreckcon.org or by phone at 404-820-2126.
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

export default InvolvedPage;