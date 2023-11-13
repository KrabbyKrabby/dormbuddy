import { json } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./CSS/ListingPage.css";
import React, { useEffect } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 } from 'uuid';

export default function ListingPage(props) {

    const navigate = useNavigate()

    const useState = React.useState;

    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);

    const [errorMessage, setErrorMessage] = React.useState("");
    const [postID, setPostID] = React.useState(`images/${props.personEmail + v4()}`);
    const [checked, setChecked] = React.useState(false);

    const [data, setData] = React.useState(
        {
            postIdHash: postID,
            userEmail: props.personEmail,
            userContact: "",
            title: "",
            rent: null,
            mapLink: "",

            house: "",
            street: "",
            city: "",

            windowCount: null,
            isToiletAttached: true,
            isKitchenAvailable: true,

            length: null,
            width: null,

            vacancy: null,
            capacity: null,
            keyFeatures: "",
            description: "",
            prefGender: "Male",
        }
    )

    const [formData, setFormData] = React.useState(
        {
            postIdHash: postID,
            userEmail: props.personEmail,
            userContact: "",
            title: "",
            rent: null,
            mapLink: "",
            address: {
                house: "",
                street: "",
                city: "",
            },
            windowCount: null,
            isToiletAttached: true,
            isKitchenAvailable: true,
            dimension: {
                length: null,
                width: null,
            },
            vacancy: null,
            capacity: null,
            keyFeatures: "",
            description: "",
            prefGender: "Male",
            imageList: [
            ]
        }
    );

    const UploadImage = () => {
        if (imageUpload === null) return;
        const imageRef = ref(storage, `${postID}/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url]);
            });
        });
    }



    function handleChange(e) {
        const { name, value, type, checked } = e.target
        setData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }



    const fromSubmitAPI = () => {
        axios.post("https://dormbuddy.gentlesea-ae463244.eastus.azurecontainerapps.io/api/v1/roomPost/add", formData)
            .then((response) => {
                if( response.data.postIdHash === postID ){
                    console.log(response);
                    navigate('/')
                }
            });
    }

    useEffect(() => {
        if( imageList.length >= 3 ) fromSubmitAPI();
    },[checked]);

    function onSubmit() {

        if (data.userContact === "" || data.title === "" || data.rent === null || data.mapLink === "" || data.house === "" || data.street === "" || data.city === ""  || data.windowCount === null || data.length === null || data.width === null || data.vacancy === null || data.capacity === null || data.keyFeatures === "" || data.description === "" || data.prefGender === "") {
            setErrorMessage("*Please fill in all the fields");
            return;
        }
        if( imageList.length < 3 ){
            setErrorMessage("*Please upload at least 3 images");
            return;
        }
        

        setFormData(prevdata => {
            console.log(checked);
            setChecked(!checked);
            return {
                ...prevdata,
                postIdHash: data.postIdHash,
                userEmail: props.personEmail,
                userContact: data.userContact,
                title: data.title,
                rent: data.rent,
                mapLink: data.mapLink,
                address: {
                    house: data.house,
                    street: data.street,
                    city: data.city,
                },
                windowCount: data.windowCount,
                isToiletAttached: data.isToiletAttached,
                isKitchenAvailable: data.isKitchenAvailable,
                dimension: {
                    length: data.length,
                    width: data.width,
                },
                vacancy: data.vacancy,
                capacity: data.capacity,
                keyFeatures: data.keyFeatures,
                description: data.description,
                prefGender: data.prefGender,

                toiletAttached: formData.isToiletAttached,
                kitchenAvailable: formData.isKitchenAvailable,
                imageList: [
                    {
                        imagePath: imageList[0],
                    },
                    {
                        imagePath: imageList[1],
                    },
                    {
                        imagePath: imageList[2],
                    }
                ]
            }
        });
        setErrorMessage("");
    }
    return (
        <main className="listingMain">
            <Navbar {...props} />
            
            <div className="formPage">
                <h1 className="errorMessage">{errorMessage}</h1>
                <h1 className="formName">Dorm Listing Form</h1>

                <textarea className="formTitle" placeholder="Title" onChange={handleChange} name="title" value={data.title} />


                <div className="dimension">
                    <input className="length" placeholder="Length" onChange={handleChange} name="length" value={data.length} />
                    <input className="width" placeholder="Width" onChange={handleChange} name="width" value={data.width} />
                </div>

                <div className="addressPlace">
                    <input className="house" placeholder="House" onChange={handleChange} name="house" value={data.house} />
                    <input className="street" placeholder="Street" onChange={handleChange} name="street" value={data.street} />
                    <input className="city" placeholder="City" onChange={handleChange} name="city" value={data.city} />
                </div>

                <div className="window-toilet-kitchen">
                    <input className="windowForm" placeholder="Window Count" onChange={handleChange} name="windowCount" value={data.windowCount} />

                    <input type="checkbox" className="toilet" id="toilet" name="isToiletAttached" onChange={handleChange} checked={data.isToiletAttached} />
                    <label htmlFor="toilet">Attached Toilet?</label>

                    <input type="checkbox" className="kitchen" id="kitchen" name="isKitchenAvailable" onChange={handleChange} checked={data.isKitchenAvailable} />
                    <label htmlFor="kitchen">Kitchen?</label>

                    <label className="labelGender" htmlFor="prefGender">?</label>
                    <select id="prefGender" className="prefGender" value={data.prefGender} onChange={handleChange} name="prefGender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>


                </div>

                <div className="contact-vacancy-capacity-rent">
                    <input className="contactForm" placeholder="Contact" onChange={handleChange} name="userContact" value={data.userContact} />
                    <input className="vacancyForm" placeholder="Vacancy" onChange={handleChange} name="vacancy" value={data.vacancy} />
                    <input className="capacityForm" placeholder="Capacity" onChange={handleChange} name="capacity" value={data.capacity} />
                    <input className="rentForm" placeholder="Rent" onChange={handleChange} name="rent" value={data.rent} />
                </div>

                <input className="mapLinkForm" placeholder="Google Maps Link" onChange={handleChange} name="mapLink" value={data.mapLink} />

                <textarea className="keyFeaturesForm" placeholder="Key Features" onChange={handleChange} name="keyFeatures" value={data.keyFeatures} />

                <textarea className="descriptionForm" placeholder="Description" onChange={handleChange} name="description" value={data.description} />

                <div className='lowerImageContainerListing'>
                    {imageList.map((url) => {
                        return <img src={url} alt="img" />
                    })}
                </div>

                <input type="file" multiple accept="image/*" onChange={(event) => setImageUpload(event.target.files[0])} name="imagePath1" />

                <button className="uploadButton" onClick={UploadImage} >Upload</button>
                <button className="submitButton" onClick={onSubmit} >Submit</button>
            </div>
            <Footer />
        </main>
    );
}