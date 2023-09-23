import React, { useState } from "react";
import "./App.css";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/authContext";
import AuthProtectedRout from "./components/AuthProtectedRout";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ForgotPass from "./pages/ForgotPass";
import Account from "./pages/Account";
import Statistics from "./pages/Statistics";
import SelectFurniture from "./pages/SelectFurniture";
import OTP from "./pages/OTP";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import { DeliveryInfoContext } from "./context/deliveryInfoContext";
import Summary from "./pages/Summary";
import { UserInfoContext } from "./context/UserInfoContext";

function App() {
  const [floorsFrom, setfloorsFrom] = useState("");
  const [FloorsTo, setFloorsTo] = useState("");
  const [selectedValueFrom, setSelectedValueFrom] = useState("yes");
  const [selectedValueTo, setSelectedValueTo] = useState("yes");
  const [fromInfo, setFromInfo] = useState("");
  const [toInfo, setToInfo] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <AuthProvider>
      <DeliveryInfoContext.Provider
        value={{
          fromfloors: floorsFrom,
          toFloors: FloorsTo,
          fromElevator: selectedValueFrom,
          toElevator: selectedValueTo,
          fromInfo: fromInfo,
          toInfo: toInfo,
          date: date,
          time: time,
        }}
      >
        <UserInfoContext.Provider
          value={{
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
          }}
        ></UserInfoContext.Provider>
        <GoogleOAuthProvider clientId="341775163512-3nn5hqta1nro76d0samvcpkutvr9a15o.apps.googleusercontent.com">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/homepage" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotPass" element={<ForgotPass />} />
            <Route path="/otp" element={<OTP />} />

            <Route
              element={
                <>
                  <Navbar />
                  <Outlet />
                  <Footer />
                </>
              }
            >
              <Route
                path="/homepage"
                element={
                  <HomePage
                    propsHome={{
                      setfloorsFrom,
                      setFloorsTo,
                      setSelectedValueFrom,
                      setSelectedValueTo,
                      setFromInfo,
                      setToInfo,
                      setDate,
                      setTime
                    }}
                  />
                }
              />
              <Route path="SelectFurniture" element={<SelectFurniture />} />
              <Route path="/About" element={<AboutUs />} />
              <Route
                path="/summary"
                element={
                  <Summary
                    propsSummary={{
                      setFirstName,
                      setLastName,
                      setEmail,
                      setPhoneNumber,
                    }}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <AuthProtectedRout>
                    <Profile />
                  </AuthProtectedRout>
                }
              />
              <Route
                path="/account"
                element={
                  <AuthProtectedRout>
                    <Account />
                  </AuthProtectedRout>
                }
              />
              <Route
                path="/statistics"
                element={
                  <AuthProtectedRout>
                    <Statistics />
                  </AuthProtectedRout>
                }
              />
              <Route
                path="/logout"
                element={
                  <AuthProtectedRout>
                    <Login />
                  </AuthProtectedRout>
                }
              />
            </Route>
          </Routes>
        </GoogleOAuthProvider>
      </DeliveryInfoContext.Provider>
    </AuthProvider>
  );
}

export default App;
