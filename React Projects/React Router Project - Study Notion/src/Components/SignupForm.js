import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsloggedin}) => {

    const navigate = useNavigate();

    const [formData,setFormData] = useState(
        {firstName:"",lastName:"",email:"",password:"",confirmPassword:""}
    )

    const [showPassword,setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [accountType,setAccountType] = useState("student");

    function changeHandler(event){
        const {name,value} = event.target;
        setFormData((prevData)=>{
            return{
                ...prevData,
                [name]:value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords do not match");
            return;
        }
        setIsloggedin(true);
        toast.success("Created Account Successfully");

        const accountData = {
            ...formData
        }
        const finalData = {
            ...accountData,accountType
        }
        console.log(finalData)
        
        navigate("/dashboard");
    }
    return(
        <div>
            <div className="mt-6 bg-richblack-800 p-1 flex gap-1 rounded-full max-w-max">
                <button className={`${accountType === "student" ? 
                "bg-richblack-900 text-richblack-5" : 
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>setAccountType("student")}>Student</button>
                <button className={`${accountType === "instructor" ? 
                "bg-richblack-900 text-richblack-5" : 
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>setAccountType("instructor")}>Instructor</button>
            </div>

            <form onSubmit={submitHandler} className="flex flex-col gap-4 w-full mt-4">
                <div className="flex w-full gap-4">
                    <label className="w-full text-richblack-5">
                        <p className="text-[0.875rem] mb-1 leading-[1.375rem]"
                        >Firstname<sup className="text-pink-200">*</sup></p>
                        <input required type="text" placeholder="Enter Firstname" name="firstName"
                        value={formData.firstName} onChange={changeHandler}
                        className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px]"
                        />
                    </label>

                    <label className="w-full text-richblack-5">
                        <p className="text-[0.875rem] mb-1 leading-[1.375rem]"
                        >Lastname<sup className="text-pink-200">*</sup></p>
                        <input required type="text" placeholder="Enter Lastname" name="lastName"
                        value={formData.lastName} onChange={changeHandler}
                        className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px]"
                        />
                    </label>
                </div>

                <div className="flex flex-col w-full gap-4 mb-4">
                    <label className="text-richblack-5 ">
                        <p className="text-[0.875rem] mb-1 leading-[1.375rem]"
                        >Email Address<sup className="text-pink-200">*</sup></p>
                        <input type="email" placeholder="Enter email address" name="email"
                        value={formData.email} id="email" onChange={changeHandler} required
                        className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px]"
                        />
                    </label>

                    <div className="flex w-full gap-4">
                        <label className="relative w-full text-richblack-5 ">
                            <p className="text-[0.875rem] mb-1 leading-[1.375rem]"
                            >Password<sup className="text-pink-200">*</sup></p>
                            <input type={showPassword ? "text" : "password"} placeholder="Enter password" 
                            name="password" value={formData.password}onChange={changeHandler} required
                            className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] password"
                            />
                            <span onClick={() => setShowPassword((prev)=>!prev)}
                            className="absolute right-3 top-[38px] cursor-pointer">
                                {showPassword ? 
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> : 
                                <AiOutlineEye fontSize={24} fill="#AFB2BF"/> }
                            </span>
                        </label>

                        <label className="relative w-full text-richblack-5 ">
                            <p className="text-[0.875rem] mb-1 leading-[1.375rem]"
                            >Confirm Password<sup className="text-pink-200">*</sup></p>
                            <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm password" 
                            name="confirmPassword" value={formData.confirmPassword} onChange={changeHandler} required
                            className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] password"
                            />
                            <span onClick={() => setShowConfirmPassword((prev)=>!prev)}
                            className="absolute right-3 top-[38px] cursor-pointer">
                                {showConfirmPassword ?
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> : 
                                <AiOutlineEye fontSize={24} fill="#AFB2BF"/> }
                            </span>
                        </label>
                    </div>
                </div>

                <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
                >Create Account</button>
            </form>
        </div>
    );
}

export default SignupForm;