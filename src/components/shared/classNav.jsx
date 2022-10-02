import React from "react";
import './nav.css'


const ClassNav = () =>{
    return(
        <nav id="classnav">
                <div className="nav-logo">
                    <img src="linux-logo.png" alt="logo" />
                </div>

                <h3 className="nav-header">Classroom Profile</h3>

                <div className="who">
                    <p>Ediong A.</p>
                    <img src="./1659880938647.jpg" alt="profile-pic" className="small-pic" />
                </div>
            </nav>
    )
}

export default ClassNav;