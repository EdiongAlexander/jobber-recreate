import React from "react";
import { useState } from "react";

const Content = ({next}) => {
    const [studentShow, setStudentShow] = useState(false)
    const [graduateShow, setGraduateShow] = useState(false)
    const [serviceShow, setServiceShow] = useState(false)
    const [serviceComplete, setServiceComplete] = useState(false)
    const [serviceYes, setServiceYes] = useState(false)
    const [serviceNo, setServiceNo] = useState(false)

    const handleStudentShow = () => {
        setStudentShow(true)
    }

    const hideStudentShow = () => {
        setStudentShow(false)
    }

    const handleGraduateShow = () => {
        setGraduateShow(true)
    }

    const hideGraduateShow = () => {
        setGraduateShow(false)
    }

    const handleServiceShow = () => {
        setServiceShow(true)
    }
    const handleServiceComplete = () => {
        setServiceComplete(true)
    }
    const handleServiceYes = () => {
        setServiceYes(true)
    }
    const handleServiceNo = () => {
        setServiceNo(true)
    }


    return (
        <div className="profile-contents">
            <span className="profile-tick">
                <img src="Vector-check.png" alt="check" className="fa-check" />
            </span>
            <div className="profile-contents-list">
                <ol>
                    <li>
                        <p className="profile-text">Course of study in school:</p>
                        <div className="input-div">
                            <input type="text" placeholder="Course of study" className="profile-input" />
                        </div>
                    </li>
                    <li>
                        <p className="profile-text">Are you a student?
                            {studentShow ? <span className="hidden-ans yes" id="yes-p">
                                <img src="Vector-color-tick.png" alt="tick" className="rotate" />Yes
                            </span> : null}
                        </p>
                        {studentShow ? <div className="hidden-inputs" id="hidden-inputs-1">
                            <input type="text" placeholder="Course of study" className="hidden-input shift" />
                            <input type="text" placeholder="Expected Graduation date" className="hidden-input" />
                            <span className="redirect" onClick={hideStudentShow}><img src="Group-redirect.png" alt="re" className="rotate" /></span>
                        </div> :
                            <div className="profile-answer show">
                                <button className="yes-no" id="student-yes" onClick={handleStudentShow}>Yes</button>
                                <button className="yes-no">No</button>
                            </div>}
                    </li>
                    <li>
                        <p className="profile-text">Did you graduate?
                            {graduateShow ? <span className="hidden-ans no">
                                <img src="Vector-no.png" alt="no" id="no" />
                                No
                            </span> : null}
                        </p>

                        {graduateShow ? <div className="hidden-inputs" id="hidden-inputs-2">
                            <input type="text" placeholder="Current Occupation" className="hidden-input" />
                            <span className="redirect" onClick={hideGraduateShow}><img src="Group-redirect.png" alt="re" className="rotate" /></span>
                        </div>
                            :
                            <div className="profile-answer">
                                <button className="yes-no">Yes</button>
                                <button className="yes-no" id="graduate-no" onClick={handleGraduateShow}>No</button>
                            </div>}
                    </li>
                    <li>
                        <p className="profile-text relate">Does your country require post graduation service?
                            {serviceShow ? <span className="yes hidden-ans" id="tick">
                                <img src="Vector-color-tick.png" alt="tick" className="rotate" />
                                Yes
                            </span> : null}
                        </p>
                        {serviceShow ? <div className="hidden-inputs shifted-ans" id="hidden-inputs-3">
                            <p>
                                <img src="Vector 3-L.png" alt="l" className="l" />
                                Have you completed?
                                {serviceYes ? <span className="hidden-ans yes">
                                    <img src="Vector-color-tick.png" alt="tick" className="rotate" />Yes
                                </span> : null}
                                {serviceNo ? <span className="hidden-ans no">
                                    <img src="Vector-no.png" alt="no" id="no" />No
                                </span> : null}
                            </p>
                            {serviceComplete ? <div className="next-btn">
                                <button id="next-btn" onClick={next}>Next step <span id="next-icon">
                                    <iconify-icon icon="pepicons:angle-right" className="next-icon"></iconify-icon>
                                </span>
                                </button>
                            </div>
                                :
                                <div className="profile-answer">
                                    <button className="yes-no" onClick={() => {
                                        handleServiceComplete();
                                        handleServiceYes();
                                    }}>Yes</button>
                                    <button className="yes-no" onClick={() => {
                                        handleServiceComplete();
                                        handleServiceNo();
                                    }}>No</button>
                                </div>}
                        </div>
                            :
                            <div className="profile-answer">
                                <button className="yes-no" id="service-yes" onClick={handleServiceShow}>Yes</button>
                                <button className="yes-no" >No</button>
                            </div>}
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Content;