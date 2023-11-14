import './CSS/SignupCard.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function SignupCard() {
    const navigate = useNavigate()


    const [formData, setFormData] = React.useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
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

    function signupAPI() {
        const registerInfo = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        }
        axios.post("https://dormbuddy.gentlesea-ae463244.eastus.azurecontainerapps.io/api/v1/auth/user/signup", registerInfo)
        .then((response) => {
            if( response.data.id === -1){
                setErrorMessage("This email is already registered");
                return;
            }else{
                navigate('/login')
            }
        });
    }

    function handleSubmit() {
        
        if( formData.firstName === "" || formData.lastName === "" || formData.email === "" || formData.password === "" || formData.confirmPassword === "" || formData.password !== formData.confirmPassword){
            setErrorMessage("*Please fill in all the fields and make sure the passwords match");
            return;
        }

        signupAPI();
    }

    return (
        <div className="signupSignupCard">
            <div className="signupUpperCard" onSubmit={handleSubmit}>
                <h1 className='signupTitle'>Register</h1>
                <h1 className='errorMessage'>{errorMessage}</h1>
                <div className='signupName'>
                    <input type="text" placeholder="First Name" className="signupFirstNameInput" onChange={handleChange} name="firstName" value={formData.firstName}></input>
                    <input type="text" placeholder="Last Name" className="signupLastNameInput" onChange={handleChange} name="lastName" value={formData.lastName}></input>
                </div>
                <input type="text" placeholder="Email" className="signupEmailInput" onChange={handleChange} name="email" value={formData.email}></input>
                <input type="text" placeholder="Password" className="signupPasswordInput" onChange={handleChange} name="password" value={formData.password}></input>
                <input type="text" placeholder="Confirm Password" className="signupConfirmPasswordInput" onChange={handleChange} name="confirmPassword" value={formData.confirmPassword}></input>
                <button className="signupRegisterButton" onClick={handleSubmit}>Register</button>
            </div>

            <div className="signupLowerCard">
                <h1 className="signupNotYetRegistered">Already Registered?</h1>
                <button className="signupLoginButton" onClick={() => navigate('/login')}>Login</button>
            </div>
        </div>
    );
}