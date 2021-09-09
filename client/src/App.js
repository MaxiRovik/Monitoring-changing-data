import React from 'react';
import {Provider} from "react-redux";
import {store} from "./store/index"
import AppDisplay from "./conponents/AppDisplay/AppDisplay";


function App() {
    return (
            <Provider store={store}>
                <AppDisplay/>
            </Provider>
            )
}
export default App;








