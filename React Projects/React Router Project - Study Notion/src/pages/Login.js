import React from "react";
import Template from "../Components/Template";
import loginImage from "../assets/login.png"

const Login = ({setIsloggedin}) => {
    return(
        <div>
            <Template 
            title="Welcome Back" 
            desc1="Build skills for today, tomorrow, and beyond." 
            desc2="Education to future-proof your career." 
            formType="login" 
            image={loginImage}
            setIsloggedin={setIsloggedin}
            />
        </div>
    );
}

export default Login;