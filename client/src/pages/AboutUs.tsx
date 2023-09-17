import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        HovalaClick.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              About Us
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Welcome to HovalaClick, your trusted partner in simplifying the
              moving process. We understand that moving can be a challenging and
              stressful experience, and our mission is to make it as seamless
              and effortless as possible for you.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              {" "}
              At HovalaClick, we've built a platform that connects you with
              reliable and professional moving companies to meet all your
              relocation needs. Whether you're moving across the street or
              across the country, we're here to ensure that you have a
              stress-free and efficient moving experience.
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Our Mission
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Welcome to HovalaClick, your trusted partner in simplifying the
              moving process. We understand that moving can be a challenging and
              stressful experience, and our mission is to make it as seamless
              and effortless as possible for you. At HovalaClick, we've built a
              platform that connects you with reliable and professional moving
              companies to meet all your relocation needs. Whether you're moving
              across the street or across the country, we're here to ensure that
              you have a stress-free and efficient moving experience.
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Why Choose HovalaClick?
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            ><ul>
            <li><strong>Quality Assurance:</strong> We vet all the moving companies on our platform to ensure they meet our high standards for professionalism, reliability, and customer service. You can trust that the movers you find here are among the best in the business.</li>
            <li><strong>Convenience:</strong> Our user-friendly platform allows you to request quotes, compare services, and book movers with ease. Say goodbye to hours of research and endless phone calls.</li>
            <li><strong>Transparency:</strong> We believe in clear and transparent communication. You'll receive detailed quotes, and there are no hidden fees. You'll know exactly what to expect throughout the entire moving process.</li>
            <li><strong>Customer Support:</strong> Our dedicated customer support team is here to assist you every step of the way. Whether you have questions about the moving process or need assistance with your booking, we're just a message or a call away.</li>
            <li><strong>Safety and Security:</strong> Your trust and security are paramount to us. We take all necessary measures to safeguard your personal information and ensure your move goes smoothly.</li>
          </ul>
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Join Us on Your Journey
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Moving represents a new chapter in your life, and we're honored to
              be a part of that journey. Whether you're relocating your home or
              your business, HovalaClick is here to help you make a fresh start
              with confidence. Thank you for considering us as your moving
              partner. We look forward to helping you find the perfect moving
              company to make your transition as smooth as possible. If you have
              any questions or need assistance, please don't hesitate to get in
              touch with our team. Let's make your move a memorable and positive
              experience together.
            </Typography>
          </Container>
        </Box>
      </main>
        <Footer/>
    </ThemeProvider>
  );
}
