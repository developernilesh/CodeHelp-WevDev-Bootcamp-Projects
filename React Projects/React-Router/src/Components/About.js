import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();
    function clickHandler(){
        navigate("/support")
    }
    function backHandler(){
        navigate(-1)
    }

    return (
        <div>
            <div>
                About Page
            </div>
            <div>
                <button onClick={clickHandler}>Move to Support Page</button>
            </div>
            <div>
                <button onClick={backHandler}>Go Back</button>
            </div>
        </div>
    );
}

export default About;