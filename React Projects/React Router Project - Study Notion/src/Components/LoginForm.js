import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsloggedin}) => {

    const navigate = useNavigate();

    const [formData,setFormData] = useState(
        {email:"",password:""}
    )

    const [showPassword,setShowPassword] = useState(false)

    function changeHandler(event){
        const {name,value} = event.target;
        setFormData((prevData)=>{
                return{
                    ...prevData,
                    [name]:value
                }
            }   
        )
    }

    function submitHandler(event){
        event.preventDefault();
        setIsloggedin(true);
        toast.success("Logged In Successfully");
        navigate("/dashboard");
    }

    return(
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-4 mt-6">
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Email Address<sup className="text-pink-200">*</sup></p>

                <input type="email" placeholder="Enter email address" name="email"
                value={formData.email} id="email" onChange={changeHandler} required
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
            </label>
            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Password<sup className="text-pink-200">*</sup></p>

                <input type={showPassword ? "text" : "password"} placeholder="Enter password" name="password"
                value={formData.password} id="password" onChange={changeHandler} required 
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] password"
                />
                <span onClick={() => setShowPassword((prev)=>!prev)}
                className="absolute right-3 top-[38px] cursor-pointer">
                    {showPassword ? 
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> : 
                    <AiOutlineEye fontSize={24} fill="#AFB2BF"/> }
                </span>
                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
                </Link> 
            </label>
            
            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
            >Sign In</button>
        </form>
    );
}

export default LoginForm;