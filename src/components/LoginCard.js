import React from "react";
import './CSS/LoginCard.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
export default function LoginCard(props){

    const navigate = useNavigate()

    const [formData, setFormData] = React.useState({ email: "", password: "" })
    const [errorMessage, setErrorMessage] = React.useState("");

    function handleChange(e) {
        const { name, value, type, checked } = e.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function loginAPI(){
        const loginInfo = {
            email: formData.email,
            password: formData.password,
        }
        axios.post("http://localhost:8080/api/v1/auth/auth", loginInfo)
        .then((response) => {
            
        });
    }

    function handleSubmit(){

        if( formData.email === "" || formData.password === ""){
            setErrorMessage("*Please fill in all the fields");
            return;
        }
        loginAPI();
        props.Login(formData.email)
        navigate('/')
    }

    return(
        <div className="loginCard">
            <div className="upperCard" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <h1 className='errorMessage'>{errorMessage}</h1>
                <input type="text" placeholder="Email" className="emailInput" onChange={handleChange} name="email" value={formData.email}></input>
                <input type="text" placeholder="Password" className="passwordInput" onChange={handleChange} name="password" value={formData.password}></input>
                <button className="forgotPassword">Forgot Password?</button>
                <button className="loginButton" onClick={handleSubmit}>Login</button>
            </div>
                
            <div className="lowerCard">
                <h1 className="notYetRegistered">Not yet registered?</h1>
                <button className="register" onClick={ () => navigate('/signup')}>Register</button>
            </div>
        </div>
    );
}