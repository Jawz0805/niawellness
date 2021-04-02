import React from "react";
import './_GridCard.scss'


const GridCard = ({ card }) => {
    return (
        <div className="card-container">
            <h2 className="card-title">{card.title}</h2>
            <div className="card-time-container">
                <div className="card-time-block"></div>
                <h4 className="card-time">{card.time}</h4>
            </div>
            <p className="card-text">{card.text}</p>
        </div>
    );
};

export default GridCard;
