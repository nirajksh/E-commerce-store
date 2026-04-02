import React from "react";
import Home from "./components/Home";

import { store } from "./store";
import { Provider } from "react-redux";


function app() {
    return (<div >
        <Provider store={store}>
<Home />
        </Provider>
       
        
    </div>);
}

export default app;