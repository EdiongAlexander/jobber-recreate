import React from "react";
import { useState } from "react";
import './interest.css'

const Interest = () => {
    const [error, setError] = useState(false)
    // const [count, setCount] = useState({})

    let a = {}
    
    const record = (e) => {
        a[e.target.name] = parseInt(e.target.value);
    }



    const duplicate = () => {
        let values = Object.values(a);
        if(values.length !== new Set(values).size){
            setError(true)
        }
    }
    
    return (

            <div className="interest">
            <span className="profile-tick">
                <img src="Vector-check.png" alt="check" className="fa-check" />
            </span>

            <p className="score">Score your level of interest in these job titles:</p>

            <div className="form-flex">
            <div className="side-one">
                <div className="form-group">
                    <label htmlFor="cybersecurity">Cybersecurity <span className="right">7/10</span></label>
                    <input type="range" className="range" name="cybersecurity" min={0} max={10} onInput={record}/>
                </div>
                <div className="form-group">
                    <label htmlFor="developer">Developer <span className="right">7/10</span></label>
                    <input type="range" className="range" name="developer" min={0} max={10} onInput={record}/>
                </div>
                <div className="form-group">
                    <label htmlFor="devOps">DevOps <span className="right">7/10</span></label>
                    <input type="range" className="range" name="devOps" min={0} max={10} onInput={record}/>
                </div>
                <div className="form-group">
                    <label htmlFor="designer">Designer <span className="right">2/10</span></label>
                    <input type="range" className="range" name="designer" min={0} max={10} onInput={record}/>
                </div>
                <p className={error ? "red" : "faded"}><em>* You cannot pick a number twice</em></p>
            </div>

            <div className="side-two">
                <div className="form-group">
                    <label htmlFor="projectManager">Project Manager <span className="right">8/10</span></label>
                    <input type="range" className="range" name="projectManager" min={0} max={10} onInput={record}/>
                </div>
                <div className="form-group">
                    <label htmlFor="productManager">Product Manager <span className="right">6/10</span></label>
                    <input type="range" className="range" name="productManager" min={0} max={10} onInput={record}/>
                </div>
                <div className="form-group">
                    <label htmlFor="marketer">Marketer<span className="right">6/10</span></label>
                    <input type="range" className="range" name="marketer" min={0} max={10} onInput={record}/>
                </div>
                <div className="form-group">
                    <label htmlFor="writer">Writer <span className="right">3/10</span></label>
                    <input type="range" className="range" name="writer" min={0} max={10} onInput={record}/>
                </div>
            </div>
            </div>

            <button id="done" onClick={duplicate}>Done</button>
        </div>

    )
}

export default Interest;