import React, {useEffect}from 'react';
import {useDispatch, useSelector} from "react-redux";
import cl from "./TickerList.module.css"
import TickerCard from "../ticker/TickerCard";
import openSocket  from 'socket.io-client';
import {FETCH_TICKERS, FETCH_TICKERS_ERROR, FETCH_TICKERS_SUCCESS} from "../../store/reducers/tickersReducer";


const TickersList = () => {
    const tickers = useSelector(state => state.tickersKit.tickers);
    const loading = useSelector(state => state.tickersKit.loading);
    const error = useSelector(state => state.tickersKit.error);
    const dispatch = useDispatch();

    useEffect(()=>{
                try {
                    const socket = openSocket('http://localhost:4000');
                    socket.emit('start');
                    dispatch({type: FETCH_TICKERS});
                     socket.on('ticker', function(response) {
                     dispatch({type: FETCH_TICKERS_SUCCESS, payload:response})});
                }
                catch (e) {
                    dispatch({type: FETCH_TICKERS_ERROR, payload: 'Error' })
                }
        },[]
    );

    return (
        <div>
            {error ? <div>Connecting ERROR</div> :
                <div>
                    {loading ? <div>Loading...</div> : <div className = {cl.dashBoardWrapper}>

                        <h1>Welcome to the world financial exchange!</h1>
                        <div className = {cl.dashBoard}>
                            {tickers.map(ticker =>
                                <TickerCard key ={ticker.ticker} info = {ticker}>{ticker.ticker}</TickerCard>)
                            }
                        </div>
                    </div>}
                </div>}

        </div>

    )
};

export default TickersList;