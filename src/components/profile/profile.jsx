import React from "react";
import { useState } from "react";
import Details from "./details";
import Nav from "../shared/nav";
import './profile.css'
import Content from "./contents";
import Interest from "./interest";


const Profile = () => {

    const [next, setNext] = useState(false)

    const handleNext = () => {
        setNext(true)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <>
            <Nav />
            <main>

                <Details />

                <form action="" onSubmit={handleSubmit} id="content-form">
                    {next ? <Interest />
                        :
                        <Content next={handleNext}/>
                    }
                </form>

            </main>
        </>
    )
}


export default Profile;