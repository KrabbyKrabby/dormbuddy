import React from "react";
import "./CSS/SearchBar.css";
import {useNavigate} from 'react-router-dom';
export default function(props){

    const navigate = useNavigate()


    const [formData, setFormData] = React.useState(props.navbarInfo)

    function handleChange(e) {
        const { name, value, type, checked } = e.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(){
        console.log(formData)
        props.Search(formData)
        navigate('/dorm')
    }


    return(
        <form className="searchBar" onSubmit={handleSubmit}>
            <input type="text" className="location" placeholder="Location?" onChange={handleChange} name="location" value={formData.location}></input>
            <input type="text" className="rent" placeholder="Rent?" onChange={handleChange} name="rent" value={formData.rent}></input>
            <input type="text" className="sizeSearchbar" placeholder="Size?" onChange={handleChange} name="size" value={formData.size}></input>
        
            <input type = "checkbox" className="toilet" id = "toilet" name = "toilet" onChange = {handleChange} checked = {formData.toilet}  />
            <label htmlFor="toilet">Attached Toilet?</label>

            <input type = "checkbox" className="kitchen" id = "kitchen" name = "kitchen" onChange = {handleChange} checked = {formData.kitchen}  />
            <label htmlFor="kitchen">Kitchen?</label>

            <button className="filterButton" onClick={ handleSubmit }>Filter</button>
        </form>
    );
}