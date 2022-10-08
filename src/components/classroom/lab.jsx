import React from "react";
import Labs from "../labs";
import labs from "../static/lab";
import './lab.css'


const Lab = ({ feedback }) => {


    return (
        <div className="video-scroll video-side">
            <div className="topic-lists">
                <div className="lab-content">
                    <h3>Labs for Python as a Computer Programming Language</h3>
                    <div className="lab-main-contents">
                        <ol className="lab-list">
                            {labs.map(({ details, note, task, hint, id }, key) => {
                                return (

                                    <Labs key={key} details={details} note= {note} task={task} hint={hint} id={id} feedback={feedback}/>
                                )
                            })}

                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Lab;