import React from 'react';
import {tickersReducer,FETCH_TICKERS_SUCCESS}  from './tickersReducer';


test('new data should be added to the store', () => {
    const state  = {
        tickers: [],
    };
    let action = {type:'FETCH_TICKERS_SUCCESS', payload:[{}]};
    let newState = tickersReducer(state,action);
    expect(newState.tickers.length).toBe(1);
});


