import React from "react";
import "./_Grid.scss";
import Logo from '../../Assets/LogoYellow.png'
import GridCard from "../../Components/GridCard/GridCard";



const Grid = ({ cards }) => {

    return (
        <div className="grid-container">
            <div className="grid-inner">
                <h1>Episode 1</h1>
                <div className="grid">
                    {cards.map((card, index) => {
                        return <GridCard card={card} key={index} />;
                    })}
                </div>
                <div className="grid-logo">
                    <img src={Logo} alt="nia tv logo" />
                </div>
            </div>
        </div>
    );
};

export default Grid;
