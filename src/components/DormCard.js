import WindowLogo from '../images/window.png'
import KitchenLogo from '../images/kitchen.png'
import LocationLogo from '../images/Location.png'
import ToiletLogo from '../images/toilet.png'
import SizeLogo from '../images/maximize.png'
import './CSS/DormCard.css'

export default function(){
    return(
        <div className="dormCard">
            <h1 className="dormTitle">Newly built 4 Bedroom Apartment</h1>
            <div className="innerCard">
                <img className='dormImage' src="https://parkandrefer.com/wp-content/uploads/2015/03/nice-house.png"></img>
                <div className="dormInfo">
                    <div className="dormCity">
                        <img src={LocationLogo} alt="Location Logo" className="locationLogo"></img>
                        <h1 className="dormCityName">Dhaka</h1>
                    </div>
                    <h1 className="dormRent">৳5000</h1>
                    <h1 className="dormAddress">nazimuddin </h1>
                    <div className='size'>
                        <img src={SizeLogo} alt="sizeLogo" className="sizeLogo"></img>
                        <h1 className='squarefeet'>100 Sq ft</h1>
                    </div>
                    <div className="dormAmenities">
                        <img src={WindowLogo} alt="Window Logo" className="windowLogo"></img>
                        <h1 className='windowNo'>4</h1>
                        <img src={KitchenLogo} alt="Kitchen Logo" className="kitchenLogo"></img>
                        <h1 className='kitchenAvailable'>Available</h1>
                        <img src={ToiletLogo} alt="Toilet Logo" className="toiletLogo"></img>
                        <h1 className='toiletAvailable'>Not Available</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}