import React from 'react';
import { useCountdown } from './hooks/useCountdown';

import "./App.css"

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
    return (
        <div className='showCounter'>
            <p className='days'>
                {days}
                <p className='label'>
                    days
                </p>
            </p>
            <p className='colon'>
                :
            </p>    
            <p className='hours'>
                {hours}
                <p className='label'>
                    hours
                </p>
            </p>
            <p className='colon'>
                :
            </p>
            <p className='minutes'>
                {minutes}
                <p className='label'>
                    minutes
                </p>
            </p>
            <p className='colon'>
                :
            </p>
            <p className='seconds'>
                {seconds}
                <p className='label'>
                    seconds
                </p>
            </p>
        </div>
    );
};

export default CountdownTimer