import React from "react";
import './CSS/Footer.css';
import FacebookLogo from '../images/Facebook.png'
import InstagramLogo from '../images/Instagram.png'
import PinterestLogo from '../images/Pinterest.png'
import TwitterLogo from '../images/Twitter Squared.png'
export default function Footer(){
    return(
        <footer className="footer">
            <div className="upperContainer">
                <div className="leftContainer">
                    <h1 className="dormBuddy">DormBuddy</h1>
                    <h1 className="address">90/91 Nazimuddin Road,Dhaka</h1>
                </div>
                    
                <div className="centerContainer">
                    <h2 className="cities">Cities</h2>
                    <h1>Sylhet</h1>
                    <h1>Dhaka</h1>
                    <h1>Chittagong</h1>
                </div>

                <div className="rightContainer">
                    <h2 className="company">Company</h2>
                    <h1>Support</h1>
                    <h1>About Us</h1>
                    <h1>FAQ</h1>
                    <h1>Privacy Policy</h1>
                </div>
            </div>
            <div className="lowerContainer">
                <h1 className="rights">@2023 DormBuddy . All rights reserved</h1>
                <div className="links">
                    <img src={FacebookLogo} alt="Facebook Logo" className="facebookLogo"></img>
                    <img src={InstagramLogo} alt="Instagram Logo" className="instagramLogo"></img>
                    <img src={PinterestLogo} alt="Pinterest Logo" className="pinterestLogo"></img>
                    <img src={TwitterLogo} alt="Twitter Logo" className="twitterLogo"></img>
                </div>
            </div>
        </footer>
    );
}