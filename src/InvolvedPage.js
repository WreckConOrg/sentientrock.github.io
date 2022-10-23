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
                WreckCon is looking for <b className='spice'>you</b> to help us build something great. Help us transform this event into something more memorable by volunteering. Perks for getting involved include but are not limited to FREE food, FREE merchandise and FREE tabling space. In order to sign up, please click on the link below and fill out the interest form accordingly.
                </p>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSf9f3dIseyon91cuFMt9u7KjlwEnuo2X1JhjphHkzPFwti2tQ/viewform' 
                className='bigLink'>
                    CLICK HERE TO SIGN UP
                </a>
            </div>
        </div>
    )
}

export default InvolvedPage;