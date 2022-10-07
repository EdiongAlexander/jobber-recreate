import React from "react";
import { useState } from "react";
import ClassNav from "../shared/classNav";
import './classroom.css';
import Students from "./students";
import Topics from "./topics";


const Classroom = () => {

    const [topics, setTopics] = useState(false)

    const handleTopics = () => {
        setStudents(false)
        setTopics(!topics)
    }
    const [students, setStudents] = useState(false)

    const handleStudents = () => {
        setTopics(false)
        setStudents(!students)
    }

    return (
        <>
            <ClassNav />
            <div className="main-div">
                <p className="class-course">
                    <span className="course-icon">
                        <iconify-icon icon="pepicons:angle-left" className="p-icon"></iconify-icon>
                    </span>
                    Your courses
                </p>

                <nav className="vidoes-nav">
                    <div className="left-aside">
                        <button className="left-btn" id="move-me" onClick={handleTopics}><img src="Vector-stack.png" alt="group" className="btn-icon left-icon" /><span id="topic">Topics</span></button>

                        <button className="left-btn" onClick={handleStudents}><img src="Vector-group.png" alt="stack" className="btn-icon left-icon" />Students <span className="seven">7</span></button>
                    </div>

                    <div className="right-aside">
                        <button className="right-left-btn"><img src="Vector 4-play.png" alt="group" className="btn-icon right-icon" />Video</button>
                        <button className="right-left-btn"><img src="Vectorblack-tick.png" alt="group" className="btn-icon right-icon" />Lab</button>
                        <button className="right-left-btn"><img src="Vector-note.png" alt="group" className="btn-icon right-icon" />Note</button>
                        <button className="right-left-btn"><img src="Vector-chat.png" alt="group" className="btn-icon right-icon" />Chat</button>
                    </div>
                </nav>

                <div className="video-display">

                    {
                        topics ?
                            <Topics />
                            :
                            null
                    }

                    {
                        students ?
                            <Students />
                            :
                            null
                    }

                    <div className="actual-video">
                        {/* <p>video</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Classroom;