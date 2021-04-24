import React, { useState } from "react";
import "./_SideBar.scss";
import Listings from "../../Components/Listings/Listings";
// import ListingsLarge from "../../Components/Listings/ListingsLarge";
import Tabs from "../Tabs/Tabs";



const SideBar = ({ episode, setEpisode }) => {
    const listings = [
        { text: "Sally McFerran Mindfulness", time: "10:00" },
        { text: "Sue Fox Qi Gong", time: "10:30" },
        { text: "Kayya Hanna Health yoga", time: "11:00" },
        { text: "Martin Lewis Tai Chi", time: "12:00" },
        { text: "Teresa Mc Donagh Breath Work", time: "12:30" },
        // { text: "Neil Future Vibes", time: "14:00" },
        { text: "Agata alacaniz Qi Gong", time: "13:00" },
        // { text: "Adam Merry Coach ", time: "13.10" },
    ];
    // const primetime = [
    //     { text: "the make a scene clip show", time: "TBC" },
    //     { text: "the meme gold show", time: "TBC" },
    //     { text: "being black, belonging black", time: "TBC" },

    // ];
    const [active, setActive] = useState(2)
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
