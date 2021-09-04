import React from 'react';
import cl from './TickerName.module.css'

const TickerName = ({data,companyName }) => {
    return (
            <div  className = {cl.tickerName}>
                <div>{companyName}</div>
                <h3> {data.ticker}</h3>
            </div>
        )

}

export default TickerName