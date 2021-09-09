import React from 'react';
import cl from './DateAndTime.module.css'

const DateAndTime = ({date, time}) => {
    return (
        <div className = {cl.time}>
            <div>
                date: {date}
            </div>
            <hr />
            <div>
                time: {time}
            </div>
        </div>
    )

};

export default DateAndTime