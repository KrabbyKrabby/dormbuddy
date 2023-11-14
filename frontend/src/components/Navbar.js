import React from "react";
import './CSS/Navbar.css';
import {useNavigate} from 'react-router-dom';

export default function Navbar(props){

    const navigate = useNavigate()


    return(
        <nav className="navbar">
            <button className="title" onClick={ () => navigate('/') }>DormBuddy</button>
            <button className="agents" onClick={ () => props.personEmail === "" ? navigate('/login') : navigate('/listing') }>Create Listing</button>
            <button className="blog" onClick = { () => props.personEmail === "" ? navigate('/login') : navigate('/dormlist') }>My Listings</button>
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