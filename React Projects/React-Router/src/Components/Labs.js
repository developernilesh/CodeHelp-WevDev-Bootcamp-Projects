import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {
    const navigate = useNavigate();
    function clickHandler(){
        navigate("/")
    }
    function backHandler(){
        navigate(-1)
    }

    return (
        <div>
            <div>
                Labs Page
            </div>
            <div>
                <button onClick={clickHandler}>Move to Home Page</button>
            </div>
            <div>
                <button onClick={backHandler}>Go Back</button>
            </div>
        </div>
    );
}

export default Labs;