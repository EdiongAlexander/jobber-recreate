import React from "react";
import { Link } from "react-router-dom";
import './nav.css'


const Nav = () =>{
    return(
        <nav id="profile-nav-nav">
                <div className="nav-logo">
                    <img src="linux-logo.png" alt="logo" />
                </div>

                <h3 className="nav-header">Classroom Profile</h3>

                <Link to="/classroom">
                <p className="nav-nav">Go to Classroom
                    <span className="icon">
                        <iconify-icon icon="pepicons:angle-right" className="r-icon"></iconify-icon>
                    </span>
                </p>
                </Link>
            </nav>
    )
}

export default Nav;