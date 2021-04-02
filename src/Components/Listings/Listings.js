import React from "react";
import './_Listings.scss'

const Listings = ({ listing }) => {
    return (
        <div className="sidebar-content">
            <li className="schedule-row">
                <p className="schedule-text">{listing.text}</p>
                <div className="time-block-black"></div>
                <p className="schedule-time">{listing.time}</p>
            </li>
        </div>
    );
};

export default Listings;
