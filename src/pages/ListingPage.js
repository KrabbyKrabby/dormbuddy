import { json } from "react-router";
import Navbar from "../components/Navbar";
import "./CSS/ListingPage.css";
import React from 'react';
export default function ListingPage(props)
{

    const [data, setData] = React.useState(
        {
            postId:null,
            userEmail: props.personEmail,
            userContact:"",
            title : "",
            rent : null,
            mapLink : "",

            house: "",
            street:"",
            city:"",

            imagePath1:"",
            imagePath2:"",
            imagePath3:"",

            windowCount : null,
            isToiletAttached : true,
            isKitchenAvailable : true,

            length:null,
            width:null,

            vacancy : null,
            capacity : null,
            keyFeatures : "",
            description : "",
            prefGender : "",
          }
    )

    function handleChange(e) {
        const { name, value, type, checked } = e.target
        setData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }


    const [formData, setFormData] = React.useState(
        {
            postId:null,
            userEmail: props.personEmail,
            userContact:"",
            title : "",
            rent : null,
            mapLink : "",
            address:{
                house: "",
                street:"",
                city:"",
            },
            images :{
                imagePath1:"",
                imagePath2:"",
                imagePath3:"",
            },
            windowCount : null,
            isToiletAttached : true,
            isKitchenAvailable : true,
            dimensions:{
                length:null,
                width:null,
            },
            vacancy : null,
            capacity : null,
            keyFeatures : "",
            description : "",
            prefGender : "",
          }
      );

    function onSubmit(){
        setFormData( prevdata => {
            return {
                ...prevdata,
                postId: null,
                userEmail: props.personEmail,
                userContact: data.userContact,
                title : data.title,
                rent : data.rent,
                mapLink : data.mapLink,
                address:{
                    house: data.house,
                    street:data.street,
                    city:data.city,
                },
                images :{
                    imagePath1:data.imagePath1,
                    imagePath2:data.imagePath2,
                    imagePath3:data.imagePath3,
                },
                windowCount : data.windowCount,
                isToiletAttached : data.isToiletAttached,
                isKitchenAvailable : data.isKitchenAvailable,
                dimensions:{
                    length:data.length,
                    width:data.width,
                },
                vacancy : data.vacancy,
                capacity : data.capacity,
                keyFeatures : data.keyFeatures,
                description : data.description,
                prefGender : data.prefGender,
            }
        })
    }

      


    return(
        <main className="listingMain">
            <Navbar {...props}/>
            <div className="formPage">
                <h1 className="formName">Dorm Listing Form</h1>
                
                <textarea className="formTitle" placeholder="Title" onChange={handleChange} name = "title" value = {data.title} />
                
                
                <div className="dimension">
                    <input className="length" placeholder="Length" onChange={handleChange} name = "length" value = {data.length} />
                    <input className="width" placeholder="Width" onChange={handleChange} name = "width" value = {data.width} />
                </div>

                <div className="addressPlace">
                    <input className="house" placeholder="House" onChange={handleChange} name = "house" value = {data.house} />
                    <input className="street" placeholder="Street" onChange={handleChange} name = "street" value = {data.street} />
                    <input className="city" placeholder="City" onChange={handleChange} name = "city" value = {data.city} />
                </div>

                <div className="window-toilet-kitchen">
                    <input className="windowForm" placeholder="Window Count" onChange={handleChange} name = "windowCount" value = {data.windowCount} />

                    <input type = "checkbox" className="toilet" id = "toilet" name = "isToiletAttached" onChange = {handleChange} checked = {data.isToiletAttached}  />
                    <label htmlFor="toilet">Attached Toilet?</label>

                    <input type = "checkbox" className="kitchen" id = "kitchen" name = "isKitchenAvailable" onChange = {handleChange} checked = {data.isKitchenAvailable}  />
                    <label htmlFor="kitchen">Kitchen?</label>
                    
                    <label className="labelGender" htmlFor="prefGender">?</label>
                    <select id = "prefGender" className="prefGender" value = {data.prefGender} onChange={handleChange} name = "prefGender">
                        <option value = "Male">Male</option>
                        <option value = "Female">Female</option>
                    </select>
                    

                </div>

                <div className="contact-vacancy-capacity-rent">
                    <input className="contactForm" placeholder="Contact" onChange={handleChange} name = "userContact" value = {data.userContact} />
                    <input className="vacancyForm" placeholder="Vacancy" onChange={handleChange} name = "vacancy" value = {data.vacancy} />
                    <input className="capacityForm" placeholder="Capacity" onChange={handleChange} name = "capacity" value = {data.capacity} />
                    <input className="rentForm" placeholder="Rent" onChange={handleChange} name = "rent" value = {data.rent} />
                </div>

                <input className="mapLinkForm" placeholder="Google Maps Link" onChange={handleChange} name = "mapLink" value = {data.mapLink} />

                <textarea className="keyFeaturesForm" placeholder="Key Features" onChange={handleChange} name = "keyFeatures" value = {data.keyFeatures} />

                <textarea className="descriptionForm" placeholder="Description" onChange={handleChange} name = "description" value = {data.description} />

                <button className="submitButton" onClick={onSubmit} >Submit</button>

                <div className='lowerImageContainer'>
                    <img src = "./publicImage/image1.jpg" alt = 'DummyImage' className='lowerImage1' />
                    <img src = "./publicImage/image2.jpg" alt = 'DummyImage' className='lowerImage2' />
                    <img src = "./publicImage/image3.jpg" alt = 'DummyImage' className='lowerImage3' />
                </div>

                <input type="file" multiple accept="image/*" onChange={handleChange} name = "imagePath1" value = {data.imagePath1} />

                <button className="submitButton" onClick={onSubmit} >Submit</button>
            </div>
        </main>
    ); 
}