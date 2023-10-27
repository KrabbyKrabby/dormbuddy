import {useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DormCard from '../components/DormCard';
import './CSS/Homepage.css';
import HomepageImage from '../images/HomepageImage.png'
import BlackSearchBox from '../components/BlackSearchBox';

export default function Homepage() {


    return (
        <main className="mainHomepage">
            <Navbar />
            <div className='homepageContainer'>

                <div className='homepageImageContainer'>

                    <BlackSearchBox />
                    <img src = {HomepageImage} alt = 'HomepageImage' className='homepageImage'/>
                    
                </div>

                <h1 className='featured'>Featured Apartments</h1>

                <div className='cardContainer'>
                    <DormCard />
                    <DormCard />
                    <DormCard />
                    <DormCard />
                </div>

            </div>
            <Footer />
        </main>
    );
}