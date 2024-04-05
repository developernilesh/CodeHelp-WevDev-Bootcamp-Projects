import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    function clickHandler(){
        navigate("/about")
    }
    function backHandler(){
        navigate(-1)
    }

    return (
        <div>
            <div>
                Home Page
            </div>
            <div>
                <button onClick={clickHandler}>Move to About Page</button>
            </div>
            <div>
                <button onClick={backHandler}>Go Back</button>
            </div>
        </div>
    );
}

export default Home;