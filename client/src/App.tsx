import React from "react";
import "./App.css";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/authContext";
import AuthProtectedRout from "./components/AuthProtectedRout";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ForgotPass from "./pages/ForgotPass";
import OTP from "./pages/OTP";

function App() {
  return (
   
    <AuthProvider>
       <>
    <GoogleOAuthProvider clientId="341775163512-3nn5hqta1nro76d0samvcpkutvr9a15o.apps.googleusercontent.com">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/homepage" />} />
        <Route path="/register" element={<Register />} />
        <Route  path='/forgotpass'element={<ForgotPass/>}/>
        <Route path='/otp' element={<OTP/>}/>
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        >
          <Route path="/homepage" element={<HomePage />} />
          {/* <Route
            path="/homepage"
            element={
              <AuthProtectedRout>
                <HomePage />
              </AuthProtectedRout>
            }
          /> */}
          {/* <Route path="/homepage" element={<AuthProtectedRout><HomePage /></AuthProtectedRout>} >
                  <Route path="profile" element={<><h1>PROFILE</h1></>}/>
                </Route>
                <Route path="support" element={<h2>SUPPORT</h2>}/> */}
        </Route>
      </Routes>
      </GoogleOAuthProvider>;
    </>
    </AuthProvider>
  );
}

export default App;
