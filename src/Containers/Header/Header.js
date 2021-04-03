import React from "react";
import './_Header.scss'
import Logo from "../../Assets/LogoBlue.png";

const Header = ({ page, setPage }) => {

    return (
        <div className="header-container">
            <div className="header-inner-container">
                <img src={Logo} alt="Nia Tv Logo" className="header-logo" />
                <div className="header-buttons">
                    <div className={page === "watch" ? "button-border-active" : "button-border-inactive"}>
                        <button className={page === "watch" ? "button-active" : "button-inactive"} onClick={() => setPage("watch")}>Watch</button>
                    </div>
                    <div className={page === "about" ? "button-border-active" : "button-border-inactive"}>
                        <button className={page === "about" ? "button-active" : "button-inactive"} onClick={() => setPage("about")} > About</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
