import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";
import About from "./pages/About";
import Conatct from "./pages/Conatct";

function App() {

  const [isLoggedin, setIsloggedin] = useState(false)

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedin={isLoggedin} setIsloggedin={setIsloggedin}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Conatct/>}/>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedin={isLoggedin}>
            <Dashboard/>
          </PrivateRoute>
        }/>
        <Route path="/login" element={<Login setIsloggedin={setIsloggedin}/>}/>
        <Route path="/signup" element={<Signup setIsloggedin={setIsloggedin}/>}/>
      </Routes>
    </div>
  );
}

export default App;
