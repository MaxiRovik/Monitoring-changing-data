import React from 'react';
import {useSelector} from "react-redux";
import cl from "./Content.module.css"
import TickersList from "../TickerList/TickersList";

const Content = () => {
    const tickers = useSelector(state => state.tickersKit.tickers);
    return (
             <div className = {cl.dashBoardWrapper}>
                <h1>Welcome to the world financial exchange !</h1>
                <TickersList tickers = {tickers}/>
             </div>
    )
};

export default Content;