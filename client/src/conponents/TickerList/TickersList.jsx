import React from 'react';
import TickerCard from "../TickerCard/TickerCard";
import cl from "./TickerList.module.css"

const TickersList = ({tickers}) => {
    return (
            <div className = {cl.dashBoard}>
                {tickers.length > 0 ? tickers.map(ticker => {
                    const index = tickers.indexOf(ticker);
                    return (
                        <TickerCard key = {ticker.ticker}
                                    info = {ticker}
                                    index = {index}
                        >
                            {ticker.ticker}
                        </TickerCard>)})
                    : null
                }
                 }
            </div>
    )
};

export default TickersList;