import React from "react";
import './feedback.css'


const Feedback = ({remove}) => {
    return(
        <div className="feedback">
            <div className="feedback-modal video-scroll">
                <div className="topic-lists feeback-list">
                <span className="feedback-close" onClick={remove}>x</span>
                <div className="feedback-body">
                    <div className="feedback-head">
                        <span className="feedback-profile-img">
                        <img src="1659880938647.jpg" alt="profile-pic" />
                        </span>
                        <div className="feedback-author">
                            <p>Ediong A.</p>
                            <p className="feedback-instructor">Instructor</p>
                        </div>
                    </div>

                    <div className="feedback-details">
                        <p>In this Lab we will be discussing an alternative to using your PC and IDE (Integrated Development environment) for running and writing your python programs, interesting right? Yeah. This alternative is using your mobile phone to run your codes. There are several application available for doing this, but for the sake of this lab, we will be focusing on Qpython3. Feel free to research and use other. 1. Download the Application he sake of this lab, we will be focusing on Qpython3. Feel free to research and use other. 1. Download the Application</p>
                    </div>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback;