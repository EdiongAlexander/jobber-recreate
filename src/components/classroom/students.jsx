import React from "react";
import studentsList from "../static/students";


const Students = () => {
    return (
        <div className="video-scroll">
            <div className="topic-lists">
                {studentsList.map(({name, src}, key) => {
                    return (
                        <p className="topic-list students-list" key={key}>
                            <span>
                                <img src={src} alt="pics" className="roundup" />
                                <span className="shift-up">{name}</span>
                            </span>
                            <button><img src="Vector-message.png" alt="icon" className="students-icon" /> Write a message</button>
                        </p>
                    )
                })}


            </div>
        </div>
    )
}


export default Students;