import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleSignIn() {
  //figure out how to create tokens and fix navigation
    const navigate = useNavigate()
  const login = useGoogleLogin({
    onSuccess: async(response) => {
      const res = await axios.get("https://googleapis.com/oauth2/v3/userinfo",{
        headers:{
          Authorization:`Bearer ${response.code}`
        }
      })
    }
    ,
    flow: "auth-code",
    onError: ()=>{console.log('error')}
  });
  return <button onClick={() => login()}>Sign in with Google 🚀 </button>;
}
