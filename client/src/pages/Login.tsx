import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axiosClient from "../promise/apiClient";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleSignIn from "../components/GoogleSignIn";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {set, useForm} from "react-hook-form"
import { FormControl, useFormControlContext } from '@mui/base/FormControl';

export function Login(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/homepage/">
      HovalaClick.com 
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}<FacebookIcon/><InstagramIcon/>
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const{
    handleSubmit,
    getValues,
    register,
    formState:{errors}
  }=useForm()
  const navigate = useNavigate();
  
  const getOnChange = (setFunc: (newValue: string) => void) => {
    const handleOnChange = (e: any) => {
      setFunc(e.target.value);
    };
    return handleOnChange;
  };

  const login = async () => {
    
    const response = await axiosClient.post("http://localhost:4000/login", {
      email,
      password,
      // mobileNo
    });
    if (response.status === 200) {
      const accessToken = response?.data?.accessToken;
      const refreshToken = response?.data?.refreshToken;
      window.localStorage.setItem('accessToken', accessToken);
      window.localStorage.setItem('refreshToken', refreshToken);
      navigate("/");
      return window.location.reload()
 
    } else {
      console.log("username or password is incorrect");
      alert("username or password is incorrect");
    }

  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://community.thriveglobal.com/wp-content/uploads/2019/02/Ways-to-Move-Your-Stuff.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
         
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 3,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{  bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
              <LocalShippingIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit(login)} noValidate sx={{ mt: 1 }}>
            <FormControl defaultValue="" required>
              <TextField
                // onChange={getOnChange(setEmail)}
                {...register("email",{required:true})}
                aria-invalid={errors.email ? "true" : "false"}
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              {errors.email?.type === "required" && (
              <span  role="alert">Email is required</span>
      )}
                </FormControl>
              <TextField
                // onChange={getOnChange(setPassword)}
                {...register("password",{required:"this is required"})}
                aria-invalid={errors.password ? "true" : "false"}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
               {errors.password?.type === "required" && (
        <span role="alert">Password is required</span>
      )}
                    {/* <TextField
                onChange={getOnChange(setMobileNo)}
                margin="normal"
                required
                fullWidth
                id="MobileNo"
                label="MobileNo"
                name="MobileNo"
                autoComplete="MobileNo"
                autoFocus
              /> */}
              <div>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /></div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              
              <GoogleSignIn/>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgotPass" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/Register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Grid item>
              <Button
                onClick={()=>navigate("/")}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="secondary"
              >
                Back to home page
              </Button>
                </Grid>
              <Login sx={{ mt: 5 }} />
            </Box>
          
          </Box>
        </Grid>
      </Grid>
      
    </ThemeProvider>
    
  );
}
