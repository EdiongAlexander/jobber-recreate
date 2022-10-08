import React from "react";
import { useState } from "react";


const Labs = ({ details, note, task, hint, id, feedback }) => {


    const [showPassed, setShowPassed] = useState(true)

    const handlePassed = () => {
        setShowPassed(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <li id={id}>
            <p>{details}</p>
            <p><strong>Note: </strong></p>
            <p>{note}</p>
            <p><strong>Task: </strong>{task}</p>
            <p className="bordered-hint"><strong>Hint: </strong>{hint}</p>
            <div className="lab-form">
                {showPassed ? <form action="" onSubmit={(e) => {
                    handleSubmit(e);
                    handlePassed()
                }}>
                    <div className="lab-thirty">
                        <img src="ep_upload-upload.png" alt="upload" className="lab-upload-img" />
                        <input type="file" className="lab-file-upload" />
                    </div>

                    <div className="file-here lab-thirty">
                        <img src="Vector-clip.png" alt="clip" />
                        <p><em>Your file will be here</em></p>
                    </div>

                    <div className="lab-thirty">
                        <button type="submit" className="lab-submit-btn">Submit the task <span className="l-icon"><iconify-icon icon="pepicons:angle-right" ></iconify-icon> </span></button>
                    </div>
                </form>
                    :
                    <div className="lab-submitted">
                        <div className="lab-thirty">
                            <button className="lab-passed"><span className="pass-tick"><img src="rounded-tick.png" alt="tick" /></span>Pass</button>
                        </div>
                        <div className="lab-thirty">
                            <p className="file-section"><span><img src="Vector-clip.png" alt="clip" /></span><em>Lab_ijobber.txt</em></p>
                        </div>
                        <div className="lab-thirty">
                            <p className="feedback-link" onClick={feedback}>Read feedback  <span className="l-icon l-r-icon"><iconify-icon icon="pepicons:angle-right" ></iconify-icon> </span></p>
                        </div>
                    </div>
                }
            </div>
        </li>
    )
}


export default Labs