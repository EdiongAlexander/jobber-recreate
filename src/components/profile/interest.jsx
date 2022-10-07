import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './interest.css'

const a = {
    cybersecurity: 0,
    developer: 0,
    devOps: 0,
    designer: 0,
    projectManager: 0,
    productManager: 0,
    marketer: 0,
    writer: 0
}

const Interest = () => { 
    
    const record = (e) => {
        a[e.target.name] = parseInt(e.target.value);
    }

    const [error, setError] = useState(false)
    
    
    
    const [cyber, setCyber] = useState("0")
    const [dev, setDev] = useState("0")
    const [devOps, setDevOps] = useState("0")
    const [designer, setDesigner] = useState("0")
    const [project, setProject] = useState("0")
    const [product, setProduct] = useState("0")
    const [marketer, setMaketer] = useState("0")
    const [writer, setWriter] = useState("0")

    const handleCyber = () =>{
        setCyber(a["cybersecurity"])

    }
    const handleDev = () =>{
        setDev(a["developer"])
    }
    const handleDevOps = () =>{
        setDevOps(a["devOps"])
    }
    const handleDesigner = () =>{
        setDesigner(a["designer"])
    }
    const handleProject = () =>{
        setProject(a["projectManager"])
    }
    const handleProduct = () =>{
        setProduct(a["productManager"])
    }
    const handleMarketer = () =>{
        setMaketer(a["marketer"])
    }
    const handleWriter = () =>{
        setWriter(a["writer"])
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
                    <label htmlFor="cybersecurity">Cybersecurity <span className="right">{cyber}/10</span></label>
                    <input type="range" className="range" name="cybersecurity" min={0} max={10} onInput={(e) => {
                        record(e);
                        handleCyber();
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="developer">Developer <span className="right">{dev}/10</span></label>
                    <input type="range" className="range" name="developer" min={0} max={10} onInput={(e) => {
                        record(e);
                        handleDev();
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="devOps">DevOps <span className="right">{devOps}/10</span></label>
                    <input type="range" className="range" name="devOps" min={0} max={10} onInput={(e) => {
                        record(e);
                        handleDevOps();
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="designer">Designer <span className="right">{designer}/10</span></label>
                    <input type="range" className="range" name="designer" min={0} max={10} onInput={(e) => {
                        record(e);
                        handleDesigner();
                    }}/>
                </div>
                <p className={error ? "red" : "faded"}><em>* You cannot pick a number twice</em></p>
            </div>

            <div className="side-two">
                <div className="form-group">
                    <label htmlFor="projectManager">Project Manager <span className="right">{project}/10</span></label>
                    <input type="range" className="range" name="projectManager" min={0} max={10} onInput={(e) => {
                        record(e);
                        handleProject();
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="productManager">Product Manager <span className="right">{product}/10</span></label>
                    <input type="range" className="range" name="productManager" min={0} max={10} onInput={(e) => {
                        record(e);
                        handleProduct();
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="marketer">Marketer<span className="right">{marketer}/10</span></label>
                    <input type="range" className="range" name="marketer" min={0} max={10} onInput={(e) => {
                        record(e);
                        handleMarketer();
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="writer">Writer <span className="right">{writer}/10</span></label>
                    <input type="range" className="range" name="writer" min={0} max={10} onInput={(e) => {
                        record(e);
                        handleWriter();
                    }}/>
                </div>
            </div>
            </div>
            <Link to={error ? null : "/result"}>
            <button id="done" onClick={duplicate}>Done</button>
            </Link>
        </div>

    )
}

export default Interest;