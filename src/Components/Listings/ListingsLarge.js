import React from "react";
import './_Listings.scss'

const ListingsLarge = ({ listing }) => {
    return (
        <div className="sidebar-content">
            <li className="schedule-row">
                <p className="schedule-text-large">{listing.text}</p>
                <div className="time-block-black"></div>
                <p className="schedule-time">{listing.time}</p>
            </li>
        </div>
    );
};

export default ListingsLarge;
