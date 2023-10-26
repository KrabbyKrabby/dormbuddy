import './CSS/BlackSearchBox.css'
import React from 'react';
export default function BlackSearchBox() {

    const [formData, setFormData] = React.useState({ location: "", rent: "", size: "", toilet: true, kitchen: true })

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
    }

    return(
        <form className='blackSearchBox' onSubmit={handleSubmit}>
            <h1 className='searchTitle'>Find The Apartment Of Your Taste</h1>
            <input type='text' placeholder='Location?' className='locationHomepage' onChange={handleChange} name="location" value={formData.location}/>
            <div className='searchContainer'>
                <input type="text" className="rentHomepage" placeholder="Rent?" onChange={handleChange} name="rent" value={formData.rent}></input>
                <input type="text" className="sizeHomepage" placeholder="Size?" onChange={handleChange} name="size" value={formData.size}></input>
            </div>

            <div className='radioButtonContainer'>
                <input type = "checkbox" className="toiletHomepage" id = "toilet" name = "toilet" onChange = {handleChange} checked = {formData.toilet}  />
                <label htmlFor="toilet">Attached Toilet?</label>
            
                <input type = "checkbox" className="kitchenHomepage" id = "kitchen" name = "kitchen" onChange = {handleChange} checked = {formData.kitchen}  />
                <label htmlFor="kitchen">Kitchen?</label>
            </div>
             <button className="filterButtonHomepage">Search</button>
        </form>
    );
}