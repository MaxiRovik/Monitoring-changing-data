import React from 'react';
import {Provider} from "react-redux";
import {store} from "./store/index"
import TickersList from "./conponents/tickerList/TickersList.jsx";
import cl from "./App.module.css"



function App() {
    return (
        <Provider store={store}>
                <div className={cl.App}>
                    <TickersList/>
                </div>
        </Provider>
    )
}
export default App;
