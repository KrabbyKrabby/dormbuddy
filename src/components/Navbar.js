import React from "react";
import './CSS/Navbar.css';

export default function Navbar(props){
    return(
        <nav className="navbar">
            <h1 className="title">DormBuddy</h1>
            <button className="agents">Agents</button>
            <button className="blog">Blog</button>
            <button className="aboutUs">About Us</button>
            <button className="contactUs">Contact Us</button>
            <div>
               {props.loggedIn && <button className="login">Login</button>}
            </div>

            <div>
                {props.loggedIn && <button className="signup">Sign Up</button>}
            </div> 

            <div>
                {props.loggedIn && <button className="logout">Log Out</button>}
            </div>
        </nav>
    );
}