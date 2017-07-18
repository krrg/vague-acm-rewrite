import React from "react";
import ReactDOM from "react-dom";


const Index = () => {
    return (
        <div>
            <h1>Bank of Brigham</h1>
        </div>
    )
}


const reactEntry = document.createElement("div");
ReactDOM.render(<Index />, reactEntry);
document.body.appendChild(reactEntry)
