import React from 'react'
import  Slider  from '../components/Slider'
import PickerDateAndTime from '../components/PickerDateAndTime'
import  {Box, Container, Grid}  from '@mui/material'
import { styled } from '@mui/material/styles';


  const div = styled(Container)(({ theme }) => ({
    padding: theme.spacing(500),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function HomePage() {

  return (
    
    <div >
      <Container fixed sx={{ display: { xs: 'none', md: 'flex' }, justifyContent:'center'  }}>
       
      <img src="https://i.postimg.cc/htv0Hw71/1000-F-227879660-HYaf2vj-He-LLUE49obkwmge-SKh-IJ0k-ECr-removebg-preview.png"   />
    </Container >
      {/* <NavbarImage/> */}
      <Slider />
      <PickerDateAndTime/>  
  
    </div>
  )
}

