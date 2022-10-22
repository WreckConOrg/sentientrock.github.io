import './App.css'
import {
    Link
} from "react-router-dom"

function Navbar() {
    return (
        <div className='navbar'>
            <Link to={'/'} className='navlink'> HOME </Link>
            <Link to={'/tickets'} className='navlink-disabled'> TICKETS</Link>
            <Link to={'/schedule'} className='navlink-disabled'> SCHEDULE</Link>
        </div>
    )
}

export default Navbar;