import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./CSS/MyDormPage.css";
import DormData from '../DormData';
import DormCard from '../components/DormCard';
import { useEffect } from "react";
import React from "react";
import axios from "axios";
export default function MyDormPage(props)
{
    const [myDorms, setmyDorms] = React.useState([]);
    // const [Cards, setCards] = React.useState([]);
    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
        axios.get(`https://dormbuddy.gentlesea-ae463244.eastus.azurecontainerapps.io/api/v1/roomPost/getByEmail/${props.personEmail}`)
            .then((response) => {
                setmyDorms(response.data);
            });
      },[checked])

    // seonClick={ handleClick }
    const Cards = myDorms.map((dorm) => {
        return (
            props.personEmail === dorm.userEmail && <DormCard 
                item = {dorm}
                {...props}
                setChecked = {setChecked}
            />
        );
    });


    return(
        <main className="mainListings">
            <Navbar {...props}/>
            <h1 className="dormPageTitle">My Dorm Listings</h1>
            <div className="MyDormCards">
                {Cards}
            </div>
            <Footer />
        </main>
    );
}