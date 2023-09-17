import { Typography,Link, Box } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (

    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        HovalaClick.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}<FacebookIcon/><InstagramIcon/>
    </Typography>
        </Typography>
      </Box>
   
  )
}
