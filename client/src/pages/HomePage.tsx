import React from 'react'
import PickerDateAndTime from '../components/PickerDateAndTime'
import  { Container, Toolbar}  from '@mui/material'


export default function HomePage() {

  return (
    
    <div >
      {/* <Toolbar /> */}
      <Container sx={{ display: { xs: 'none', md: 'flex' }, justifyContent:'center'  }}>
      <img src="https://i.postimg.cc/htv0Hw71/1000-F-227879660-HYaf2vj-He-LLUE49obkwmge-SKh-IJ0k-ECr-removebg-preview.png"   />
    </Container >
      {/* <NavbarImage/> */}
      <PickerDateAndTime/>  
      
  
    </div>
  )
}

