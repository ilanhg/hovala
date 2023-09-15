import React from "react";
import "./App.css";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/authContext";
import AuthProtectedRout from "./components/AuthProtectedRout";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ForgotPass from "./pages/ForgotPass";
import Account from "./pages/Account";
import Statistics from "./pages/Statistics";

function App() {
  return (
   
    <AuthProvider>
       <>
    <GoogleOAuthProvider clientId="341775163512-3nn5hqta1nro76d0samvcpkutvr9a15o.apps.googleusercontent.com">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/homepage" />} />
        <Route path="/register" element={<Register />} />
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        >
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/profile" element={<AuthProtectedRout><Profile /></AuthProtectedRout>} />
          <Route path="/account" element={<AuthProtectedRout><Account /></AuthProtectedRout>} />
          <Route path="/statistics" element={<AuthProtectedRout><Statistics /></AuthProtectedRout>} />
          <Route path="/logout" element={<AuthProtectedRout><Login /></AuthProtectedRout>} />
        </Route>
      </Routes>
      </GoogleOAuthProvider>;
    </>
    </AuthProvider>
  );
}

export default App;
