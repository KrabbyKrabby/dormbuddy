import React from "react";
import "./CSS/SearchBar.css";

export default function(){
    return(
        <div className="searchBar">
            <input type="text" className="location" placeholder="Location?"></input>
            <input type="text" className="rent" placeholder="Rent?"></input>
            <input type="text" className="sizeSearchbar" placeholder="Size?"></input>
        
            <input type = "checkbox" className="toilet" id = "toilet" name = "toilet"  />
            <label htmlFor="toilet">Attached Toilet?</label>

            <input type = "checkbox" className="kitchen" id = "kitchen" name = "kitchen"  />
            <label htmlFor="kitchen">Kitchen?</label>

            <button className="filterButton">Filter</button>
        </div>
    );
}