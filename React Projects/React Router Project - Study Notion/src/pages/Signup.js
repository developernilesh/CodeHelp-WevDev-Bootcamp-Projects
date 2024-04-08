import React from "react";
import Template from "../Components/Template";
import signupImage from "../assets/signup.png"

const Signup = ({setIsloggedin}) => {
    return(
        <div>
            <Template 
            title="Join the millions learning to code with StudyNotion for free" 
            desc1="Build skilld for today, tomorrow, and beyond." 
            desc2="Education to future-proof your career" 
            formType="signup" 
            image={signupImage}
            setIsloggedin={setIsloggedin}
            />
        </div>
    );
}

export default Signup;