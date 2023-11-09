import './CSS/SignupCard.css';
import React from 'react';
import {useNavigate} from 'react-router-dom';
export default function SignupCard() {
    const navigate = useNavigate()


    const [formData, setFormData] = React.useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })

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
        console.log(formData)
        navigate('/login')
    }

    return (
        <div className="signupSignupCard">
            <form className="signupUpperCard" onSubmit={handleSubmit}>
                <h1 className='signupTitle'>Register</h1>
                <div className='signupName'>
                    <input type="text" placeholder="First Name" className="signupFirstNameInput" onChange={handleChange} name="firstName" value={formData.firstName}></input>
                    <input type="text" placeholder="Last Name" className="signupLastNameInput" onChange={handleChange} name="lastName" value={formData.lastName}></input>
                </div>
                <input type="text" placeholder="Email" className="signupEmailInput" onChange={handleChange} name="email" value={formData.email}></input>
                <input type="text" placeholder="Password" className="signupPasswordInput" onChange={handleChange} name="password" value={formData.password}></input>
                <input type="text" placeholder="Confirm Password" className="signupConfirmPasswordInput" onChange={handleChange} name="confirmPassword" value={formData.confirmPassword}></input>
                <button className="signupRegisterButton">Register</button>
            </form>

            <div className="signupLowerCard">
                <h1 className="signupNotYetRegistered">Already Registered?</h1>
                <button className="signupLoginButton" onClick={ () => navigate('/login') }>Login</button>
            </div>
        </div>
    );
}