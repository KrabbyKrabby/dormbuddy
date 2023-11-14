import {useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DormCard from '../components/DormCard';
import './CSS/Homepage.css';
import HomepageImage from '../images/HomepageImage.png'
import BlackSearchBox from '../components/BlackSearchBox';
import DormData from '../DormData';
import { useEffect } from 'react';
import React from 'react';
import axios from 'axios';


export default function Homepage(props) {

    const [featuredDorm, setFeaturedDorm] = React.useState([]);

    useEffect(() => {
        axios.get("https://dormbuddy.gentlesea-ae463244.eastus.azurecontainerapps.io/api/v1/roomPost/getFeatured")
            .then((response) => {
                setFeaturedDorm(response.data);
            });
      },)

    const Cards = featuredDorm.map((dorm) => {
        return (
            <DormCard 
                item = {dorm}
                {...props}
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