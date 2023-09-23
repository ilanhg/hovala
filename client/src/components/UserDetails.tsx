import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { SummaryProps } from "../pages/Summary";
import { UserInfoContext } from "../context/UserInfoContext";

export default function UserDetials({
  propsSummary:{
    setFirstName,
    setLastName,
    setEmail,
    setPhoneNumber
},}:SummaryProps):JSX.Element {
  const userInfo = useContext(UserInfoContext)
  const {firstName, lastName, email, phoneNumber} = userInfo;

  const handleFirstName = (e: any) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e: any) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePhoneNumber = (e: any) => {
    setPhoneNumber(e.target.value);
  };
  console.log(firstName, lastName, email, phoneNumber);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleFirstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleLastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="email"
            fullWidth
            variant="standard"
            onChange={handleEmail}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            variant="standard"
            onChange={handlePhoneNumber}
          />
        </Grid>
      </Grid>
    </>
  );
}
