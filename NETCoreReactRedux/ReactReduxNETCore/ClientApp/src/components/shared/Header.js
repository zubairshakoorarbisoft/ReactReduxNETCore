import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item"> Social Media App </Link>
            <div className="right menu">
                <Link to="/Dashboard" className="item"> Posts </Link>
                <Link to="/Weathers" className="item"> Weather Forcast </Link>
            </div>
        </div>
    );
};

export default Header;
