import { useEffect } from 'react';

const Redirect = () => {
    useEffect(() => {
        window.location.replace('https://gatech.universitytickets.com/w/event.aspx?id=1942&p=1')
    }, [])
}

export default Redirect