import './App.css'
import {
    Link
} from "react-router-dom"
import React from 'react';

function Navbar(props) {
    return (
        <div className='navbar'>
            <Link to={'/'} className='navlink'> HOME </Link>
            {<Link to={'/about'} className={
                props.aboutDis ? 'navlink-disabled' : 'navlink'}> ABOUT </Link>}
            {<Link to={'/get-involved'} className={
                props.involveDis ? 'navlink-disabled' : 'navlink'}> GET INVOLVED </Link>}
            {!props.tivketsDis && <Link to={'/tickets'} className='navlink-disabled'> TICKETS</Link> }
            {!props.scheduleDis && <Link to={'/schedule'} className='navlink-disabled'> SCHEDULE</Link> }
        </div>
    )
}

export default Navbar;