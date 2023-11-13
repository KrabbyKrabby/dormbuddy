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

        var config = {
            method: 'post',
          maxBodyLength: Infinity,
            url: 'https://dormbuddy.gentlesea-ae463244.eastus.azurecontainerapps.io/api/v1/search',
            headers: { },
            data : props.navbarInfo
          };
          
          axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            setSearchedDorm(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        }, [props.navbarInfo])

    //     axios.get("https://dormbuddy.gentlesea-ae463244.eastus.azurecontainerapps.io/api/v1/search",props.navbarInfo)
    //         .then((response) => {
    //             setSearchedDorm(response.data);
    //             console.log("response >>>>>>>>");
    //             console.log(response.data);
    //         });
    //   }, [props.navbarInfo])


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