import React from 'react';
import {create, act} from "react-test-renderer";
import TickersList from "./TickersList";
import TickerCard from "../TickerCard/TickerCard";




describe("TickersList", () => {

    test('TickersList has  ticker with name AAPL', () => {
        const comingResponse = [{
            "ticker": "AAPL",
            "exchange": "NASDAQ",
            "price": 279.29,
            "change": 64.52,
            "change_percent": 0.84,
            "dividend": 0.56,
            "yield": 1.34,
            "last_trade_time": "2021-04-30T11:53:21.000Z"
        },];
        let component;
        act(()=>{
            component = create(<TickersList tickers = {comingResponse}/>)
        });
        const instance = component.root;
        expect(instance.findByType(TickerCard).props.info.ticker).toBe('AAPL');
    });
});

