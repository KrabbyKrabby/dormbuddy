import React from "react";
import './CSS/Navbar.css';
import {useNavigate} from 'react-router-dom';

export default function Navbar(props){

    const navigate = useNavigate()

    return(
        <nav className="navbar">
            <h1 className="title">DormBuddy</h1>
            <button className="agents">Agents</button>
            <button className="blog">Blog</button>
            <button className="aboutUs">About Us</button>
            <button className="contactUs">Contact Us</button>
            <div>
               {props.personEmail === "" && <button className="login" onClick={ () => navigate('/login') } >Login</button>}
            </div>

            <div>
                {props.personEmail === "" && <button className="signup" onClick={ () => navigate('/signup') } >Sign Up</button>}
            </div> 

            <div>
                {!(props.personEmail === "") && <button className="logout" onClick={ () => {props.Login(""); navigate('/')} } >Log Out</button>}
            </div>
        </nav>
    );
}