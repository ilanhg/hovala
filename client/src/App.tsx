import React from "react";
import "./App.css";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from"./components/Navbar"

function App() {
  return (
    <>
      <Routes>  
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/homepage" />} />
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        >
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
