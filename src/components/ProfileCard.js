import './CSS/ProfileCard.css';
import MailLogo from '../images/Mail.png'
import LinkedInLogo from '../images/linkedin.png'
import logo from '../images/Mail.png'
export default function(props){
    return(
        <div className='BodyContainer'>
            <div className='PictureContainer'>
                <img src = {props.item.img} className='Picture'></img>
            </div>
            <h1 className='Name'>{props.item.name}</h1>
            <h1 className='Profession'>{props.item.profession}</h1>
            <h1 className='Website'>{props.item.website}</h1>
            <div className='ButtonContainer'>
                <button className='Email'>
                <img src = {MailLogo}></img>
                <h1>Email</h1>
                </button>
                <button className='LinkedIn'>
                <img src = {LinkedInLogo}></img>
                <h1>LinkedIn</h1>
                </button>
            </div>
            <h1 className='About'>About</h1>
            <p className='AboutInfo'>{props.item.about}</p>
            <h1 className='Interests'>Interests</h1>
            <p className='InterestsInfo'>{props.item.interests}</p>
        </div>
    );
}