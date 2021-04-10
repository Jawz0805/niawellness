import React, { useState } from "react";
import "./_SideBar.scss";
import Listings from "../../Components/Listings/Listings";
import ListingsLarge from "../../Components/Listings/ListingsLarge";
import Tabs from "../Tabs/Tabs";



const SideBar = ({ episode, setEpisode }) => {
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
                    <h1 className="sidebar-bottom">Niamos wellness</h1>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
