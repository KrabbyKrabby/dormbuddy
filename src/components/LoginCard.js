import React from "react";
import './CSS/LoginCard.css';
export default function LoginCard(){
    return(
        <div className="loginCard">
            <div className="upperCard">
                <h1>Login</h1>
                <input type="text" placeholder="Email" className="emailInput"></input>
                <input type="text" placeholder="Password" className="passwordInput"></input>
                <button className="forgotPassword">Forgot Password?</button>
                <button className="loginButton">Login</button>
            </div>
                
            <div className="lowerCard">
                <h1 className="notYetRegistered">Not yet registered?</h1>
                <button className="register">Register</button>
            </div>
        </div>
    );
}