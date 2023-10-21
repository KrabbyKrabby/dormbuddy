import './CSS/BlackSearchBox.css'
export default function BlackSearchBox() {
    return(
        <div className='blackSearchBox'>
            <h1 className='searchTitle'>Find The Apartment Of Your Taste</h1>
            <input type='text' placeholder='Location?' className='locationHomepage'/>
            <div className='searchContainer'>
                <input type="text" className="rentHomepage" placeholder="Rent?"></input>
                <input type="text" className="sizeHomepage" placeholder="Size?"></input>
            </div>

            <div className='radioButtonContainer'>
                 <input type = "checkbox" className="toiletHomepage" id = "toilet" name = "toilet"  />
                <label htmlFor="toilet">Attached Toilet?</label>
            
                <input type = "checkbox" className="kitchenHomepage" id = "kitchen" name = "kitchen"  />
                <label htmlFor="kitchen">Kitchen?</label>
            </div>
             <button className="filterButtonHomepage">Search</button>
        </div>
    );
}