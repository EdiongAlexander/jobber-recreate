import React from "react";
import topicsList from "../static/topics";

const Topics = () => {
    return (
        <div className="video-scroll">
            <div className="topic-lists">
                {topicsList.map((topics, key) => {
                    return (
                        <p className="topic-list" key={key}><span><img src="play.png" alt="play" /></span>{topics}</p>
                    )
                })}
            </div>
        </div>
    )
}



export default Topics;