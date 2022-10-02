import React from "react";


const Details = ()=>{
    return(
        <div className="profile-details">
        <div className="profile-pics">
            <img src="1659880938647.jpg" alt="profile-pics" className="profile-pic" />
            <span className="profile-cam">
                <img src="Group-camera.png" alt="camera" className="cam" />
            </span>
        </div>

        <h3 className="center">Ediong A.</h3>

        <div className="profile-navs">
            <p className="b">
                <span className="profile-icon">
                    <iconify-icon icon="uil:user" className="a"></iconify-icon>
                </span>
                Profile
                <span className="profile-nav">
                    <iconify-icon icon="pepicons:angle-right" className="p-icon"></iconify-icon>
                </span>
            </p>
            <p>
                <span className="profile-icon">
                    <iconify-icon icon="cil:education" className="a"></iconify-icon>
                </span>
                Courses
                <span className="profile-nav">
                    <iconify-icon icon="pepicons:angle-right" className="p-icon"></iconify-icon>
                </span>
            </p>
            <p>
                <span className="profile-icon">
                    <iconify-icon icon="icon-park-solid:correct" className="a"></iconify-icon>
                </span>
                Attendance
                <span className="profile-nav">
                    <iconify-icon icon="pepicons:angle-right" className="p-icon"></iconify-icon>
                </span>
            </p>
        </div>

        <p className="logout center" id="logout"><span className="logout-icon"><iconify-icon icon="carbon:logout"></iconify-icon></span>Logout</p>
    </div>
    )
}

export default Details;