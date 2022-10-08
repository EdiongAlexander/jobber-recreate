import React from "react";
import { Link } from 'react-router-dom';
import notes from "../static/notes";

const Notes = () => {
    return (
        <div className="video-scroll video-side">
            <div className="topic-lists">
                <div className="actual-video">
                    <div className="video-side-notes">
                        {notes.map(({ title, src, details }, key) => {
                            return (

                                <div className="note" key={key}>
                                    <p className="notes-note">
                                        <span><img src="play.png" alt="play" /></span>
                                        <span className="p-head">{title} <span><Link to={src}>Go to video <span className="n-icon"><iconify-icon icon="pepicons:angle-right" ></iconify-icon></span></Link></span>
                                        </span>
                                    </p>
                                    <p>{details}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Notes;