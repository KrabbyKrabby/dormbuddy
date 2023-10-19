import './CSS/SignupCard.css';

export default function SignupCard(){
    return(
        <div className="signupSignupCard">
            <div className="signupUpperCard">
                <h1 className='signupTitle'>Register</h1>
                <div className='signupName'>
                    <input type="text" placeholder="First Name" className="signupFirstNameInput"></input>
                    <input type="text" placeholder="Last Name" className="signupLastNameInput"></input>
                </div>
                <input type="text" placeholder="Email" className="signupEmailInput"></input>
                <input type="text" placeholder="Password" className="signupPasswordInput"></input>
                <input type="text" placeholder="Confirm Password" className="signupConfirmPasswordInput"></input>
                <button className="signupRegisterButton">Register</button>
            </div>
                
            <div className="signupLowerCard">
                <h1 className="signupNotYetRegistered">Already Registered?</h1>
                <button className="signupLoginButton">Login</button>
            </div>
        </div>
    );
}