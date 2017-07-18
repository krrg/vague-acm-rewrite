import React from "react";
import ReactDOM from "react-dom";
import * as F from "react-foundation";

import "./index.scss";

const Index = () => {
    return (
        <div>
            <h1>Bank of Brigham</h1>

            <F.Button>Hello</F.Button>
        </div>
    )
}


const reactEntry = document.createElement("div");
ReactDOM.render(<Index />, reactEntry);
document.body.appendChild(reactEntry)
