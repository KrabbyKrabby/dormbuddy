import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import DormCard from '../components/DormCard';
import DormData from '../DormData';
import './CSS/SearchPage.css';
import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export default function SearchPage(props) {

    const [searchedDorms, setSearchedDorm] = React.useState([]);

    
    useEffect(() => {
        console.log("navbar info >>>>>>");
        console.log(props.navbarInfo);

        const default_size = "0";
        const default_rent = "999999999";

        const info = {
            location: props.navbarInfo.location,
            rent: props.navbarInfo.rent === "" ? default_rent : props.navbarInfo.rent,
            roomArea: props.navbarInfo.roomArea === "" ? default_size : props.navbarInfo.roomArea,
            toiletAttached: props.navbarInfo.toiletAttached,
            kitchenAvailable: props.navbarInfo.kitchenAvailable,
        }

        var config = {
            method: 'post',
          maxBodyLength: Infinity,
            url: 'https://dormbuddy.gentlesea-ae463244.eastus.azurecontainerapps.io/api/v1/search',
            headers: { },
            data : info
          };
          
          axios(config)
          .then(function (response) {
            setSearchedDorm(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        }, [props.navbarInfo])

      const Cards = searchedDorms.map((dorm) => {
        console.log(dorm);
        return (
            <DormCard 
                item = {dorm}
                {...props}
            />
        );
    });

    return (
        <main className="main">
            <Navbar {...props}/>
            <SearchBar
                {...props}
            />

            <div className='cardContainer'>
                {Cards}
            </div>
            

            <Footer />
        </main>
    );
}