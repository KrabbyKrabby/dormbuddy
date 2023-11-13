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
         props.Search(formData)
    }


    return(
        <div className="searchBar" onSubmit={handleSubmit}>
            <input type="text" className="location" placeholder="Location?" onChange={handleChange} name="location" value={formData.location}></input>
            <input type="text" className="rent" placeholder="Rent?" onChange={handleChange} name="rent" value={formData.rent}></input>
            <input type="text" className="sizeSearchbar" placeholder="Size?" onChange={handleChange} name="roomArea" value={formData.roomArea}></input>
        
            <input type = "checkbox" className="toilet" id = "toilet" name = "toiletAttached" onChange = {handleChange} checked = {formData.toiletAttached}  />
            <label htmlFor="toilet">Attached Toilet?</label>

            <input type = "checkbox" className="kitchen" id = "kitchen" name = "kitchenAvailable" onChange = {handleChange} checked = {formData.kitchenAvailable}  />
            <label htmlFor="kitchen">Kitchen?</label>

            <button className="filterButton" onClick={ handleSubmit }>Filter</button>
        </div>
    );
}