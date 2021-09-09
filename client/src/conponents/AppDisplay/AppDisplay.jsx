import React, {useEffect}from 'react';
import {useDispatch, useSelector} from "react-redux";
import cl from "./AppDisplay.module.css"
import openSocket  from 'socket.io-client';
import {FETCH_TICKERS, FETCH_TICKERS_ERROR, FETCH_TICKERS_SUCCESS} from "../../store/reducers/tickersReducer";
import Preloader from "../Preloader/Preloader";
import Content from "../Content/Content";


const AppDisplay = () => {

    const loading = useSelector(state => state.tickersKit.loading);
    const error = useSelector(state => state.tickersKit.error);
    const dispatch = useDispatch();

    useEffect(()=>{
        const socket = openSocket('http://localhost:4000');
            try {
                socket.emit('start');
                dispatch({type: FETCH_TICKERS});
                socket.on('ticker', function(response) {
                    dispatch({type: FETCH_TICKERS_SUCCESS, payload:response})});
            }
            catch (e) {
                dispatch({type: FETCH_TICKERS_ERROR, payload: 'Error' })
            }
            return () => socket.disconnect();
        },[]
    );

    return (
        <div className={cl.WrapperApp}>
            {error
                ? <div>Connecting ERROR</div>
                : <div>
                    {loading
                        ? <Preloader/>
                        : <Content/>}
                 </div>}
        </div>
    )
};

export default AppDisplay;