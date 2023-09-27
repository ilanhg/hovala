import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosClient from "../promise/apiClient";
import { useForm } from "react-hook-form";

type Formvalues = {
  firstName: string;
  lastName: string;
  MobileNo: string;
  email: string;
  password: string;
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const getOnChange = (setFunc: (newValue: string) => void) => {
    const handleOnChange = (e: any) => {
      setFunc(e.target.value);
    };
    return handleOnChange;
  };
  const form = useForm<Formvalues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      MobileNo: "",
      password: "",
    },
  });
  const { handleSubmit } = form;
  const onRegister = async () => {
    const response = await axiosClient.post("http://localhost:4000/register", {
      firstName,
      lastName,
      email,
      mobileNo,
      password,
    });
    if (response.status === 200) {
      navigate("/login");
    } else {
      alert("username or password is incorrect");
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            sx={{ mt: 3 }}
            onSubmit={handleSubmit(onRegister)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={getOnChange(setFirstName)}
                  autoComplete="given-name"
                  name="firstName"
                  required={true}
                  value={firstName}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  type="text"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={getOnChange(setLastName)}
                  required={true}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={getOnChange(setEmail)}
                  required={true}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={getOnChange(setMobileNo)}
                  autoComplete="given-name"
                  name="MobileNo"
                  required={true}
                  fullWidth
                  id="MobileNo"
                  label="MobileNo"
                  type="number"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={getOnChange(setPassword)}
                  required={true}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
