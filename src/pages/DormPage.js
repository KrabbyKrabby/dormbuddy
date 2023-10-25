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

export default function DormPage() {
    return (
        <main className="main">
            <Navbar />
            <SearchBar />
            
            <div className='dorm-page'>
                <div className='dorm-page-left'>
                    <div className='dorm-page-upper'>
                        <h1 className='dormpage-title'>Newly Built 4 bedroom apartment</h1>
                        <div className='dormpage-maps-rent'>
                            <h1 className='google-maps-link'>See Location</h1>
                            <h1 className='dormpage-rent'>৳5000</h1>
                        </div>
                    </div>
                    <ImageViewer />

                    <div className="dormpage-dormAmenities">
                        <img src={WindowLogo} alt="Window Logo" className="windowLogo"></img>
                        <h1 className='windowNo'>4</h1>
                        <img src={KitchenLogo} alt="Kitchen Logo" className="kitchenLogo"></img>
                        <h1 className='kitchenAvailable'>Available</h1>
                        <img src={ToiletLogo} alt="Toilet Logo" className="toiletLogo"></img>
                        <h1 className='toiletAvailable'>Attached</h1>
                        <img src={SizeLogo} alt="Size Logo" className="sizeLogo"></img>
                        <h1 className='dorm-size'>100 Sq Ft</h1>
                    </div>

                    <div className='dormpage-dormDescription'>
                        <h1 className='key-features'>Key Features</h1>
                        <h1 className='key-feature-info'>Good place</h1>
                        <h1 className='full-description'>Full Description</h1>
                        <h1 className='full-description-info'>IDK Dorm Good</h1>
                    </div>

                </div>

                <div className='dorm-page-right'>
                    <div className='contact-card'>
                        <h1 className='contact-agent'>Contact Agent</h1>
                        <div className='contact-info'>
                            <img src = {PhoneLogo} alt = 'Phone Logo' className='phone-logo'/>
                            <h1 className='phone-number'>+94 77 123 4567</h1>
                        </div>
                        <div className='email-info'>
                            <img src = {EmailLogo} alt = 'Email Logo' className='email-logo'/>
                            <h1 className='email'>dormbuddy@gmail.com</h1>
                        </div>
                        <h1 className='safety-tips'>Note</h1>
                        <h1 className='safety-tip-info'>For any inconvenience please contact our helpline</h1>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}