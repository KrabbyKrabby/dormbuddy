import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginCard from '../components/LoginCard';
import SearchBar from '../components/SearchBar';
import ImageViewer from '../components/ImageViewer';
import './CSS/DormPage.css';
import PhoneLogo from '../images/phone.png';
import EmailLogo from '../images/email.png';
import WindowLogo from '../images/window.png'
import KitchenLogo from '../images/kitchen.png'
import ToiletLogo from '../images/toilet.png'
import SizeLogo from '../images/maximize.png'

export default function DormPage(props) {
    return (
        <main className="main">
            <Navbar {...props}/>
            
            <div className='dorm-page'>
                <div className='dorm-page-left'>
                    <div className='dorm-page-upper'>
                        <div className='dormpage-title-rent'>
                            <h1 className='dormpage-title'>{props.currentDorm.title}</h1>
                            <h1 className='dormpage-rent'>{"৳" + props.currentDorm.rent}</h1>
                        </div>
                        <div className='dormpage-address-link'>
                            <div className='dormpage-address'>
                                <h1>{props.currentDorm.address.house}</h1>
                                <h1>{props.currentDorm.address.street}</h1>
                                <h1>{props.currentDorm.address.city}</h1>
                            </div>
                            <h1 className='google-maps-link'>{props.currentDorm.mapLink}</h1>
                        </div>
                    </div>
                    <ImageViewer {...props}/>

                    <div className="dormpage-dormAmenities">
                        <div className='dormpage-amenities-top'>
                            <img src={WindowLogo} alt="Window Logo" className="windowLogo"></img>
                            <h1 className='windowNo'>{props.currentDorm.windowCount}</h1>
                            <img src={KitchenLogo} alt="Kitchen Logo" className="kitchenLogo"></img>
                            <h1 className='kitchenAvailable'>{props.currentDorm.kitchenAvailable ? "Available" : "Not Available"}</h1>
                            <img src={ToiletLogo} alt="Toilet Logo" className="toiletLogo"></img>
                            <h1 className='toiletAvailable'>{props.currentDorm.toiletAttached ? "Attached" : "Not Attached"}</h1>
                            <img src={SizeLogo} alt="Size Logo" className="sizeLogo"></img>
                            <h1 className='dorm-size'>{(props.currentDorm.dimension.length*props.currentDorm.dimension.width) + " Sq Ft"}</h1>
                        </div>
                        <div className='dormpage-amenities-bottom'>
                            <h1 className='vacancy'>{"Vacancy : " + props.currentDorm.vacancy + "/" + props.currentDorm.capacity}</h1>
                            <h1>{"Gender : " + props.currentDorm.prefGender}</h1>
                        </div>
                        
                    </div>

                    <div className='dormpage-dormDescription'>
                        <h1 className='key-features'>Key Features</h1>
                        <h1 className='key-feature-info'>{props.currentDorm.keyFeatures}</h1>
                        <h1 className='full-description'>Full Description</h1>
                        <h1 className='full-description-info'>{props.currentDorm.description}</h1>
                    </div>

                </div>

                <div className='dorm-page-right'>
                    <div className='contact-card'>
                        <h1 className='contact-agent'>Contact Agent</h1>
                        <div className='contact-info'>
                            <img src = {PhoneLogo} alt = 'Phone Logo' className='phone-logo'/>
                            <h1 className='phone-number'>{props.currentDorm.userContact}</h1>
                        </div>
                        <div className='email-info'>
                            <img src = {EmailLogo} alt = 'Email Logo' className='email-logo'/>
                            <h1 className='email'>{props.currentDorm.userEmail}</h1>
                        </div>
                        <h1 className='safety-tips'>Note!</h1>
                        <h1 className='safety-tip-info'>For any inconvenience please contact our helpline</h1>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}