import React from "react";
import "./_SideBar.scss";
import Listings from "../../Components/Listings/Listings";
import ListingsLarge from "../../Components/Listings/ListingsLarge";
import Logo from '../../Assets/LogoBlack.png'



const SideBar = () => {
    const listings = [
        { text: "capturing stillness", time: "10:00" },
        { text: "resonance", time: "10:30" },
        { text: "totally cosmic", time: "11:00" },
        { text: "trash jewelry", time: "11:45" },
        { text: "da succulent show", time: "12:15" },
        { text: "local foraging", time: "12:45" },
        { text: "paco & romån", time: "13:15" },
    ];
    const primetime = [
        { text: "the make a scene clip show", time: "19:00" },
        { text: "the meme gold show", time: "20:00" },
        { text: "being black, belonging black", time: "21:00" },

    ];
    return (
        <div className="side-bar-outer">
            <div className="side-bar-middle">
                <div className="side-bar-inner">
                    <ul className="tab-list">
                        <li className="tab">
                            <button className="tab-button">EP 1</button>
                        </li>
                        <li className="tab">
                            <button className="tab-button">EP 2</button>
                        </li>
                        <li className="tab">
                            <button className="tab-button">EP 3</button>
                        </li>
                    </ul>
                    <h2 className="sidebar-title">Daytime</h2>
                    <ul className="schedule">
                        {listings.map((listing, index) => {

                            return <Listings listing={listing} key={index} />;
                        })}

                    </ul>
                    <h2 className="sidebar-title">M15 mixtape</h2>
                    <div className="mixtape-outer">
                        <div className="mixtape-inner">
                            <h3 className="mixtape">15:00 - 16:30</h3>
                        </div>
                    </div>
                    <h2 className="sidebar-title">PrimeTime</h2>
                    <ul className="schedule">
                        {primetime.map((listing, index) => {

                            return <ListingsLarge listing={listing} key={index} />;
                        })}
                    </ul>
                    <img src={Logo} alt="Nia Tv Logo" className="sidebar-logo" />
                </div>
            </div>
        </div>
    );
};

export default SideBar;
