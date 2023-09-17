import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router";

const AuthProtectedRout = ({ children }: any) => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  console.log(auth.isLoggedIn);

  useEffect(() => {
    if (!auth.isLoggedIn) return navigate("/", { replace: true });
  },[auth.isLoggedIn, navigate]);

  return <div>{children}</div>;
};

export default AuthProtectedRout;
