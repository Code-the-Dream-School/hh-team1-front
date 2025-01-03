import React, { useState, useEffect } from "react";
import SignUp from "./Components/Authentication/SignUp";
import Login from "./Components/Authentication/Login";
import Forgot from "./Components/Authentication/ForgotPassword";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { getAllData } from "./util/index";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const myData = await getAllData(URL);
      setMessage(myData.data);
    })();

    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<Forgot />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
