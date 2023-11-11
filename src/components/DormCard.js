import WindowLogo from '../images/window.png'
import KitchenLogo from '../images/kitchen.png'
import LocationLogo from '../images/Location.png'
import ToiletLogo from '../images/toilet.png'
import SizeLogo from '../images/maximize.png'
import CrossIcon from '../images/close.png'
import './CSS/DormCard.css'
import {useNavigate} from 'react-router-dom';


export default function(props){

    const navigate = useNavigate()

    function handleClick(){
        props.SelectDorm(props.item)
        navigate('/dorm')
    }

    function handleCrossClick(){
        //delete dorm
    }

    return(
        <div className="dormCard" onClick={ handleClick }>
            <div className='title-close'>
                <h1 className="dormTitle">{props.item.title}</h1>
                {props.showCross && <img src = {CrossIcon} onClick={ handleCrossClick } alt="Cross Icon" className="crossIcon"></img>} 
            </div>
            
            <div className="innerCard">
                <img className='dormImage' src={props.item.images.imagePath1}></img>
                <div className="dormInfo">
                    <div className="dormCity">
                        <img src={LocationLogo} alt="Location Logo" className="locationLogo"></img>
                        <h1 className="dormCityName">{props.item.address.city}</h1>
                    </div>
                    <h1 className="dormRent">{"৳" + props.item.rent}</h1>
                    <h1 className="dormAddress">{props.item.address.street}</h1>
                    <div className='size'>
                        <img src={SizeLogo} alt="sizeLogo" className="sizeLogo"></img>
                        <h1 className='squarefeet'>{(props.item.dimensions.length*props.item.dimensions.width) + " Sq Ft"}</h1>
                    </div>
                    <div className="dormAmenities">
                        <img src={WindowLogo} alt="Window Logo" className="windowLogo"></img>
                        <h1 className='windowNo'>{props.item.windowCount}</h1>
                        <img src={KitchenLogo} alt="Kitchen Logo" className="kitchenLogo"></img>
                        <h1 className='kitchenAvailable'>{props.item.isToiletAttached ? "Available" : "Not Available"}</h1>
                        <img src={ToiletLogo} alt="Toilet Logo" className="toiletLogo"></img>
                        <h1 className='toiletAvailable'>{props.item.isKitchenAvailable ? "Attached" : "Not Attached"}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}