import React from "react";
import './CSS/LoginCard.css';
import {useNavigate} from 'react-router-dom';
export default function LoginCard(props){

    const navigate = useNavigate()

    const [formData, setFormData] = React.useState({ email: "", password: "" })

    function handleChange(e) {
        const { name, value, type, checked } = e.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(){
        props.Login(formData.email)
        navigate('/')
    }

    return(
        <div className="loginCard">
            <form className="upperCard" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input type="text" placeholder="Email" className="emailInput" onChange={handleChange} name="email" value={formData.email}></input>
                <input type="text" placeholder="Password" className="passwordInput" onChange={handleChange} name="password" value={formData.password}></input>
                <button className="forgotPassword">Forgot Password?</button>
                <button className="loginButton" onClick={handleSubmit}>Login</button>
            </form>
                
            <div className="lowerCard">
                <h1 className="notYetRegistered">Not yet registered?</h1>
                <button className="register" onClick={ () => navigate('/signup')}>Register</button>
            </div>
        </div>
    );
}