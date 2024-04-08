import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = (props) => {

    let isLoggedin = props.isLoggedin;
    let setIsloggedin = props.setIsloggedin;

    function clickHandler(){
        setIsloggedin(false)
        toast.success("Logged out");
    }

    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            <Link to="/">
                <img src={Logo} className="w-[150px]" loading="lazy"/>
            </Link>

            <div>
                <ul className="flex gap-5 text-richblack-100">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            <div className="flex gap-5 items-center">
                {!isLoggedin && 
                    <Link to="/login">
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border border-richblack-700 rounded-[8px]">
                            Login
                        </button>
                    </Link>}
                {!isLoggedin && 
                    <Link to="/Signup">
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border border-richblack-700 rounded-[8px]">
                            Signup
                        </button>
                    </Link>}
                {isLoggedin && 
                    <Link to="/">
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border border-richblack-700 rounded-[8px]"
                        onClick={clickHandler}>
                            Logout
                        </button>
                    </Link>}
                {isLoggedin && 
                    <Link to="/dashboard">
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border border-richblack-700 rounded-[8px]">
                            Dashboard
                        </button>
                    </Link>}
            </div>
        </div>
    );
}

export default Navbar;