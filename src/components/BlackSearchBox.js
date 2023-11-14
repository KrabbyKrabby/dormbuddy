import './CSS/BlackSearchBox.css'
import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
export default function BlackSearchBox(props) {

    const navigate = useNavigate()
    const [initFlag, setInitFlag] = React.useState(false)
    const [formData, setFormData] = React.useState(props.navbarInfo)
    
    useEffect(() => {
        if( initFlag === true ){
            props.personEmail === "" ? navigate('/login') : navigate('/search')
        } 
    }, [props.navbarInfo])

    

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
        setInitFlag(true)
    }

    return(
        <div className='blackSearchBox' onSubmit={handleSubmit}>
            <h1 className='searchTitle'>Find The Apartment Of Your Taste</h1>
            <input type='text' placeholder='Location?' className='locationHomepage' onChange={handleChange} name="location" value={formData.location}/>
            <div className='searchContainer'>
                <input type="text" className="rentHomepage" placeholder="Rent?" onChange={handleChange} name="rent" value={formData.rent}></input>
                <input type="text" className="sizeHomepage" placeholder="Size?" onChange={handleChange} name="roomArea" value={formData.roomArea}></input>
            </div>

            <div className='radioButtonContainer'>
                <input type = "checkbox" className="toiletHomepage" id = "toilet" name = "toiletAttached" onChange = {handleChange} checked = {formData.toiletAttached}  />
                <label htmlFor="toilet">Attached Toilet?</label>
            
                <input type = "checkbox" className="kitchenHomepage" id = "kitchen" name = "kitchenAvailable" onChange = {handleChange} checked = {formData.kitchenAvailable}  />
                <label htmlFor="kitchen">Kitchen?</label>
            </div>
             <button className="filterButtonHomepage" onClick={handleSubmit}>Search</button>
        </div>
    );
}