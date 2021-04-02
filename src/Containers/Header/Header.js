import React from "react";
import './_Header.scss'
import Logo from "../../Assets/LogoBlue.png";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-inner-container">
                <img src={Logo} alt="Nia Tv Logo" className="header-logo" />
            </div>
        </div>
    );
};

export default Header;
