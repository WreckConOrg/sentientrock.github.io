import React from 'react';
import { useCountdown } from './hooks/useCountdown';

import "./App.css"

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
    return (
        <div className='showCounter'>
            <p className='days'>
                {days}
            </p>
            <p className='hours'>
                {hours}
            </p>
            <p className='minutes'>
                {minutes}
            </p>
            <p className='seconds'>
                {seconds}
            </p>
        </div>
    );
};

export default CountdownTimer