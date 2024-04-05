import React from "react"; 
import { Outlet } from "react-router-dom";

const MainNav = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default MainNav;