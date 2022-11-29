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
            {<Link to={'/tickets'} className={
                props.ticketsDis ? 'navlink-disabled' : 'navlink'}> TICKETS</Link> }
            {<Link to={'/schedule'} className={
                props.scheduleDis ? 'navlink-disabled' : 'navlink'}> SCHEDULE</Link> }
        </div>
    )
}

export default Navbar;