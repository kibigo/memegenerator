import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



function Navbar(){
    const [showNav, setShowNav] = useState(false)

    const toggleNav = () => {
        setShowNav(!showNav)
    }

    return(
        <nav className="navbar">
            <button className="toggle-btn" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <ul className={`navlinks ${showNav ? 'show' : ''}`}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar