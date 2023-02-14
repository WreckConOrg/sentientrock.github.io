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
            {<a href={'https://gatech.universitytickets.com/w/event.aspx?id=1942'} className={
                props.ticketsDis ? 'navlink-disabled' : 'navlink'}> TICKETS</a> }
            {<Link to={'/schedule'} className={
                props.scheduleDis ? 'navlink-disabled' : 'navlink'}> SCHEDULE</Link> }
            {<Link to={'/panels'} className={
                props.panelsDis ? 'navlink-disabled' : 'navlink'}> PANELS</Link> }
            {<a href={'https://discord.gg/vDQBrk5EbB'} className='navlink'>
                DISCORD </a>}
        </div>
    )
}

export default Navbar;