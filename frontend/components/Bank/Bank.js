import React from "react";
import ReactDOM from "react-dom";
import HeaderBar from "./HeaderBar/HeaderBar";

import "./Bank.scss";

class BankIndex extends React.Component {

    renderHeaderBar() {

    }

    render() {
        return (
            <div className="">
                { this.renderHeaderBar() }
            </div>
        )
    }

}

export default BankIndex;