import React from "react";
import "./App.css";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from"./components/Navbar"
import { GoogleOAuthProvider } from '@react-oauth/google';
import ForgotPass from "./pages/ForgotPass";


function App() {

  return (
    
    <>
    <GoogleOAuthProvider clientId="341775163512-3nn5hqta1nro76d0samvcpkutvr9a15o.apps.googleusercontent.com">
      <Routes>  
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/homepage" />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPW" element={<ForgotPass />} />
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        >
        <Route path="/homepage" element={<HomePage />} />
       
        </Route>
      </Routes>
      </GoogleOAuthProvider>;
    </>
  );
}

export default App;
