import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
    const navigate = useNavigate();
    function clickHandler(){
        navigate("/labs")
    }
    function backHandler(){
        navigate(-1)
    }

    return (
        <div>
            <div>
                Support Page
            </div>
            <div>
                <button onClick={clickHandler}>Move to Labs Page</button>
            </div>
            <div>
                <button onClick={backHandler}>Go Back</button>
            </div>
        </div>
    );
}

export default Support;