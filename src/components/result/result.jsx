import React from "react";
import Details from "../profile/details";
import Nav from "../shared/nav";
import './result.css'


const Result = () => {
    return (
        <>
            <Nav />

            <main id="result">
                <Details />

                <div className="result-contents">
                    <p className="result-top">
                        <span className="profile-icon your">
                            <iconify-icon icon="uil:user" className="a"></iconify-icon>
                        </span>
                        Your Profile
                    </p>

                    <div className="result-form-groups">

                        <div className="result-form-group">
                            <span className="profile-tick">
                                <img src="Vector-check.png" alt="check" className="fa-check" />
                            </span>
                            <div className="r-form">
                                <label htmlFor="firstname">First Name:</label>
                                <input type="text" className="r-input" name="firstname" placeholder="First Name" />
                                <img src="Vector-pencil.png" alt="png" className="pencil" />
                            </div>
                            <div className="r-form">
                                <label htmlFor="lastname">Last Name:</label>
                                <input type="text" className="r-input" name="lastname" placeholder="Last Name" />
                                <img src="Vector-pencil.png" alt="png" className="pencil" />
                            </div>
                            <div className="r-form">
                                <label htmlFor="email">Email:</label>
                                <input type="text" className="r-input" name="email" placeholder="Email" />
                                <img src="Vector-pencil.png" alt="png" className="pencil" />
                            </div>
                        </div>

                        <div className="result-form-group">
                            <span className="profile-tick">
                                <img src="Vector-check.png" alt="check" className="fa-check" />
                            </span>
                            <div className="r-form">
                                <label htmlFor="course">Course of study in school:</label>
                                <input type="text" className="r-input" name="course" placeholder="English language" />
                            </div>
                            <div className="r-form">
                                <label htmlFor="student">I am a student:</label>
                                <input type="text" className="r-input" name="student" placeholder="Writer" />
                            </div>
                            <div className="r-form">
                                <label htmlFor="graduation-date">Graduation date:</label>
                                <input type="text" className="r-input" name="graduation-date" placeholder="October 4th, 2021" />
                            </div>
                        </div>

                        <div className="result-form-group">
                            
                            <div className="progress-group">
                            <p id="my-id">My interests:</p>
                                <label htmlFor="interests" className="faded">Designer<span className="right">5/10</span></label>
                                <progress name="interests" className="progress" value="5" max="10"></progress>
                            </div>

                            <div className="progress-group">
                                <label htmlFor="writer" className="faded">Writer<span className="right">9/10</span></label>
                                <progress name="writer" className="progress" value="9" max="10"></progress>
                            </div>
                        </div>

                    </div>

                </div>

            </main>
        </>
    )
}

export default Result;