import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleSignIn() {
  //figure out how to create tokens and fix navigation
    const navigate = useNavigate()
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {console.log(codeResponse)
    //     console.log(codeResponse)
    navigate('/homepage')}
    ,
    flow: "auth-code",
    onError: ()=>{console.log('error')}
  });
  return <button onClick={() => login()}>Sign in with Google 🚀 </button>;
}
