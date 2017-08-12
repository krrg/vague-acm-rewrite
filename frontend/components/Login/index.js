import React from "react";
import * as F from "react-foundation";

export default class Login extends React.Component {

    render() {
        return (
            <div className="Login">
                <h1>Bank of Brigham</h1>

                <form>
                    <label htmlFor="Login__username">Username</label>
                    <input type='text' id="Login__username" className="Login__username" placeholder="Username" />
                    <label htmlFor="Login__password">Password</label>
                    <input type='password' id="Login__password" className="Login__password" placeholder="Password" />

                    <F.Button>Submit</F.Button>
                </form>

            </div>
        )
    }

}