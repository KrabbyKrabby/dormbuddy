import {useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DormCard from '../components/DormCard';
import './CSS/Homepage.css';
import HomepageImage from '../images/HomepageImage.png'
import BlackSearchBox from '../components/BlackSearchBox';
import DormData from '../DormData';

export default function Homepage(props) {

    const Cards = DormData.map((dorm) => {
        return (
            <DormCard 
                item = {dorm}
            />
        );
    });

    return (
        <main className="mainHomepage">
            <Navbar {...props}/>
            <div className='homepageContainer'>

                <div className='homepageImageContainer'>

                    <BlackSearchBox {...props}/>
                    <img src = {HomepageImage} alt = 'HomepageImage' className='homepageImage'/>
                    
                </div>

                <h1 className='featured'>Featured Apartments</h1>

                <div className='cardContainer'>
                    {Cards}
                </div>

            </div>
            <Footer />
        </main>
    );
}