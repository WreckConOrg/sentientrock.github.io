import './App.css'
import Navbar from './Navbar'

function InvolvedPage() {
    return (
        <div>
            <Navbar/>
            <div className='sidebar'/>
            <div className='mainSide'>
                <h1 className='leftTitle'>
                    GET INVOLVED
                </h1>
                <p className='info'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSf9f3dIseyon91cuFMt9u7KjlwEnuo2X1JhjphHkzPFwti2tQ/viewform' 
                className='bigLink'>
                    This is a link to a form and stuff
                </a>
            </div>
        </div>
    )
}

export default InvolvedPage;