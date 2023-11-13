import React, { useEffect } from "react";
import './CSS/LoginCard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function LoginCard(props) {

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

    const loginAPI = async () => {
        const loginInfo = {
            email: formData.email,
            password: formData.password,
        }
        await axios.post("https://dormbuddy.gentlesea-ae463244.eastus.azurecontainerapps.io/api/v1/auth/user/login", loginInfo)
            .then((response) => {
                if (response.data.id === -1) {
                    setErrorMessage("Incorrect email or password");
                    return;
                } else {
                    props.Login(formData.email)
                    navigate('/')
                }
            });
    }

    function handleSubmit() {
        ///remove!!!!
        // props.Login(formData.email)
        // navigate('/')

        if (formData.email === "" || formData.password === "") {
            setErrorMessage("*Please fill in all the fields");
            return;
        }

        loginAPI();

    }

    return (
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
                <button className="register" onClick={() => navigate('/signup')}>Register</button>
            </div>
        </div>
    );
}