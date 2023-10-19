import React from "react";
import './CSS/Navbar.css';

export default function Navbar(){
    return(
        <nav className="navbar">
            <h1 className="title">DormBuddy</h1>
            <button className="agents">Agents</button>
            <button className="blog">Blog</button>
            <button className="aboutUs">About Us</button>
            <button className="contactUs">Contact Us</button>
            <button className="login">Login</button>
            <button className="signup">Sign Up</button>
        </nav>
    );
}