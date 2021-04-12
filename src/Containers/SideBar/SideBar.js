import React, { useState } from "react";
import "./_SideBar.scss";
import Listings from "../../Components/Listings/Listings";
import ListingsLarge from "../../Components/Listings/ListingsLarge";
import Tabs from "../Tabs/Tabs";



const SideBar = ({ episode, setEpisode }) => {
    const listings = [
        { text: "Adam Merry Coach", time: "TBC" },
        { text: "Kayya Hana Hudson Hatha Yoga", time: "TBC" },
        { text: "Craig Winterburn Gong Bath", time: "TBC" },
        { text: "Martin Lewis Tai Chi", time: "TBC" },
        { text: "Theresa McDowell BreathWork", time: "TBC" },
        { text: "Extracts from the Charmain Berry Show", time: "TBC" },
        { text: "Agata alacaniz Qi Gong", time: "TBC" },
    ];
    const primetime = [
        { text: "the make a scene clip show", time: "TBC" },
        { text: "the meme gold show", time: "TBC" },
        { text: "being black, belonging black", time: "TBC" },

    ];
    const [active, setActive] = useState(1)
    console.log(active)
    return (
        <div className="side-bar-outer">
            <div className="side-bar-middle">
                <div className="side-bar-inner">
                    <Tabs active={active} setActive={setActive} setEpisode={setEpisode} />
                    <h2 className="sidebar-title">Daytime</h2>
                    <ul className="schedule">
                        {listings.map((listing, index) => {

                            return <Listings listing={listing} key={index} />;
                        })}

                    </ul>
                    {/* <h2 className="sidebar-title">M15 mixtape</h2>
                    <div className="mixtape-outer">
                        <div className="mixtape-inner">
                            <h3 className="mixtape">15:00 - 16:30</h3>
                        </div>
                    </div>
                    <h2 className="sidebar-title">PrimeTime</h2> */}
                    {/* <ul className="schedule">
                        {primetime.map((listing, index) => {

                            return <ListingsLarge listing={listing} key={index} />;
                        })}
                    </ul> */}
                    <h1 className="sidebar-bottom">The Livingroom</h1>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
