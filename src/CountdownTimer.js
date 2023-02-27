import React from 'react';
import { useCountdown } from './hooks/useCountdown';

import "./App.css"

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        return (
            <div className='emptyBox'>
                <div className='showCounter_label'>
                    <div className='days_label' id="scroll-text">
                        {"\u2022" + " WRECKCON IS HAPPENING RIGHT NOW \u2022 ".repeat(300)}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='showCounter'>
            { days === 0 ? null :
                (<div>
                    <p className='days'>
                        {days}
                        <p className='label'>
                            days
                        </p>
                    </p>
                    <p className='colon'>
                        :
                    </p>    
                </div>)
            }
            {days === 0 && hours === 0 ? null :
                (<div><p className='hours'>
                    {hours}
                    <p className='label'>
                        hours
                    </p>
                </p>
                <p className='colon'>
                    :
                </p></div>)
            }
            { days === 0 && hours === 0 && minutes === 0 ? null :
                (<div><p className='minutes'>
                    {minutes}
                    <p className='label'>
                        minutes
                    </p>
                </p>
                <p className='colon'>
                    :
                </p></div>)
            }
            <p className='seconds'>
                {seconds}
                <p className='label'>
                    seconds
                </p>
            </p>
        </div>
    );
};

export default CountdownTimer;