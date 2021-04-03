import React from "react";
import './_Tabs.scss'

const Tabs = ({ active, setActive, setEpisode }) => {
    return (
        <ul className="tab-list">
            <li className={active === 1 ? "tab-none" : "tab"}>
                <button className={active === 1 ? "tab-active" : "tab-button"} onClick={() => setActive(1)}>EP 1</button>
            </li>
            <li className={active === 2 ? "tab-none" : "tab"}>
                <button className={active === 2 ? "tab-active" : "tab-button"} onClick={() => setActive(2)}>EP 2</button>
            </li>
            <li className={active === 3 ? "tab-none" : "tab"}>
                <button className={active === 3 ? "tab-active" : "tab-button"} onClick={() => setActive(3)}>EP 3</button>
            </li>
        </ul>
    );
};

export default Tabs;
