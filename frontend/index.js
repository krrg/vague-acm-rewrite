import React from "react";
import ReactDOM from "react-dom";
import * as F from "react-foundation";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Login from "./components/Login/Login";
import Bank from "./components/Bank/Bank";

import "./index.scss";

const Index = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={() => <Redirect to="/login" />} />
                <Route path="/login" component={() => <Login />} />
                <Route path="/bank" component={() => <Bank />} />
            </div>
        </BrowserRouter>
    )
}


const reactEntry = document.createElement("div");
ReactDOM.render(<Index />, reactEntry);
document.body.appendChild(reactEntry)
