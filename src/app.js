import React from "react";
import Home from "./components/Home";

const clr={
color:"black",
backgroundColor:"whitesmoke",   
}
function app() {
    return (<div style={clr}>
        <h1>Hello, Pooja!</h1>
        <Home />
    </div>);
}

export default app;