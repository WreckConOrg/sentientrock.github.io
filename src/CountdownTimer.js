import React from 'react';
import { useCountdown } from './hooks/useCountdown';

import "./App.css"

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
    return (
        <div className='showCounter'>
            <p className='days'>
                {days + 'd'}
            </p>
            <p className='colon'>
                :
            </p>    
            <p className='hours'>
                {hours + 'h'}
            </p>
            <p className='colon'>
                :
            </p>
            <p className='minutes'>
                {minutes + 'm'}
            </p>
            <p className='colon'>
                :
            </p>
            <p className='seconds'>
                {seconds + 's'}
            </p>
        </div>
    );
};

export default CountdownTimer